import React,{useContext} from 'react';
import { AiOutlineSearch, AiFillBug } from "react-icons/ai";
import { HiUserGroup, HiMail } from "react-icons/hi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Context from './utils/Context';

import { Link } from 'react-router-dom';

const Header = () => {

  const{nav, setNav, search, setSearch, searchtext, setSearchText} = useContext(Context);

  return (
    <div className='bg-[#252525] text-white flex items-center justify-between border-[#3e3e3e] border-b-[0.5px] laptop:flex flex-row items-center justify-between'>
        <div className='laptop:hidden desktop:hidden'>
            <button className='bg-[var(--main-color)] px-3 py-2 ml-3' onClick={()=>setNav(!nav)}>{nav ? <RxCross1/> :<RxHamburgerMenu/>}</button>
        </div>

        <div>
            <Link to="/"><img src="https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/ibommalogo.png" alt="iBommaLogo" className='laptop:pl-4 desktop:pl-16'/></Link>
        </div>

        <div className= 'hidden laptop:flex flex-row items-center justify-between gap-6 pr-4 desktop:pr-16 gap-8'>
            <Link to="/about"><div className='flex items-center justify-center gap-1' ><HiUserGroup style={{ "color": 'var(--main-color)'}}/>About</div></Link>
            <Link to="/bugreport"><div className='flex items-center justify-center gap-1'><AiFillBug style={{ "color": 'var(--main-color)'}}/>Bug Report</div></Link>
            <Link to="/contact"><div className='flex items-center justify-center gap-1'><HiMail style={{ "color": 'var(--main-color)'}}/>Contact</div></Link>
            <div className='laptop:flex items-center'>
                <input type="search" placeholder='    Search...' className='caret-lime-600 laptop:p-[3px] laptop:rounded-l-full bg-[#333333] outline-none border-[#444444] w-52' onChange={(e) => setSearchText(e.target.value)}/>
                <Link to={`/search/${searchtext}`}><button className='bg-[var(--main-color)] laptop:px-3 py-[7px] laptop:rounded-r-full'>
                    <AiOutlineSearch/>
                </button></Link>
            </div>
        </div>

        <div className='laptop:hidden desktop:hidden'>
            <button className='bg-[var(--main-color)] px-3 py-2 mr-3' onClick={()=>setSearch(!search)}><AiOutlineSearch/></button>
        </div>
    </div>
  )
}

export default Header