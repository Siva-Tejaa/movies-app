import React,{useContext} from 'react';
import { AiOutlineSearch, AiFillBug } from "react-icons/ai";
import { HiUserGroup, HiMail } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Context from './utils/Context';

const Navigation = () => {

  const{nav, setNav, search, setSearch, searchtext, setSearchText} = useContext(Context);

  return (
    <div className='bg-[#1D1D1D] text-white'>
        <div className='mx-3'>

            <div className={search ? 'flex items-center justify-center pt-10 laptop:hidden desktop:hidden' :"hidden"}>
                <input type="search" placeholder='  Search...' className='p-[6px] bg-[#333333] outline-none border-[#444444] w-[100%] caret-lime-600' onChange={(e) => setSearchText(e.target.value)}/>
                <Link to={`/search/${searchtext}`} onClick={() => setSearch(false)}><button className='bg-[var(--main-color)] px-[14px] py-[10px]'>
                    <AiOutlineSearch/> 
                </button></Link>
            </div>

            <div className={nav ? 'pt-10 laptop:hidden desktop:hidden' : "hidden"}>
                <Link to="/about" onClick={() => setNav(false)}><div className='flex items-center gap-1 bg-[#333333] py-2 px-3 border-[#3e3e3e] border-[0.5px]'><HiUserGroup style={{ "color": 'var(--main-color)'}}/>Our i-Team</div></Link>
                <Link to="/bugreport" onClick={() => setNav(false)}><div className='flex items-center gap-1 bg-[#333333] py-2 px-3 border-[#3e3e3e] border-x-[0.5px]'><AiFillBug style={{ "color": 'var(--main-color)'}}/>Bug Report</div></Link>
                <Link to="/contact" onClick={() => setNav(false)}><div className='flex items-center gap-1 bg-[#333333] py-2 px-3 border-[#3e3e3e] border-[0.5px]'><HiMail style={{ "color": 'var(--main-color)'}}/>Contact</div></Link>
            </div>
        </div>
    </div>
  )
}

export default Navigation