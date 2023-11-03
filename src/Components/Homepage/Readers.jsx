import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';

const Readers = () => {
    
  return (
    <div>
    <div className="py-3">
    <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[26px] not-italic font-semibold leading-normal">
    Astrologers & Tarot Readers
        </h1>
  </div>
    <div className='flex flex-col gap-y-5'>
<div className="flex flex-row gap-x-3 " >
<div className='hover:border-[2px] hover:border-[#FFA300] shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px]  '>
    <div className='flex flex-row'>
        <div className='flex flex-col py-4'>
            <div className=' px-3 '>
                <img src='/img/Readersimg.png' className='w-40' alt=''/>
                </div>
                <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="17" viewBox="0 0 106 17" fill="none">
  <path d="M8.75111 0L10.6681 5.87336L16.8717 5.87336L11.8529 9.50329L13.7699 15.3766L8.75111 11.7467L3.73233 15.3766L5.64933 9.50329L0.630548 5.87336L6.8341 5.87336L8.75111 0Z" fill="#FFA300"/>
  <path d="M30.8507 0L32.7677 5.87336L38.9712 5.87336L33.9524 9.50329L35.8694 15.3766L30.8507 11.7467L25.8319 15.3766L27.7489 9.50329L22.7301 5.87336L28.9337 5.87336L30.8507 0Z" fill="#FFA300"/>
  <path d="M52.9502 0L54.8672 5.87336L61.0708 5.87336L56.052 9.50329L57.969 15.3766L52.9502 11.7467L47.9315 15.3766L49.8485 9.50329L44.8297 5.87336L51.0332 5.87336L52.9502 0Z" fill="#FFA300"/>
  <path d="M75.0498 0L76.9668 5.87336L83.1703 5.87336L78.1516 9.50329L80.0686 15.3766L75.0498 11.7467L70.031 15.3766L71.948 9.50329L66.9292 5.87336L73.1328 5.87336L75.0498 0Z" fill="#FFA300"/>
  <path d="M97.1493 0L99.0663 5.87336L105.27 5.87336L100.251 9.50329L102.168 15.3766L97.1493 11.7467L92.1306 15.3766L94.0476 9.50329L89.0288 5.87336L95.2323 5.87336L97.1493 0Z" fill="#FFA300"/>
</svg>
                <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">7899 <span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]"> Orders</span></h2>
            </div>
        </div>
        <div>
            <div className='relative top-2 left-52 '>
            <img src='/img/tick.png' className='w-7' alt=''/>
       
</div>
        <div className='flex flex-col justify-start items-start px-4  gap-y-2 '>
                <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[20px] font-Lexend not-italic font-medium leading-[normal]'>Acharya Aditya</h2>
                <div className='flex flex-row  gap-x-3 pt-3' >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A"/>
</svg>
</div>
                <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>English , Hindi , Gujarati</h2>
                </div>
                <div className='flex flex-col justify-start items-start '>
    <div className='flex flex-row gap-x-2 justify-center items-center  '>
<h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">Exp :</h2>
                <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">12 Years</h2>
                </div>
                <div className='flex flex-row gap-x-2 py-2'>
                <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">FREE</h2>
                <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">50/Min</h2>
                </div>
</div>
 <div className='flex flex-row justify-start items-center  gap-x-4 py-1.5'>
    <div className='px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
 <img src='/img/Calling.png' className='w-5' alt=''/>
                <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Call</button>
                </div>
                <div className='px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
 <img src='/img/Chat.png' className='w-5' alt=''/>
                <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Chat</button>
                </div>
            </div>
                </div>
                </div>

                </div>
    </div>
 <div className='hover:border-[2px] hover:border-[#FFA300] shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px]  '>
 <div className='flex flex-row'>
     <div className='flex flex-col py-4'>
         <div className=' px-3 '>
             <img src='/img/Readersimg.png' className='w-40' alt=''/>
             </div>
             <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
     <svg xmlns="http://www.w3.org/2000/svg" width="106" height="17" viewBox="0 0 106 17" fill="none">
<path d="M8.75111 0L10.6681 5.87336L16.8717 5.87336L11.8529 9.50329L13.7699 15.3766L8.75111 11.7467L3.73233 15.3766L5.64933 9.50329L0.630548 5.87336L6.8341 5.87336L8.75111 0Z" fill="#FFA300"/>
<path d="M30.8507 0L32.7677 5.87336L38.9712 5.87336L33.9524 9.50329L35.8694 15.3766L30.8507 11.7467L25.8319 15.3766L27.7489 9.50329L22.7301 5.87336L28.9337 5.87336L30.8507 0Z" fill="#FFA300"/>
<path d="M52.9502 0L54.8672 5.87336L61.0708 5.87336L56.052 9.50329L57.969 15.3766L52.9502 11.7467L47.9315 15.3766L49.8485 9.50329L44.8297 5.87336L51.0332 5.87336L52.9502 0Z" fill="#FFA300"/>
<path d="M75.0498 0L76.9668 5.87336L83.1703 5.87336L78.1516 9.50329L80.0686 15.3766L75.0498 11.7467L70.031 15.3766L71.948 9.50329L66.9292 5.87336L73.1328 5.87336L75.0498 0Z" fill="#FFA300"/>
<path d="M97.1493 0L99.0663 5.87336L105.27 5.87336L100.251 9.50329L102.168 15.3766L97.1493 11.7467L92.1306 15.3766L94.0476 9.50329L89.0288 5.87336L95.2323 5.87336L97.1493 0Z" fill="#FFA300"/>
</svg>
             <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">7899 <span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]"> Orders</span></h2>
         </div>
     </div>
     <div>
         <div className='relative top-2 left-52 '>
         <img src='/img/tick.png' className='w-7' alt=''/>
    
</div>
     <div className='flex flex-col justify-start items-start px-4  gap-y-2 '>
             <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[20px] font-Lexend not-italic font-medium leading-[normal]'>Acharya Aditya</h2>
             <div className='flex flex-row  gap-x-3 pt-3' >
                 <div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A"/>
</svg>
</div>
             <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>English , Hindi , Gujarati</h2>
             </div>
             <div className='flex flex-col justify-start items-start '>
 <div className='flex flex-row gap-x-2 justify-center items-center  '>
<h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">Exp :</h2>
             <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">12 Years</h2>
             </div>
             <div className='flex flex-row gap-x-2 py-2'>
             <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">FREE</h2>
             <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">50/Min</h2>
             </div>
</div>
<div className='flex flex-row justify-start items-center  gap-x-4 py-1.5'>
 <div className='px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
<img src='/img/Calling.png' className='w-5' alt=''/>
             <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Call</button>
             </div>
             <div className='px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
<img src='/img/Chat.png' className='w-5' alt=''/>
             <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Chat</button>
             </div>
         </div>
             </div>
             </div>

             </div>
 </div>
 <div className='hover:border-[2px] hover:border-[#FFA300] shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px]  '>
 <div className='flex flex-row'>
     <div className='flex flex-col py-4'>
         <div className=' px-3 '>
             <img src='/img/Readersimg.png' className='w-40' alt=''/>
             </div>
             <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
     <svg xmlns="http://www.w3.org/2000/svg" width="106" height="17" viewBox="0 0 106 17" fill="none">
<path d="M8.75111 0L10.6681 5.87336L16.8717 5.87336L11.8529 9.50329L13.7699 15.3766L8.75111 11.7467L3.73233 15.3766L5.64933 9.50329L0.630548 5.87336L6.8341 5.87336L8.75111 0Z" fill="#FFA300"/>
<path d="M30.8507 0L32.7677 5.87336L38.9712 5.87336L33.9524 9.50329L35.8694 15.3766L30.8507 11.7467L25.8319 15.3766L27.7489 9.50329L22.7301 5.87336L28.9337 5.87336L30.8507 0Z" fill="#FFA300"/>
<path d="M52.9502 0L54.8672 5.87336L61.0708 5.87336L56.052 9.50329L57.969 15.3766L52.9502 11.7467L47.9315 15.3766L49.8485 9.50329L44.8297 5.87336L51.0332 5.87336L52.9502 0Z" fill="#FFA300"/>
<path d="M75.0498 0L76.9668 5.87336L83.1703 5.87336L78.1516 9.50329L80.0686 15.3766L75.0498 11.7467L70.031 15.3766L71.948 9.50329L66.9292 5.87336L73.1328 5.87336L75.0498 0Z" fill="#FFA300"/>
<path d="M97.1493 0L99.0663 5.87336L105.27 5.87336L100.251 9.50329L102.168 15.3766L97.1493 11.7467L92.1306 15.3766L94.0476 9.50329L89.0288 5.87336L95.2323 5.87336L97.1493 0Z" fill="#FFA300"/>
</svg>
             <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">7899 <span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]"> Orders</span></h2>
         </div>
     </div>
     <div>
         <div className='relative top-2 left-52 '>
         <img src='/img/tick.png' className='w-7' alt=''/>
    
</div>
     <div className='flex flex-col justify-start items-start px-4  gap-y-2 '>
             <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[20px] font-Lexend not-italic font-medium leading-[normal]'>Acharya Aditya</h2>
             <div className='flex flex-row  gap-x-3 pt-3' >
                 <div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A"/>
</svg>
</div>
             <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>English , Hindi , Gujarati</h2>
             </div>
             <div className='flex flex-col justify-start items-start '>
 <div className='flex flex-row gap-x-2 justify-center items-center  '>
<h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">Exp :</h2>
             <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">12 Years</h2>
             </div>
             <div className='flex flex-row gap-x-2 py-2'>
             <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">FREE</h2>
             <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">50/Min</h2>
             </div>
</div>
<div className='flex flex-row justify-start items-center  gap-x-4 py-1.5'>
 <div className='px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
<img src='/img/Calling.png' className='w-5' alt=''/>
             <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Call</button>
             </div>
             <div className='px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
<img src='/img/Chat.png' className='w-5' alt=''/>
             <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Chat</button>
             </div>
         </div>
             </div>
             </div>

             </div>
 </div>
</div>



<div className="flex flex-row gap-x-3 " >
<div className='hover:border-[2px] hover:border-[#FFA300] shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px]  '>
    <div className='flex flex-row'>
        <div className='flex flex-col py-4'>
            <div className=' px-3 '>
                <img src='/img/Readersimg.png' className='w-40' alt=''/>
                </div>
                <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="17" viewBox="0 0 106 17" fill="none">
  <path d="M8.75111 0L10.6681 5.87336L16.8717 5.87336L11.8529 9.50329L13.7699 15.3766L8.75111 11.7467L3.73233 15.3766L5.64933 9.50329L0.630548 5.87336L6.8341 5.87336L8.75111 0Z" fill="#FFA300"/>
  <path d="M30.8507 0L32.7677 5.87336L38.9712 5.87336L33.9524 9.50329L35.8694 15.3766L30.8507 11.7467L25.8319 15.3766L27.7489 9.50329L22.7301 5.87336L28.9337 5.87336L30.8507 0Z" fill="#FFA300"/>
  <path d="M52.9502 0L54.8672 5.87336L61.0708 5.87336L56.052 9.50329L57.969 15.3766L52.9502 11.7467L47.9315 15.3766L49.8485 9.50329L44.8297 5.87336L51.0332 5.87336L52.9502 0Z" fill="#FFA300"/>
  <path d="M75.0498 0L76.9668 5.87336L83.1703 5.87336L78.1516 9.50329L80.0686 15.3766L75.0498 11.7467L70.031 15.3766L71.948 9.50329L66.9292 5.87336L73.1328 5.87336L75.0498 0Z" fill="#FFA300"/>
  <path d="M97.1493 0L99.0663 5.87336L105.27 5.87336L100.251 9.50329L102.168 15.3766L97.1493 11.7467L92.1306 15.3766L94.0476 9.50329L89.0288 5.87336L95.2323 5.87336L97.1493 0Z" fill="#FFA300"/>
</svg>
                <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">7899 <span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]"> Orders</span></h2>
            </div>
        </div>
        <div>
            <div className='relative top-2 left-52 '>
            <img src='/img/tick.png' className='w-7' alt=''/>
       
</div>
        <div className='flex flex-col justify-start items-start px-4  gap-y-2 '>
                <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[20px] font-Lexend not-italic font-medium leading-[normal]'>Acharya Aditya</h2>
                <div className='flex flex-row  gap-x-3 pt-3' >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A"/>
</svg>
</div>
                <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>English , Hindi , Gujarati</h2>
                </div>
                <div className='flex flex-col justify-start items-start '>
    <div className='flex flex-row gap-x-2 justify-center items-center  '>
<h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">Exp :</h2>
                <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">12 Years</h2>
                </div>
                <div className='flex flex-row gap-x-2 py-2'>
                <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">FREE</h2>
                <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">50/Min</h2>
                </div>
</div>
 <div className='flex flex-row justify-start items-center  gap-x-4 py-1.5'>
    <div className='px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
 <img src='/img/Calling.png' className='w-5' alt=''/>
                <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Call</button>
                </div>
                <div className='px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
 <img src='/img/Chat.png' className='w-5' alt=''/>
                <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Chat</button>
                </div>
            </div>
                </div>
                </div>

                </div>
    </div>
 <div className='hover:border-[2px] hover:border-[#FFA300] shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px]  '>
 <div className='flex flex-row'>
     <div className='flex flex-col py-4'>
         <div className=' px-3 '>
             <img src='/img/Readersimg.png' className='w-40' alt=''/>
             </div>
             <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
     <svg xmlns="http://www.w3.org/2000/svg" width="106" height="17" viewBox="0 0 106 17" fill="none">
<path d="M8.75111 0L10.6681 5.87336L16.8717 5.87336L11.8529 9.50329L13.7699 15.3766L8.75111 11.7467L3.73233 15.3766L5.64933 9.50329L0.630548 5.87336L6.8341 5.87336L8.75111 0Z" fill="#FFA300"/>
<path d="M30.8507 0L32.7677 5.87336L38.9712 5.87336L33.9524 9.50329L35.8694 15.3766L30.8507 11.7467L25.8319 15.3766L27.7489 9.50329L22.7301 5.87336L28.9337 5.87336L30.8507 0Z" fill="#FFA300"/>
<path d="M52.9502 0L54.8672 5.87336L61.0708 5.87336L56.052 9.50329L57.969 15.3766L52.9502 11.7467L47.9315 15.3766L49.8485 9.50329L44.8297 5.87336L51.0332 5.87336L52.9502 0Z" fill="#FFA300"/>
<path d="M75.0498 0L76.9668 5.87336L83.1703 5.87336L78.1516 9.50329L80.0686 15.3766L75.0498 11.7467L70.031 15.3766L71.948 9.50329L66.9292 5.87336L73.1328 5.87336L75.0498 0Z" fill="#FFA300"/>
<path d="M97.1493 0L99.0663 5.87336L105.27 5.87336L100.251 9.50329L102.168 15.3766L97.1493 11.7467L92.1306 15.3766L94.0476 9.50329L89.0288 5.87336L95.2323 5.87336L97.1493 0Z" fill="#FFA300"/>
</svg>
             <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">7899 <span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]"> Orders</span></h2>
         </div>
     </div>
     <div>
         <div className='relative top-2 left-52 '>
         <img src='/img/tick.png' className='w-7' alt=''/>
    
</div>
     <div className='flex flex-col justify-start items-start px-4  gap-y-2 '>
             <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[20px] font-Lexend not-italic font-medium leading-[normal]'>Acharya Aditya</h2>
             <div className='flex flex-row  gap-x-3 pt-3' >
                 <div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A"/>
</svg>
</div>
             <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>English , Hindi , Gujarati</h2>
             </div>
             <div className='flex flex-col justify-start items-start '>
 <div className='flex flex-row gap-x-2 justify-center items-center  '>
<h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">Exp :</h2>
             <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">12 Years</h2>
             </div>
             <div className='flex flex-row gap-x-2 py-2'>
             <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">FREE</h2>
             <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">50/Min</h2>
             </div>
</div>
<div className='flex flex-row justify-start items-center  gap-x-4 py-1.5'>
 <div className='px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
<img src='/img/Calling.png' className='w-5' alt=''/>
             <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Call</button>
             </div>
             <div className='px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
<img src='/img/Chat.png' className='w-5' alt=''/>
             <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Chat</button>
             </div>
         </div>
             </div>
             </div>

             </div>
 </div>
 <div className='hover:border-[2px] hover:border-[#FFA300] shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] overflow-x-hidden  rounded-[6px]  '>
 <div className='flex flex-row'>
     <div className='flex flex-col py-4'>
         <div className=' px-3 '>
             <img src='/img/Readersimg.png' className='w-40' alt=''/>
             </div>
             <div className='flex flex-col justify-start items-center gap-x-2 px-4  py-2'>
     <svg xmlns="http://www.w3.org/2000/svg" width="106" height="17" viewBox="0 0 106 17" fill="none">
<path d="M8.75111 0L10.6681 5.87336L16.8717 5.87336L11.8529 9.50329L13.7699 15.3766L8.75111 11.7467L3.73233 15.3766L5.64933 9.50329L0.630548 5.87336L6.8341 5.87336L8.75111 0Z" fill="#FFA300"/>
<path d="M30.8507 0L32.7677 5.87336L38.9712 5.87336L33.9524 9.50329L35.8694 15.3766L30.8507 11.7467L25.8319 15.3766L27.7489 9.50329L22.7301 5.87336L28.9337 5.87336L30.8507 0Z" fill="#FFA300"/>
<path d="M52.9502 0L54.8672 5.87336L61.0708 5.87336L56.052 9.50329L57.969 15.3766L52.9502 11.7467L47.9315 15.3766L49.8485 9.50329L44.8297 5.87336L51.0332 5.87336L52.9502 0Z" fill="#FFA300"/>
<path d="M75.0498 0L76.9668 5.87336L83.1703 5.87336L78.1516 9.50329L80.0686 15.3766L75.0498 11.7467L70.031 15.3766L71.948 9.50329L66.9292 5.87336L73.1328 5.87336L75.0498 0Z" fill="#FFA300"/>
<path d="M97.1493 0L99.0663 5.87336L105.27 5.87336L100.251 9.50329L102.168 15.3766L97.1493 11.7467L92.1306 15.3766L94.0476 9.50329L89.0288 5.87336L95.2323 5.87336L97.1493 0Z" fill="#FFA300"/>
</svg>
             <h2 className="text-black text-[13px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.52px] py-2 ">7899 <span className="text-black text-[13px]  font-Lexend not-italic font-normal leading-[normal] tracking-[0.52px]"> Orders</span></h2>
         </div>
     </div>
     <div>
         <div className='relative top-2 left-52 '>
         <img src='/img/tick.png' className='w-7' alt=''/>
    
</div>
     <div className='flex flex-col justify-start items-start px-4  gap-y-2 '>
             <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[20px] font-Lexend not-italic font-medium leading-[normal]'>Acharya Aditya</h2>
             <div className='flex flex-row  gap-x-3 pt-3' >
                 <div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.4166 8.33335L19.0833 17.5H17.2874L16.2866 15H12.8783L11.8791 17.5H10.0841L13.7499 8.33335H15.4166ZM8.33326 1.66669V3.33335H13.3333V5.00002H11.6933C11.0504 6.93508 10.0245 8.72087 8.6766 10.2509C9.27768 10.7872 9.92966 11.2636 10.6233 11.6734L9.99743 13.2384C9.10203 12.7305 8.26459 12.1267 7.49993 11.4375C6.01125 12.7848 4.2483 13.7935 2.33243 14.3942L1.88576 12.7867C3.52729 12.2633 5.03995 11.3995 6.32493 10.2517C5.37384 9.17497 4.58165 7.96774 3.97243 6.66669H5.8391C6.30355 7.52407 6.86048 8.32802 7.49993 9.06419C8.54168 7.86344 9.36268 6.48777 9.92493 5.00085L1.6666 5.00002V3.33335H6.6666V1.66669H8.33326ZM14.5833 10.7375L13.5441 13.3334H15.6208L14.5833 10.7375Z" fill="#3A3A3A"/>
</svg>
</div>
             <h2 className='text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins  not-italic font-normal leading-[normal]'>English , Hindi , Gujarati</h2>
             </div>
             <div className='flex flex-col justify-start items-start '>
 <div className='flex flex-row gap-x-2 justify-center items-center  '>
<h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[16px] font-Lexend not-italic font-medium leading-[normal]">Exp :</h2>
             <h2 className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Poppins not-italic font-normal leading-[normal]">12 Years</h2>
             </div>
             <div className='flex flex-row gap-x-2 py-2'>
             <h2 className="text-[color:var(--red,#DB042A)] text-[18px] font-Lexend not-italic font-semibold leading-[normal]">FREE</h2>
             <h2 className="line-through text-[color:var(--grey-1,#A1A1A1)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">50/Min</h2>
             </div>
</div>
<div className='flex flex-row justify-start items-center  gap-x-4 py-1.5'>
 <div className='px-7 gap-x-2 py-2 bg-[#FFA300] rounded-[45px] flex flex-row justify-center items-center '>
<img src='/img/Calling.png' className='w-5' alt=''/>
             <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Call</button>
             </div>
             <div className='px-7 py-2 gap-x-2 bg-[#04B4DB] rounded-[45px] flex flex-row justify-center items-center'>
<img src='/img/Chat.png' className='w-5' alt=''/>
             <button className=' text-white  text-[16px] font-Lexend  not-italic font-medium leading-[normal]'>Chat</button>
             </div>
         </div>
             </div>
             </div>

             </div>
 </div>
</div>

</div>
</div>
)
}

export default Readers