import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
const Bannerpage = () => {
    const bannerArr = [{
        image: '/images/banner-01.jpg',
        label: 'Women',
        details: 'Spring 2018'
    },
    {
        image: '/images/banner-02.jpg',
        label: 'Men',
        details: 'Spring 2018',
    },
    {
        image: '/images/banner-03.jpg',
        label: 'Accessories',
        details: 'New Trend'
    }]
    const divVariants: Variants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 50,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    };
    return (
        <div className="bg-white py-16 flex items-center px-5">
            <div className="flex flex-wrap justify-center w-full ">
                {
                    bannerArr.map((data, idx) => (
                        <div className="flex flex-row border mx-2 my-2 sm:w-auto w-full hover:scale-90  transition-all duration-300" key={idx}>
                            <Link href="/product" className="w-[26rem] max-w-full h-[20rem] max-h-full relative">

                                <Image alt="" src={data.image} fill className="object-cover" />
                                <motion.div initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0.8 }}>
                                    <motion.div className="" variants={divVariants}>
                                        <div className="w-[26rem] max-w-full h-[20rem] max-h-full absolute flex flex-col px-5 py-5 text-black">
                                            <span className="text-3xl font-bold">{data.label}</span>
                                            <span className=" font-light">{data.details}</span>
                                        </div>
                                    </motion.div>
                                </motion.div>

                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Bannerpage;