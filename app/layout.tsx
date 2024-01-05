import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModel from "./components/modals/RegisterModel";
import ToasterProviders from "./components/providers/ToasterProviders";

const inter = Inter({ subsets: ["latin"] });
//Dummy
const onClose = ()=>{
  console.log("On close");
}
const onSubmit = ()=>{
  console.log("On Submit");
}

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProviders/>
          <RegisterModel/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
