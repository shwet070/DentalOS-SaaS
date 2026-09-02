import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DentalOS Clinic",
  description: "Dental clinic management portal",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
