import service1 from '../assets/images/service/service-1.png';
import { List } from "flowbite-react";
import ButtonScroll from '../components/ButtonScroll';

const QualifiedInvestment = () => {
    return (
        <>
            <div>
                <ButtonScroll />
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 overflow-hidden' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
                <div className='px-2 md:pr-0 md:pl-12 xl:pl-20 py-14 lg:pb-0 lg:pt-20 xl:pt-40'>
                    <div className='flex items-end leading-none pl-4 md:pl-8'>
                        <h1 className='text-[20px] xl:text-[30px] text-gradient font-[700] w-full' data-aos='fade-right' data-aos-duration='1500'>Qualified Investment Project</h1>
                        <hr className='w-[300px] ml-3' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                    </div>
                    <div className='pt-5 lg:pt-10 xl:pt-20 text-[12px] lg:text-[14px] pl-5 sm:pl-10 md:pl-0'>
                        <h1 className="text-[14px] flex items-center space-x-4 md:text-[20px] text-white font-bold" data-aos='fade-right' data-aos-duration='1000'>
                            <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>

                            <p>Key Incentives for QIPs:</p>
                        </h1>
                        <p className='text-[12px] pt-4 md:text-[16px] pl-5 sm:pl-10 text-white'>QIPs in Cambodia can choose one of two main tax incentive schemes:</p>

                        <p className='text-[12px] pt-4 md:text-[16px] pl-5 sm:pl-10 text-white'><span className='text-[13px] md:text-[17px] font-[700] text-[#EBB81B]'>1.</span> Tax Holiday Exemption from Corporate Income Tax (CIT) for a period of up to 9 years (based on activity and industry).</p>
                        <List className='pt-5 text-[#fff] space-y-4 pl-5 sm:pl-10'>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                This includes:
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>Trigger period (up to 3 years)</p>
                                    <p>Tax exemption period (3 years)</p>
                                    <p>Priority period (additional years based on activity)</p>
                                </div>
                            </List.Item>
                        </List>
                        <p className='text-[12px] pt-4 md:text-[16px] pl-5 sm:pl-10 text-white'><span className='text-[13px] md:text-[17px] font-[700] text-[#EBB81B]'>2.</span> Special Depreciation
                            Accelerated depreciation of capital goods (40% upfront deduction allowed).</p>
                        <List className='pt-5 text-[#fff] space-y-4 pl-5 sm:pl-10'>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                Accelerated depreciation of capital goods (40% upfront deduction allowed).
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                Applicable instead of the tax holiday.
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                Other incentives include:
                                <div className='flex flex-col font-[300] pl-5 space-y-2 pt-2'>
                                    <p>Exemption or reduction of import duties on production equipment, raw materials, and construction materials.</p>
                                    <p>Rights to employ foreign employees (with conditions).</p>
                                    <p>Guarantee against nationalization.</p>
                                </div>
                            </List.Item>
                        </List>

                        <h1 className="text-[16px] flex items-center space-x-4 md:text-[20px] text-white font-bold pt-10" data-aos='fade-right' data-aos-duration='1000'>
                            <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>

                            <p>Sectors Commonly Eligible for QIP:</p>
                        </h1>


                        <List className='pt-5 text-[#fff] space-y-3 pl-5 sm:pl-10'>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                Manufacturing & light industry
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                Agro-industry & food processing
                            </List.Item>

                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                Tourism-related infrastructure
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                ICT & digital services
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                Education and health services
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                Renewable energy
                            </List.Item>
                            <List.Item className='font-[700]' data-aos='fade-right' data-aos-duration='1200'>
                                Logistics and warehousing
                            </List.Item>
                        </List>

                        <h1 className="text-[16px] md:text-[20px] text-white font-bold pt-10 md:pt-20" data-aos='fade-right' data-aos-duration='1000'>

                            <p>📝 Application Process:</p>
                        </h1>

                        <ol className="pt-5 text-[#fff] space-y-3 pl-5 sm:pl-14 pb-10 list-decimal">
                            <li className="font-[700]" data-aos="fade-right" data-aos-duration="1200">
                                Prepare documents (investment plan, business registration, financial info, etc.)
                            </li>
                            <li className="font-[700]" data-aos="fade-right" data-aos-duration="1200">
                                Submit to CDC or the relevant PMIS
                            </li>
                            <li className="font-[700]" data-aos="fade-right" data-aos-duration="1200">
                                Evaluation & decision within 20 working days
                            </li>
                            <li className="font-[700]" data-aos="fade-right" data-aos-duration="1200">
                                Receive QIP registration certificate (if approved)
                            </li>
                        </ol>





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