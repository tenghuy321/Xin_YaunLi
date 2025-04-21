import { useState } from 'react'
import service4 from '../assets/images/service/service-4.png'
import { useTranslation } from 'react-i18next';

const RegulatoryAdvisory = () => {
    const [showMore, setShowMore] = useState(false);

    const {t} = useTranslation();

    return (
        <>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 pb-20' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
                <div className='px-2 md:pr-0 md:pl-12 xl:pl-20 py-14 lg:pb-0 lg:pt-20 xl:pt-40 col-span-1 md:col-span-2 text-[#fff]'>
                    <div className='flex items-end leading-none pl-4 md:pl-8'>
                        <h1 className='text-[20px] lg:text-[30px] text-gradient font-[700] text-start w-full lg:w-2/3 2xl:w-1/2 pb-1' data-aos='fade-right' data-aos-duration='1500'>{t("regulatory_advisory_title")}</h1>
                        <hr className='w-full ml-1' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                    </div>
                    <div className='text-[20px] lg:text-[25px] font-[700] text-[#fff] pt-10 pl-4 md:pl-8' data-aos='fade-right' data-aos-duration='1400'>
                        <h2>{t("regulatory_advisory_desc")}</h2>
                        <p className='text-[10px] md:text-[12px] font-[500]'>{t("regulatory_advisory_des1")}</p>
                        <p className='text-[10px] md:text-[12px] font-[500]'>{t("regulatory_advisory_des2")}</p>
                        <p className='text-[10px] md:text-[12px] font-[500]'>{t("regulatory_advisory_des3")}</p>
                    </div>
                    <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]' data-aos='fade-right' data-aos-duration='1400'>
                        <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                            <svg className='w-2 h-2 lg:w-3 lg:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>
                            <p>{t("enhanced_performance")}</p>
                        </h1>
                        <p className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>{t("enhanced_performance_des")}</p>

                        <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                            <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("enhanced_performance_title1")}</h1>
                            <p>{t("enhanced_performance_des1")}</p>
                        </div>
                        <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                            <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("enhanced_performance_title2")}</h1>
                            <p>{t("enhanced_performance_des2")}</p>
                        </div>
                        <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                            <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("enhanced_performance_title3")}</h1>
                            <p>{t("enhanced_performance_des3")}</p>
                        </div>
                        <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                            <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("enhanced_performance_title4")}</h1>
                            <p>{t("enhanced_performance_des4")}</p>
                        </div>
                    </div>

                    {showMore && (
                        <>
                            <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]' data-aos='fade-right' data-aos-duration='1400'>
                                <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                                    <svg className='w-2 h-2 lg:w-3 lg:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                                    </svg>
                                    <p>{t("corporate_restructuring_advice")}</p>
                                </h1>

                                <p className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>{t("corporate_restructuring_advice_des")}</p>

                                <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("corporate_restructuring_advice_title1")}</h1>
                                    <p>{t("corporate_restructuring_advice_des1")}</p>
                                </div>
                                <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("corporate_restructuring_advice_title2")}</h1>
                                    <p>{t("corporate_restructuring_advice_des2")}</p>
                                </div>
                                <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("corporate_restructuring_advice_title3")}</h1>
                                    <p>{t("corporate_restructuring_advice_des3")}</p>
                                </div>
                                <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("corporate_restructuring_advice_title4")}</h1>
                                    <p>{t("corporate_restructuring_advice_des4")}</p>
                                    <p>{t("corporate_restructuring_advice_des5")}</p>
                                </div>
                            </div>
                            <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]' data-aos='fade-right' data-aos-duration='1400'>
                                <h1 className="flex items-start md:items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                                    <div>
                                        <svg className='w-2 h-2 lg:w-3 lg:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                                        </svg>
                                    </div>
                                    <p className='-mt-1 md:mt-0'>{t("business_structure")}</p>
                                </h1>
                                <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("business_structure_title1")}</h1>
                                    <p>{t("business_structure_des1")}</p>
                                </div>
                                <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("business_structure_title2")}</h1>
                                    <p>{t("business_structure_des2")}</p>
                                </div>
                                <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("business_structure_title3")}</h1>
                                    <p>{t("business_structure_des3")}</p>
                                </div>
                                <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4'>
                                    <h1 className='text-[13px] md:text-[14px] font-[700]'>{t("business_structure_title4")}</h1>
                                    <p>{t("business_structure_des4")}</p>
                                </div>
                            </div>
                        </>
                    )}

                    <button className='ml-4 md:ml-0 mt-6 text-[#FFD700] font-[600] px-8 py-2 border-2 border-[#FFD700] rounded-[30px] text-[12px] md:text-[13px]' onClick={() => setShowMore(!showMore)}>
                        {showMore ? t("read_less") : t("read_more")}
                    </button>

                </div>
                <div className='pt-0 pb-10 md:py-9'>
                    <img src={service4} alt="" className='w-full h-[300px] md:h-[500px] object-cover object-center' />
                    <hr className='w-full' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                </div>
            </div>
        </>
    )
}

export default RegulatoryAdvisory