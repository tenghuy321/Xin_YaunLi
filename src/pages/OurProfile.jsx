import icon8 from '../assets/images/icons/icon-8.png';
import icon9 from '../assets/images/icons/icon-9.png';
import icon10 from '../assets/images/icons/icon-10.png';
import icon11 from '../assets/images/icons/icon-11.png';
import profile from '../assets/images/profile/profile-bg.png';
import image1 from '../assets/images/profile/image-1.png';
import image2 from '../assets/images/profile/image-2.png';
import image3 from '../assets/images/profile/image-3.png';
import clients1 from '../assets/images/profile/clients-1.png';
import clients2 from '../assets/images/profile/clients-2.jpg';
import clients3 from '../assets/images/profile/clients-3.png';
import clients4 from '../assets/images/profile/clients-4.png';
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
import Footer from "../components/Footer";


const OurProfile = () => {
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
          <div className='flex items-center justify-center space-x-14 py-4 md:py-2 bg-[#29292980] rounded-t-md' data-aos='fade-up' data-aos-duration='1000'>
            <a href='#message' onClick={(event) => scrollToCenter('#message', event)} className="flex justify-center w-[120px]">
              <img src={icon8} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
            <a href='#uniqueness' onClick={(event) => scrollToCenter('#uniqueness', event)} className="flex justify-center w-[120px]">
              <img src={icon10} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
            <a href='#license' onClick={(event) => scrollToCenter('#license', event)} className="flex justify-center w-[120px]">
              <img src={icon9} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
            <a href='#clients' onClick={(event) => scrollToCenter('#clients', event)} className="flex justify-center w-[120px]">
              <img src={icon11} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </a>
          </div>

          <div className='flex items-center justify-center space-x-14 py-4 md:py-2 rounded-t-md' data-aos='fade-up' data-aos-duration='1200'>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#message' onClick={(event) => scrollToCenter('#message', event)}>Message</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#uniqueness' onClick={(event) => scrollToCenter('#message', event)}>Uniqueness</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#license' onClick={(event) => scrollToCenter('#message', event)}>License</a>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <a href='#clients' onClick={(event) => scrollToCenter('#message', event)}>Notable Clients</a>
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
          <a href='#uniqueness' className='flex flex-col items-center justify-center'>
            <img src={icon10} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Uniqueness</p>
            </div>
          </a>
          <a href='#license' className='flex flex-col items-center justify-center'>
            <img src={icon9} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>License</p>
            </div>
          </a>
          <a href='#clients' className='flex flex-col items-center justify-center'>
            <img src={icon11} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Notable Clients</p>
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
        {/* Uniqueness */}
        <div className='w-full py-10' id='uniqueness'>
          <h1 className='text-[20px] md:text-[30px] text-gradient font-[700] text-center'>Uniqueness</h1>
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

        {/* registered */}
        <div className='bg-[#F1EBDB] py-10' id='license'>
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

        {/* Notable Clients */}
        <div className='w-full py-10' id='clients'>
          <h1 className='text-[#A59465] text-[20px] md:text-[30px] font-[700] text-center' data-aos='fade-right' data-aos-duration='1000'>Notable Clients</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto items-center justify-center py-6 px-4">
            <div className='flex items-center justify-center' data-aos='fade-up' data-aos-duration='1200'>
              <img src={clients1} alt="" className="w-20 md:w-40 object-cover object-center" />
            </div>
            <div className='flex items-center justify-center' data-aos='fade-up' data-aos-duration='1500'>
              <img src={clients2} alt="" className="w-20 md:w-40 object-cover object-center" />
            </div>
            <div className='flex items-center justify-center' data-aos='fade-up' data-aos-duration='1700'>
              <img src={clients3} alt="" className="w-20 md:w-40 object-cover object-center" />
            </div>
            <div className='flex items-center justify-center' data-aos='fade-up' data-aos-duration='2000'>
              <img src={clients4} alt="" className="w-20 md:w-40 object-cover object-center" />
            </div>
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

      <Footer/>
    </>
  )
}

export default OurProfile