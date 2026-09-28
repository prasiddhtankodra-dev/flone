import React from 'react'

const About = () => {
  return (
    <>
     <div className="flex items-center justify-between h-[600px] px-32  bg-sky-100">  
        <div className="">
          <p className="text-2xl pt-2 pl-1 ">About Us</p>
          <p className="text-6xl pt-2 font-bold  ">We Provide Best</p>
          <p className="text-6xl pt-2">Products For You </p>

          <button className="bg-blue-950 text-white p-[9px] rounded-full mt-4 hover:bg-blue-500 hover:scale-110 transition ease-in-out">
            Shop Now
          </button>
          <p className="text-lg mt-10">
          At Flone, we are committed to providing our customers with the highest</p>
          <p className='text-lg'>
            quality products and exceptional service.{" "}
          </p>
          <p className="text-lg">
            {" "}
          We Believe In Qulity , Trust &  Customer Satisfaction. 
          </p>
        </div>

        <img
          src="man2.jpg"
          alt="man"
          className="w-110 m-10 rounded-full shadow-2xl"
        />
      </div>  

      <div className='flex justify-around px-20 py-10'>

        <img src="office.jpg" alt="office" className='w-110 rounded-[60px] py-5' />

        <p className='text-3xl font-semibold py-5 pb-5 '>Our Strory 
          <p  className='text-lg pt-3'>Flone was founded with a simple idea – to bring smart,
            </p>
            <p  className='text-lg'> reliable and affordable products to everyone.
              </p>
              <p  className='text-lg'>

From the beginning, our focus has been on quality,</p>
<p  className='text-lg'>
 innovation and delivering the best experience to our </p
 ><p className='text-lg'>customers.</p>
        </p>
        
      </div>


       <div className="flex  items-center  text-center   justify-around  px-5  bg-sky-100 ">
        <div className=' p-5 rounded-full'>
          <img src="shipping.png" alt="shipping" className="w-10 mx-auto "  />
          <p className="font-semibold mt-3">Free Shipping</p>
          <p className="text-gray-500 text-sm mt-1">Free Shipping On All Orders</p>
        </div>
        <div className=' p-5 rounded-full'>
          <img src="24-hours-support.png" alt="support 24/7" className="w-10 mx-auto " />
          <p className="font-semibold mt-3">24/7 Support</p>
          <p className="text-gray-500 text-sm mt-1">Dedicated Support Anytime</p>
        </div>
        <div className='p-5 rounded-full'>
          <img src="refund.png" alt="refund" className="w-10 mx-auto" />
          <p className="font-semibold mt-3">Money Back Guarantee</p>
          <p className="text-gray-500 text-sm mt-1">30 Days Easy Return Policy </p>
        </div>
        <div className=' p-5 rounded-full'>
          <img src="discount.png" alt="discount" className="w-10 0 mx-auto " />
          <p className="font-semibold mt-3">Special Discount</p>
          <p className="text-gray-500 text-sm mt-1">Save More On Every Purchase</p>
        </div>
      </div>

      <div className='flex items-center justify-center pt-5'>
        <p className='text-3xl font-semibold'>Our Team </p>
      </div>
<div className="py-10 flex justify-around px-40">

  <div className="flex items-center gap-4 shadow-2xl rounded-full p-2 shadow-blue-300">
    <img src="boy.png" alt="man" className="w-20" />
    <div className="flex flex-col ">
      <h3 className="text-lg font-semibold">John Smith</h3>
      <p className="text-gray-500">Founder & CEO</p>
    </div>
  </div>

 <div className="flex items-center gap-4 shadow-2xl rounded-full p-2 shadow-blue-300">
    <img src="girl.png" alt="man" className="w-20" />
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Sarah Jonshon</h3>
      <p className="text-gray-500">Prouduct Manager</p>
    </div>  
  </div>

   <div className="flex items-center gap-4 shadow-2xl rounded-full p-2 shadow-blue-300">
    <img src="boy2.png" alt="man" className="w-20" />

    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Michel Brown</h3>
      <p className="text-gray-500">Marketing Head</p>
    </div>
  </div> <div className="flex items-center gap-4 shadow-2xl rounded-full p-2 shadow-blue-300">
    <img src="girl2.png" alt="man" className="w-20" />

    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">Emily Davis</h3>
      <p className="text-gray-500">Customer Support</p>
    </div>
  </div>
</div>
    </>
  )
}

export default About
