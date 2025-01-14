import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import './globals.css';
import Menu from "./homepage_sections/menu";
import Provider from "@/components/Provider";
import Head from "next/head";

export const metadata = {
  title: "Crime Vision",
  description: "Generated by Mathmozo IT",
  openGraph: {
    title: 'Acme',
    description: 'Acme is a ...'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body className={`text-base`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}