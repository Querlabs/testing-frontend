import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/auth.context";
import { AssessmentProvider } from "./context/assessments.context";
import { NeedsProvider } from "./context/needs.context";
import { TestProvider } from "./context/tests.context";
import SupportBot from "./components/bot/support";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  metadataBase: new URL("https://www.intercracks.com"),

  title: {
    default: "InterCracks | AI-Powered Interview Preparation",
    template: "%s | InterCracks",
  },

  description:
    "Practice like you're already in the interview. Experience realistic AI-powered interview simulations, technical assessments, and interview preparation inspired by leading tech companies.",

  applicationName: "InterCracks",

  keywords: [
    "InterCracks",
    "AI interview preparation",
    "AI mock interviews",
    "technical interview practice",
    "interview simulation",
    "job interview preparation",
    "coding interview preparation",
  ],

  alternates: {
    canonical: "https://www.intercracks.com/",
  },

  openGraph: {
    title: "InterCracks | AI-Powered Interview Preparation",
    description:
      "Practice like you're already in the interview. Train with realistic AI-powered interview simulations.",
    url: "https://www.intercracks.com/",
    siteName: "InterCracks",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InterCracks - AI-Powered Interview Preparation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "InterCracks | AI-Powered Interview Preparation",
    description:
      "Experience realistic AI-powered interview simulations and prepare for your next opportunity.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },

  robots: {
    index: true,
    follow: true,
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
        <SupportBot/>
        </AuthProvider>
        </AssessmentProvider>
        </NeedsProvider>
        </TestProvider>
      </body>
    </html>
  );
}

