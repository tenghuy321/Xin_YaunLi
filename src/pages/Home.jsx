import icon1 from '../assets/images/icons/icon-1.png';
import icon9 from '../assets/images/icons/icon-9.png';
import icon10 from '../assets/images/icons/icon-10.png';
import icon11 from '../assets/images/icons/icon-11.png';

// import client1 from '../assets/images/profile/client-1.png';
// import client2 from '../assets/images/profile/client-2.png';
// import client3 from '../assets/images/profile/client-3.png';
// import client4 from '../assets/images/profile/client-4.png';
// import client5 from '../assets/images/profile/client-5.png';
// import client6 from '../assets/images/profile/client-6.png';
// import clients6 from '../assets/images/profile/clients-6.png';
// import client7 from '../assets/images/profile/client-7.png';
// import client8 from '../assets/images/profile/client-8.png';
// import client9 from '../assets/images/profile/client-9.png';
// import client10 from '../assets/images/profile/client-10.png';
// import clients10 from '../assets/images/profile/clients-10.png';

import banner from '../assets/images/home/banner_footer.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Reveal from '../components/Reveal';
import ButtonScroll from '../components/ButtonScroll';
import { useTranslation } from 'react-i18next';
import './home.css';
import { NavLink } from 'react-router-dom';
import img1 from '../assets/images/home-bg.png';
import img2 from '../assets/images/home/banner_footer.png';
const bgImages = [img1, img2];

