import { useEffect } from 'react';
import serviceBg from '../assets/images/service/service-bg.png';
import banner from '../assets/images/service/service_footer.jpg';
import Aos from 'aos';
import Reveal from '../components/Reveal';

const Career = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <section className="py-[4rem] md:pt-[14rem] h-full md:h-screen bg-cover bg-center bg-[url('assets/images/home-bg.png')]">
                <div className="w-full max-w-7xl flex justify-center md:justify-end md:px-5">
                <div className="flex flex-col items-center text-center text-[#ffffff]">
                    <Reveal>
                        <p className="text-[20px] lg:text-[30px]">WELCOME TO</p>
                    </Reveal>
                    <Reveal>
                        <h1 className="text-gradient text-[40px] sm:text-[50px] md:text-[70px] lg:text-[100px] leading-none font-[800]">XIN YUAN LI</h1>
                    </Reveal>
                    <Reveal>
                        <p className="text-[20px] lg:text-[27px] tracking-[5px] md:tracking-[8px]">Business Service</p>
                    </Reveal>
                </div>
                </div>
            </section>

            <div className='relative top-[-20px] md:-top-[50px]'>
                <hr style={{ height: '8px', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                <section className="w-full pt-20 md:pt-40" style={{ background: 'rgba(30, 30, 30, 0.95)' }}>  
                    <h1 className="text-[50px] px-4 md:px-0 md:text-[100px] font-[800] max-w-[500px] mx-auto text-center leading-none text-gradient" data-aos='fade-up' data-aos-duration='1000'>WORK WITH US!</h1>
                    <div className="max-w-4xl mx-auto flex items-center justify-center pt-20" data-aos='fade-up' data-aos-duration='1500'>
                        <img src={serviceBg} alt="" />
                    </div>
                </section>
            </div>

            {/* banner footer */}
            <div className="relative mt-4">
                <img src={banner} alt="Image description" className="w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover object-center" />
                <div className="absolute inset-0" style={{ background: 'rgba(165, 148, 101, 0.8)' }}></div>
                <div className="absolute inset-0 flex justify-center items-center text-white px-4" data-aos="fade-up" data-aos-duration="1500">
                    <p className="text-[25px] sm:text-[35px] md:text-[45px] lg:text-[70px] max-w-[68rem] leading-none mx-auto text-center font-[800] text-gradient">Your Most Trusted Tax Agent & Business Advisor</p>
                </div>
            </div>
        </>
    )
}

export default Career