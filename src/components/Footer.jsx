import { useState } from "react";
import loadingImg from '../assets/images/loadingImg.png'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import ScrollToTop from "./ScrollToTop";

const Footer = () => {

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

    const { t } = useTranslation();
    

    return (
        <section className="w-full bg-[#1E1E1EF2]">
            <hr style={{ height: '8px',border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-10 md:py-20 px-4">
                <div>
                    {/* <iframe className="w-full h-[200px] rounded-sm" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19141.675652159014!2d104.88462033374552!3d11.517026725477594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109507ab4fc2aa5%3A0xd7ca934e0389b6ad!2sPiphup%20Thmey%20Chamkar%20Doung%201%20Market!5e0!3m2!1sen!2skh!4v1739786827173!5m2!1sen!2skh" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe className="w-full h-[200px] rounded-sm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.5486805597143!2d104.92852913239892!3d11.595559311325339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109530050e4f245%3A0x4cc10f90b6bedd9d!2sXin%20Yuan%20Li%20Business%20Services!5e0!3m2!1sen!2skh!4v1744436135395!5m2!1sen!2skh" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex flex-col space-y-3 text-[#ffffff] text-[11px] md:text-[12px]">
                    <h1 className="text-[14px] md:text-[18px] text-[#EBB81B] font-[700]">{t("keep_in_touch")}</h1>
                    <p>Boeung Torteung Thngai 2 Street OCIC, #BT2, 291, Chroy Changva District, Phnom Penh</p>
                    <a href="#">WWW.XINYUANLI.COM</a>
                    <a href="#">O10 882019</a>
                    <a href="#">077 882029</a>
                </div>
                <div className="flex flex-col space-y-3 text-[#ffffff] text-[11px] md:text-[12px]">
                    <h1 className="text-[14px] md:text-[18px] text-[#EBB81B] font-[700]">{t("information")}</h1>
                    <ul className="flex flex-col space-y-3" onClick={handleLinkClick}>
                        <li><Link className="footer_link" to="/">{t("Home")}</Link></li>
                        <li><Link className="footer_link" to="/our-services">{t("Our Services")}</Link></li>
                        <li><Link className="footer_link" to="/gallery">{t("Gallery")}</Link></li>
                        <li><Link className="footer_link" to="/our-profile">{t("Our Profile")}</Link></li>
                        <li><Link className="footer_link" to="/career">{t("Career")}</Link></li>
                        <li><Link className="footer_link" to="/contact-us">{t("Contact Us")}</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-3 text-[#ffffff] text-[11px] md:text-[12px]">
                    <div>
                        <h1 className="text-[20px] md:text-[30px] text-[#EBB81B] font-[700]">{t("xin_yuan_li")}</h1>
                        <p>{t("footer_des")}</p>
                    </div>
                    <div className="pt-10">
                        <p className="text-[14px] md:text-[18px] font-[700]">{t("follow_us")}</p>
                        <div className="flex items-center space-x-4 mt-3">
                            <a href="https://www.facebook.com/xinyuanlibs" className="hover:-translate-y-[4px] duration-300">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 0C6.72903 0 0 6.72903 0 15C0 23.2704 6.72903 30 15 30C23.2704 30 30 23.2704 30 15C30 6.72903 23.2716 0 15 0ZM18.7304 15.5281H16.29V24.2262H12.6738C12.6738 24.2262 12.6738 19.4735 12.6738 15.5281H10.9548V12.4539H12.6738V10.4654C12.6738 9.04133 13.3505 6.81604 16.3232 6.81604L19.0029 6.82631V9.81048C19.0029 9.81048 17.3745 9.81048 17.0579 9.81048C16.7413 9.81048 16.2912 9.96878 16.2912 10.6479V12.4545H19.0464L18.7304 15.5281Z" fill="white" />
                                </svg>
                            </a>
                            <a href="https://t.me/XINYUANLI" className="hover:-translate-y-[4px] duration-300">
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

            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-white z-[60]">
                    <img
                        src={loadingImg}
                        alt="Loading"
                        className="w-14 h-14 animate-rotate"
                    />
                </div>
            )}
        </section>
    )
}

export default Footer