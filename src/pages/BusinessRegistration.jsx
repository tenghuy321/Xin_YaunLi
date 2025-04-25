// import table1 from '../assets/images/service/service_table1.png';
// import table2 from '../assets/images/service/service_table2.png';
import service1 from '../assets/images/service/service-1.png';
import { List } from "flowbite-react";
import ButtonScroll from '../components/ButtonScroll';

import './businessRegistration.css';
import { useTranslation } from 'react-i18next';


const BusinessRegistration = () => {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <ButtonScroll />
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 overflow-hidden' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
                <div className='px-2 md:pr-0 md:pl-12 xl:pl-20 py-14 lg:pb-0 lg:pt-20 xl:pt-40'>
                    <div className='flex items-end leading-none pl-4 md:pl-8'>
                        <h1 className='text-[20px] xl:text-[30px] text-gradient font-[700] w-full lg:w-2/3 2xl:w-1/2 pb-1' data-aos='fade-right' data-aos-duration='1500'>{t("business_registrations")}</h1>
                        <hr className='w-full ml-3' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                    </div>
                    <div className='pt-5 lg:pt-10 xl:pt-20 text-[12px] lg:text-[14px] pl-5 sm:pl-10 md:pl-0'>
                        <h1 className="text-[14px] flex items-center space-x-4 md:text-[20px] text-white font-bold" data-aos='fade-right' data-aos-duration='1000'>
                            <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>

                            <p>{t("business_registration_title")}</p>
                        </h1>

                        <List className='pt-5 xl:pt-10 text-[#fff] space-y-4 pl-5 sm:pl-10'>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                {t("business_registration_title_one")}
                                <div className='flex flex-col font-[300] pl-5 space-y-1 pt-2'>
                                    <p>{t("business_registration_title_one1")}</p>
                                    <p>{t("business_registration_title_one2")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1400'>
                                {t("business_registration_title_two")}
                                <div className='flex flex-col font-[300] pl-5 space-y-1 pt-2'>
                                    <p>{t("business_registration_title_two1")}</p>
                                    <p>{t("business_registration_title_two2")}</p>
                                    <p>{t("business_registration_title_two3")}</p>
                                </div>
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1600'>
                                {t("business_registration_title_three")}
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1800'>
                                {t("business_registration_title_four")}
                                <div className='flex flex-col font-[300] pl-5 space-y-1 pt-2'>
                                    <p>{t("business_registration_title_four1")}</p>
                                    <p>{t("business_registration_title_four2")}</p>
                                </div>
                            </List.Item>
                        </List>
                    </div>
                </div>
                <div className='pt-0 pb-10 md:py-9' data-aos='fade-left' data-aos-duration='1000'>
                    <img src={service1} alt="" className='w-full h-full' />
                </div>

                <div className="w-full h-full max-w-[98%] xl:max-w-full mx-auto col-span-1 md:col-span-2 overflow-x-scroll xl:overflow-x-auto scrollBar px-0 xl:px-6 pb-10">
                    <div className=''>
                        <table className="min-w-full text-xs md:text-sm text-white">
                            <thead className="text-xs text-left capitalize bg-gradient-to-r from-[#BA7F14] to-[#FFD700]">
                                <tr>
                                    <th className="py-5 px-3 text-black"> </th>
                                    {/* <th className="py-5 px-3 text-black text-center text-[12px] md:text-[13px] font-bold" colSpan="2">{t("cooperate_entities")}</th>
                                    <th className="py-5 px-3 text-black text-center text-[12px] md:text-[13px] font-bold" colSpan="3">{t("foreign_owned_entity")}</th> */}
                                    <th className="py-5 px-3 text-black text-center text-[12px] md:text-[13px] font-bold">{t("sole_proprietorship")}</th>
                                    <th className="py-5 px-3 text-black text-center text-[12px] md:text-[13px] font-bold" colSpan="2">{t("partnership")}</th>
                                </tr>
                                <tr className="bg-[#000] text-white capitalize">
                                    <th className="py-5 px-3 min-w-[150px] border border-t-0 border-b-0 border-l-0 border-r-[#FAF088] font-bold text-gradient"></th>
                                    {/* <th className="py-5 px-3 min-w-[150px] border border-t-0 border-b-0 border-r-[#FAF088] font-[400] text-[10px] md:text-[11px] text-center">{t("private_limited")}</th>
                                    <th className="py-5 px-3 min-w-[150px] border border-t-0 border-b-0 border-r-[#FAF088] font-[400] text-[10px] md:text-[11px] text-center">{t("public_limited")}</th>
                                    <th className="py-5 px-3 min-w-[150px] border border-t-0 border-b-0 border-r-[#FAF088] font-[400] text-[10px] md:text-[11px] text-center">{t("branch")}</th>
                                    <th className="py-5 px-3 min-w-[150px] border border-t-0 border-b-0 border-r-[#FAF088] font-[400] text-[10px] md:text-[11px] text-center">{t("subsidiary")}</th>
                                    <th className="py-5 px-3 min-w-[150px] border border-t-0 border-b-0 border-r-[#FAF088] font-[400] text-[10px] md:text-[11px] text-center">{t("representative_office")}</th> */}
                                    <th className="py-5 px-3 min-w-[150px] border border-t-0 border-b-0 border-r-[#FAF088] font-[400] text-[10px] md:text-[11px] text-center">{t("sole_proprietorship_des")}</th>
                                    <th className="py-5 px-3 min-w-[150px] border border-t-0 border-b-0 border-r-[#FAF088] font-[400] text-[10px] md:text-[11px] text-center">{t("general_partnership")}</th>
                                    <th className="py-5 px-3 min-w-[150px] border border-t-0 border-b-0 border-r-[#FAF088] font-[400] text-[10px] md:text-[11px] text-center">{t("limited_partnership")}</th>
                                </tr>
                            </thead>
                            <tbody className="bg-[#1E1E1E] text-gray-200">
                                <tr>
                                    <td className="py-5 px-3 border border-l-0 border-t-0 border-r-[#FAF088] border-b-black font-bold text-gradient">{t("ownership")}</td>
                                    {/* <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#000]">{t("private_limited_1")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#000]">{t("public_limited_1")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-r-0 border-l-[#FAF088] text-[10px] text-center leading-[12px]">{t("branch_1")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#000]">{t("subsidiary_1")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#000]">{t("representative_office_1")}</td> */}
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("sole_proprietorship_des_1")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#000]">{t("general_partnership_1")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("limited_partnership_1")}</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-3 border border-l-0 border-t-0 border-r-[#FAF088] border-b-black font-bold text-gradient">{t("liability")}</td>
                                    {/* <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-r-0 border-l-[#FAF088] border-t-0 border-b-[#000]">{t("private_limited_2")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-r-0 border-l-[#FAF088] border-t-0 border-b-[#000]">{t("private_limited_2")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-r-0 border-l-[#FAF088] text-[10px] text-center leading-[12px]">{t("branch_2")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#000]">{t("subsidiary_2")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-l-[#FAF088] border-r-0 border-b-[#000]">{t("representative_office_2")}</td> */}
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("sole_proprietorship_des_2")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#000]">{t("general_partnership_2")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("limited_partnership_2")}</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-3 border border-l-0 border-t-0 border-r-[#FAF088] border-b-black font-bold text-gradient">{t("management")}</td>
                                    {/* <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-l-[#FAF088] border-r-0 border-b-[#000]">{t("private_limited_3")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-l-[#FAF088] border-r-0 border-b-[#000]">{t("private_limited_3")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-r-0 border-l-[#FAF088] text-[10px] text-center leading-[12px]">{t("branch_3")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-b-[#000]">{t("subsidiary_3")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#000]">{t("representative_office_3")}</td> */}
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("sole_proprietorship_des_3")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-b-[#000]">{t("general_partnership_3")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("limited_partnership_3")}</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-3 border border-l-0 border-t-0 border-r-[#FAF088] border-b-black font-bold text-gradient">{t("taxation")}</td>
                                    {/* <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-l-[#FAF088] border-r-0 border-b-[#000]">{t("private_limited_4")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-l-[#FAF088] border-r-0 border-b-[#000]">{t("private_limited_4")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-r-0 border-l-[#FAF088] text-[10px] text-center leading-[12px]">{t("branch_4")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-r-0 border-l-[#FAF088] border-b-[#000]">{t("subsidiary_4")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-b-[#000]">{t("representative_office_4")}</td> */}
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("sole_proprietorship_des_4")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-b-[#000] border-l-[#FAF088] border-r-0 border-t-0">{t("general_partnership_4")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("limited_partnership_4")}</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-3 border border-l-0 border-t-0 border-r-[#FAF088] border-b-black font-bold text-gradient">{t("continuity")}</td>
                                    {/* <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-r-0 border-l-[#FAF088] border-b-[#000]">{t("private_limited_5")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-r-0 border-l-[#FAF088] border-b-[#000]">{t("private_limited_5")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-r-0 border-l-[#FAF088] text-[10px] text-center leading-[12px]">{t("branch_5")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-r-0 border-l-[#FAF088] border-t-0 border-b-[#000]">{t("subsidiary_5")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-r-0 border-l-[#FAF088] border-t-0 border-b-[#000]">{t("representative_office_5")}</td> */}
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("sole_proprietorship_des_5")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#000]">{t("general_partnership_5")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("limited_partnership_5")}</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-3 border border-l-0 border-t-0 border-r-[#FAF088] border-b-black font-bold text-gradient">{t("legal_structure")}</td>
                                    {/* <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-r-0 border-l-[#FAF088] border-t-0 border-b-[#000]">{t("private_limited_6")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-r-0 border-l-[#FAF088] border-t-0 border-b-[#000]">{t("private_limited_6")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-r-0 border-l-[#FAF088] text-[10px] text-center leading-[12px]">{t("branch_6")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-l-[#FAF088] border-r-0 border-b-[#000]">{t("subsidiary_6")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-l-[#FAF088] border-r-0 border-b-[#000]">{t("representative_office_6")}</td> */}
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("sole_proprietorship_des_6")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-l-[#FAF088] border-r-0 border-b-[#000]">{t("general_partnership_6")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("limited_partnership_6")}</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-3 border border-l-0 border-t-0 border-r-[#FAF088] border-b-[#FAF088] font-bold text-gradient">{t("classification")}</td>
                                    {/* <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-r-0 border-b-[#FAF088]">{t("private_limited_7")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-l-[#FAF088] border-r-0 border-b-[#FAF088]">{t("private_limited_7")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-r-0 border-b-[#FAF088] border-l-[#FAF088] text-[10px] text-center leading-[12px]">{t("branch_7")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#FAF088]">{t("subsidiary_7")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#FAF088]">{t("representative_office_7")}</td> */}
                                    <td className="py-5 px-3 border border-t-0 border-[#FAF088] text-[10px] text-center leading-[12px]">{t("sole_proprietorship_des_7")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-t-0 border-r-0 border-[#FAF088]">{t("general_partnership_7")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#FAF088] border-l-[#FAF088] border-r-[#FAF088] text-[10px] text-center leading-[12px]">{t("limited_partnership_7")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                {/* <div className='w-full md:w-[90%] lg:w-2/3 xl:w-full h-full col-span-1 md:col-span-2 xl:col-span-1 max-w-[98%] md:max-w-[95%] xl:max-w-full xl:mx-auto overflow-x-scroll xl:overflow-x-auto scrollBar px-0 md:px-4 xl:px-6 mt-10'>
                    <div className=''>
                        <table className='min-w-full text-xs md:text-sm text-white'>
                            <thead className="text-xs text-left capitalize bg-gradient-to-r from-[#BA7F14] to-[#FFD700]">
                                <tr>
                                    <th className="py-5 px-3 min-w-[150px] md:w-full text-black text-center text-[12px] md:text-[13px] font-bold">{t("category")}</th>
                                    <th className="py-5 px-3 min-w-[150px] md:w-full text-black text-center text-[12px] md:text-[13px] font-bold">{t("small_entity")}</th>
                                    <th className="py-5 px-3 min-w-[150px] md:w-full text-black text-center text-[12px] md:text-[13px] font-bold">{t("medium_entity")}</th>
                                    <th className="py-5 px-3 min-w-[150px] md:w-full text-black text-center text-[12px] md:text-[13px] font-bold border border-t-0 border-b-0 border-l-0 border-r-[#FFD700]">{t("large_entity")}</th>
                                </tr>
                            </thead>
                            <tbody className="bg-[#1E1E1E] text-gray-200">
                                <tr>
                                    <td className="py-5 px-3 border border-l-0 border-t-0 border-r-[#FAF088] border-b-black font-bold text-gradient">{t("annual_turnover")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-0 border-r-0 border-t-0 border-b-[#000]">{t("small_entity_1")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#000]">{t("medium_entity_1")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-r-[#FAF008] border-l-[#FAF088] text-[10px] text-center leading-[12px]">{t("large_entity_1")}</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-3 border border-l-0 border-t-0 border-r-[#FAF088] border-b-black font-bold text-gradient">{t("number_of_employees")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-0 border-r-0 border-t-0 border-b-[#000]">{t("small_entity_2")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#000]">{t("medium_entity_2")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#000] border-r-[#FAF008] border-l-[#FAF088] text-[10px] text-center leading-[12px]">{t("large_entity_2")}</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-3 border border-l-0 border-t-0 border-r-[#FAF088] border-b-[#FAF008] font-bold text-gradient">{t("taxpayer_classification")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-0 border-r-0 border-t-0 border-b-[#FAF008]">{t("small_entity_3")}</td>
                                    <td className="py-5 px-3 text-[10px] text-center leading-[12px] border border-l-[#FAF088] border-r-0 border-t-0 border-b-[#FAF008]">{t("medium_entity_3")}</td>
                                    <td className="py-5 px-3 border border-t-0 border-b-[#FAF008] border-r-[#FAF008] border-l-[#FAF088] text-[10px] text-center leading-[12px]">{t("large_entity_3")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}

                <div className='max-w-7xl mx-auto px-2 col-span-1 md:col-span-2 w-full pb-20 pt-20 md:pt-10'>
                    <div className='flex items-end leading-none'>
                        <h1 className='text-[20px] md:text-[30px] text-gradient font-[700] w-full md:w-2/3 2xl:w-[20%] mb-1' data-aos='fade-right' data-aos-duration='1500'>{t("business_registrations")}</h1>
                        <hr className='w-full ml-3' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                    </div>

                    <h1 className="text-[16px] flex items-center space-x-4 md:text-[20px] text-white font-bold pt-10 md:pt-20" data-aos='fade-right' data-aos-duration='1000'>
                        <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                        </svg>

                        <p>{t("corporate_secretarial_services")}</p>
                    </h1>

                    <div className='pt-5 md:pt-10 text-[#fff] text-[12px] md:text-[14px] overflow-hidden'>
                        <p className='pl-4 md:pl-8' data-aos='fade-right' data-aos-duration='1000'>{t("corporate_secretarial_services_title")}</p>

                        <ul className="list-disc ml-6 space-y-2 my-10 text-[10px] md:text-[13px] font-[400] pl-4 md:pl-8" data-aos='fade-left' data-aos-duration='1000'>
                            <li>{t("corporate_secretarial_services_des1")}</li>
                            <li>{t("corporate_secretarial_services_des2")}</li>
                            <li>{t("corporate_secretarial_services_des3")}</li>
                            <li>{t("corporate_secretarial_services_des4")}</li>
                            <li>{t("corporate_secretarial_services_des5")}</li>
                            <li>{t("corporate_secretarial_services_des6")}</li>
                            <li>{t("corporate_secretarial_services_des7")}</li>
                        </ul>

                        <div className='flex items-center space-x-2' data-aos='fade-right' data-aos-duration='1000'>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0029 1.04325L11.4123 0.52881C10.6699 -0.185996 9.48312 -0.18058 8.72989 0.572132L7.60817 1.78513C7.25052 2.14254 7.05002 2.61907 7.05002 3.1281C7.05002 3.63713 7.2451 4.10825 7.60275 4.46566L7.81951 4.68226C7.13131 6.13354 6.10171 7.16242 4.69821 7.81224L4.47603 7.59564C4.11838 7.23823 3.64152 7.04329 3.13756 7.04329C2.6336 7.04329 2.15673 7.23823 1.81534 7.57939L0.558149 8.74366C0.2005 9.10106 0 9.5776 0 10.0866C0 10.5957 0.189662 11.0505 0.531055 11.4025C0.531055 11.4025 1.03501 11.9819 1.04585 11.9928C1.69612 12.6426 2.57399 13 3.51688 13C7.59191 13 13 7.59564 13 3.52341C13 2.58117 12.6424 1.70391 11.9921 1.05408L12.0029 1.04325ZM3.52772 11.3646C3.02918 11.3646 2.56315 11.1805 2.22176 10.8502C2.22176 10.8502 1.72322 10.2762 1.70696 10.2653C1.63652 10.1949 1.62568 10.1137 1.62568 10.0758C1.62568 10.0379 1.63652 9.95125 1.68529 9.90792L2.94248 8.74366C3.01292 8.67326 3.09421 8.66243 3.13214 8.66243C3.17007 8.66243 3.25677 8.67326 3.3218 8.74366L3.93414 9.35016C4.16173 9.57218 4.49771 9.64258 4.79575 9.52886C7.01751 8.68409 8.61067 7.09202 9.52647 4.80681C9.64569 4.50898 9.58066 4.16241 9.35306 3.93497L8.74614 3.31763C8.6757 3.24724 8.66486 3.16601 8.66486 3.1281C8.66486 3.0902 8.6757 3.00355 8.76782 2.91691L9.88954 1.70391C9.99792 1.60102 10.1659 1.60102 10.2743 1.70391C10.2851 1.71474 10.8595 2.21835 10.8595 2.21835C11.1901 2.55951 11.3743 3.0198 11.3743 3.52341C11.3743 6.98914 6.50271 11.3754 3.51688 11.3754L3.52772 11.3646Z" fill="url(#paint0_linear_1_339)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_339" x1="0" y1="6.5" x2="13" y2="6.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#EBB81B" />
                                        <stop offset="0.455" stopColor="#DFAD16" />
                                        <stop offset="1" stopColor="#FAF088" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className='text-[15px] font-[700]'>{t("quote")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessRegistration