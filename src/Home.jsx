// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,EffectFade, Thumbs } from 'swiper';
import vue from './img/1.jpg'
import ht  from './img/7.jpg'
import javas from './img/12.jpg'
import rc from './img/3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {

  return (
    <>
      <div className=" bg-gradient-to-r from-transparent to-blue-500   bg-opacity-100 h-96 bg-cover bg-center">
        <div className=" bg-cover bg-center bg-[url('./img/grafico1.jpg')] h-96" >
          <h1 className='text-center text-white font-extrabold text-5xl pt-12'>Developer Store</h1>
        </div>
      </div>
      <div className='w-full  mx-auto'>
        <h1 className='text-center font-extrabold text-5xl mt-12'>Nuevos Lanzamientos</h1>
        <div className=' w-full  mx-auto'>
          <Swiper
          
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade] }
            effect='fade'
            spaceBetween={0}
          slidesPerView={3}
         
          pagination={{clickable: true}}
          scrollbar={{draggable: true}}

            >
        
              <SwiperSlide ><img className='mx-auto ' src={`${javas}`}/></SwiperSlide>
              <SwiperSlide><img  className='mx-auto 'src={`${vue}`}/></SwiperSlide>
              <SwiperSlide><img  className='mx-auto 'src={`${ht}`}/></SwiperSlide>
              <SwiperSlide><img  className='mx-auto 'src={`${rc}`}/></SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Home