import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* cards */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p>Sun's out, Delious tasty meal is available</p>
              <p>Through 8/26</p>
              <button>Order Now</button>
            </div>
            <img src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
        </div>
    </div>
  )
}

export default HeadlineCards