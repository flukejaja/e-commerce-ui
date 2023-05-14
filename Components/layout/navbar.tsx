import Cartpage from "@/pages/cart";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineSearch, AiOutlineUnorderedList } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [subNav, setSubNav] = useState(false)
    return (
        <>
            <div className="flex flex-col px-5">
                <div className=" flex border-b flex-row h-16  items-center justify-center space-x-5 text-xl">
                    <div className="flex flex-row w-[20rem] max-w-full ">
                        <Link href={'/'}>
                            <label className="font-bold flex flex-row cursor-pointer">COZA&nbsp;<p className="font-light">STORE</p></label>
                        </Link>
                    </div>
                    <ul className=" flex-row space-x-5 w-full text-sm font-semibold md:flex hidden">
                        <Link href={'/'}>
                            <li className="hover:text-blue-300 cursor-pointer ">
                                Home
                            </li>
                        </Link>
                        <Link href={'/product'}>
                            <li className="hover:text-blue-300 cursor-pointer ">
                                Shop
                            </li>
                        </Link>
                        <Link href={'/about'}>
                            <li className="hover:text-blue-300 cursor-pointer ">
                                About
                            </li>
                        </Link>
                        <Link href={'/contact'}>
                            <li className="hover:text-blue-300 cursor-pointer ">
                                Contact
                            </li>
                        </Link>
                    </ul>

                    <div className="flex flex-row space-x-3 ">
                        <span ><AiOutlineSearch /></span>
                        <span onClick={() => setOpen(!open)} className="relative ">
                            <div className="absolute h-4 w-4 text-[10px] -translate-y-2 translate-x-3 bg-red-700 rounded-full flex justify-center items-center">
                                <p className="text-center text-white">1</p>
                            </div>
                            <AiOutlineShoppingCart />
                        </span>
                        <span><AiOutlineHeart /></span>
                        <span className="md:hidden flex" onClick={() => setSubNav(!subNav)}><AiOutlineUnorderedList /></span>
                    </div>

                </div>
                <div className={` ${subNav ? 'h-auto py-5' : 'h-0'} transition-all duration-300`}>
                    {
                        subNav && <ul className=" flex-col space-y-5 w-full text-sm font-semibold flex ">
                            <Link href={'/'}>
                                <li className="hover:text-blue-300 cursor-pointer ">
                                    Home
                                </li>
                            </Link>
                            <Link href={'/product'}>
                                <li className="hover:text-blue-300 cursor-pointer ">
                                    Shop
                                </li>
                            </Link>
                            <Link href={'/about'}>
                                <li className="hover:text-blue-300 cursor-pointer ">
                                    About
                                </li>
                            </Link>
                            <Link href={'/contact'}>
                                <li className="hover:text-blue-300 cursor-pointer ">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    }
                </div>
            </div>
            <Cartpage open={open} handle={setOpen} />
        </>
    )

}
export default Navbar