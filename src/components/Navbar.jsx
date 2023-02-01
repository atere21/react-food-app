import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
  return (
    <div className='max-w-[16040px] mx-auto flex justify-between navbar__nav
     items-center p-4' >
        <div className='flex items-center navbar__nav2'>
            <div>
                <AiOutlineMenu size={30} />
            </div>
            <h1>
                Best <span>Eats</span>
            </h1>
                <div>
                    <p>Delivery</p>
                    <p>Pickup</p>
                </div>
            
        </div>
    </div>
  )
}

export default Navbar