import Aos from "aos"
import { useState,useEffect } from "react"
import Reveal from "../components/Reveal";
import loadingImg from '../assets/images/loadingImg.png'
import { Link } from "react-router-dom";

const Contact = () => {
    useEffect(() => {
        Aos.init();
    })
    const [isLoading, setIsLoading] = useState(false);

    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    const handleLinkClick = () => {
        setIsLoading(true);  
        ScrollToTop();  
    
        setTimeout(() => {
        setIsLoading(false);
        }, 1000);
    };
    return (
        <>
            <section className="pt-[4rem] md:pt-[10rem] lg:pt-[14rem] h-full md:min-h-screen bg-cover bg-center bg-[url('assets/images/home-bg.png')]">
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


                <div className="pt-20 md:pt-32">
                    <div className="bg-[#29292980] w-full">
                        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-14 px-4">
                            <div className="flex flex-col space-y-3 text-[#ffffff] text-[13px] md:text-[15px]">
                                <h1 className="text-[15px] md:text-[18px] text-[#EBB81B] font-[700]">Keep In Touch</h1>
                                <p>Boeung Torteung Thngai 2 Street OCIC, #BT2, 291, Chroy Changva District, Phnom Penh</p>
                                <a href="#">WWW.XINYUANLI.COM</a>
                                <a href="#">O10 882019</a>
                                <a href="#">077 882029</a>
                            </div>
                            <div className="flex flex-col items-start md:items-center justify-center space-y-3 text-[#ffffff] text-[13px] md:text-[15px]">
                                <h1 className="text-[15px] md:text-[18px] text-[#EBB81B] font-[700]">Information</h1>
                                <ul className="flex flex-col space-y-3" onClick={handleLinkClick}>
                                    <li><Link className="footer_link" to="/home">Home</Link></li>
                                    <li><Link className="footer_link" to="/our-profile">Our Profile</Link></li>
                                    <li><Link className="footer_link" to="/our-services">Our Services</Link></li>
                                    <li><Link className="footer_link" to="/career">Career</Link></li>
                                    <li><Link className="footer_link" to="/contact-us">Cantact Us</Link></li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-between space-y-3 text-[#ffffff] text-[13px] md:text-[15px]">
                                <div>
                                    <h1 className="text-[20px] md:text-[30px] text-[#EBB81B] font-[700]">XIN YUAN LI</h1>
                                    <p>The business further commits to building strong networking with local authorities for business registration at MOC.</p>
                                </div>
                                <div className="">
                                    <p className="text-[16px] md:text-[20px] font-[700]">Follow Us</p>
                                    <div className="flex items-center space-x-4 mt-5">
                                        <a href="#" className="hover:-translate-y-[4px] duration-300">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 0C6.72903 0 0 6.72903 0 15C0 23.2704 6.72903 30 15 30C23.2704 30 30 23.2704 30 15C30 6.72903 23.2716 0 15 0ZM18.7304 15.5281H16.29V24.2262H12.6738C12.6738 24.2262 12.6738 19.4735 12.6738 15.5281H10.9548V12.4539H12.6738V10.4654C12.6738 9.04133 13.3505 6.81604 16.3232 6.81604L19.0029 6.82631V9.81048C19.0029 9.81048 17.3745 9.81048 17.0579 9.81048C16.7413 9.81048 16.2912 9.96878 16.2912 10.6479V12.4545H19.0464L18.7304 15.5281Z" fill="white" />
                                            </svg>
                                        </a>
                                        <a href="#" className="hover:-translate-y-[4px] duration-300">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z" fill="white" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white text-[14px] md:text-[16px] text-center py-2">
                            <p>All right reserved 2024</p>
                        </div>
                    </div>
                </div>
            </section>

            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-white z-[60]">
                    <img
                        src={loadingImg}
                        alt="Loading"
                        className="w-14 h-14 animate-rotate"
                    />
                </div>
            )}
        </>
    )
}

export default Contact