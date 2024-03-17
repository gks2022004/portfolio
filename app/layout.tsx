import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: 'Gaurav',
	authors: {
		name: "Gaurav",
	},

	description:
		"Based in India, I'm a FullStack developer and a blockchain developer exploring the wonders of web3 and building a modern web application that users love.",
	openGraph: {
		title: "Gaurav",
		description:
			"Based in India, I'm a FullStack developer and a blockchain developer exploring the wonders of web3 and building a modern web application that users love.",
		url: "http://localhost:3000",
		siteName: "Gaurav",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "Gaurav", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>

      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

      </body>
    </html>
  );
}
