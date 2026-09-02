import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DentalOS Super Admin",
  description: "Platform administration for DentalOS",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
