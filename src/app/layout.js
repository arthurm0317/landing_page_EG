import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Effective Gain",
  description: "Effective Gain - Landing Page",
  colorScheme: "dark",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-theme="dark" style={{ colorScheme: 'dark' }}>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000000" />
        <meta name="supported-color-schemes" content="dark" />
      </head>
      <body className={`${spaceGrotesk.variable}`} style={{ colorScheme: 'dark', backgroundColor: '#000000', color: '#ffffff' }}>
        {children}
      </body>
    </html>
  );
}
