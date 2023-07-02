import React,{useContext} from 'react'
import BodyHeading from './BodyHeading'
import BodyMain from './BodyMain'

// import { AiOutlineSearch, AiFillBug } from "react-icons/ai";
// import { HiUserGroup, HiMail } from "react-icons/hi";
import Search from './Search';
import TvShows from './TvShows';
import TopRated from './TopRated';

// import Context from './utils/Context';
import Upcoming from './Upcoming';

const Body = () => {

  // const{nav, search} = useContext(Context);

  {document.title="iBOMMA"}

  return (
    <div className='bg-[#1D1D1D] text-white'>
      <div className='mx-3'>

          {/* <div className={search ? 'flex items-center justify-center pt-10 laptop:hidden desktop:hidden' :"hidden"}>
              <input type="text" placeholder='  Search...' className='p-[6px] bg-[#333333] outline-none border-[#444444] w-[100%] caret-lime-600'/>
              <button className='bg-[var(--main-color)] px-[14px] py-[10px]'>
                  <AiOutlineSearch/>
              </button>
          </div>

        <div className={nav ? 'pt-10 laptop:hidden desktop:hidden' : "hidden"}>
            <div className='flex items-center gap-1 bg-[#333333] py-2 px-3 border-[#3e3e3e] border-[0.5px]'><HiUserGroup style={{ "color": 'var(--main-color)'}}/>Our i-Team</div>
            <div className='flex items-center gap-1 bg-[#333333] py-2 px-3 border-[#3e3e3e] border-x-[0.5px]'><AiFillBug style={{ "color": 'var(--main-color)'}}/>Bug Report</div>
            <div className='flex items-center gap-1 bg-[#333333] py-2 px-3 border-[#3e3e3e] border-[0.5px]'><HiMail style={{ "color": 'var(--main-color)'}}/>Contact</div>
        </div> */}

        <BodyHeading/>
        <BodyMain/>
        {/* <Search/> */}
        <TvShows/>
        <TopRated/>
        <Upcoming/>
      </div>
    </div>
  )
}

export default Body