import icon8 from '../assets/images/icons/icon-8.png';
import icon9 from '../assets/images/icons/icon-9.png';
import icon2 from '../assets/images/icons/icon-2.png';
import icon3 from '../assets/images/icons/icon-3.png';
import icon4 from '../assets/images/icons/icon-4.png';
import icon5 from '../assets/images/icons/icon-5.png';
import icon6 from '../assets/images/icons/icon-6.png';
import icon7 from '../assets/images/icons/icon-7.png';
import profile from '../assets/images/profile/profile-bg.png';
import image1 from '../assets/images/profile/image-1.png';
import image2 from '../assets/images/profile/image-2.png';
import image3 from '../assets/images/profile/image-3.png';
import banner from '../assets/images/profile/banner_footer.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import '../swiper.css';
import { Navigation } from 'swiper/modules';
import Aos from 'aos';
import { useEffect } from 'react';
import Reveal from '../components/Reveal';
import ButtonScroll from '../components/ButtonScroll';
// import { useTranslation } from 'react-i18next';


const OurProfile = () => {

  // const {t} = useTranslation();
  useEffect(() => {
    Aos.init({
      offset: 10,
    });
  });

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
      <section className="py-[4rem] md:pt-[14rem] h-full md:h-screen bg-cover bg-center bg-[url('assets/images/home/banner_footer.png')]">
        <div className="w-full max-w-7xl mx-auto flex justify-center md:px-5 xl:px-8">
          <div className="flex flex-col items-center text-center text-[#000000]">
            <Reveal>
              <p className="text-[20px] lg:text-[30px]">WELCOME TO</p>
            </Reveal>
            <Reveal>
              <h1 className="text-gradient text-[40px] sm:text-[50px] md:text-[70px] lg:text-[100px] leading-none font-[800]">XIN YUAN LI</h1>
            </Reveal>
            <Reveal>
              <p className="text-[16px]  lg:text-[27px] tracking-[5px] md:tracking-[8px]">Business  Service</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* message */}
      <section className="relative top-0 md:top-[-150px] z-10 max-w-7xl mx-auto items-center px-0 sm:px-4 2xl:px-0">
        {/* labtop */}
        <div className='hidden md:block overflow-hidden'>
          <div className='flex items-center justify-center space-x-14 py-4 md:py-2 bg-[#292929]/20 rounded-t-md' data-aos='fade-up' data-aos-duration='1000'>
            <a href='#message' onClick={(event) => scrollToCenter('#message', event)} className="flex justify-center w-[120px]">
              <img src={icon8} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
            <a href='#vision' onClick={(event) => scrollToCenter('#vision', event)} className="flex justify-center w-[120px]">
              <img src={icon2} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
            <a href='#mission' onClick={(event) => scrollToCenter('#mission', event)} className="flex justify-center w-[120px]">
              <img src={icon3} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
            <a href='#core_values' onClick={(event) => scrollToCenter('#core_values', event)} className="flex justify-center w-[120px]">
              <img src={icon4} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
            <a href='#license' onClick={(event) => scrollToCenter('#license', event)} className="flex justify-center w-[120px]">
              <img src={icon9} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
          </div>

          <div className='flex items-center justify-center space-x-14 py-4 md:py-2 rounded-t-md' data-aos='fade-up' data-aos-duration='1200'>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#message' onClick={(event) => scrollToCenter('#message', event)}>Message</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#vision' onClick={(event) => scrollToCenter('#vision', event)}>Vision</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#mission' onClick={(event) => scrollToCenter('#mission', event)}>Mission</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#core_values' onClick={(event) => scrollToCenter('#core_values', event)}>Core Values</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#license' onClick={(event) => scrollToCenter('#license', event)}>License</a>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className='grid md:hidden grid-cols-2 items-center justify-center py-4 gap-y-4'>
          <a href='#message' className='flex flex-col items-center justify-center'>
            <img src={icon8} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Message</p>
            </div>
          </a>
          <a href='#vision' className='flex flex-col items-center justify-center'>
            <img src={icon2} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Vision</p>
            </div>
          </a>
          <a href='#mission' className='flex flex-col items-center justify-center'>
            <img src={icon3} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Mission</p>
            </div>
          </a>
          <a href='#core_values' className='flex flex-col items-center justify-center'>
            <img src={icon4} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Core Values</p>
            </div>
          </a>
          <a href='#license' className='flex flex-col items-center justify-center'>
            <img src={icon9} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>License</p>
            </div>
          </a>
        </div>


        <div id='message'>
          <hr style={{ height: '8px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
          <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-10 md:py-20 px-4 md:px-20 overflow-hidden' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
            <div className='text-[30px] text-gradient font-[700] flex items-center justify-start md:justify-center' data-aos='fade-right' data-aos-duration='1500'>
              {/* pic */}
            </div>
            <div className='col-span-2 whitespace-pre-line space-y-2 text-[#ffffff] text-[12px] lg:text-[15px]'>
              <Reveal>
                <h1 className='text-[20px] md:text-[30px] text-gradient font-[700]'>MESSAGE FROM CEO</h1>
              </Reveal>
              <Reveal>
                <p>First and foremost, I would like to extend my heartfelt gratitude to all our stakeholders for your unwavering support.</p>
              </Reveal>
              <Reveal>
                <p>At Xin Yuan Li, we are dedicated to contributing to the growth of the business community by providing comprehensive services in business registration, tax, accounting, and advisory to our clients and business professionals.</p>
              </Reveal>
              <Reveal>
                <p>Leveraging our extensive experience and strong connections with local authorities, we are confident in our ability to deliver high-quality work and ensure full compliance with legal frameworks for doing business in Cambodia, thereby avoiding potential issues and unnecessary penalties.</p>
              </Reveal>
              <Reveal>
                <p>Looking ahead, we are committed to achieving our vision and creating a lasting impact. We aim to continue striving for excellence and embracing the opportunities that lie ahead.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className='relative top-0 md:top-[-170px]'>
        {/* banner */}
        <div data-aos='fade-up' data-aos-duration='1000'>
          <img src={profile} alt="" className='w-full h-auto object-cover object-center' />
        </div>

        {/* vision */}
        <div id='vision' className='bg-[#F1EBDB] w-full mt-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto items-center py-14 md:py-16 px-4 md:px-20' data-aos='fade-right' data-aos-duration='1000'>
            <div className='flex justify-center'>
              <img src={icon5} alt="" className='w-32 md:w-40' />
            </div>
            <div className='text-[12px] md:text-[14px] col-span-2'>
              <h1 className='text-[#A59465] text-[20px] md:text-[30px] font-[700]'>Vision</h1>
              <p>To be a trusted tax agent and business advisor.</p>
            </div>
          </div>
        </div>
        {/* mission */}
        <div id='mission' className='bg-[#ffffff] w-full overflow-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto items-center py-10 md:py-20 px-4 md:px-20' data-aos='fade-left' data-aos-duration='1000'>
            <div className='flex justify-center'>
              <img src={icon6} alt="" className='w-32 md:w-40' />
            </div>
            <div className='text-[12px] md:text-[14px] col-span-2'>
              <h1 className='text-[#A59465] text-[20px] md:text-[30px] font-[700]'>Mission</h1>
              <p>Our mission is to empower businesses by providing comprehensive services in business registration, tax and accounting services and strategic advisory. We simplify the complexities of business compliance, ensuring financial accuracy, and offer expert guidance to drive growth and innovation. Through our expertise, we strive for to be the trusted partner for businesses at every stage of their journey. </p>
            </div>
          </div>
        </div>
        {/* Core Values */}
        <div id='core_values' className='bg-[#F1EBDB] w-full'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto items-center py-10 px-4 md:px-20'>
            <div className='flex justify-center' data-aos='fade-right' data-aos-duration='1000'>
              <img src={icon7} alt="" className='w-32 md:w-40' />
            </div>
            <div className='text-[12px] md:text-[14px] col-span-2'>
              <h1 className='text-[#A59465] text-[20px] md:text-[30px] font-[700]' data-aos='fade-up' data-aos-duration='1000'>Core Values</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                <div className='border border-[#A59465] flex flex-col p-4' data-aos='fade-up' data-aos-duration='1200'>
                  <h1 className='font-[700] text-[#A59465]'>Integrity</h1>
                  <p>We uphold the highest ethical standards in all interactions, ensuring trust and fairness with clients and our business partners.</p>
                </div>
                <div className='border border-[#A59465] flex flex-col p-4' data-aos='fade-up' data-aos-duration='1400'>
                  <h1 className='font-[700] text-[#A59465]'>Expertise</h1>
                  <p>We deliver our services with a high level of professionalism and commitment to continuous development.</p>
                </div>
                <div className='border border-[#A59465] flex flex-col p-4' data-aos='fade-up' data-aos-duration='1200'>
                  <h1 className='font-[700] text-[#A59465]'>Client-centered</h1>
                  <p>We mainly focus on understanding and meeting our clients’ needs, providing effective solutions and exceptional customer service.</p>
                </div>
                <div className='border border-[#A59465] flex flex-col p-4' data-aos='fade-up' data-aos-duration='1400'>
                  <h1 className='font-[700] text-[#A59465]'>Reliability</h1>
                  <p>We build trust with our clients through consistent and dependable service to ensure result efficiency to our clients.</p>
                </div>
                <div className='border border-[#A59465] flex flex-col p-4 col-span-1 md:col-span-2' data-aos='fade-up' data-aos-duration='1200'>
                  <h1 className='font-[700] text-[#A59465]'>Teamwork</h1>
                  <p>We foster a collaborative and inclusive environment where we encourage diverse skills and perspectives to improve open communication, mutual support and collective problem-solving to achieve unique customer support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* registered */}
        <div className='py-10' id='license'>
          <h1 className='text-[#A59465] text-[20px] md:text-[30px] font-[700] text-center px-10' data-aos='fade-up' data-aos-duration='1000'>Our entity is officially registered under</h1>
          {/* laptop */}
          <div className='hidden lg:grid grid-cols-4 w-full px-4 max-w-7xl items-center mx-auto py-10 overflow-hidden'>
            <div className='col-span-2 text-center' data-aos='fade-right' data-aos-duration='1000'>
              <img src={image1} alt="" className='w-full h-auto object-cover object-center' />
              <div className='pt-1 text-[10px] lg:text-[12px] xl:text-[16px]'>
                <p>Ministry of Commerce with registration</p>
                <p>number 00044850</p>
              </div>
            </div>
            <div className='text-center' data-aos='fade-left' data-aos-duration='1000'>
              <img src={image2} alt="" className='w-full h-auto object-cover object-center' />
              <div className='pt-1 text-[10px] lg:text-[12px] xl:text-[16px]'>
                <p>Department of taxation with registration</p>
                <p>number K004-901906337</p>
              </div>
            </div>
            <div className='text-center' data-aos='fade-left' data-aos-duration='1500'>
              <img src={image3} alt="" className='w-full h-auto object-cover object-center' />
              <div className='pt-1 text-[10px] lg:text-[12px] xl:text-[16px]'>
                <p>Tax Agent License  with registration</p>
                <p>number TA202001003</p>
              </div>
            </div>
          </div>

          {/* mobile */}
          <div className='lg:hidden pt-10 relative px-2'>
            <Swiper modules={[Navigation]} loop={true} navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }} slidesPerView={1} className="ProfileSwiper ProfileSlide h-[300px] sm:h-[400px] md:h-[500px]">
              <SwiperSlide className='w-full h-full text-center text-[10px]'>
                <img src={image1} alt="" className='w-full h-full object-contain' />
                <p className='pt-1'>Ministry of Commerce with registration</p>
                <p>number 00044850</p>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full text-center text-[10px]'>
                <img src={image2} alt="" className='w-full h-full object-contain' />
                <p className='pt-1'>Department of taxation with registration</p>
                <p>number K004-901906337</p>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full text-center text-[10px]'>
                <img src={image3} alt="" className='w-full h-full object-contain' />
                <p className='pt-1'>Tax Agent License  with registration</p>
                <p>number TA202001003</p>
              </SwiperSlide>

              <div className="swiper-button-prev">
                <IoIosArrowBack />
              </div>
              <div className="swiper-button-next">
                <IoIosArrowForward />
              </div>
            </Swiper>
          </div>
        </div>

        {/* banner footer */}
        <div className="relative mt-4">
          <img src={banner} alt="Image description" className="w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover object-center" />
          <div className="absolute inset-0 bg-blend-multiply bg-[#A59465CC]"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white px-4" data-aos="fade-up" data-aos-duration="1500">
            <Reveal>
              <p className="text-[25px] sm:text-[35px] md:text-[45px] lg:text-[70px] max-w-[68rem] leading-none mx-auto text-center font-[800] text-gradient">Your Most Trusted Tax Agent & Business Advisor</p>
            </Reveal>
          </div>
        </div>
      </section>

    </>
  )
}

export default OurProfile