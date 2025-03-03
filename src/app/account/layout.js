import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import Header from "@/components/Header";
import SideBar from "@/components/account/SideBar";
import MenuSideBar from "@/components/account/MenuSideBar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecosvit",
  description: "Вивіз сміття, тпв, відходи, комунальна техніка, побутові відходи",
};

export default function RootLayout({ children }) {
  
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-sky-50`}
      >
        <MenuSideBar/>
        <Header />
        <div className="w-full pt-4 pb-6 px-4">
          <div className="m-auto flex justify-center gap-4 lg:w-2xl xl:w-6xl">
            <SideBar />
            <div className="w-full sm:w-xl lg:w-full">
              {children}
            </div>

          </div>


        </div>

      </body>
    </html>
  );
}
