import React from 'react'
import { BsMessenger, BsGlobeAmericas } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineCompass } from 'react-icons/ai';
import { BiTrendingUp, BiBuildingHouse } from 'react-icons/bi';
import People from './People';
import Icons from './Icons';

const SideNav = () => {
  return (
    <div className='hidden lg:h-[124vh] lg:w-[7%] lg:flex lg:flex-col'>
        <div className='flex mx-auto flex-col mt-4'>
        <Icons icon={<AiOutlineCompass size="20px" color='blue'/>}/>
        <Icons icon={<AiOutlineStar size="20px" color='gray'/>}/>
        <Icons icon={<BsMessenger size="20px" color='gray'/>}/>
        <Icons icon={<BiTrendingUp size="20px" color='gray'/>}/>
        <Icons icon={<BsGlobeAmericas size="20px" color='gray'/>}/>
        <Icons icon={<BiBuildingHouse size="20px" color='gray'/>}/>
        <People/>
        </div>
    </div>
  )
}

export default SideNav