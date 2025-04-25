import icon8 from '../assets/images/icons/icon-8.png';
import icon9 from '../assets/images/icons/icon-9.png';
import icon2 from '../assets/images/icons/icon-2.png';
import icon3 from '../assets/images/icons/icon-3.png';
import icon4 from '../assets/images/icons/icon-4.png';
import icon5 from '../assets/images/icons/icon-5.png';
import icon6 from '../assets/images/icons/icon-6.png';
import icon7 from '../assets/images/icons/icon-7.png';
import profile from '../assets/images/profile/profile-bg.png';
// import image1 from '../assets/images/profile/image-1.png';
// import image2 from '../assets/images/profile/image-5.png';
// import image3 from '../assets/images/profile/image-3.png';
import banner from '../assets/images/profile/banner_footer.jpg';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import '../swiper.css';
// import { Navigation } from 'swiper/modules';
import Aos from 'aos';
import { useEffect, useState } from 'react';
import Reveal from '../components/Reveal';
import ButtonScroll from '../components/ButtonScroll';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/images/home-bg.png';
import img2 from '../assets/images/home/banner_footer.png';
const bgImages = [img1, img2];


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

  const { t } = useTranslation();

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
      <section className="relative h-[40vh] sm:h-[50vh] md:h-screen overflow-hidden">
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
          <div>

          </div>
          <div className="flex flex-col items-center text-center justify-center text-[#fff] font-[500]">
            <Reveal>
              <p className="text-[20px] lg:text-[30px] uppercase">{t("welcome")}</p>
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
            <div className="flex justify-center w-[120px] font-[600] text-gradient">
              <a href='#message' onClick={(event) => scrollToCenter('#message', event)}>{t("message")}</a>
            </div>
            <div className="flex justify-center w-[120px] font-[600] text-gradient">
              <a href='#vision' onClick={(event) => scrollToCenter('#vision', event)}>{t("vision")}</a>
            </div>
            <div className="flex justify-center w-[120px] font-[600] text-gradient">
              <a href='#mission' onClick={(event) => scrollToCenter('#mission', event)}>{t("mission")}</a>
            </div>
            <div className="flex justify-center w-[120px] font-[600] text-gradient">
              <a href='#core_values' onClick={(event) => scrollToCenter('#core_values', event)}>{t("core_values")}</a>
            </div>
            <div className="flex justify-center w-[120px] font-[600] text-gradient">
              <a href='#license' onClick={(event) => scrollToCenter('#license', event)}>{t("license")}</a>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className='grid md:hidden grid-cols-2 items-center justify-center py-4 gap-y-4'>
          <a href='#message' className='flex flex-col items-center justify-center'>
            <img src={icon8} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[600] text-gradient">
              <p>{t("message")}</p>
            </div>
          </a>
          <a href='#vision' className='flex flex-col items-center justify-center'>
            <img src={icon2} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[600] text-gradient">
              <p>{t("vision")}</p>
            </div>
          </a>
          <a href='#mission' className='flex flex-col items-center justify-center'>
            <img src={icon3} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[600] text-gradient">
              <p>{t("mission")}</p>
            </div>
          </a>
          <a href='#core_values' className='flex flex-col items-center justify-center'>
            <img src={icon4} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[600] text-gradient">
              <p>{t("core_values")}</p>
            </div>
          </a>
          <a href='#license' className='flex flex-col items-center justify-center'>
            <img src={icon9} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[600] text-gradient">
              <p>{t("license")}</p>
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
                <h1 className='text-[20px] md:text-[30px] text-gradient font-[700]'>{t("message_from_ceo")}</h1>
              </Reveal>
              <Reveal>
                <p>{t("message_from_ceo_des1")}</p>
              </Reveal>
              <Reveal>
                <p>{t("message_from_ceo_des2")}</p>
              </Reveal>
              <Reveal>
                <p>{t("message_from_ceo_des3")}</p>
              </Reveal>
              <Reveal>
                <p>{t("message_from_ceo_des4")}</p>
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
              <h1 className='text-[#A59465] text-[20px] md:text-[30px] font-[700]'>{t("vision")}</h1>
              <p>{t("vision_des")}</p>
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
              <h1 className='text-[#A59465] text-[20px] md:text-[30px] font-[700]'>{t("mission")}</h1>
              <p>{t("mission_des")}</p>
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
              <h1 className='text-[#A59465] text-[20px] md:text-[30px] font-[700]' data-aos='fade-up' data-aos-duration='1000'>{t("core_values")}</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                <div className='border border-[#A59465] flex flex-col p-4' data-aos='fade-up' data-aos-duration='1200'>
                  <h1 className='font-[700] text-[#A59465]'>{t("core_values_title1")}</h1>
                  <p>{t("core_values_des1")}</p>
                </div>
                <div className='border border-[#A59465] flex flex-col p-4' data-aos='fade-up' data-aos-duration='1400'>
                  <h1 className='font-[700] text-[#A59465]'>{t("core_values_title2")}</h1>
                  <p>{t("core_values_des2")}</p>
                </div>
                <div className='border border-[#A59465] flex flex-col p-4' data-aos='fade-up' data-aos-duration='1200'>
                  <h1 className='font-[700] text-[#A59465]'>{t("core_values_title3")}</h1>
                  <p>{t("core_values_des3")}</p>
                </div>
                <div className='border border-[#A59465] flex flex-col p-4' data-aos='fade-up' data-aos-duration='1400'>
                  <h1 className='font-[700] text-[#A59465]'>{t("core_values_title4")}</h1>
                  <p>{t("core_values_des4")}</p>
                </div>
                <div className='border border-[#A59465] flex flex-col p-4 col-span-1 md:col-span-2' data-aos='fade-up' data-aos-duration='1200'>
                  <h1 className='font-[700] text-[#A59465]'>{t("core_values_title5")}</h1>
                  <p>{t("core_values_des5")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* registered */}
        {/* <div className='py-10' id='license'>
          <h1 className='text-[#A59465] text-[20px] md:text-[30px] font-[700] text-center px-10' data-aos='fade-up' data-aos-duration='1000'>{t("registered")}</h1>
    
          <div className='hidden lg:grid grid-cols-4 w-full px-4 max-w-7xl items-center mx-auto py-10 overflow-hidden'>
            <div className='col-span-2 text-center' data-aos='fade-right' data-aos-duration='1000'>
              <img src={image1} alt="" className='w-full h-auto object-cover object-center' />
              <div className='pt-1 text-[10px] lg:text-[12px] xl:text-[16px]'>
                <p>{t("registered1")}</p>
                <p>{t("registered_num1")}</p>
              </div>
            </div>
            <div className='text-center' data-aos='fade-left' data-aos-duration='1000'>
              <img src={image2} alt="" className='w-full h-auto object-cover object-center' />
              <div className='pt-1 text-[10px] lg:text-[12px] xl:text-[16px]'>
                <p>{t("registered2")}</p>
                <p>{t("registered_num2")}</p>
              </div>
            </div>
            <div className='text-center' data-aos='fade-left' data-aos-duration='1500'>
              <img src={image3} alt="" className='w-full h-auto object-cover object-center' />
              <div className='pt-1 text-[10px] lg:text-[12px] xl:text-[16px]'>
                <p>{t("registered3")}</p>
                <p>{t("registered_num3")}</p>
              </div>
            </div>
          </div>


          <div className='lg:hidden pt-10 relative px-2'>
            <Swiper modules={[Navigation]} loop={true} navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }} slidesPerView={1} className="ProfileSwiper ProfileSlide h-[300px] sm:h-[400px] md:h-[500px]">
              <SwiperSlide className='w-full h-full text-center text-[10px]'>
                <img src={image1} alt="" className='w-full h-full object-contain' />
                <p className='pt-1'>{t("registered1")}</p>
                <p>{t("registered_num1")}</p>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full text-center text-[10px]'>
                <img src={image2} alt="" className='w-full h-full object-contain' />
                <p className='pt-1'>{t("registered2")}</p>
                <p>{t("registered_num2")}</p>
              </SwiperSlide>
              <SwiperSlide className='w-full h-full text-center text-[10px]'>
                <img src={image3} alt="" className='w-full h-full object-contain' />
                <p className='pt-1'>{t("registered3")}</p>
                <p>{t("registered_num3")}</p>
              </SwiperSlide>

              <div className="swiper-button-prev">
                <IoIosArrowBack />
              </div>
              <div className="swiper-button-next">
                <IoIosArrowForward />
              </div>
            </Swiper>
          </div>
        </div> */}

        {/* banner footer */}
        <div className="relative mt-4">
          <img src={banner} alt="Image description" className="w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover object-center" />
          <div className="absolute inset-0 bg-blend-multiply bg-[#A59465CC]"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white px-4" data-aos="fade-up" data-aos-duration="1500">
            <Reveal>
              <p className="text-[25px] sm:text-[35px] md:text-[45px] lg:text-[70px] max-w-[60rem] leading-none mx-auto text-center font-[800] text-gradient">{t("banner_title")}</p>
            </Reveal>
          </div>
        </div>
      </section>

    </>
  )
}

export default OurProfile