import Navbar from "@/components/Navbar";
import "./globals.css";
import Provider from "@/SessionProvider";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Studio de la taniere",
  description: "Site de livre audio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
