import React from 'react';
import { AiFillThunderbolt } from "react-icons/ai";

const BodyHeading = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-10 mx-7 text-center'>
      <p className='mb-5 text-3xl font-normal laptop:text-4xl font-normal desktop:text-5xl font-normal'>Where Quality & Clarity Matters</p>
      <p className='text-sm font-light text-[#CCCCCC] laptop:text-base desktop:text-base'>Watch all movies details in an excellent quality at the smallest file size.</p>
      <p className='text-sm font-light text-[#CCCCCC] mb-7 laptop:text-base desktop:text-base'>Exclusively designed & developed for smartphones, tablets and PCs.</p>
      <p className='text-sm font-light text-[#CCCCCC] flex items-center laptop:text-base text-lg desktop:text-base text-lg animate-pulse'><AiFillThunderbolt style={{ "color": 'var(--main-color)', "fontSize":"20px"}}/> &nbsp;Top Trending Movies Today</p>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="15.000000pt" preserveAspectRatio="xMidYMid meet" width="185.000000pt" viewBox="0 0 234.000000 15.000000"><g transform="translate(0.000000,15.000000) scale(0.100000,-0.100000)" fill="#6ac045" stroke="none"><path d="M1175 134 c-16 -2 -151 -8 -300 -14 -253 -9 -326 -15 -550 -40 -49
-6 -133 -14 -187 -19 -53 -5 -106 -15 -118 -21 -20 -11 -21 -14 -7 -27 13 -14
34 -12 193 10 99 14 213 28 254 31 41 4 177 15 302 26 291 26 687 39 1198 41
243 1 389 5 365 10 -37 7 -1080 10 -1150 3z"></path></g></svg>
    </div>
  )
}

export default BodyHeading