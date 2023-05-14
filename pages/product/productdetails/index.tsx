import Image from "next/image";
import { MdZoomOutMap } from "react-icons/md";
import { MouseEventHandler, ReactElement, useRef, useState } from "react";
import Layout from "@/Components/layout/layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modalimage from "./modalimage";
import React from 'react';
import { Select } from 'antd';
import { Rate } from 'antd';
// import ButtonGroup from "antd/es/button/button-group";
import { Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { TextArea } = Input;
import data from '../../../data/data.json';
import { AiFillHeart } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SamplePrevArrow = (props: { className?: string; style?: object; onClick?: MouseEventHandler<HTMLDivElement>; }) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <FaArrowLeft size={20} color="black" />
        </div>
    );
}
const SampleNextArrow = (props: { className?: string; style?: object; onClick?: MouseEventHandler<HTMLDivElement>; }) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <FaArrowRight size={20} color="black" />
        </div>
    );
}
const ProductDetailspage = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [toggler, setToggler] = useState(false);
    const [detail, setDetail] = useState(0);
    const sliderRef = useRef<any>(null);
    const [productDetails] = useState(data)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: slideIndex,
        afterChange: (index: number) => setSlideIndex(index)

    };
    const handleItemClick = (index: number) => {
        setSlideIndex(index);
        if (sliderRef.current !== null) {
            sliderRef.current.slickGoTo(index)
        }
    };
    const settingsRelatedProducts = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="w-full flex justify-center my-5 flex-col items-center " >
            <div className="h-[5rem]"></div>
            <div className="w-[80rem] max-w-full flex flex-wrap justify-center items-center">
                <div className="w-[50rem] max-w-full flex flex-row px-5 justify-center">
                    <div className="h-full w-fit flex flex-col text-white mx-2">
                        <ul className="space-y-5 w-full h-full">
                            <li className=" h-[8rem] relative w-[6rem] max-w-full  " onClick={() => handleItemClick(0)}>
                                <Image src={'/images/product-detail-01.jpg'} alt="" fill className="object-fit w-full h-full" />
                            </li>
                            <li className=" h-[8rem] relative w-[6rem] max-w-full " onClick={() => handleItemClick(1)}>
                                <Image src={'/images/product-detail-02.jpg'} alt="" fill className="object-fit w-full h-full" />
                            </li>
                            <li className=" h-[8rem] relative w-[6rem] max-w-full " onClick={() => handleItemClick(2)}>
                                <Image src={'/images/product-detail-03.jpg'} alt="" fill className="object-fit w-full h-full" />
                            </li>
                        </ul>
                    </div>
                    <div className="w-[60%] h-full  relative">
                        <button className="z-[900] absolute top-0 right-0 px-5 py-5 text-black" onClick={() => setToggler(!toggler)}><MdZoomOutMap size={20} /></button>
                        <Slider {...settings} ref={sliderRef}>
                            <div className=" w-[40rem] h-[40rem] block max-w-full max-h-full object-center text-white px-5 py-5 relative">
                                <Image src={'/images/product-detail-01.jpg'} alt="" fill className="object-cover w-full h-full" />
                            </div>
                            <div className=" w-[40rem] h-[40rem] block max-w-full max-h-full object-center  text-white px-5 py-5 relative">
                                <Image src={'/images/product-detail-02.jpg'} alt="" fill className="object-cover w-full h-full" />
                            </div>
                            <div className=" w-[40rem] h-[40rem] block max-w-full max-h-full  object-center text-white px-5 py-5 relative">
                                <Image src={'/images/product-detail-03.jpg'} alt="" fill className="object-cover w-full h-full" />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className=" w-[30rem] max-w-full h-full px-5 py-5 flex flex-col space-y-5">
                    <p className="text-2xl">Lightweight Jacket</p>
                    <p className="font-semibold">$58.79</p>
                    <p className="text-sm text-gray-500">Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
                    <span className="h-14 px-5 flex items-center w-full border-b py-2 ">
                        <div className="px-5 w-1/4">Size</div>
                        <div className="w-3/4">
                            <Select
                                defaultValue="lucy"
                                style={{ width: '100%' }}
                                allowClear
                                options={[{ value: 'lucy', label: 'Lucy' }]}
                            />
                        </div>
                    </span>
                    <span className="h-14 px-5 flex items-center w-full py-2 ">
                        <div className="px-5 w-1/4">Color</div>
                        <div className="w-3/4">
                            <Select
                                defaultValue="lucy"
                                style={{ width: '100%' }}
                                allowClear
                                options={[{ value: 'lucy', label: 'Lucy' }]}
                            />
                        </div>
                    </span>
                    <span className="flex flex-row justify-center space-x-2">
                        <div className=" flex items-center h-full justify-center">
                            <Button icon={<MinusOutlined />} className=" flex justify-center items-center" />
                            <div className="h-full w-14 flex justify-center items-center ">1</div>
                            <Button icon={<PlusOutlined />} className=" flex justify-center items-center" />
                        </div>
                        <button className="bg-blue-200 py-5 px-5 rounded-full text-white font-semibold">Add to cart</button>
                    </span>
                </div>
            </div>
            <div className="border w-[80rem] max-w-full flex flex-col py-5 px-5">
                <div className="h-14 w-full flex  flex-wrap justify-center items-center space-x-5 text-gray-400 ">
                    <p className={`cursor-pointer ${detail === 0 && 'border-b border-black text-black'}`} onClick={() => setDetail(0)}>Description</p>
                    <p className={`cursor-pointer ${detail === 1 && 'border-b border-black text-black'}`} onClick={() => setDetail(1)}>Additional information</p>
                    <p className={`cursor-pointer ${detail === 2 && 'border-b border-black text-black'}`} onClick={() => setDetail(2)}>Reviews (1)</p>
                </div>
                {/*  Description */}
                {
                    detail === 0 && <div className="flex justify-center text-gray-400 p-14 animate__animated animate__fadeIn">
                        <p>Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet.
                            Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum.
                            Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros.
                            Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie.
                            Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero.
                            Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum.
                            Cras in arcu sed metus rutrum iaculis.
                            Nulla non tempor erat. Duis in egestas nunc.</p>
                    </div>
                }
                {/*  Additional information */}
                {detail === 1 && <div className="flex justify-center items-center text-gray-400 p-14 animate__animated animate__fadeIn">
                    <ul className="flex justify-center flex-col items-center h-full">
                        <li className="flex flex-row w-full">
                            <span className="w-1/2  ">Weight</span>
                            <span className="w-1/2 ">0.79 kg</span>
                        </li>
                        <li className="flex flex-row w-full">
                            <span className="w-1/2  ">Dimensions</span>
                            <span className="w-1/2  ">110 x 33 x 100 cm</span>
                        </li>
                        <li className="flex flex-row w-full ">
                            <span className="w-1/2  ">Materials</span>
                            <span className="w-1/2  ">60% cotton</span>
                        </li>
                        <li className="flex flex-row w-full ">
                            <span className="w-1/2  ">Color</span>
                            <span className="w-1/2  truncate">Black, Blue, Grey, Green, Red, White</span>
                        </li>
                        <li className="flex flex-row w-full ">
                            <span className="w-1/2  ">Size</span>
                            <span className="w-1/2  ">XL, L, M, S</span>
                        </li>
                    </ul>
                </div>}
                {/* Reviews */}
                {detail === 2 && <div className="text-sm md:text-md flex mx-auto text-gray-400  flex-col py-14 space-y-5 animate__animated animate__fadeIn">
                    <div className="flex flex-row space-x-4 justify-center">
                        <span className="bg-black h-14 w-14 rounded-full relative overflow-hidden ">
                            <Image fill src={'/images/avatar.png'} alt="" className="object-cover" />
                        </span>
                        <span className="flex flex-col items-center justify-center w-[60%]">
                            <span className="flex flex-row  w-full justify-between  items-center">
                                <p className="w-4/6 whitespace-nowrap">Ariana Grande</p>
                                <p className="w-2/4"><Rate value={4} /></p>
                            </span>
                            <span>
                                Quod autem in homine praestantissimum atque optimum est,id deseruit.
                                Apud ceteros autem philosophos
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-row space-x-4 justify-center">
                        <span className="flex flex-col items-center justify-center w-[60%]">
                            <span className="flex flex-row  w-full justify-between">
                                Add a review
                            </span>
                            <span>
                                Your email address will not be published. Required fields are marked *
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-row space-x-4 justify-center">
                        <span className="flex flex-col items-center justify-center w-[60%]">
                            <span className="flex flex-row  w-full justify-between items-center">
                                Your Rating   <Rate />
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-row space-x-4 justify-center">
                        <span className="flex flex-col items-center justify-center w-[60%] space-y-5">
                            <span className="flex flex-row  w-full">
                                Your review
                            </span>
                            <span className="flex flex-row  w-full">
                                <TextArea showCount maxLength={100} />
                            </span>
                            <span className="flex flex-row  w-full space-x-5">
                                <label>Name <Input /></label>
                                <label>Email <Input /></label>
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-row space-x-4 justify-center">
                        <Button>Submit</Button>
                    </div>
                </div>}
            </div>
            <p className="text-center text-4xl my-5">Related Products</p>
            <div className="w-[60rem] max-w-full px-10">
                <Slider {...settingsRelatedProducts} >
                    {productDetails.map((data, idx) => (
                        <div key={idx} className=" w-[19rem] mx-2 my-2 flex flex-col px-5 items-center  justify-center ">
                            <div className="h-[27rem] w-full relative overflow-hidden flex items-center">
                                <Image src={data.image} fill alt="" className="object-cover hover:scale-110 transition-all  duration-700" />
                            </div>
                            <span className="my-2 flex flex-row w-full items-center">
                                <span onClick={() => { }} className="w-1/2 whitespace-nowrap text-gray-400 ">
                                    <p className="cursor-pointer hover:text-blue-300 w-fit">{data.name}</p></span>
                                <a className="w-1/2  flex justify-end ">
                                    <AiFillHeart className={`text-black hover:text-red-600  cursor-pointer`} /></a>
                            </span>
                            <p>${data.price}</p>
                        </div>))}
                </Slider>
            </div>
            <Modalimage open={toggler} />
        </div>
    )
}
ProductDetailspage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};

export default ProductDetailspage