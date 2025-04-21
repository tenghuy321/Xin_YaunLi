import service1 from '../assets/images/service/service-1.png';
import { List } from "flowbite-react";
import ButtonScroll from '../components/ButtonScroll';
import { useTranslation } from 'react-i18next';

const BusinessLicensing = () => {

    const { t } = useTranslation();

    return (
        <>
            <div>
                <ButtonScroll />
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 overflow-hidden' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
                <div className='px-2 md:pr-0 md:pl-12 xl:pl-20 py-14 lg:pb-0 lg:pt-20 xl:pt-40'>
                    <div className='flex items-end leading-none pl-4 md:pl-8'>
                        <h1 className='text-[20px] xl:text-[30px] text-gradient font-[700] w-full lg:w-2/3 2xl:w-1/2 pb-1' data-aos='fade-right' data-aos-duration='1500'>{t("business_licensing_title")}</h1>
                        <hr className='w-[300px] ml-3' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                    </div>
                    <p data-aos='fade-right' data-aos-duration='1200' className='text-[#fff] pt-5 lg:pt-10 text-[12px] pl-5 sm:pl-10 md:text-[14px]'>{t("business_licensings")}</p>
                    <div className='pt-5 pb-10 text-[12px] lg:text-[14px] pl-5 sm:pl-10 md:pl-0'>
                        <List className='pt-5 text-[#fff] space-y-4 pl-5 sm:pl-10'>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title1")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des1")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title2")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des2")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title3")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des3")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title4")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des4")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title5")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des5")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title6")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des6")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title7")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des7")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title8")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des8")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title9")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des9")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title10")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des10")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title11")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des11")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title12")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des12")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title13")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des13")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title14")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des14")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_licensing_title15")}
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>{t("business_licensing_des15")}</p>
                                </div>
                            </List.Item>
                        </List>
                    

                    </div>
                </div>
                <div className='pt-0 pb-10 md:py-9 h-full md:h-[100vh]' data-aos='fade-left' data-aos-duration='1000'>
                    <img src={service1} alt="" className='w-full h-full' />
                </div>

            </div>
        </>
    )
}

export default BusinessLicensing