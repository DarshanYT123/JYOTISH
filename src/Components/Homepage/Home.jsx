import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ChatWithAstrologer from './ChatWithAstrologer';
import AstrologerServices from './AstrologerServices';
// Import Swiper styles
import 'swiper/css';
import Readers from './Readers';

const Home = () => {
    const Data = [
        {
          imgSrc: "/img/Homeimg1.png",
        },
        {
            imgSrc: "/img/Homeimg1.png",
          },
        ];
    
  return (
    <div className='px-16'>
<div className='flex flex-row   justify-center items-center '>
<div className="  scroll-smooth overflow-x-auto  pt-12  group  ">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ el: ".swiper-paginationauto", clickable: true }}
          >
            {Data.map((item, index) => (
              <div key={index} className="">
                <SwiperSlide>
                  <div className=" lg:w-[97%]">
                    <img src={item.imgSrc} className="  " alt="" />
                  </div>
                </SwiperSlide>
              </div>
            ))}
            <div className=" flex justify-center lg:pr-16 py-4 ">
              
              <div className="flex swiper-paginationauto  justify-center pt-4 py-1  text-[#FFA800] "></div>
            </div>
          </Swiper>
        </div>
    <div className='border-[1px] border-[#FFA300] rounded-[6px] w-[60rem] h-[16.5rem] '>
        <div className='flex flex-row py-4'>
            <div className=' px-3 '>
                <img src='/img/Rudraksh1.png' className='w-40' alt=''/>
                </div>
                <div className='flex flex-col justify-start items-start px-4  '>
                <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] font-Lexend text-center text-[22px] not-italic font-medium leading-[normal]'>1 Mukhi Rudraksha</h2>
                <div className='flex flex-row gap-x-2' >
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="19" viewBox="0 0 100 19" fill="none">
  <path d="M9.12769 0L11.177 6.52981H17.8086L12.4435 10.5655L14.4928 17.0953L9.12769 13.0596L3.76257 17.0953L5.81186 10.5655L0.446741 6.52981H7.07839L9.12769 0Z" fill="#FFA300"/>
  <path d="M29.5638 0L31.6131 6.52981H38.2448L32.8797 10.5655L34.929 17.0953L29.5638 13.0596L24.1987 17.0953L26.248 10.5655L20.8829 6.52981H27.5146L29.5638 0Z" fill="#FFA300"/>
  <path d="M50 0L52.0493 6.52981H58.6809L53.3158 10.5655L55.3651 17.0953L50 13.0596L44.6349 17.0953L46.6842 10.5655L41.3191 6.52981H47.9507L50 0Z" fill="#FFA300"/>
  <path d="M70.4362 0L72.4855 6.52981H79.1171L73.752 10.5655L75.8013 17.0953L70.4362 13.0596L65.071 17.0953L67.1203 10.5655L61.7552 6.52981H68.3869L70.4362 0Z" fill="#FFA300"/>
  <path d="M90.8723 0L92.9216 6.52981H99.5533L94.1881 10.5655L96.2374 17.0953L90.8723 13.0596L85.5072 17.0953L87.5565 10.5655L82.1914 6.52981H88.823L90.8723 0Z" fill="#FFA300"/>
</svg></div>
<h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Lexend not-italic font-normal leading-[normal]'>5 Rating</h2>
                </div>
                <h2 className='text-[color:var(--Sky-Blue,#04B4DB)] py-0.5 text-[10px] font-Lexend not-italic font-normal leading-[normal]'>Trusted by 4467 Customers</h2>
                <h2 className='text-[color:var(--grey-1,#A1A1A1)] py-1.5 text-[16px] text-start font-Lexend not-italic font-normal leading-[151.5%]'>Invite Peace and Power with One Mukhi Rudraksh!</h2>

                </div>
        </div>
        <div className='flex flex-row justify-start items-center gap-x-2 px-4 py-2'>
                <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] font-Lexend not-italic font-medium leading-[151.5%]">Price:</h2>
                <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] font-Lexend not-italic font-semibold leading-[151.5%]">₹ 8999</h2>
                <h2 className="line-through text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] font-Lexend not-italic font-normal leading-[151.5%]">₹ 9999</h2>
                <h2 className='text-[color:var(--red,#DB042A)] text-[16px] font-Lexend not-italic font-semibold leading-[normal]'>10 % Off</h2>
            </div>
            <div className='flex flex-row justify-start items-center px-4 gap-x-40 py-1.5'>
                <button className='px-5 py-2 bg-[#FFA300] text-[color:var(--Pure-White,#FFF)] text-center text-[20px] font-Lexend rounded-[8px] not-italic font-medium leading-[normal]'>Buy Now</button>
                <h2 className="text-[color:var(--Main-Color,#FFA300)] text-[16px] font-Lexend not-italic font-semibold leading-[normal] underline">View Product</h2>
            </div>
    </div>
    </div>
    <ChatWithAstrologer/>
    <Readers/>
    <AstrologerServices/>
    </div>
)
}

export default Home