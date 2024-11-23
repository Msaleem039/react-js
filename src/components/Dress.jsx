import React from 'react'
import { dress } from '../data/dress/page1'
import { Link } from 'react-router-dom'

const Dress = () => {
  return (
<>
<section className='p-4'>
<div className='container px-4 py-20 mx-auto '>
  <div className='flex flex-wrap -m-4'>
    {
      dress.map((x)=>{
return(
  <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="overflow-hidden border border-gray-500 ">
<Link to={`/dress/${x.slug}`}>
<img src={x.image} className='rounded object-contain w-full cursor-pointer object-center lg:h-96 md:h-56 p-3 ' alt="" />
</Link>
    <div className="p-4 cursor-pointer ">
      <h3  className='text-gray-600 text-sm'>{x.title}</h3>
      <h3 className='text-gray-500'>{x.brand}</h3>
      <div className="flex justify-between">
        <h3 className='text-gray-800'>{x.price}</h3>
        <button className='bg-red-500 px-4 py-2'>Add to cart</button>
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

export default Dress
