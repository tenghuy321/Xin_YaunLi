import icon1 from '../assets/images/icons/icon-1.png';
import icon9 from '../assets/images/icons/icon-9.png';
import icon10 from '../assets/images/icons/icon-10.png';
import icon11 from '../assets/images/icons/icon-11.png';

import client1 from '../assets/images/profile/client-1.png';
import client2 from '../assets/images/profile/client-2.png';
import client3 from '../assets/images/profile/client-3.png';
import client4 from '../assets/images/profile/client-4.png';
import client5 from '../assets/images/profile/client-5.png';
import client6 from '../assets/images/profile/client-6.png';
import clients6 from '../assets/images/profile/clients-6.png';
import client7 from '../assets/images/profile/client-7.png';
import client8 from '../assets/images/profile/client-8.png';
import client9 from '../assets/images/profile/client-9.png';
import client10 from '../assets/images/profile/client-10.png';
import clients10 from '../assets/images/profile/clients-10.png';

import banner from '../assets/images/home/banner_footer.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Reveal from '../components/Reveal';
import ButtonScroll from '../components/ButtonScroll';
import { useTranslation } from 'react-i18next';
import './home.css';

const Home = () => {

  // const {t} = useTranslation();

  useEffect(() => {
    Aos.init({
      offset: 10,
    });
  });

  const { t } = useTranslation();


  const scrollToCenter = (target, event) => {
    // Prevent the default action of the link
    event.preventDefault();

    // Get the target element
    const element = document.querySelector(target);

    // If the element exists, calculate the position to center it in the viewport
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const elementHeight = element.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate the scroll position to center the element
      const scrollPosition = elementTop - (viewportHeight / 2) + (elementHeight / 2);

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <div>
        <ButtonScroll />
      </div>
      <section className="py-[4rem] md:pt-[14rem] h-full md:h-screen bg-cover bg-center bg-[url('assets/images/home-bg.png')]">
        <div className="w-full max-w-7xl mx-auto flex justify-center md:justify-end md:px-5 xl:px-8">
          <div className="flex flex-col items-center text-center justify-center text-[#ffffff] ">
            <Reveal>
              <p className="text-[20px] lg:text-[30px]">{t("welcome")}</p>
            </Reveal>
            <Reveal>
              <p className="text-gradient text-[40px] sm:text-[50px] md:text-[70px] lg:text-[100px] leading-none font-[800]">XIN YUAN LI</p>
            </Reveal>
            <Reveal>
              <p className="text-[16px] lg:text-[27px] tracking-[4px] md:tracking-[0.32rem]">BUSINESS SERVICE</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto items-center relative top-0 md:top-[-150px] z-10 overflow-hidden px-0 sm:px-4 2xl:px-0">
        {/* labtop */}
        <div className='hidden md:block overflow-hidden'>
          <div className='flex items-center justify-center space-x-14 py-4 md:py-2 bg-[#29292980] rounded-t-md' data-aos='fade-up' data-aos-duration='1000'>
            <a href='#who' onClick={(event) => scrollToCenter('#who', event)} className="flex justify-center w-[120px]">
              <img src={icon1} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
            <a href='#our_services' onClick={(event) => scrollToCenter('#our_services', event)} className="flex justify-center w-[120px]">
              <img src={icon9} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
            <a href='#uniqueness' onClick={(event) => scrollToCenter('#uniqueness', event)} className="flex justify-center w-[120px]">
              <img src={icon10} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
            <a href='#clients' onClick={(event) => scrollToCenter('#clients', event)} className="flex justify-center w-[120px]">
              <img src={icon11} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
          </div>

          <div className='flex items-center justify-center space-x-14 py-4 md:py-2 rounded-t-md' data-aos='fade-up' data-aos-duration='1200'>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#who' onClick={(event) => scrollToCenter('#who', event)}>Who are we?</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#our_services' onClick={(event) => scrollToCenter('#our_services', event)}>Our Services</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#uniqueness' onClick={(event) => scrollToCenter('#uniqueness', event)}>Uniqueness</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#clients' onClick={(event) => scrollToCenter('#clients', event)}>Notable Clients</a>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className='grid md:hidden grid-cols-2 items-center justify-center py-4 gap-y-4'>
          <a href='#who' className='flex flex-col items-center justify-center'>
            <img src={icon1} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Who are we?</p>
            </div>
          </a>
          <a href='#our_services' className='flex flex-col items-center justify-center'>
            <img src={icon9} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Our Services</p>
            </div>
          </a>
          <a href='#uniqueness' className='flex flex-col items-center justify-center'>
            <img src={icon10} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Uniqueness</p>
            </div>
          </a>
          <a href='#clients' className='flex flex-col items-center justify-center'>
            <img src={icon11} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Notable Clients</p>
            </div>
          </a>
        </div>

        <div id='who'>
          <hr style={{ height: '8px', border: 'none', background: 'linear-gradient(90deg, #BA7F14 0%, #FAF088 47.5%, #EBB81B 100%)' }} />
          <div className='flex flex-col space-y-10 gap-4 py-10 md:py-16 px-4 lg:px-32 2xl:px-40 overflow-hidden' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
            <Reveal>
              <div className='text-[30px] text-gradient font-[700]'>
                WHO ARE WE?
              </div>
            </Reveal>
            <div className='whitespace-pre-line space-y-4 text-[#ffffff] text-[12px] lg:text-[14px]'>
              <Reveal>
                <p>Xin Yuan Li was started in 2018 and later officially registered in 2019 as medium tax enterprise. As of now, the company has increased the number of clients from 15 to 50 clients, while 80% are international clients and 20% are locals. </p>
              </Reveal>
              <Reveal>
                <p>The company provides support to business registration, tax and accounting services, advisory services.</p>
              </Reveal>
              <Reveal>
                <p>Founded by the managing director held degrees of Finance and English language proficiency. With a conviction in business service, the ideas of turning the problems from the founder have been implemented into opportunity, assisting in audit and finance. </p>
              </Reveal>
              <Reveal>
                <p>The business further commits to building strong networking with local authorities for business registration at MOC.</p>
              </Reveal>

              <Reveal>
                <p className='text-[20px] md:text-[30px] text-gradient font-[700] leading-none mt-5 md:mt-10'>
                  If you&apos;re planning to establish a business in Cambodia,  having an expert partner by your side is essential
                </p>
              </Reveal>

              <Reveal>
                <p> Our team specializes in navigating the complexities of the regional regulatory landscape, ensuring your expansion into Cambodia and Asia is smooth and fully compliant.</p>
              </Reveal>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-10 overflow-hidden'>
                <div className='bg-[#1E1E1E] rounded-[10px]' data-aos='fade-right' data-aos-duration='1000'>
                  <h1 className='h-[100px]'></h1>
                  <p className='py-1 px-4 text-[16px] md:text-[18px] lg:text-[20px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>In-depth local expertise</p>
                  <p className='px-4 pt-5 pb-10'>Our dedicated specialists possess deep grassroots knowledge and a strong understanding of the unique intricacies and dynamics of the local market</p>
                </div>
                <div className='bg-[#1E1E1E] rounded-[10px]' data-aos='fade-right' data-aos-duration='1000'>
                  <h1 className='h-[100px]'></h1>
                  <p className='py-1 px-4 text-[16px] md:text-[18px] lg:text-[20px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>Personalized attention</p>
                  <p className='px-4 pt-5 pb-10'>We prioritize every client, providing tailored, hands-on support to address your specific needs.</p>
                </div>
                <div className='bg-[#1E1E1E] rounded-[10px]' data-aos='fade-right' data-aos-duration='1000'>
                  <h1 className='h-[100px]'></h1>
                  <p className='py-1 px-4 text-[16px] md:text-[18px] lg:text-[20px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>Agility and efficiency</p>
                  <p className='px-4 pt-5 pb-10'>Our team acts swiftly and effectively, bypassing bureaucratic hurdles to keep your business moving forward.</p>
                </div>
                <div className='bg-[#1E1E1E] rounded-[10px]' data-aos='fade-right' data-aos-duration='1000'>
                  <h1 className='h-[100px]'></h1>
                  <p className='py-1 px-4 text-[16px] md:text-[18px] lg:text-[20px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>Long-term partnership</p>
                  <p className='px-4 pt-5 pb-10'>We’re here for the journey. With owner-managers invested in our firm, your success is our shared priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='relative top-0 md:top-[-170px] z-1'>

        {/* our service */}
        <div className='max-w-7xl mx-auto px-4 py-10 text-[12px] md:text-[14px] overflow-hidden' id='our_services'>
          <h1 className='text-[20px] md:text-[30px] font-[900] text-[#A59465]' data-aos='fade-right' data-aos-duration='1000'>Our services</h1>
          <p className='text-[20px] md:text-[30px] font-[900] text-[#000000] py-4' data-aos='fade-left' data-aos-duration='1200'>Corporate services for every part of your journey.</p>
          <p data-aos='fade-right' data-aos-duration='1400'>Find intelligent answers to the most complex administrative issues you’ll come up against as your business expands into Cambodia and beyond. From establishing an investment vehicle through providing support for cross-border transactions to setting up a fully operational local or regional presence, we will help you make the most out of every incentive and benefit this unique region has to offer. Ask us for solutions, not just advice.</p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-10'>
            <div className='rounded-[10px] bg-[#EAE6DCCC] py-20' data-aos='fade-up' data-aos-duration='1000'>
              <p className='py-1 px-4 text-[16px] md:text-[18px] lg:text-[20px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>Entity Setup</p>
              <ul className="max-w-md space-y-1 text-[#000000] list-disc list-inside dark:text-gray-400 px-5 pt-4">
                <li>
                  Company Registration
                </li>
                <li>
                  Corporate Secretarial Services
                </li>
              </ul>
            </div>
            <div className='rounded-[10px] bg-[#EAE6DCCC] py-20' data-aos='fade-up' data-aos-duration='1200'>
              <p className='py-1 px-4 text-[16px] md:text-[18px] lg:text-[20px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>Compliance Duties</p>
              <ul className="max-w-md space-y-1 text-[#000000] list-disc list-inside dark:text-gray-400 px-5 pt-4">
                <li>
                  Accounting Compliance Service
                </li>
                <li>
                  Tax Compliance 
                </li>
              </ul>
            </div>
            <div className='rounded-[10px] bg-[#EAE6DCCC] py-20' data-aos='fade-up' data-aos-duration='1400'>
              <p className='py-1 px-4 text-[16px] md:text-[18px] lg:text-[20px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>Business Advisory</p>
              <ul className="max-w-md space-y-1 text-[#000000] list-disc list-inside dark:text-gray-400 px-5 pt-4">
                <li>
                  Business Advisory in Cambodia
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Uniqueness */}
        <div className='w-full py-10' id='uniqueness'>
          <h1 className='text-[20px] md:text-[30px] text-[#A59465] font-[700] max-w-7xl mx-auto px-4' data-aos='fade-right' data-aos-duration='1000'>Uniqueness</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-5 mt-4 px-4 overflow-hidden'>
            <div className='flex flex-col md:flex-row md:space-x-4 items-center border border-[#A59465] p-4' data-aos='fade-right' data-aos-duration='1200'>
              <h1 className='text-[50px] md:text-[100px] font-[700] text-gradient'>01</h1>
              <div className='text-[13px] md:text-[15px]'>
                <h1 className='text-[#A59465] font-[700]'>Consultant First</h1>
                <p>We thoroughly examine the different types of businesses, offer a detailed marketing analysis of the business industry, and advocate for tax exemptions in certain sectors.</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-4 items-center border border-[#A59465] p-4' data-aos='fade-left' data-aos-duration='1200'>
              <h1 className='text-[50px] md:text-[100px] font-[700] text-gradient'>02</h1>
              <div className='text-[13px] md:text-[15px]'>
                <h1 className='text-[#A59465] font-[700]'>Quick Service and Response</h1>
                <p>We promptly respond to clients to ensure swift completion of tasks. Additionally, we offer quick business registration services, completing the process within 2 to 5 working days</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-4 items-center border border-[#A59465] p-4' data-aos='fade-right' data-aos-duration='1500'>
              <h1 className='text-[50px] md:text-[100px] font-[700] text-gradient'>03</h1>
              <div className='text-[13px] md:text-[15px]'>
                <h1 className='text-[#A59465] font-[700]'>Transparency and Reliability</h1>
                <p>We maintain open and honest communication with our clients by taking responsibility for our clients’ needs to assure high-quality of work as well as back the clients during tax audit process.</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-4 items-center border border-[#A59465] p-4' data-aos='fade-left' data-aos-duration='1500'>
              <h1 className='text-[50px] md:text-[100px] font-[700] text-gradient'>04</h1>
              <div className='text-[13px] md:text-[15px]'>
                <h1 className='text-[#A59465] font-[700]'>Convenience</h1>
                <p>We support our clients comprehensively by offering one-stop solution services. In addition to business registration, we assist with tax, accounting, auditing, and legal compliance consulting for businesses in Cambodia.</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-4 items-center border border-[#A59465] p-4 col-span-1 md:col-span-2' data-aos='fade-right' data-aos-duration='1700'>
              <h1 className='text-[50px] md:text-[100px] font-[700] text-gradient'>05</h1>
              <div className='text-[13px] md:text-[15px]'>
                <h1 className='text-[#A59465] font-[700]'>Strong Local Network</h1>
                <p>Our firm has strong local connections and direct links to the relevant ministries, allowing us to streamline processes, negotiate better solutions, and ensure efficient outcomes.  </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notable Clients */}
        <div className='w-full py-10' id='clients'>
          <h1 className='text-[#A59465] text-[20px] md:text-[30px] font-[700] max-w-7xl mx-auto px-4 py-4' data-aos='fade-right' data-aos-duration='1000'>Notable Clients</h1>
          <div className='relative w-full bg-[#F2EBD9] hidden lg:block'>
            <div className='max-w-7xl mx-auto grid grid-cols-5 gap-6 px-4 py-20 overflow-hidden'>
                <img src={client1} alt="Image 1" className="w-40 h-40 object-cover" />
                <img src={client2} alt="Image 2" className="w-40 h-40 object-cover" />
                <img src={client3} alt="Image 3" className="w-40 h-40 object-cover" />
                <img src={client4} alt="Image 4" className="w-40 h-40 object-cover" />
                <img src={client5} alt="Image 5" className="w-40 h-40 object-cover" />
                <img src={client6} alt="Image 6" className="w-40 h-40 object-cover" />
                <img src={client7} alt="Image 7" className="w-40 h-40 object-cover" />
                <img src={client8} alt="Image 8" className="w-40 h-40 object-cover" />
                <img src={client9} alt="Image 9" className="w-40 h-40 object-cover" />
                <img src={client10} alt="Image 10" className="w-40 h-40 object-cover" />
            </div>
          </div>
          
          <div className="relative w-full max-w-7xl mx-auto px-4 overflow-hidden lg:hidden">
            <div className="flex w-full h-[160px] slider-track mt-10">
              <div className='client_item item1'>
                <img src={client1} alt="Image 1" className="w-40 h-40 object-cover rounded-lg" />
              </div>
              <div className='client_item item2'>
                <img src={client2} alt="Image 2" className="w-40 h-40 object-cover rounded-lg" />
              </div>
              <div className='client_item item3'>
                <img src={client3} alt="Image 3" className="w-40 h-40 object-cover rounded-lg" />
              </div>
              <div className='client_item item4'>
                <img src={client4} alt="Image 4" className="w-40 h-40 object-cover rounded-lg" />
              </div>
              <div className='client_item item5'>
                <img src={client5} alt="Image 5" className="w-40 h-40 object-cover rounded-lg" />
              </div>
              <div className='client_item item6'>
                <img src={clients6} alt="Image 6" className="w-40 h-40 object-cover rounded-lg" />
              </div>
              <div className='client_item item7'>
                <img src={client7} alt="Image 7" className="w-40 h-40 object-cover rounded-lg" />
              </div>
              <div className='client_item item8'>
                <img src={client8} alt="Image 8" className="w-40 h-40 object-cover rounded-lg" />
              </div>
              <div className='client_item item9'>
                <img src={client9} alt="Image 9" className="w-40 h-40 object-cover rounded-lg" />
              </div>
              <div className='client_item item10'>
                <img src={clients10} alt="Image 10" className="w-40 h-40 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* banner footer */}
        <div className="relative mt-10 md:mt-20">
          <img src={banner} alt="Image description" className="w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover object-center" />
          <div className="absolute inset-0 bg-blend-multiply bg-[#A59465CC]"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white px-4" data-aos="fade-up" data-aos-duration="1500">
            <Reveal>
              <p className="text-[25px] sm:text-[35px] md:text-[45px] lg:text-[70px] max-w-[68rem] leading-none mx-auto text-center font-[800] text-gradient">Your Most Trusted Tax Agent & Business Advisor</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* <Footer /> */}

    </>
  )
}

export default Home

