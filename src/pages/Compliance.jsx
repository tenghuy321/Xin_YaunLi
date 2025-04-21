import { useTranslation } from 'react-i18next';
import service3 from '../assets/images/service/service-3.png';

import ButtonScroll from '../components/ButtonScroll';
import { useState } from 'react';

const Compliance = () => {

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

            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 pb-20 overflow-hidden' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
                <div className='px-2 md:pr-0 md:pl-12 xl:pl-20 py-14 lg:pb-0 lg:pt-20 xl:pt-40 col-span-1 md:col-span-2 text-[#fff]'>
                    <div className='flex items-end leading-none pl-4 md:pl-8'>
                        <h1 className='text-[20px] lg:text-[30px] text-gradient font-[700] text-start w-full lg:w-2/3 2xl:w-1/2 pb-1' data-aos='fade-left' data-aos-duration='1500'>{t("tax_declaration_compliance")}</h1>
                        <hr className='w-full ml-1' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                    </div>
                    <div className='text-[20px] md:text-[25px] font-[700] text-[#fff] pt-10 pl-4 md:pl-8' data-aos='fade-left' data-aos-duration='1400'>
                        <h2>{t("tax_compliance_services")}</h2>
                    </div>
                    <div className='pl-4 md:pl-0 pt-4 lg:pt-10 xl:pt-12 text-[12px] lg:text-[14px]' data-aos='fade-left' data-aos-duration='1400'>
                        <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                            <svg className='w-2 h-2 lg:w-3 lg:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>
                            <p>{t("monthly_tax_filings")}</p>
                        </h1>

                        <div className='pl-4 md:pl-8 pt-2' data-aos='fade-left' data-aos-duration='1400'>
                            <p>{t("monthly_tax_filings_des1")}</p>
                            <p className='pt-4'>{t("monthly_tax_filings_des2")}</p>
                            <ul className='text-[13px] pt-2'>
                                <li>{t("monthly_tax_filings_des3")}</li>
                                <li>{t("monthly_tax_filings_des4")}</li>
                                <li>{t("monthly_tax_filings_des5")}</li>
                                <li>{t("monthly_tax_filings_des6")}</li>
                                <li>{t("monthly_tax_filings_des7")}</li>
                            </ul>
                        </div>
                    </div>

                    {expanded.another && (
                        <>
                            <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]' data-aos='fade-left' data-aos-duration='1400'>
                                <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                                    <svg className='w-2 h-2 lg:w-3 lg:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                                    </svg>
                                    <p>{t("yearly_tax_filings")}</p>
                                </h1>

                                <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-2'>
                                    <p>{t("yearly_tax_filings_des")}</p>
                                </div>
                            </div>
                            <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]' data-aos='fade-left' data-aos-duration='1400'>
                                <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                                    <svg className='w-2 h-2 lg:w-3 lg:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                                    </svg>
                                    <p>{t("tax_review")}</p>
                                </h1>

                                <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-2' data-aos='fade-left' data-aos-duration='1400'>
                                    <p>{t("tax_review_des1")}</p>
                                </div>

                                <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-2' data-aos='fade-left' data-aos-duration='1400'>
                                    <p>{t("tax_review_des2")}</p>
                                    <p>{t("tax_review_des3")}</p>
                                </div>
                            </div>

                            <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]' data-aos='fade-left' data-aos-duration='1400'>
                                <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                                    <svg className='w-2 h-2 lg:w-3 lg:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                                    </svg>
                                    <p>{t("corporate_tax_advisory_services")}</p>
                                </h1>
                                <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-2 space-y-2'>
                                    <h1 className='text-[15px] font-[700]'>{t("corporate_tax_advisory_services_title")}</h1>
                                    <p>{t("corporate_tax_advisory_services_des1")}</p>
                                    <p>{t("corporate_tax_advisory_services_des2")}</p>
                                </div>
                            </div>
                        </>
                    )}

                    <button data-aos='fade-left' data-aos-duration='1500' className='ml-4 md:ml-0 mt-6 mb-10 text-[#FFD700] font-[600] px-8 py-2 border-2 border-[#FFD700] rounded-[30px] text-[12px] md:text-[13px]"'
                        onClick={() => toggleSection('another')}>
                        {expanded.another ? t("read_less") : t("read_more")}
                    </button>
                </div>
                <div className='pt-0 pb-10 md:py-9'>
                    <img src={service3} alt="" className='w-full h-[300px] md:h-[500px] object-cover object-center' />
                    <hr className='w-full' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                </div>
            </div>
        </>
    )
}

export default Compliance