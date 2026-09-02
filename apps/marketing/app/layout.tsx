import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DentalOS",
  description: "Dental clinic management platform",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
