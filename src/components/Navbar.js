import React from 'react'
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs'

const Navbar = () => {
  return (
  <div className='max-w-[1064px] mx-auto flex justify-between items-center p-4'>
      {/* left-side */}
      <div className='flex items-center'>
        <div className='cursor-pointer'>
        <AiOutlineMenu size={30}/>
    </div>

    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
      Best <span className='font-bold'>Eats</span>
    </h1>
     <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
     <p className='bg-black text-white rounded-full p-2'>Delivery</p>
     <p className='p-2'>Pickup</p>
     </div>
    
  </div>
  {/* search input */}
   <div className='bg-gray-200 rounded-full flex items-center px-3
   w-[200px] sm:w-[300px] lg:w-[400px]'>
    <AiOutlineSearch size={25} />
    <input className="bg-transparent p-2 w-full focus:outline-none type='text' placeholder='search food' "/>
   </div>
   
   {/* cart button */}
   <button className='bg'>
     <BsFillCartFill/> Cart
   </button>
  </div>
  )
}

export default Navbar;