
const Footer = () => {
    return (<div className=" bg-[#222222]  flex justify-center items-center flex-wrap text-white">
        <div className="w-[80rem] flex flex-wrap w-max-full h-full items-center justify-center">
            <div className="w-[19rem] mx-2 my-2 h-[14rem] min-h-full flex flex-col px-5 py-5 space-y-5">
                <h3 className="font-bold">CATEGORIES</h3>
                <ul className="space-y-3 text-sm font-light text-gray-400">
                    <li>Women</li>
                    <li>Men</li>
                    <li>Shoes</li>
                    <li>Watches</li>
                </ul>
            </div>
            <div className="w-[19rem] mx-2 my-2 h-[14rem] min-h-full flex flex-col px-5 py-5 space-y-5">
                <h3 className="font-bold">HELP</h3>
                <ul className="space-y-3 text-sm font-light text-gray-400">
                    <li>Track Order</li>
                    <li>Returns</li>
                    <li>Shipping</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className="w-[19rem] mx-2 my-2 h-[14rem] min-h-full flex flex-col px-5 py-5 space-y-5">
                <h3 className="font-bold">GET IN TOUCH</h3>
                <p className="space-y-3 text-sm font-light text-gray-400">
                    Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                </p>
            </div>
            <div className="w-[19rem] mx-2 my-2 h-[14rem] min-h-full flex flex-col px-5 py-5 space-y-5">
                <h3 className="font-bold">NEWSLETTER</h3>
            </div>
        </div>
    </div>)
}
export default Footer