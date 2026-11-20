import "./globals.css";

export const metadata = {
  title: "Your Name | Portfolio",
  description: "Portfolio website for Your Name.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}