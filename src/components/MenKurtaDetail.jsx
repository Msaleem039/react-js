import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { men } from '../data/Men/men_kurta';
import ReactImageMagnify from 'react-image-magnify';
const MenKurtaDetail = () => {
  const {slug} = useParams();
  const menkurtadetail = men.find((x)=>x.slug === slug)
  const [img , setImg]=useState(menkurtadetail.image)
  return (
<div className="container mx-auto">
  <div className="w-full">
    <section className="border rounded-lg shadow-md">
      <div className="p-6 flex flex-wrap">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <div className="mb-4">
          <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:img
    },
    largeImage: {
        src:img,
        width: 1200,
        height: 1800
    }
}} />
          </div>
          <div className="flex space-x-4">
          {
            menkurtadetail.images.map((x)=>{
              return(
                <a href="#" key={x}>
              <img className="w-20 h-20 rounded-md" src={x} alt="Thumbnail 1" onClick={()=>setImg(x)} />
            </a>
              )
            })
          }
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-2xl font-semibold mb-4">
            <a href="#" className="hover:underline">Leopard Shirt Dress</a>
          </h4>
          <p className="text-gray-700 mb-4">
            Praesent ac condimentum felis. Nulla at nisl orci, at dignissim dolor, The best product descriptions address your ideal buyer directly and personally.
          </p>
          <div className="text-gray-600 mb-4">
            <span className="block"><strong>Categories:</strong> <a href="#" className="text-blue-600 hover:underline">Jackets</a>, <a href="#" className="text-blue-600 hover:underline">Men</a>, <a href="#" className="text-blue-600 hover:underline">Shirts</a>, <a href="#" className="text-blue-600 hover:underline">T-shirt</a>.</span>
            <span className="block"><strong>Tags:</strong> <a href="#" className="text-blue-600 hover:underline">mens</a>, <a href="#" className="text-blue-600 hover:underline">womens</a>.</span>
          </div>
          <div className="mb-4">
            <strong>Price :</strong> <span className="line-through text-gray-500">$544</span> <span className="text-red-600 font-bold">$300.00</span>
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-2 font-medium">Quantity</label>
            <input type="number" id="quantity" placeholder={1} className="border rounded-md w-full lg:w-32 px-3 py-2" />
          </div>
          <p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
              <i className="fa fa-shopping-cart" /> <span>Add to Cart</span>
            </button>
          </p>
        </div>
      </div>
    </section>
  </div>
</div>

  )
}

export default MenKurtaDetail
