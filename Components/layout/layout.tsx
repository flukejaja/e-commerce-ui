import { ReactNode, useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: { children: ReactNode }) => {
    const [isAtTop, setIsAtTop] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY !== 0);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (<div className="h-full flex flex-col mx-auto items-center  justify-center  ">
        <nav className={`w-[80rem] transition-all duration-700 max-w-full z-[1000]  fixed top-0 ${isAtTop ? 'bg-white' : 'bg-transparent'} `}>
            <Navbar />
        </nav>
        <main className="flex w-full  h-auto">
            {children}
        </main>
        <footer className=" w-full">
            <Footer />
        </footer>
    </div>)
}
export default Layout;