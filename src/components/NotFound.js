import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 bg-[#1D1D1D] text-[#959393] h-[80vh]'>
      <p className='text-8xl'>4𝟘4</p>
      <p className='text-lg font-bold'>Page Not Found</p>
      <p>Oops! We couldn't not find the page you're looking for.</p>
      <img src="https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/CreativeGif.gif" alt="Please go back to Home Page"/>
      <Link to="/"><button className='bg-[var(--main-color)] p-2 rounded-sm text-white'>Go to HomePage</button></Link>

    </div>
  )
}

export default NotFound;