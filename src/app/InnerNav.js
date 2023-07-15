import React from 'react'
import { AiOutlineCheckSquare, AiFillCloud, AiOutlineMail, AiOutlineCalendar } from 'react-icons/ai';
import { BiLeftArrow, BiRightArrow, BiSolidDashboard } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

import IconsNav from './IconsNav';
import Icons from './Icons';

const InnerNav = () => {
  return (
    <div className='ml-[15%] flex justify-around align-middle w-[70%]'>
      <div className='flex items-center align-middle mr-10'>
        <span className='lg:hidden ml-2 mr-12'><Icons icon={<BiLeftArrow size="18px" />} /></span>

        <span className=''><IconsNav title="Tasks" icon={<BiSolidDashboard size="18px" />} /></span>
        <span className='hidden lg:block'><IconsNav title="Board" icon={<AiOutlineCheckSquare size="18px" />} /></span>
        <span className='hidden lg:block'><IconsNav title="Gantt" icon={<AiFillCloud size="18px" />} /></span>
        <span className='hidden lg:block'><IconsNav title="Calendar" icon={<AiOutlineCalendar size="18px" />} /></span>
        <span className='hidden lg:block'><IconsNav title="Timeline" icon={<BsPeopleFill size="18px" />} /></span>
        <span className='hidden lg:block'><IconsNav title="Mail" icon={<AiOutlineMail size="18px" />} /></span>

        <span className='lg:hidden mx-[2rem]'><Icons icon={<BiRightArrow size="18px" />} /></span>
        <span className='lg:hidden -mx-6'><Icons icon={<AiOutlineSearch />} size="20px" color="gray" /></span>
      </div>
      <div>
        <input className='hidden lg:block rounded-2xl text-sm outline-none px-2 py-2 my-4 shadow-sm' type="text" name="" id="" placeholder=' 🔍 Search Tasks' />
      </div>
    </div>
  )
}

export default InnerNav