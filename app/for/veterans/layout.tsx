import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Veterans — Built by Veterans, for Veterans",
  description: "Americurial is a veteran-owned digital agency helping SDVOSB and VOSB businesses win federal contracts. We built CapturePilot. We build what veterans need to win.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
