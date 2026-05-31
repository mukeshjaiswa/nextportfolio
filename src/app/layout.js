
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./Context/ThemeContext";
import "./globals.css";
import Footer from "./Navfoot/Footer";
import Navbar from "./Navfoot/Navbar";
import { ToastContainer, toast } from 'react-toastify';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mukesh Chaudhary | Portfolio",
  description: "This is my personal portfolio website showcasing my projects and skills.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className=" ">
        <ThemeProvider>
          <Navbar />{children}
          <Footer />
          <ToastContainer position="top-center" autoClose={2000} />
        </ThemeProvider>
      </body>
    </html >
  );
}
