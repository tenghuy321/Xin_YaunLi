import service1 from '../assets/images/service/service-1.png';
import { List } from "flowbite-react";
import ButtonScroll from '../components/ButtonScroll';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const QualifiedInvestment = () => {

    const [showMore, setShowMore] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <div>
                <ButtonScroll />
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 overflow-hidden' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
                <div className='px-2 md:pr-0 md:pl-12 xl:pl-20 py-14 lg:pb-0 lg:pt-20 xl:pt-40'>
                    <div className='flex items-end leading-none pl-4 md:pl-8'>
                        <h1 className='text-[20px] xl:text-[30px] text-gradient font-[700] w-full' data-aos='fade-right' data-aos-duration='1500'>{t("qualified_investment_project1")}</h1>
                        <hr className='w-[300px] ml-3' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                    </div>
                    <div className='pt-5 lg:pt-10 xl:pt-20 text-[12px] lg:text-[14px] pl-5 sm:pl-10 md:pl-0'>
                        <h1 className="text-[14px] flex items-center space-x-4 md:text-[20px] text-white font-bold" data-aos='fade-right' data-aos-duration='1000'>
                            <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>

                            <p>{t("key_incentives")}</p>
                        </h1>
                        <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-4 md:text-[16px] pl-5 sm:pl-10 text-white'>{t("key_incentives_des")}</p>

                        <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-4 md:text-[16px] pl-5 sm:pl-10 text-white'><span className='text-[13px] md:text-[17px] font-[700] text-[#EBB81B]'>1.</span> {t("qualified_investment_project_title1")}</p>
                        <List className='pt-5 text-[#fff] space-y-4 pl-5 sm:pl-10'>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("this_include")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("qualified_investment_project_des1")}</p>
                                    <p>{t("qualified_investment_project_des2")}</p>
                                    <p>{t("qualified_investment_project_des3")}</p>
                                </div>
                            </List.Item>
                        </List>
                        <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-4 md:text-[16px] pl-5 sm:pl-10 text-white'><span className='text-[13px] md:text-[17px] font-[700] text-[#EBB81B]'>2.</span> {t("qualified_investment_project_title2")}</p>
                        <List className='pt-5 text-[#fff] space-y-4 pl-5 sm:pl-10'>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("qualified_investment_project_title3")}
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("qualified_investment_project_title4")}
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("other_incentives_include")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("qualified_investment_project_des4")}</p>
                                    <p>{t("qualified_investment_project_des5")}</p>
                                    <p>{t("qualified_investment_project_des6")}</p>
                                </div>
                            </List.Item>
                        </List>

                        {showMore && (
                            <>
                                <h1 className="text-[16px] flex items-center space-x-4 md:text-[20px] text-white font-bold pt-10" data-aos='fade-right' data-aos-duration='1000'>
                                    <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                                    </svg>

                                    <p>{t("sectors_commonly_eligible")}</p>
                                </h1>


                                <List className='pt-5 text-[#fff] space-y-3 pl-5 sm:pl-10'>
                                    <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                        {t("sectors_commonly_eligible_title1")}
                                    </List.Item>
                                    <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                        {t("sectors_commonly_eligible_title2")}
                                    </List.Item>

                                    <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                        {t("sectors_commonly_eligible_title3")}
                                    </List.Item>
                                    <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                        {t("sectors_commonly_eligible_title4")}
                                    </List.Item>
                                    <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                        {t("sectors_commonly_eligible_title5")}
                                    </List.Item>
                                    <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                        {t("sectors_commonly_eligible_title6")}
                                    </List.Item>
                                    <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                        {t("sectors_commonly_eligible_title7")}
                                    </List.Item>
                                </List>

                                <h1 className="text-[16px] md:text-[20px] text-white font-bold pt-10 md:pt-20" data-aos='fade-right' data-aos-duration='1000'>

                                    <p>📝 {t("application_process")}</p>
                                </h1>

                                <ol className="pt-5 text-[#fff] space-y-3 pl-5 sm:pl-14 pb-10 list-decimal">
                                    <li className="font-[700]" data-aos="fade-right" data-aos-duration="1200">
                                        {t("application_process_title1")}
                                    </li>
                                    <li className="font-[700]" data-aos="fade-right" data-aos-duration="1200">
                                        {t("application_process_title2")}
                                    </li>
                                    <li className="font-[700]" data-aos="fade-right" data-aos-duration="1200">
                                        {t("application_process_title3")}
                                    </li>
                                    <li className="font-[700]" data-aos="fade-right" data-aos-duration="1200">
                                        {t("application_process_title4")}
                                    </li>
                                </ol>
                            </>
                        )}

                        <button className='ml-4 md:ml-0 mt-6 mb-10 text-[#FFD700] font-[600] px-8 py-2 border-2 border-[#FFD700] rounded-[30px] text-[12px] md:text-[13px]' onClick={() => setShowMore(!showMore)}>
                            {showMore ? t("read_less") : t("read_more")}
                        </button>

                    </div>
                </div>
                <div className='pt-0 pb-10 md:py-9 h-full md:h-[100vh]' data-aos='fade-left' data-aos-duration='1000'>
                    <img src={service1} alt="" className='w-full h-full' />
                </div>

            </div>
        </>
    )
}

export default QualifiedInvestment