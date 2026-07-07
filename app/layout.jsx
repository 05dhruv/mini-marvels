import "./globals.css";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";

export const metadata = {
  title: "Mini Marvels Child Care Clinic",
  description: "Pediatric Clinic Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}