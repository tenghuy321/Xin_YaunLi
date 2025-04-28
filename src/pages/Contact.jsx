import Aos from "aos"
import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import { useTranslation } from "react-i18next";
import img1 from '../assets/images/home-bg.png';
import img2 from '../assets/images/home/banner_footer.png';
const bgImages = [img1, img2];


const Contact = () => {
    useEffect(() => {
        Aos.init();
    })

    const { t } = useTranslation();

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % bgImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <section className="relative h-[40vh] sm:h-[50vh] md:h-screen overflow-hidden">

                <div
                    className="flex transition-transform duration-1000 ease-in-out h-full md:h-screen"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {bgImages.map((img, index) => (
                        <div
                            key={index}
                            className="min-w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                </div>

                <div className="absolute inset-0 mt-0 md:-mt-10 w-full h-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:px-5 xl:px-8">
                    <div className="hidden lg:block">

                    </div>
                    <div className="flex flex-col items-center text-center justify-center text-[#ffffff] ">
                        <Reveal>
                            <p className="text-[20px] lg:text-[30px]">{t("welcome")}</p>
                        </Reveal>
                        <Reveal>
                            <p className="text-gradient text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[100px] leading-none font-[800]">{t("xin_yuan_li")}</p>
                        </Reveal>
                        <Reveal>
                            <p className="text-[16px] lg:text-[27px] tracking-[4px] md:tracking-[0.32rem] uppercase">{t("business_service")}</p>
                        </Reveal>

                        <a
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@xinyuanli.biz"
                            className="text-[14px] md:text-[16px] flex items-center space-x-2 text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full mt-4 border border-[#faf088]
                                        transition-all duration-500 ease-in-out
                                        hover:text-black hover:bg-[#faf088]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
                                <path d="M3 7h3"></path>
                                <path d="M3 11h2"></path>
                                <path d="M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801z"></path>
                                <path d="M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982"></path>
                            </svg>
                            <span>{t("Contact Us")}</span>
                        </a>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact