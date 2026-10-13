import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { MotionProvider } from "@/components/motion";

export const metadata: Metadata = {
  metadataBase: new URL("https://focusrealm.org"),
  title: "Focus Realm Education — The engaging LMS for Indian classrooms",
  description:
    "Focus Realm is an AI-powered, gamified learning management system that integrates with interactive boards to fix disengagement in Indian schools, colleges and universities.",
  openGraph: {
    title: "Focus Realm Education",
    description:
      "An AI-powered, gamified LMS that integrates with interactive boards to bring engagement back to Indian classrooms.",
    url: "https://focusrealm.org",
    siteName: "Focus Realm",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2d6cdf",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
