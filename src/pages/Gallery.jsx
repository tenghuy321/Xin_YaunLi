import gallery1 from '../assets/images/gallery/gallery-1.png';
import gallery2 from '../assets/images/gallery/gallery-2.png';
import gallery3 from '../assets/images/gallery/gallery-3.png';
import gallery4 from '../assets/images/gallery/gallery-4.png';
import gallery5 from '../assets/images/gallery/gallery-5.png';
import gallery6 from '../assets/images/gallery/gallery-6.png';
import banner from '../assets/images/home/banner_footer.png';
import ButtonScroll from '../components/ButtonScroll';

import video from '../assets/video/videos.mp4';
import './gallery.css';
const Gallery = () => {
  return (
    <>
      <div>
        <ButtonScroll />
      </div>
      <section className="bg-[#1E1E1E]">
        <div className="pt-[5rem] md:pt-[7rem] lg:pt-[12rem] min-h-screen max-w-7xl mx-auto px-4">
          <div className="flex items-end leading-none">
            <h1 className="text-[20px] md:text-[30px] text-gradient font-[700] w-full md:w-[25%] lg:w-[20%]">Our Gallery</h1>
            <hr className='w-full md:w-[75%] lg:w-[80%] ml-2' style={{ height: '4px', border: 'none', background: 'linear-gradient(90deg, #EBB81B 0%, #DFAD16 45.5%, #FAF088 100%)' }} />
          </div>

          <div className='py-10 md:py-20'>
            <div className="overflow-y-auto custom-scrollbar max-h-[530px] lg:max-h-[580px]" style={{ paddingRight: '10px' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img src={gallery1} alt="" className='w-full h-[250px] lg:h-[280px] object-cover object-center' />
                <img src={gallery2} alt="" className='w-full h-[250px] lg:h-[280px] object-cover object-center' />
                <img src={gallery3} alt="" className='w-full h-[250px] lg:h-[280px] object-cover object-center' />
                <img src={gallery4} alt="" className='w-full h-[250px] lg:h-[280px] object-cover object-center' />
                <img src={gallery5} alt="" className='w-full h-[250px] lg:h-[280px] object-cover object-center' />
                <img src={gallery6} alt="" className='w-full h-[250px] lg:h-[280px] object-cover object-center' />
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pb-20">
            <video className="w-full h-auto rounded-lg shadow-lg" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </section>

      <section className='relative z-1 py-4'>
        {/* banner footer */}
        <div className="relative mt-4">
          <img src={banner} alt="Image description" className="w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover object-center" />
          <div className="absolute inset-0 bg-blend-multiply bg-[#A59465]/80"></div>
          <div className="absolute inset-0 flex justify-center items-center px-4" data-aos="fade-up" data-aos-duration="1500">
            <p className="text-[25px] sm:text-[35px] md:text-[45px] lg:text-[70px] max-w-[68rem] leading-none mx-auto text-center font-[800] text-gradient">Your Most Trusted Tax Agent & Business Advisor</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery