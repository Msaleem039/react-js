import React from 'react'
import { shoes } from '../data/shoes'
import { Link } from 'react-router-dom'

const Shoes = () => {
  return (
<>
<section className='p-4'>
<div className='container px-4 py-20 mx-auto '>
  <div className='flex flex-wrap -m-4'>
    {
      shoes.map((x)=>{
return(
  <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="overflow-hidden border border-gray-500 ">
   <Link to={`/shoes/${x.slug}`}>
   <img src={x.image} className='object-contain object-center w-full p-3 rounded cursor-pointer lg:h-96 md:h-56 ' alt="" />
   </Link>
    <div className="p-4 cursor-pointer ">
      <h3  className='text-sm text-gray-600'>{x.title}</h3>
      <h3 className='text-gray-500'>{x.brand}</h3>
      <div className="flex justify-between">
        <h3 className='text-gray-800'>{x.price}</h3>
        <button className='px-4 py-2 bg-red-500'>Add to cart</button>
      </div>
    </div>
  </div>
</div>
)
      })
    }
  </div>
</div>
</section>
</>
  )
}

export default Shoes
