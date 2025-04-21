import service4 from '../assets/images/service/service-4.png'
import { useTranslation } from 'react-i18next';
const AuditPreparation = () => {
    const {t} = useTranslation();

    return (
        <>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 pb-20' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
                <div className='px-2 md:pr-0 md:pl-12 xl:pl-20 py-14 lg:pb-0 lg:pt-20 xl:pt-40 col-span-1 md:col-span-2 text-[#fff]'>
                    <div className='flex items-end leading-none pl-4 md:pl-8'>
                        <h1 className='text-[20px] lg:text-[30px] text-gradient font-[700] text-start w-full lg:w-2/3 2xl:w-1/2' data-aos='fade-right' data-aos-duration='1500'>{t("audit_preparation_support")}</h1>
                        <hr className='w-full ml-1' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                    </div>

                    <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-10 md:text-[16px] pl-5 text-white'><span className='text-[13px] md:text-[17px] font-[700] text-[#EBB81B]'>1.</span> {t("audit_preparation_support_title1")}</p>
                    <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-3 md:text-[16px] pl-5 sm:pl-10 text-white'>{t("audit_preparation_support_des1")}</p>
                    <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-6 md:text-[16px] pl-5 text-white'><span className='text-[13px] md:text-[17px] font-[700] text-[#EBB81B]'>2.</span> {t("audit_preparation_support_title2")}</p>
                    <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-3 md:text-[16px] pl-5 sm:pl-10 text-white'>{t("audit_preparation_support_des2")}</p>
                    <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-6 md:text-[16px] pl-5 text-white'><span className='text-[13px] md:text-[17px] font-[700] text-[#EBB81B]'>3.</span> {t("audit_preparation_support_title3")}</p>
                    <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-3 md:text-[16px] pl-5 sm:pl-10 text-white'>{t("audit_preparation_support_des3")}</p>
                    <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-6 md:text-[16px] pl-5 text-white'><span className='text-[13px] md:text-[17px] font-[700] text-[#EBB81B]'>4.</span> {t("audit_preparation_support_title4")}</p>
                    <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-3 md:text-[16px] pl-5 sm:pl-10 text-white'>{t("audit_preparation_support_des4")}</p>
                    <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-6 md:text-[16px] pl-5 text-white'><span className='text-[13px] md:text-[17px] font-[700] text-[#EBB81B]'>5.</span> {t("audit_preparation_support_title5")}</p>
                    <p data-aos='fade-right' data-aos-duration='1200' className='text-[12px] pt-3 md:text-[16px] pl-5 sm:pl-10 text-white'>{t("audit_preparation_support_des5")}</p>

                </div>
                <div className='pt-0 pb-10 md:py-9'>
                    <img src={service4} alt="" className='w-full h-[300px] md:h-[500px] object-cover object-center' />
                    <hr className='w-full' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                </div>
            </div>
        </>
    )
}

export default AuditPreparation