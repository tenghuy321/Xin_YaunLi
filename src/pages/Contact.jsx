import Aos from "aos"
import { useEffect } from "react"
import Reveal from "../components/Reveal";

const Contact = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <section className="py-[4rem] md:pt-[10rem] h-full md:h-[70vh] bg-cover bg-center bg-[url('assets/images/home-bg.png')]">
                <div className="w-full max-w-7xl flex justify-center md:justify-end md:px-5 xl:px-8">
                    <div className="flex flex-col items-center text-center text-[#ffffff]">
                        <Reveal>
                            <p className="text-[20px] lg:text-[30px]">WELCOME TO</p>
                        </Reveal>
                        <Reveal>
                            <h1 className="text-gradient text-[40px] sm:text-[50px] md:text-[70px] lg:text-[100px] leading-none font-[800]">XIN YUAN LI</h1>
                        </Reveal>
                        <Reveal>
                            <p className="text-[16px] lg:text-[27px] tracking-[5px] md:tracking-[8px]">Business Service</p>
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact