import "./globals.css";

export const metadata = {
  title: "Crown CRM",
  description: "Multi-tenant CRM MVP"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
