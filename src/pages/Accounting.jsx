import { useTranslation } from 'react-i18next';
import ButtonScroll from '../components/ButtonScroll';
import { useState } from 'react';
import service2 from '../assets/images/service/service-2.png';


const Accounting = () => {

    const [expanded, setExpanded] = useState({
        oneOff: false,
        another: false,
    });

    const toggleSection = (key) => {
        setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const { t } = useTranslation();


    return (
        <>
            <div>
                <ButtonScroll />
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 pb-5 overflow-hidden' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
                <div className='px-2 md:pr-0 md:pl-12 xl:pl-20 py-14 lg:pb-0 lg:pt-20 xl:pt-40 col-span-1 md:col-span-2 text-[#fff]'>
                    <div className='flex items-end leading-none pl-4 md:pl-8' data-aos='fade-right' data-aos-duration='1000'>
                        <h1 className='text-[20px] lg:text-[30px] text-gradient font-[700] w-full lg:w-2/3 2xl:w-1/2 pb-1' data-aos='fade-right' data-aos-duration='1500'>{ t("accounting_bookkeeping") }</h1>
                        <hr className='w-full ml-1' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                    </div>
                    <div className='text-[20px] lg:text-[25px] font-[700] text-[#fff] pt-10 pl-4 md:pl-8' data-aos='fade-left' data-aos-duration='1000'>
                        <h2>{t("accounting_compliance_service")}</h2>
                        <p className='text-[10px] md:text-[12px] font-[500]'>{t("accounting_compliance_service_des")}</p>
                    </div>
                    <div className='pl-4 md:pl-0 pt-4 lg:pt-10 xl:pt-12 text-[12px] lg:text-[14px]' data-aos='fade-right' data-aos-duration='1000'>
                        <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                            <svg className='w-2 h-2 lg:w-3 lg:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>
                            <p>{t("core_accounting_services")}</p>
                        </h1>
                    </div>
                    <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]' data-aos='fade-left' data-aos-duration='1200'>
                        <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                            <svg className='w-2 h-2 lg:w-3 lg:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>
                            <p>{t("one_off_services")}</p>
                        </h1>
                        <ul className="list-disc pl-4 md:pl-10 text-[#fff] pt-4 space-y-2 text-[12px] md:text-[13px]">
                            <li>{t("one_off_services_des1")}</li>
                            <li>{t("one_off_services_des2")}</li>
                            <li>{t("one_off_services_des3")}</li>
                        </ul>
                    </div>

                    {expanded.oneOff && (
                        <>
                            <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]'>
                                <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold" data-aos='fade-right' data-aos-duration='1400'>
                                    <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                                    </svg>
                                    <p>{t("monthly_services")}</p>
                                </h1>

                                <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("monthly_services_title1")}</h1>
                                    <p>{t("monthly_services_des1")}</p>
                                </div>
                                <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("monthly_services_title2")}</h1>
                                    <p>{t("monthly_services_des2")}</p>
                                </div>
                                <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("monthly_services_title3")}</h1>
                                    <p>{t("monthly_services_des3")}</p>
                                </div>
                            </div>
                            <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]'>
                                <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold" data-aos='fade-right' data-aos-duration='1400'>
                                    <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                                    </svg>
                                    <p>{t("key_features")}</p>
                                </h1>

                                <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("key_features_title1")}</h1>
                                    <p>{t("key_features_des1")}</p>
                                </div>
                                <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("key_features_title2")}</h1>
                                    <p>{t("key_features_des2")}</p>
                                </div>
                                <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("key_features_title3")}</h1>
                                    <p>{t("key_features_des3")}</p>
                                </div>
                            </div>
                        </>
                    )}

                    <button data-aos='fade-right' data-aos-duration='1500'
                        className="ml-4 md:ml-0 mt-6 text-[#FFD700] font-[600] px-8 py-2 border-2 border-[#FFD700] rounded-[30px] text-[12px] md:text-[13px]"
                        onClick={() => toggleSection('oneOff')}
                    >
                        {expanded.oneOff ? t("read_less") : t("read_more")}
                    </button>

                </div>
                <div className='pt-0 pb-10 md:py-9'>
                    <img src={service2} alt="" className='w-full h-[300px] md:h-[500px] object-cover object-center' />
                    <hr className='w-full' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                </div>
            </div>
        </>
    )
}

export default Accounting