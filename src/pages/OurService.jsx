
import 'swiper/css';
import 'swiper/css/navigation';
import '../swiper.css';
import icon15 from '../assets/images/icons/icon-15.png'
import icon16 from '../assets/images/icons/icon-16.png'
import icon17 from '../assets/images/icons/icon-17.png'

import banner from '../assets/images/home/banner_footer.png';
import { useEffect } from 'react';
import Aos from 'aos';
import Reveal from '../components/Reveal';
import ButtonScroll from '../components/ButtonScroll';

import './ourservice.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const OurService = () => {
    useEffect(() => {
        Aos.init({
            offset: 10,
        });
    })

    const { t } = useTranslation();

    return (
        <>
            <div>
                <ButtonScroll />
            </div>
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

            <section className="relative top-0 lg:top-[-150px] z-10">
                <div className='max-w-7xl mx-auto items-center px-0 sm:px-4 2xl:px-0'>
                    {/* labtop */}
                    <div className='hidden lg:block overflow-hidden'>
                        <div className='flex items-center justify-center space-x-20 py-4 md:py-2 bg-[#29292980] rounded-t-md' data-aos='fade-up' data-aos-duration='1000'>
                            <NavLink to='/our-services/business-registration' className='flex justify-center w-[80px] lg:w-[95px] xl:w-[115px]'>
                                <img src={icon15} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
                            </NavLink>
                            <NavLink to='/our-services/tax-declaration-compliance' className='flex justify-center w-[115px] lg:w-[95px] xl:w-[115px]'>
                                <img src={icon16} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
                            </NavLink>
                            <NavLink to='/our-services/accounting-bookkeeping' className='flex justify-center w-[115px] lg:w-[95px] xl:w-[115px]'>
                                <img src={icon16} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
                            </NavLink>
                            <NavLink to='/our-services/audit-preparation' className='flex justify-center w-[115px] lg:w-[95px] xl:w-[115px]'>
                                <img src={icon17} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
                            </NavLink>
                            <NavLink to='/our-services/business-licensing' className='flex justify-center w-[115px] lg:w-[95px] xl:w-[115px]'>
                                <img src={icon17} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
                            </NavLink>
                            <NavLink to='/our-services/regulatory-advisory' className='flex justify-center w-[115px] lg:w-[95px] xl:w-[115px]'>
                                <img src={icon17} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
                            </NavLink>
                        </div>

                        <div className='flex items-center justify-center space-x-14 py-4 md:py-2 rounded-t-md' data-aos='fade-up' data-aos-duration='1200'>
                            <div className=''>
                                <NavLink to='/our-services/business-registration' className={({ isActive }) => `flex justify-center w-[135px] text-[14px] lg:text-[14px] xl:text-[16px] lg:w-[120px] xl:w-[140px] text-center ${isActive ? 'text-gradient font-[600]' : 'text-[#fff] font-[300]'}`}>{t("business_registration")}</NavLink>
                            </div>
                            <div>
                                <NavLink to='/our-services/tax-declaration-compliance' className={({ isActive }) => `flex justify-center w-[135px] text-[14px] lg:text-[14px] xl:text-[16px] lg:w-[120px] xl:w-[140px] text-center ${isActive ? 'text-gradient font-[600]' : 'text-[#fff] font-[300]'}`}>{t("tax_declaration_compliance")}</NavLink>
                            </div>
                            <div>
                                <NavLink to='/our-services/accounting-bookkeeping' className={({ isActive }) => `flex justify-center w-[135px] text-[14px] lg:text-[14px] xl:text-[16px] lg:w-[120px] xl:w-[140px] text-center ${isActive ? 'text-gradient font-[600]' : 'text-[#fff] font-[300]'}`}>{t("accounting_bookkeeping")}</NavLink>
                            </div>
                            <div>
                                <NavLink to='/our-services/audit-preparation' className={({ isActive }) => `flex justify-center w-[135px] text-[14px] lg:text-[14px] xl:text-[16px] lg:w-[120px] xl:w-[140px] text-center ${isActive ? 'text-gradient font-[600]' : 'text-[#fff] font-[300]'}`}>{t("audit_preparation_support")}</NavLink>
                            </div>
                            <div>
                                <NavLink to='/our-services/business-licensing' className={({ isActive }) => `flex justify-center w-[135px] text-[14px] lg:text-[14px] xl:text-[16px] lg:w-[120px] xl:w-[140px] text-center ${isActive ? 'text-gradient font-[600]' : 'text-[#fff] font-[300]'}`}>{t("business_licensing_title")}</NavLink>
                            </div>
                            <div>
                                <NavLink to='/our-services/regulatory-advisory' className={({ isActive }) => `flex justify-center w-[135px] text-[14px] lg:text-[14px] xl:text-[16px] lg:w-[120px] xl:w-[140px] text-center ${isActive ? 'text-gradient font-[600]' : 'text-[#fff] font-[300]'}`}>{t("regulatory_advisory_title")}</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* mobile */}
                    <div className='grid lg:hidden grid-cols-2 md:grid-cols-3 items-center justify-center py-4 gap-y-4'>
                        <NavLink to='/our-services/business-registration' className={({ isActive }) => `flex flex-col items-center justify-center ${isActive ? 'text-gradient' : 'text-black'}`}>
                            <img src={icon15} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
                            <div className="text-[12px] sm:text-[13px] p-2 font-[500] text-center h-[50px]">
                                <p>{t("business_registration")}</p>
                            </div>
                        </NavLink>
                        <NavLink to='/our-services/tax-declaration-compliance' className={({ isActive }) => `flex flex-col items-center justify-center ${isActive ? 'text-gradient' : 'text-black'}`}>
                            <img src={icon16} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
                            <div className="text-[12px] sm:text-[13px] p-2 font-[500] text-center h-[50px]">
                                <p>{t("tax_declaration_compliance")}</p>
                            </div>
                        </NavLink>
                        <NavLink to='/our-services/accounting-bookkeeping' className={({ isActive }) => `flex flex-col items-center justify-center ${isActive ? 'text-gradient' : 'text-black'}`}>
                            <img src={icon16} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
                            <div className="text-[12px] sm:text-[13px] p-2 font-[500] text-center h-[50px]">
                                <p>{t("accounting_bookkeeping")}</p>
                            </div>
                        </NavLink>
                        <NavLink to='/our-services/audit-preparation' className={({ isActive }) => `flex flex-col items-center justify-center ${isActive ? 'text-gradient' : 'text-black'}`}>
                            <img src={icon17} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
                            <div className="text-[12px] sm:text-[13px] p-2 font-[500] text-center h-[50px]">
                                <p>{t("audit_preparation_support")}</p>
                            </div>
                        </NavLink>
                        <NavLink to='/our-services/business-licensing' className={({ isActive }) => `flex flex-col items-center justify-center ${isActive ? 'text-gradient' : 'text-black'}`}>
                            <img src={icon17} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
                            <div className="text-[12px] sm:text-[13px] p-2 font-[500] text-center h-[50px]">
                                <p>{t("business_licensing_title")}</p>
                            </div>
                        </NavLink>
                        <NavLink to='/our-services/regulatory-advisory' className={({ isActive }) => `flex flex-col items-center justify-center ${isActive ? 'text-gradient' : 'text-black'}`}>
                            <img src={icon17} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
                            <div className="text-[12px] sm:text-[13px] p-2 font-[500] text-center h-[50px]">
                                <p>{t("regulatory_advisory_title")}</p>
                            </div>
                        </NavLink>
                    </div>

                    <hr style={{ height: '8px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                </div>

                {/* {location.pathname === '/our-services/entity-setup' && <Entity />}
                {location.pathname === '/our-services/compliance-duties' && <Compliance />}
                {location.pathname === '/our-services/business-advisory' && <Business />} */}
                <Outlet />
            </section>

            <section className='relative top-0 md:-top-[170px] z-1 py-4'>
                {/* banner footer */}
                <div className="relative mt-4">
                    <img src={banner} alt="Image description" className="w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover object-center" />
                    <div className="absolute inset-0 bg-blend-multiply bg-[#A59465CC]"></div>
                    <div className="absolute inset-0 flex justify-center items-center text-white px-4" data-aos="fade-up" data-aos-duration="1500">
                        <p className="text-[25px] sm:text-[35px] md:text-[45px] lg:text-[70px] max-w-[60rem] leading-none mx-auto text-center font-[800] text-gradient">{t("banner_title")}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurService