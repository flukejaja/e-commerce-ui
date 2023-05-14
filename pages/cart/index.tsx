import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const Cartpage = (props: { open: boolean, handle: Function }) => {
    const { open, handle } = props;
    return (
        <div className={`${open ? 'w-screen' : 'w-0 '} h-screen  z-[1000] fixed inset-0  flex flex-row transition-all  duration-500`}>
            <div onClick={() => handle(false)} className="w-full bg-black opacity-60"></div>
            {props.open && <div className="w-[345px] bg-white  h-screen  z-[1000] py-14 px-6 text-black 
    flex flex-col space-y-5 opacity-100 animate__animated animate__fadeIn">
                <div className="w-full flex flex-row text-xl font-bold">
                    <p className="w-1/2 whitespace-nowrap">YOUR CART</p>
                    <p className="w-1/2 text-end cursor-pointer" onClick={() => handle(!open)}>&#x2715;</p>
                </div>
                <div className="w-full flex flex-col text-xl font-bold h-[44rem] max-h-full overflow-auto">
                    <div className="flex flex-row w-full space-x-3 h-[10rem] p-2 text-lg font-semibold border-b border-gray-200">
                        <div className="w-[5rem] h-[8rem] relative">
                            <Image src={'/images/product-09.jpg'} fill alt="" className="object-cover" />
                        </div>
                        <div className="flex flex-col h-full items-center justify-center ">
                            <p>Converse All Star</p>
                            <p>1 x $39.00</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col text-xl  h-[5rem] font-semibold ">
                    <div className="flex flex-row">
                        Total: <p className="font-light pl-2">$39.00</p>
                    </div>
                    <div className="p-14 flex-row flex space-x-3">
                        <Link href="/shopingcart">
                            <a><Button>VIEW CART</Button></a>
                        </Link>
                        <Button>CHECK OUT</Button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Cartpage;