import { IoFilterOutline } from "react-icons/io5";
import { AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import { ReactElement, useEffect, useState } from "react";
import data from '../../data/data.json'
import Layout from "@/Components/layout/layout";
import Link from "next/link";
const Productpage = () => {
    const productsNav = ['All Products', 'Women', 'Men', 'Bag', 'Shoes', 'Watches']
    const [like, setLike] = useState<string[]>([])
    const [productDetails, setProductDetails] = useState(data)
    const notify = (name: string) => {
        toast.success('Like!', {
            duration: 4000,
            position: 'bottom-center',
            icon: '👏',
            iconTheme: {
                primary: '#000',
                secondary: '#fff',
            },
            ariaProps: {
                role: 'status',
                'aria-live': 'polite',
            },
        })
        like.push(name)
        setLike([...like])
    };
    const filterProduct = (name: string) => {
        if (name === 'All Products') {
            setProductDetails([...data])
        } else {
            const productSort = data.filter(data => data.type === name);
            setProductDetails([...productSort])
        }
    }
    useEffect(() => {
        const element = document.querySelector('.product-list');
        if (element !== null) {
            element.classList.add('animate__animated', 'animate__fadeIn');
            setTimeout(() => {
                element.classList.remove('animate__animated', 'animate__fadeIn');
            }, 1000);
        }
    }, [productDetails]);

    return (
        <div className="w-full justify-center flex my-5">
            <div className="bg-white flex flex-col  items-start w-[80rem] max-w-full space-y-5 " >
                <div className="h-10 bg-white"></div>
                <nav className="h-14 flex flex-wrap items-center w-full px-3 ">
                    <ul className="flex flex-row space-x-3 grow ">
                        {
                            productsNav.map((data, idx) => (
                                <li key={idx} onClick={() => filterProduct(data)} className={` whitespace-nowrap cursor-pointer text-gray-400 hover:text-black hover:border-b
                         border-black`}>
                                    {data}
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="flex flex-row space-x-5 grow justify-end ">
                        <li className="flex items-center space-x-2 border px-5 py-2 cursor-pointer hover:bg-blue-200"><IoFilterOutline /> <p className="text-gray-400">Filter</p></li>
                        <li className="flex items-center space-x-2 border px-5 py-2 cursor-pointer hover:bg-blue-200 "><AiOutlineSearch /> <p className="text-gray-400">Search</p></li>
                    </ul>
                </nav>
                <div className="product-list flex flex-wrap w-full justify-center ">
                    {
                        productDetails.length !== 0 ? productDetails.map((data, idx) => (
                            <div key={idx} className=" w-[19rem] mx-2 my-2 flex flex-col  ">
                                <div className="h-[30rem] w-full relative overflow-hidden ">
                                    <Image src={data.image} fill alt="" className="object-cover hover:scale-110 transition-all  duration-700" />
                                </div>
                                <span className="my-2 flex flex-row w-full items-center">
                                    <span onClick={() => { }} className="w-1/2 whitespace-nowrap text-gray-400 ">
                                        <Link href={'/product/productdetails'}>
                                            <p className="cursor-pointer hover:text-blue-300 w-fit">{data.name}</p>
                                        </Link>
                                    </span>
                                    <a onClick={() => notify(data.name)} className="w-1/2 flex justify-end ">
                                        <AiFillHeart className={`text-black hover:text-red-600  cursor-pointer ${like.includes(data.name) && 'text-red-600'}`} /></a>
                                </span>
                                <p>${data.price}</p>
                            </div>)) :
                            <div className="h-[41rem] flex justify-center items-center">Not found</div>
                    }
                </div>
                <Toaster />
            </div>
        </div>
    )
}
Productpage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};

export default Productpage