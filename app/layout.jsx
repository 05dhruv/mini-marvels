import "./globals.css";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import FloatingButtons from "./src/components/FloatingButtons";
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
          <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}