import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-between h-[600px] px-32  bg-sky-100">
        <div className="">
          <p className="text-2xl pt-2 pl-1 ">smart products</p>
          <p className="text-6xl pt-2 font-bold  ">Summer Offer</p>
          <p className="text-6xl pt-2">2026 Collection</p>

          <button className="bg-blue-950 text-white p-[9px] rounded-full mt-4 hover:bg-blue-500 hover:scale-110 transition ease-in-out">
            Shop Now
          </button>
          <p className="text-lg mt-10">
            Discover premium products with modern designs and unbeatable
            quality.{" "}
          </p>
          <p className="text-lg">
            {" "}
            Shop the latest collection at amazing prices today.
          </p>
        </div>

        <img
          src="man.jpg"
          alt="man"
          className="w-110 m-10 rounded-full shadow-2xl"
        />
      </div>  

      <div className="flex  items-center  text-center   justify-around pt-15 px-5 ">
        <div>
          <img src="shipping.png" alt="shipping" className="w-10 mx-auto" />
          <p className="font-semibold mt-3">Free Shipping</p>
          <p className="text-gray-500 text-sm mt-1">Free Shipping On All Orders</p>
        </div>
        <div>
          <img src="24-hours-support.png" alt="support 24/7" className="w-10 mx-auto " />
          <p className="font-semibold mt-3">24/7 Support</p>
          <p className="text-gray-500 text-sm mt-1">Dedicated Support Anytime</p>
        </div>
        <div>
          <img src="refund.png" alt="refund" className="w-10 mx-auto" />
          <p className="font-semibold mt-3">Money Back Guarantee</p>
          <p className="text-gray-500 text-sm mt-1">30 Days Easy Return Policy </p>
        </div>
        <div>
          <img src="discount.png" alt="discount" className="w-10 mx-auto " />
          <p className="font-semibold mt-3">Special Discount</p>
          <p className="text-gray-500 text-sm mt-1">Save More On Every Purchase</p>
        </div>
      </div>

      <div className="flex items-center justify-center pt-15">
       
     <p className="border-3 w-30 px-5"></p>
     <p className="text-2xl font-black ">DAILY DEALS!</p>
     <p className="border-3 w-30"></p>

      </div>

      <div className="flex items-center justify-around px-100 py-5">
      
        <p className="font-semibold">New Arrival</p>
        <p className="font-bold">Best Seller</p>
        <p className="font-semibold">Sale Items</p>

      </div>
    </>
  );
};

export default Home;
