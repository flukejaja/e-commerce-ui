import Layout from "@/Components/layout/layout";
import { ReactElement } from "react";
import Image from "next/image";
import { Button, Input } from "antd";
import { SendOutlined } from '@ant-design/icons';
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const { TextArea } = Input;
const Contactpage = () => {
    return (<div className="w-full justify-center flex flex-col items-center">
        <div className="h-[22rem] w-full relative">
            <Image src={'/images/bg-01.jpg'} alt="" fill className="object-cover" />
            <p className="text-center absolute inset-0 h-full flex items-center justify-center text-6xl
          text-white font-bold">Contact</p>
        </div>
        <div className="m-14 w-[80rem] max-w-full flex flex-col md:flex-row justify-center items-center">
            <div className="w-full  p-14  flex flex-col justify-center items-center space-y-5 border  h-full m-2">
                <span className="text-xl w-full text-center">Send Us A Message</span>
                <span className="text-xl w-full"><Input size="large" placeholder="Email" prefix={<SendOutlined />} /></span>
                <span className="text-xl w-full"> <TextArea rows={4} placeholder="How Can We Help?" maxLength={6} /></span>
                <span className="text-xl w-full"> <Button>Submit</Button></span>
            </div>
            <div className="w-full  p-14 flex flex-col justify-center items-center space-y-5 border h-full m-2">
                <span className="text-xl w-full flex justify-center items-start flex-col">
                    <span className="flex flex-row items-center justify-start space-x-5">
                        <CiLocationOn size={20} />
                        <span className="text-md font-light flex flex-col space-y-5">
                            <p>Address</p>
                            <p className="text-sm">Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                        </span>
                    </span>
                </span>
                <span className="text-xl w-full flex justify-center items-start flex-col">
                    <span className="flex flex-row items-center justify-start space-x-5">
                        <BsTelephone size={20} />
                        <span className="text-md font-light flex flex-col space-y-5">
                            <p>Lets Talk</p>
                            <p className="text-sm text-blue-400">+1 800 1236879</p>
                        </span>
                    </span>
                </span>
                <span className="text-xl w-full flex justify-center items-start flex-col">
                    <span className="flex flex-row items-center justify-start space-x-5">
                        <AiOutlineMail size={20} />
                        <span className="text-md font-light flex flex-col space-y-5">
                            <p>Sale Support</p>
                            <p className="text-sm text-blue-400">contact@example.com</p>
                        </span>
                    </span>
                </span>
            </div>
        </div>
        <div className="h-[22rem]  w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7961847.649192449!2d96.19541487132744!3d12.996080564412962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2z4Lib4Lij4Liw4LmA4LiX4Lio4LmE4LiX4Lii!5e0!3m2!1sth!2sth!4v1684061828322!5m2!1sth!2sth" width="600" height="450"
                style={{ border: "0" }} loading="lazy" className="w-full" ></iframe>
        </div>
    </div>)
}
Contactpage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default Contactpage