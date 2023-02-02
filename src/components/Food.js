import React, {useState} from 'react'
import {data} from '../data/data.js'

const Food =() => {
  // console.log(data)
   const [foods, setFoods] =useState(data);
   
   // filter Type burger/pizza etc
   const filterType =(category) => {
    setFoods(
       data.filter((item) => {
        return item.category === category;
       })
    )
   }

     //filter by price

     const filterPrice = (price) => {
  
          setFoods(
            data.filter((item) => {
              return item.price === price;

            })
      )
     }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
       <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu</h1>
       {/* filter row */}
       <div className='flex flex-col lg:flex-row justify-between '>
        {/* filter type */}
        <div>
         <p className='font-bold text-gray-700'>Filter Type</p>
         <div className='flex justify-between flex-wrap'>
          <button onClick={() => setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
          <button onClick={() => filterType('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
          <button onClick={() => filterType('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
          <button onClick={() => filterType('salad')}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
          <button onClick={() => filterType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
          
         </div>
        </div>

        {/* filter price */}
    
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={()=> filterPrice ('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
            <button onClick={()=> filterPrice ('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
            <button onClick={()=> filterPrice ('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
            <button onClick={()=> filterPrice ('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
          </div>
        </div>
       </div>
       {/* Display food */}
       <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {foods.map((item, index)=> (
            <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
              <img className='w-full h-[200px] object-cover rounded-t-lg'  src={item.image} 
              alt={item.name} />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                  <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                </p>
              </div>
            </div>
          ))}
       </div>

    </div>
  ) 
}

export default Food