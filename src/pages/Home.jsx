import icon1 from '../assets/images/icons/icon-1.png';
import icon2 from '../assets/images/icons/icon-2.png';
import icon3 from '../assets/images/icons/icon-3.png';
import icon4 from '../assets/images/icons/icon-4.png';
import icon5 from '../assets/images/icons/icon-5.png';
import icon6 from '../assets/images/icons/icon-6.png';
import icon7 from '../assets/images/icons/icon-7.png';
import banner from '../assets/images/home/banner_footer.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Reveal from '../components/Reveal';
const Home = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section className="py-[4rem] md:pt-[14rem] h-full md:h-screen bg-cover bg-center bg-[url('assets/images/home-bg.png')]">
          <div className="w-full max-w-7xl flex justify-center md:justify-end md:px-5">
            <div className="flex flex-col items-center text-center justify-center text-[#ffffff]">
              <Reveal>
                <p className="text-[20px] lg:text-[30px]">WELCOME TO</p>              
              </Reveal>
              <Reveal>
                <p className="text-gradient text-[40px] sm:text-[50px] md:text-[70px] lg:text-[100px] leading-none font-[800]">XIN YUAN LI</p>
              </Reveal>
              <Reveal>
                <p className="text-[20px] lg:text-[27px] tracking-[4px] md:tracking-[0.32rem]">BUSINESS SERVICE</p>
              </Reveal>
            </div>
          </div>
      </section>

      <section className="max-w-7xl mx-auto items-center relative top-0 md:top-[-150px] z-10 overflow-hidden px-0 sm:px-4 2xl:px-0">
        {/* labtop */}
        <div className='hidden md:block'>
          <div className='flex items-center justify-center space-x-14 py-4 md:py-2 bg-[#29292980] rounded-t-md' data-aos='fade-up' data-aos-duration='1000'>
            <div className="flex justify-center w-[120px]">
              <img src={icon1} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </div>
            <div className="flex justify-center w-[120px]">
              <img src={icon2} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </div>
            <div className="flex justify-center w-[120px]">
              <img src={icon3} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </div>
            <div className="flex justify-center w-[120px]">
              <img src={icon4} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            </div>
          </div>

          <div className='flex items-center justify-center space-x-14 py-4 md:py-2 rounded-t-md' data-aos='fade-up' data-aos-duration='1000'>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <p>Who are we?</p>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <p>Vision</p>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <p>Mission</p>
            </div>
            <div className="flex justify-center w-[120px] font-[500] text-gradient">
              <p>Core Values</p>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className='grid md:hidden grid-cols-2 items-center justify-center py-4 gap-y-4'>
          <div className='flex flex-col items-center justify-center'>
            <img src={icon1} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Who are we?</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={icon2} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Vision</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={icon3} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Mission</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={icon4} alt="" className='w-12 h-12 object-contain bg-[#131211] p-2 rounded-md' />
            <div className="p-2 font-[500] text-gradient">
              <p>Core Values</p>
            </div>
          </div>
        </div>


        <div data-aos='fade-up' data-aos-duration='1000'>
          <hr style={{ height: '8px', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
          <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-10 md:pt-16 md:pb-5 px-4 md:px-20 overflow-hidden' style={{ background: 'rgba(30, 30, 30, 0.95)' }}>
            <div className='text-[30px] text-gradient font-[700] flex items-center justify-start md:justify-center' data-aos='fade-right' data-aos-duration='1500'>
              WHO ARE WE?
            </div>
            <div className='col-span-2 whitespace-pre-line space-y-2 text-[#ffffff] text-[12px] lg:text-[15px]' data-aos='fade-left' data-aos-duration='1500'>
              <p>Xin Yuan Li was started in 2018 and later officially registered in 2019 as medium tax enterprise. As of now, the company has increased the number of clients from 15 to 50 clients, while 80% are international clients and 20% are locals. </p>
              <p>The company provides support to business registration, tax and accounting services, advisory services.</p>
              <p> Founded by the managing director held degrees of Finance and English language proficiency. With a conviction in business service, the ideas of turning the problems from the founder have been implemented into opportunity, assisting in audit and finance. </p>
              <p>The business further commits to building strong networking with local authorities for business registration at MOC.</p>
            </div>
          </div>
        </div>
      </section>


      <section className='relative top-0 md:top-[-170px] z-1'>
        {/* vision */}
        <div className='bg-[#F1EBDB] w-full'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto items-center py-14 md:py-16 px-4 md:px-20' data-aos='fade-right' data-aos-duration='1000'>
            <div className='flex justify-center'>
              <img src={icon5} alt="" className='w-32 md:w-40' />
            </div>
            <div className='text-[12px] md:text-[14px] col-span-2'>
              <h1 className='text-[#A59465] text-[30px] font-[700]'>Vision</h1>
              <p>To be a trusted tax agent and business advisor.</p>
            </div>
          </div>
        </div>
        {/* mission */}
        <div className='bg-[#ffffff] w-full overflow-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto items-center py-10 md:py-20 px-4 md:px-20' data-aos='fade-left' data-aos-duration='1000'>
            <div className='flex justify-center'>
              <img src={icon6} alt="" className='w-32 md:w-40' />
            </div>
            <div className='text-[12px] md:text-[14px] col-span-2'>
              <h1 className='text-[#A59465] text-[30px] font-[700]'>Mission</h1>
              <p>Our mission is to empower businesses by providing comprehensive services in business registration, tax and accounting services and strategic advisory. We simplify the complexities of business compliance, ensuring financial accuracy, and offer expert guidance to drive growth and innovation. Through our expertise, we strive for to be the trusted partner for businesses at every stage of their journey. </p>
            </div>
          </div>
        </div>
        {/* Core Values */}
        <div className='bg-[#F1EBDB] w-full'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto items-center py-10 px-4 md:px-20'>
            <div className='flex justify-center' data-aos='fade-right' data-aos-duration='1000'>
              <img src={icon7} alt="" className='w-32 md:w-40' />
            </div>
            <div className='text-[12px] md:text-[14px] col-span-2'>
              <h1 className='text-[#A59465] text-[30px] font-[700]' data-aos='fade-up' data-aos-duration='1000'>Core Values</h1>
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

        {/* banner footer */}
        <div className="relative mt-4">
          <img src={banner} alt="Image description" className="w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover object-center" />
          <div className="absolute inset-0" style={{ background: 'rgba(165, 148, 101, 0.8)' }}></div>
          <div className="absolute inset-0 flex justify-center items-center text-white px-4" data-aos="fade-up" data-aos-duration="1500">
            <p className="text-[25px] sm:text-[35px] md:text-[45px] lg:text-[70px] max-w-[68rem] leading-none mx-auto text-center font-[800] text-gradient">Your Most Trusted Tax Agent & Business Advisor</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

