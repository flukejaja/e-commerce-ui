import Layout from "@/Components/layout/layout";
import Image from "next/image";
import { ReactElement } from "react";

const About = () => {
    return (
    <div className="w-full justify-center flex flex-col items-center ">
        <div className="h-[22rem] w-full relative">
            <Image src={'/images/bg-01.jpg'} alt="" fill className="object-cover" />
            <p className="text-center absolute inset-0 h-full flex items-center justify-center text-6xl
                 text-white font-bold">About</p>
        </div>
        <div className="bg-white flex flex-col  items-start w-[80rem] max-w-full p-4" >
            <div className="py-14 w-full  flex flex-wrap justify-center items-center">
                <div className=" max-w-full w-[40rem] flex flex-col space-y-5">
                    <p className="text-2xl font-bold">Our Story</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa.
                        Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum,
                        tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam.
                        Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
                    <p>
                        Donec gravida lorem elit, quis condimentum ex semper sit amet.
                        Fusce eget ligula magna. Aliquam aliquam imperdiet sodales.
                        Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida.
                        Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis.
                        Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem.
                        Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.
                    </p>
                    <p>
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                    </p>
                </div>
                <div className="border-r max-w-full w-[25rem] m-12">
                    <div className="h-[23rem] w-full  border border-gray-400 relative">
                        <Image src={'/images/about-01.jpg'} alt="" fill className="object-cover  -translate-y-6 translate-x-6" />
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white flex flex-col  items-start w-[80rem] max-w-full p-4" >
            <div className="py-14 w-full  flex flex-wrap justify-center items-center">
                <div className="border-r max-w-full w-[25rem] m-12">
                    <div className="h-[23rem] w-full  border border-gray-400 relative">
                        <Image src={'/images/about-02.jpg'} alt="" fill className="object-cover  -translate-y-6 -translate-x-6" />
                    </div>
                </div>
                <div className=" max-w-full w-[40rem] flex flex-col space-y-5">
                    <p className="text-2xl font-bold">Our Mission</p>
                    <p>Mauris non lacinia magna. Sed nec lobortis dolor.
                        Vestibulum rhoncus dignissim risus, sed consectetur erat.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida.
                        Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio.
                        Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante.
                        Ut mauris ligula, volutpat in sodales in, porta non odio.
                        Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis.
                        Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>
                    <span className="flex flex-col pl-14 border-l-4 space-y-3">
                        <p>
                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn&apos;t really do it, they just saw something. It seemed obvious to them after a while.
                        </p>
                        <p>
                            - Steve Job&apos;s
                        </p>
                    </span>
                </div>

            </div>
        </div>
    </div>
    )
}
About.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default About;
