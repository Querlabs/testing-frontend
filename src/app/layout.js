import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/auth.context";
import { AssessmentProvider } from "./context/assessments.context";
import { NeedsProvider } from "./context/needs.context";
import { TestProvider } from "./context/tests.context";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://intercracks.com"),

  title: {
    default: "InterCracks | Realistic AI Interview Preparation",
    template: "%s | InterCracks",
  },

  description:
    "Prepare for real interviews with realistic AI-powered interview simulations, assessments, and career-focused practice.",

  applicationName: "InterCracks",

  keywords: [
    "InterCracks",
    "AI interview preparation",
    "mock interviews",
    "technical interview practice",
    "interview simulation",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "InterCracks | Realistic AI Interview Preparation",
    description:
      "Experience realistic interviews. Build confidence. Crack your next interview.",
    url: "https://intercracks.com",
    siteName: "InterCracks",
    type: "website",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "InterCracks | Realistic AI Interview Preparation",
    description:
      "Experience realistic interviews. Build confidence. Crack your next interview.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TestProvider>
        <NeedsProvider>
        <AssessmentProvider>
        <AuthProvider>
        {children}
        </AuthProvider>
        </AssessmentProvider>
        </NeedsProvider>
        </TestProvider>
      </body>
    </html>
  );
}

