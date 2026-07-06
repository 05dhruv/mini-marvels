import "./globals.css";

export const metadata = {
  title: "Mini Marvels Child Care Clinic",
  description: "Pediatric Clinic Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}