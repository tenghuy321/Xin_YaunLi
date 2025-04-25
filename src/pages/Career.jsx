import { useEffect, useState } from 'react';
import serviceBg from '../assets/images/service/service-bg.png';
import banner from '../assets/images/service/service_footer.jpg';
import Aos from 'aos';
import Reveal from '../components/Reveal';
import ButtonScroll from '../components/ButtonScroll';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/images/home-bg.png';
import img2 from '../assets/images/home/banner_footer.png';
const bgImages = [img1, img2];

const Career = () => {
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
            <div>
                <ButtonScroll />
            </div>
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
                    <div className='hidden lg:block'>

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

            <div className='relative top-[-20px] md:-top-[50px]'>
                <hr style={{ height: '8px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                <div className="relative w-full mt-20 md:mt-40 h-[100vh] md:h-[150vh]">
                    <div className='absolute inset-0 w-full h-full'>
                        <img src={serviceBg} alt="" className='w-full h-full object-cover object-center' />
                    </div>
                    <h1 className="absolute inset-0 flex flex-col items-center text-[40px] sm:text-[50px] px-4 md:px-0 md:text-[100px] font-[800]" data-aos='fade-up' data-aos-duration='1000'>
                        <p className='max-w-[500px] mx-auto text-center leading-none text-[#A59465]'>{t("work_with_us")}</p>
                        <div className='inline-flex items-center justify-center text-[14px] font-[400] space-x-4 border border-[#A59465] pr-6 pl-2 py-1 mt-5 rounded-[30px]'>
                            <svg className="w-8 h-8" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.5 45C10.0934 45 0 34.9066 0 22.5C0 10.0934 10.0934 0 22.5 0C34.9066 0 45 10.0934 45 22.5C45 34.9066 34.9066 45 22.5 45ZM34.1682 30.4041C34.4456 30.4041 34.6714 30.1784 34.6714 29.9009V15.7754L23.2236 24.8661C23.0118 25.0344 22.7558 25.1185 22.4999 25.1185C22.2441 25.1185 21.9881 25.0343 21.7762 24.8661L10.3286 15.7754V29.9009C10.3286 30.1784 10.5543 30.4041 10.8317 30.4041H34.1682ZM32.4139 14.5959L22.5 22.4687L12.586 14.5959H32.4139ZM36.999 15.0991V29.9011C36.999 31.4619 35.729 32.7319 34.1682 32.7319H10.8317C9.27079 32.7319 8.00103 31.4619 8.00103 29.9011V15.0991C8.00103 13.5382 9.27088 12.2684 10.8317 12.2684H34.1682C35.729 12.2683 36.999 13.5382 36.999 15.0991Z" fill="#A59465" />
                            </svg>
                            <a href='mailto:info@xinyuanli.biz'>info@xinyuanli.biz</a>
                        </div>
                    </h1>
                    {/* <div className="max-w-4xl mx-auto flex items-center justify-center pt-20" data-aos='fade-up' data-aos-duration='1500'>
                        <img src={serviceBg} alt="" />
                    </div> */}
                </div>
            </div>

            {/* banner footer */}
            <div className="relative mt-4">
                <img src={banner} alt="Image description" className="w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover object-center" />
                <div className="absolute inset-0 bg-blend-multiply bg-[#A59465CC]"></div>
                <div className="absolute inset-0 flex justify-center items-center text-white px-4" data-aos="fade-up" data-aos-duration="1500">
                    <Reveal>
                        <p className="text-[25px] sm:text-[35px] md:text-[45px] lg:text-[70px] max-w-[60rem] leading-none mx-auto text-center font-[800] text-gradient">{t("banner_title")}</p>
                    </Reveal>
                </div>
            </div>

        </>
    )
}

export default Career