import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function generateSocialPost(
  context: string,
  category: string,
  goal: string
): Promise<{ headline: string; content: string }> {
  const platformGuidance = {
    "LinkedIn Company Page":
      "Write for a company page. Professional tone, third-person voice for the company. Include 3-5 relevant hashtags. Keep under 1300 characters.",
    "LinkedIn Personal":
      "Write for a personal LinkedIn profile. First-person voice, conversational yet authoritative. Use line breaks for readability. Include 3-5 hashtags. Hook in the first line.",
    "Twitter/X":
      "Write for Twitter/X. Punchy, concise, max 280 characters for the main post. Use a thread format if needed (label each tweet). Minimal hashtags (1-2 max).",
  }[category] || "Professional social media post.";

  const goalGuidance = {
    Informative:
      "Focus on delivering value and insights. Educate the audience. Position Americurial as a subject matter expert.",
    Engagement:
      "Encourage comments and discussion. Ask a question or share a hot take. Make people want to respond.",
    "Lead Generation":
      "Include a clear call-to-action. Drive traffic to Americurial services or CapturePilot. Create urgency.",
    "Thought Leadership":
      "Share a unique perspective or contrarian view. Demonstrate deep expertise. Be bold and opinionated.",
  }[goal] || "Create an engaging post.";

  const prompt = `You are the social media strategist for Americurial LLC — a veteran-owned digital agency that builds SaaS platforms, GovTech solutions, and AI-powered products. Brand DNA: "We build. You win."

Generate a social media post based on the following:

CONTEXT: ${context}
PLATFORM: ${category}
GOAL: ${goal}

PLATFORM GUIDANCE: ${platformGuidance}
GOAL GUIDANCE: ${goalGuidance}

RULES:
- Use the Americurial brand voice: confident, direct, execution-focused, no fluff
- Include strategic emoji usage (not excessive)
- Structure with line breaks for readability
- End with a relevant CTA
- For LinkedIn: use a strong hook in the first 2 lines (this shows before "see more")
- Reference Americurial or CapturePilot where natural
- Never use generic filler phrases like "In today's digital landscape"

RESPOND IN THIS EXACT JSON FORMAT (no markdown, no code blocks):
{"headline": "A short compelling headline (under 10 words)", "content": "The full post content with \\n for line breaks"}`;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      temperature: 0.8,
      maxOutputTokens: 1024,
    },
  });

  const text = response.text?.trim() || "";

  // Try to parse JSON from the response, handling potential markdown wrapping
  let cleaned = text;
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }

  try {
    const parsed = JSON.parse(cleaned);
    return {
      headline: parsed.headline || "Generated Post",
      content: parsed.content || text,
    };
  } catch {
    // If JSON parsing fails, extract content directly
    const lines = text.split("\n").filter((l) => l.trim());
    return {
      headline: lines[0]?.slice(0, 80) || "Generated Post",
      content: text,
    };
  }
}
