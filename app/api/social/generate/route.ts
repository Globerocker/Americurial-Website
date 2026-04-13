import { generateSocialPost } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { context, category, goal } = body;

    if (!context || !category || !goal) {
      return Response.json(
        { error: "Missing required fields: context, category, goal" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return Response.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const result = await generateSocialPost(context, category, goal);
    return Response.json(result);
  } catch (error) {
    console.error("Social generation error:", error);
    return Response.json(
      { error: "Failed to generate post. Please try again." },
      { status: 500 }
    );
  }
}