const Home = () => {

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


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % bgImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <ButtonScroll />
      </div>
      <section className="relative h-[40vh] sm:h-[50vh] md:h-screen bg-cover bg-center overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full md:h-screen"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bgImages.map((img, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>


        <div className="absolute inset-0 mt-0 md:-mt-10 w-full h-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:px-5 xl:px-8">
          <div className='hidden lg:block'>

          </div>
          <div className="flex flex-col items-center text-center justify-center text-[#ffffff] ">
            <Reveal>
              <p className="text-[20px] lg:text-[30px]">{t("welcome")}</p>
            </Reveal>
            <Reveal>
              <p className="text-gradient text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[100px] leading-none font-[800]">{t("xin_yuan_li")}</p>
            </Reveal>
            <Reveal>
              <p className="text-[16px] lg:text-[27px] tracking-[4px] md:tracking-[0.32rem] uppercase">{t("business_service")}</p>
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
              <a href='#who' onClick={(event) => scrollToCenter('#who', event)}>{t('who')}</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#our_services' onClick={(event) => scrollToCenter('#our_services', event)}>{t("our_services")}</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#uniqueness' onClick={(event) => scrollToCenter('#uniqueness', event)}>{t("uniqueness")}</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#clients' onClick={(event) => scrollToCenter('#clients', event)}>{t("notable_clients")}</a>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className='grid md:hidden grid-cols-2 items-center justify-center py-4 gap-y-4'>
          <a href='#who' className='flex flex-col items-center justify-center'>
            <img src={icon1} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>{t('who')}</p>
            </div>
          </a>
          <a href='#our_services' className='flex flex-col items-center justify-center'>
            <img src={icon9} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>{t("our_services")}</p>
            </div>
          </a>
          <a href='#uniqueness' className='flex flex-col items-center justify-center'>
            <img src={icon10} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>{t("uniqueness")}</p>
            </div>
          </a>
          <a href='#clients' className='flex flex-col items-center justify-center'>
            <img src={icon11} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>{t("notable_clients")}</p>
            </div>
          </a>
        </div>

        <div id='who'>
          <hr style={{ height: '8px', border: 'none', background: 'linear-gradient(90deg, #BA7F14 0%, #FAF088 47.5%, #EBB81B 100%)' }} />
          <div className='flex flex-col space-y-10 gap-4 py-10 md:py-16 px-4 lg:px-32 2xl:px-40 overflow-hidden' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
            <div data-aos='fade-right' data-aos-duration='1000' className='text-[30px] text-gradient font-[700]'>
              {t("who")}
            </div>
            <div className='whitespace-pre-line space-y-4 text-[#ffffff] text-[12px] lg:text-[14px]'>
              <h1 data-aos='fade-right' data-aos-duration='1000' className='text-[20px] md:text-[25px] font-[700] text-gradient'>{t("company_introduction")}</h1>

              <p data-aos='fade-left' data-aos-duration='1000'>{t("company_introduction_des1")}</p>

              <p data-aos='fade-right' data-aos-duration='1000'>{t("company_introduction_des2")}</p>


              <p data-aos='fade-right' data-aos-duration='1000' className='mt-5 md:mt-10'>{t('company_introduction_des3')}</p>
              <p data-aos='fade-left' data-aos-duration='1000' className='mt-2'>{t('company_introduction_des4')}</p>


            </div>
          </div>
        </div>
      </section>


      <section className='relative top-0 md:top-[-170px] z-1'>

        {/* our service */}
        <div className='max-w-7xl mx-auto px-4 py-10 text-[12px] md:text-[14px] overflow-hidden' id='our_services'>
          <h1 className='text-[20px] md:text-[30px] font-[900] text-[#A59465]' data-aos='fade-right' data-aos-duration='1000'>{t("our_services")}</h1>
          <p className='text-[20px] md:text-[30px] font-[900] text-[#000000] py-4' data-aos='fade-left' data-aos-duration='1200'>{t("our_services_title")}</p>
          <p data-aos='fade-right' data-aos-duration='1400'>{t("our_services_des")}</p>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10'>
            <div className='relative rounded-[10px] bg-[#EAE6DCCC] py-20' data-aos='fade-up' data-aos-duration='1000'>
              <p className='py-1 px-4 text-[16px] md:text-[18px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>{t("business_registration")}</p>
              <ul className="max-w-md space-y-1 text-[#000000]  px-5 pt-4">
                <p>{t("business_registration_des")}</p>
              </ul>

              <NavLink to='our-services/business-registration' className='py-2 text-center rounded-md border border-[#EBB81B] w-[90%] absolute bottom-4 left-1/2 -translate-x-1/2 hover:bg-[#EBB81B] hover:text-white tracking-wider font-[600] hover:tracking-widest transition duration-200'>{t("read_more")}</NavLink>
            </div>
            <div className='rounded-[10px] bg-[#EAE6DCCC] py-20' data-aos='fade-up' data-aos-duration='1200'>
              <p className='py-1 px-4 text-[16px] md:text-[18px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>{t("tax_declaration")}</p>
              <ul className="max-w-md space-y-1 text-[#000000]  px-5 pt-4">
                <p>{t("tax_declaration_des")}</p>
              </ul>

              <NavLink to='our-services/tax-declaration-compliance' className='py-2 text-center rounded-md border border-[#EBB81B] w-[90%] absolute bottom-4 left-1/2 -translate-x-1/2 hover:bg-[#EBB81B] hover:text-white tracking-wider font-[600] hover:tracking-widest transition duration-200'>{t("read_more")}</NavLink>
            </div>
            <div className='rounded-[10px] bg-[#EAE6DCCC] py-20' data-aos='fade-up' data-aos-duration='1400'>
              <p className='py-1 px-4 text-[16px] md:text-[18px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>{t("accounting")}</p>
              <ul className="max-w-md space-y-1 text-[#000000] px-5 pt-4">
                <p>{t("accounting_des")}</p>
              </ul>
              <NavLink to='our-services/accounting-bookkeeping' className='py-2 text-center rounded-md border border-[#EBB81B] w-[90%] absolute bottom-4 left-1/2 -translate-x-1/2 hover:bg-[#EBB81B] hover:text-white tracking-wider font-[600] hover:tracking-widest transition duration-200'>{t('read_more')}</NavLink>

            </div>
            <div className='rounded-[10px] bg-[#EAE6DCCC] py-20' data-aos='fade-up' data-aos-duration='1400'>
              <p className='py-1 px-4 text-[16px] md:text-[18px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>{t("audit_preparation_support")}</p>
              <ul className="max-w-md space-y-1 text-[#000000] px-5 pt-4">
                <li>
                  {t("audit_preparation_des")}
                </li>
              </ul>

              <NavLink to='/our-services/audit-preparation' className='py-2 text-center rounded-md border border-[#EBB81B] w-[90%] absolute bottom-4 left-1/2 -translate-x-1/2 hover:bg-[#EBB81B] hover:text-white tracking-wider font-[600] hover:tracking-widest transition duration-200'>{t('read_more')}</NavLink>
            </div>
            <div className='rounded-[10px] bg-[#EAE6DCCC] py-20' data-aos='fade-up' data-aos-duration='1400'>
              <p className='py-1 px-4 text-[16px] md:text-[18px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>{t("business_licensing_title")}</p>
              <ul className="max-w-md space-y-1 text-[#000000] px-5 pt-4">
                <li>
                  {t("business_licensing_des")}
                </li>
              </ul>

              <NavLink to='/our-services/business-licensing' className='py-2 text-center rounded-md border border-[#EBB81B] w-[90%] absolute bottom-4 left-1/2 -translate-x-1/2 hover:bg-[#EBB81B] hover:text-white tracking-wider font-[600] hover:tracking-widest transition duration-200'>{t('read_more')}</NavLink>
            </div>
            <div className='rounded-[10px] bg-[#EAE6DCCC] py-20' data-aos='fade-up' data-aos-duration='1400'>
              <p className='py-1 px-4 text-[16px] md:text-[18px] font-[700] text-[#1A1916]' style={{ background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }}>{t("regulatory_advisory")}</p>
              <ul className="max-w-md space-y-1 text-[#000000] px-5 pt-4">
                <li>
                  {t("regulatory_advisory_des")}
                </li>
              </ul>

              <NavLink to='/our-services/regulatory-advisory' className='py-2 text-center rounded-md border border-[#EBB81B] w-[90%] absolute bottom-4 left-1/2 -translate-x-1/2 hover:bg-[#EBB81B] hover:text-white tracking-wider font-[600] hover:tracking-widest transition duration-200'>{t('read_more')}</NavLink>
            </div>

          </div>
        </div>

        {/* Uniqueness */}
        <div className='w-full py-10' id='uniqueness'>
          <h1 className='text-[20px] md:text-[30px] text-[#A59465] font-[700] max-w-7xl mx-auto px-4' data-aos='fade-right' data-aos-duration='1000'>{t("uniqueness")}</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-5 mt-4 px-4 overflow-hidden'>
            <div className='flex flex-col md:flex-row md:space-x-4 items-center border border-[#A59465] p-4' data-aos='fade-right' data-aos-duration='1200'>
              <h1 className='text-[50px] md:text-[100px] font-[700] text-gradient'>01</h1>
              <div className='text-[13px] md:text-[15px]'>
                <h1 className='text-[#A59465] font-[700]'>{t("uniqueness_title_one")}</h1>
                <p>{t("uniqueness_des_one")}</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-4 items-center border border-[#A59465] p-4' data-aos='fade-left' data-aos-duration='1200'>
              <h1 className='text-[50px] md:text-[100px] font-[700] text-gradient'>02</h1>
              <div className='text-[13px] md:text-[15px]'>
                <h1 className='text-[#A59465] font-[700]'>{t("uniqueness_title_two")}</h1>
                <p>{t("uniqueness_des_two")}</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-4 items-center border border-[#A59465] p-4' data-aos='fade-right' data-aos-duration='1500'>
              <h1 className='text-[50px] md:text-[100px] font-[700] text-gradient'>03</h1>
              <div className='text-[13px] md:text-[15px]'>
                <h1 className='text-[#A59465] font-[700]'>{t("uniqueness_title_three")}</h1>
                <p>{t("uniqueness_des_three")}</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-4 items-center border border-[#A59465] p-4' data-aos='fade-left' data-aos-duration='1500'>
              <h1 className='text-[50px] md:text-[100px] font-[700] text-gradient'>04</h1>
              <div className='text-[13px] md:text-[15px]'>
                <h1 className='text-[#A59465] font-[700]'>{t("uniqueness_title_four")}</h1>
                <p>{t("uniqueness_des_four")}</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-4 items-center border border-[#A59465] p-4 col-span-1 md:col-span-2' data-aos='fade-right' data-aos-duration='1700'>
              <h1 className='text-[50px] md:text-[100px] font-[700] text-gradient'>05</h1>
              <div className='text-[13px] md:text-[15px]'>
                <h1 className='text-[#A59465] font-[700]'>{t("uniqueness_title_five")}</h1>
                <p>{t("uniqueness_des_five")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Notable Clients */}
        {/* <div className='w-full py-10' id='clients'>
          <h1 className='text-[#A59465] text-[20px] md:text-[30px] font-[700] max-w-7xl mx-auto px-4 py-4' data-aos='fade-right' data-aos-duration='1000'>{t("notable_clients")}</h1>
          <div className='relative w-full bg-[#F2EBD9] hidden lg:block'>
            <div className='max-w-7xl mx-auto grid grid-cols-5 gap-6 px-4 py-20 overflow-hidden'>
                <img data-aos='fade-up' data-aos-duration='1000' src={client1} alt="Image 1" className="w-40 h-40 object-cover" />
                <img data-aos='fade-up' data-aos-duration='1200' src={client2} alt="Image 2" className="w-40 h-40 object-cover" />
                <img data-aos='fade-up' data-aos-duration='1400' src={client3} alt="Image 3" className="w-40 h-40 object-cover" />
                <img data-aos='fade-up' data-aos-duration='1600' src={client4} alt="Image 4" className="w-40 h-40 object-cover" />
                <img data-aos='fade-up' data-aos-duration='1800' src={client5} alt="Image 5" className="w-40 h-40 object-cover" />
                <img data-aos='fade-up' data-aos-duration='1000' src={client6} alt="Image 6" className="w-40 h-40 object-cover" />
                <img data-aos='fade-up' data-aos-duration='1200' src={client7} alt="Image 7" className="w-40 h-40 object-cover" />
                <img data-aos='fade-up' data-aos-duration='1400' src={client8} alt="Image 8" className="w-40 h-40 object-cover" />
                <img data-aos='fade-up' data-aos-duration='1600' src={client9} alt="Image 9" className="w-40 h-40 object-cover" />
                <img data-aos='fade-up' data-aos-duration='1800' src={client10} alt="Image 10" className="w-40 h-40 object-cover" />
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
        </div> */}

        {/* banner footer */}
        <div className="relative mt-10 md:mt-20">
          <img src={banner} alt="Image description" className="w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover object-center" />
          <div className="absolute inset-0 bg-blend-multiply bg-[#A59465CC]"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white px-4" data-aos="fade-up" data-aos-duration="1500">
            <Reveal>
              <p className="text-[25px] sm:text-[35px] md:text-[45px] lg:text-[70px] max-w-[60rem] leading-none mx-auto text-center font-[800] text-gradient">{t("banner_title")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* <Footer /> */}

    </>
  )
}

export default Home

