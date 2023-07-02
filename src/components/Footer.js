import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#171717] text-[#CCCCCC] text-xs font-thin px-3 py-6 flex items-center justify-between laptop:px-10 py-6 desktop:px-10 py-6'>
        <div>
        <Link to="/contact">Contact </Link>| <Link to="/dmca">DMCA</Link> | <Link to="/termsandconditions">T&C</Link>
        </div>
        <div>
        &copy; 2023 <Link to="/" className='hover:text-[#656565]'>iBOMMA</Link>
        </div>
    </div>
  )
}

export default Footer