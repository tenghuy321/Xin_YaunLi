import service2 from '../assets/images/service/service-2.png';
import service3 from '../assets/images/service/service-3.png';
import ButtonScroll from '../components/ButtonScroll';

const Compliance = () => {
    return (
        <>
            <div>
                <ButtonScroll />
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 pb-5 overflow-hidden' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
                <div className='px-2 md:pr-0 md:pl-12 xl:pl-20 py-14 lg:pb-0 lg:pt-20 xl:pt-40 col-span-1 md:col-span-2 text-[#fff]'>
                    <div className='flex items-end leading-none pl-4 md:pl-8' data-aos='fade-right' data-aos-duration='1000'>
                        <h1 className='text-[20px] md:text-[30px] text-gradient font-[700] text-start text-line w-[600px] lg:w-[500px]' data-aos='fade-right' data-aos-duration='1500'>Compliance Duties</h1>
                        <hr className='w-full ml-1' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                    </div>
                    <div className='text-[20px] md:text-[25px] font-[700] text-[#fff] pt-10 pl-4 md:pl-8' data-aos='fade-left' data-aos-duration='1000'>
                        <h2>Accounting Compliance Service</h2>
                        <p className='text-[10px] md:text-[12px] font-[500]'>Scalable Accounting Services Tailored to Your Needs</p>
                    </div>
                    <div className='pl-4 md:pl-0 pt-4 lg:pt-10 xl:pt-20 text-[12px] lg:text-[14px]' data-aos='fade-right' data-aos-duration='1000'>
                        <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                            <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>
                            <p>Core Accounting Services</p>
                        </h1>
                    </div>
                    <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]' data-aos='fade-left' data-aos-duration='1200'>
                        <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                            <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>
                            <p>One-Off Services</p>
                        </h1>
                        <ul className="list-disc pl-4 md:pl-10 text-[#fff] pt-4 space-y-2 text-[12px] md:text-[13px]">
                            <li>Bookkeeping & Statutory Compliance</li>
                            <li>Accounting Setup & Support</li>
                            <li>We set up your accounting system in your preferred software—QuickBooks, Xero, or Localize,
                                a Cambodian-developed accounting system that generates reports in Khmer. After setup, you
                                can choose how much work you want to handle (such as entering)</li>
                        </ul>
                    </div>
                    <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]'>
                        <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold" data-aos='fade-right' data-aos-duration='1400'>
                            <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>
                            <p>Monthly Services</p>
                        </h1>

                        <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                            <h1 className='text-[13px] md:text-[14px] font-[700]'>Bookkeeping</h1>
                            <p>We prepare monthly books based on your sourced documents (payment vouchers, invoices, and bank statements).</p>
                        </div>
                        <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                            <h1 className='text-[13px] md:text-[14px] font-[700]'>ACCAR Report</h1>
                            <p>We prepare the financial report and make report in local langauge then submit to the authority.</p>
                        </div>
                        <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                            <h1 className='text-[13px] md:text-[14px] font-[700]'>Financial Report</h1>
                            <p>We prepare financial report includes a Trial Balance, Income Statement, Balance Sheet, and Bank Reconciliation.</p>
                        </div>
                    </div>
                    <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]'>
                        <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold" data-aos='fade-right' data-aos-duration='1400'>
                            <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>
                            <p>Key Features</p>
                        </h1>

                        <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                            <h1 className='text-[13px] md:text-[14px] font-[700]'>Flexible Service Options</h1>
                            <p>Select the accounting services you require and pay based on the volume of your transactions.
                                We recommend a monthly accounting plan to ensure compliance with your tax obligations.</p>
                        </div>
                        <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                            <h1 className='text-[13px] md:text-[14px] font-[700]'>Proactive Deadline Reminders</h1>
                            <p>Our team of accountants will keep you informed about important deadlines and provide suggested actions,
                                ensuring you never miss a deadline or incur late fees.</p>
                        </div>
                        <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-4' data-aos='fade-right' data-aos-duration='1400'>
                            <h1 className='text-[13px] md:text-[14px] font-[700]'>Real-Time Access</h1>
                            <p>We utilize QuickBooks or Xero, enabling both you and our team to access your accounts simultaneously.
                                If you prefer, you can enter transactions yourself to reduce bookkeeping costs.</p>
                        </div>
                    </div>
                </div>
                <div className='pt-0 pb-10 md:py-9'>
                    <img src={service2} alt="" className='w-full h-[300px] md:h-[500px] object-cover object-center' />
                    <hr className='w-full' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                </div>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 pb-20' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
                <div className='px-2 md:pr-0 md:pl-12 xl:pl-20 py-14 lg:pb-0 lg:pt-20 xl:pt-40 col-span-1 md:col-span-2 text-[#fff]'>
                    <div className='flex items-end leading-none pl-4 md:pl-8'>
                        <h1 className='text-[20px] md:text-[30px] text-gradient font-[700] text-start text-line w-[600px] lg:w-[500px]' data-aos='fade-right' data-aos-duration='1500'>Compliance Duties</h1>
                        <hr className='w-full ml-1' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
                    </div>
                    <div className='text-[20px] md:text-[25px] font-[700] text-[#fff] pt-10 pl-4 md:pl-8' data-aos='fade-right' data-aos-duration='1400'>
                        <h2>Tax Compliance Services</h2>
                    </div>
                    <div className='pl-4 md:pl-0 pt-4 lg:pt-10 xl:pt-20 text-[12px] lg:text-[14px]' data-aos='fade-right' data-aos-duration='1400'>
                        <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                            <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>
                            <p>Monthly Tax Filings</p>
                        </h1>

                        <div className='pl-4 md:pl-8 pt-2' data-aos='fade-right' data-aos-duration='1400'>
                            <p>Cambodian law mandates the submission of several tax returns on a monthly basis, including VAT, income tax prepayments, withholding tax, and Tax on Salary returns if the company employs staff.</p>
                            <p className='pt-4'>We handle the preparation of these returns and advise on the amounts payable to the General Department of Taxation (GDT). Our monthly tax filing services include:</p>
                            <ul className='text-[13px] pt-2'>
                                <li>Prepayment of Tax on Income (PToI)</li>
                                <li>Salary and Fringe Benefit Tax (SFBT)</li>
                                <li>Withholding Tax (WHT)</li>
                                <li>Value Added Tax (VAT)</li>
                                <li>Corporate Income Tax Return</li>
                            </ul>
                        </div>
                    </div>
                    <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]' data-aos='fade-right' data-aos-duration='1400'>
                        <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                            <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>
                            <p>Yearly Tax Filings</p>
                        </h1>

                        <div className='text-[12px] md:text-[13px] pl-4 md:pl-8 pt-2'>
                            <p>At the close of the fiscal year, we will complete your annual income tax return and advise you on any outstanding Tax on Income payments, factoring in any prepayments made throughout the year. 
                                We will also coordinate with the GDT to address any questions related to your submitted return.</p>
                        </div>
                    </div>
                    <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]' data-aos='fade-right' data-aos-duration='1400'>
                        <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                            <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>
                            <p>Tax Review</p>
                        </h1>

                        <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-2' data-aos='fade-right' data-aos-duration='1400'>
                            <p>We will visit your office to review supporting documents and interview key personnel to gather more information on your past tax filings. 
                                After examining the documents, we will provide a written summary of our findings, highlight any potential tax under-declarations, 
                                and offer advice on how to resolve any identified issues.</p>
                        </div>
 
                        <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-2' data-aos='fade-right' data-aos-duration='1400'>
                            <p>Our team will review your company’s documents and identify any potential tax concerns.
                                Before submitting these documents to the tax auditor, we will discuss the issues with you and suggest steps to 
                                minimize the risk of tax re-assessment.</p>
                            <p>Our team will accompany you during tax audit from the authority.</p>
                        </div>
                    </div>

                    <div className='pl-4 md:pl-0 pt-4 text-[12px] lg:text-[14px]' data-aos='fade-right' data-aos-duration='1400'>
                        <h1 className="flex items-center space-x-2 md:space-x-4 text-[14px] md:text-[15px] text-[#EBB81B] font-bold">
                            <svg className='w-2 h-2 md:w-3 md:h-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="7" fill="#EBB81B" />
                            </svg>
                            <p>Corporate Tax Advisory Services</p>
                        </h1>
                        <div className='md:text-[13px] pl-4 text-[12px] md:pl-8 pt-2 space-y-2'>
                            <h1 className='text-[15px] font-[700]'>Income Tax Advisory</h1>
                            <p>Our tax consultants will review your company&lsquo;s proposed transactions and guide you on the most tax-efficient way to carry them out under Cambodian tax laws. </p>
                            <p>This includes advising on business model restructuring to strengthen the legitimacy of your claims, utilizing specific tax provisions for deduction claims, and identifying strategies to legally minimize your tax liabilities.</p>
                        </div>
                    </div>
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