import Aos from "aos"
import { useEffect } from "react";
import Reveal from "../components/Reveal";
import { useTranslation } from "react-i18next";

const Contact = () => {
    useEffect(() => {
        Aos.init();
    })

    const {t} = useTranslation();

    return (
        <>
            <section className="py-[4rem] md:pt-[14rem] h-full md:h-screen bg-cover bg-center bg-[url('assets/images/home-bg.png')]">
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:px-5 xl:px-8">
                    <div>

                    </div>
                    <div className="flex flex-col items-center text-center justify-center text-[#ffffff] ">
                        <Reveal>
                            <p className="text-[20px] lg:text-[30px] uppercase">{t("welcome")}</p>
                        </Reveal>
                        <Reveal>
                            <p className="text-gradient text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[100px] leading-none font-[800]">{t("xin_yuan_li")}</p>
                        </Reveal>
                        <Reveal>
                            <p className="text-[16px] lg:text-[27px] tracking-[4px] md:tracking-[0.32rem] uppercase">{t("business_service")}</p>
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact