import Layout from "@/Components/layout/layout";
import { Button, Input, Select } from "antd";
import { ReactElement } from "react";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import Image from "next/image";
const ShopingCart = () => {
    return (<div className="w-full flex justify-center my-5 flex-col items-center ">
        <div className="h-[5rem]"></div>
        <div className="w-[80rem] max-w-full flex flex-wrap justify-center " >
            <div className=" py-14 overflow-auto m-2">
                <table className="table-auto w-[50rem] text-sm border-x ">
                    <thead>
                        <tr className="border-y h-14">
                            <th>PRODUCT</th>
                            <th></th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="flex justify-center"><div className="h-14 w-12 bg-black relative">
                                <Image src={'/images/item-cart-04.jpg'} alt="" className="object-cover" fill />
                            </div></td>
                            <td>Fresh Strawberries</td>
                            <td>$ 36.00</td>
                            <td><div className=" flex items-center h-full justify-center">
                                <Button icon={<MinusOutlined />} className=" flex justify-center items-center" />
                                <div className="h-full w-14 flex justify-center items-center ">1</div>
                                <Button icon={<PlusOutlined />} className=" flex justify-center items-center" />
                            </div></td>
                            <td>$ 36.00</td>
                        </tr>
                        <tr className="border-b">
                            <td className="flex justify-center"><div className="h-14 w-12 bg-black relative">
                                <Image src={'/images/item-cart-04.jpg'} alt="" className="object-cover" fill />
                            </div></td>
                            <td>Fresh Strawberries</td>
                            <td>$ 36.00</td>
                            <td><div className=" flex items-center h-full justify-center">
                                <Button icon={<MinusOutlined />} className=" flex justify-center items-center" />
                                <div className="h-full w-14 flex justify-center items-center ">1</div>
                                <Button icon={<PlusOutlined />} className=" flex justify-center items-center" />
                            </div></td>
                            <td>$ 36.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="border-b space-x-3 p-4 h-14">
                            <td className="pl-2">
                                <Input placeholder="Coupon Code" />
                            </td>
                            <td><button className="p-2 rounded-full bg-blue-300 font-semibold text-sm text-white">
                                APPLY COUPON</button></td>
                            <td></td>
                            <td></td>
                            <td><button className="p-2 rounded-full bg-blue-300 font-semibold text-sm text-white">
                                UPDATE CART</button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="w-[26rem] max-w-full  p-14 border text-black">
                <span className="py-12 font-bold">CART TOTALS</span>
                <span className="py-2 flex flex-row border-b-2 border-dotted">
                    <p className="w-2/4">Subtotal:</p>
                    <p className="w-2/4">$79.65</p>
                </span>
                <span className="py-4 flex flex-row border-b-2 border-dotted">
                    <p className="w-2/4">Shipping:</p>
                    <span className="w-2/4 flex-col flex space-y-5">
                        <p className="text-gray-400 text-sm">
                            There are no shipping methods available.
                            Please double check your address, or contact us if you need any help.
                        </p>
                        <p className="text-sm">CALCULATE SHIPPING</p>
                        <Select />
                        <Input />
                        <Input />
                        <Button>UPDATE TOTALS</Button>
                    </span>
                </span>
                <span className="py-2 flex flex-row border-b-2 border-dotted justify-center items-center">
                    <p className="w-2/4">Total:</p>
                    <p className="w-2/4">$79.65</p>
                    <p className="text-center"><Button>PROCEED TO CHECKOUT</Button></p>
                </span>
            </div>
        </div>
    </div>)
}

ShopingCart.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};

export default ShopingCart;
