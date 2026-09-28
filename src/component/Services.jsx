import React from "react";

const Services = () => {
  return (
    <>
      {/* Hero Section */}

      <div className="flex items-center justify-between h-[600px] px-32 bg-sky-100">
        <div>
          <p className="text-2xl pt-2 pl-1">Our Services</p>

          <p className="text-6xl pt-2 font-bold">Smart Solutions</p>

          <p className="text-6xl pt-2">For Every Customer</p>

          <button className="bg-blue-950 text-white p-[9px] rounded-full mt-4 hover:bg-blue-500 hover:scale-110 transition ease-in-out">
            Explore Now
          </button>

          <p className="text-lg mt-10">
            We provide reliable shopping services with premium quality
          </p>

          <p className="text-lg">
            products, secure payments and fast nationwide delivery.
          </p>

          <p className="text-lg">
            Your satisfaction is our priority in every purchase.
          </p>
        </div>

        <img
          src="man3.jpg"
          alt="service"
          className="w-110 rounded-full shadow-2xl"
        />
      </div>

      {/* Services */}

     {/* What We Provide */}

{/* What We Provide */}

<div className="py-15">

  <h1 className="text-3xl font-semibold text-center">
    What We Provide
  </h1>

  <div className="flex justify-around px-20 mt-12">

    <div className="shadow-xl rounded-3xl p-8 text-center w-60 hover:scale-105 transition">
      <img src="shopping-cart.png" alt="shopping" className="w-20 mx-auto" />
      <h2 className="font-bold mt-4">Online Shopping</h2>
      <p className="text-gray-500 mt-2 text-sm">
        Explore thousands of premium products with an easy shopping experience.
      </p>
    </div>

    <div className="shadow-xl rounded-3xl p-8 text-center w-60 hover:scale-105 transition">
      <img src="credit-card.png" alt="payment" className="w-20 mx-auto" />
      <h2 className="font-bold mt-4">Secure Payment</h2>
      <p className="text-gray-500 mt-2 text-sm">
        Make safe and secure online payments using trusted payment methods.
      </p>
    </div>

    <div className="shadow-xl rounded-3xl p-8 text-center w-60 hover:scale-105 transition">
      <img src="giftbox.png" alt="gift" className="w-20 mx-auto" />
      <h2 className="font-bold mt-4">Gift Packaging</h2>
      <p className="text-gray-500 mt-2 text-sm">
        Beautiful gift wrapping services for birthdays, festivals and special occasions.
      </p>
    </div>

    <div className="shadow-xl rounded-3xl p-8 text-center w-60 hover:scale-105 transition">
      <img src="support.png" alt="support" className="w-20 mx-auto" />
      <h2 className="font-bold mt-4">Customer Support</h2>
      <p className="text-gray-500 mt-2 text-sm">
        Our friendly support team is available to help you whenever you need us.
      </p>
    </div>

  </div>

</div>

      {/* Why Choose Us */}

      <div className="flex justify-around items-center px-20 py-10 bg-sky-100">

        <img
          src="shopping.png"
          alt="shopping"
          className="w-110 rounded-[50px]"
        />

        <div>

          <h1 className="text-4xl font-semibold">
            Why Choose Flone
          </h1>

          <p className="text-lg pt-5">
            We believe shopping should be simple, secure and enjoyable.
          </p>

          <p className="text-lg">
            Every product is carefully selected to ensure quality and value.
          </p>

          <p className="text-lg">
            Our experienced team works hard to provide the best service.
          </p>

          <p className="text-lg">
            Join thousands of happy customers who trust Flone every day.
          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="py-15">

        <h1 className="text-3xl font-semibold text-center">
          Our Achievement
        </h1>

        <div className="flex justify-around px-32 mt-12">

          <div className="shadow-2xl rounded-2xl p-8 text-center w-52">
            <h1 className="text-5xl font-bold text-blue-900">15K+</h1>
            <p className="mt-3">Happy Customers</p>
          </div>

          <div className="shadow-2xl rounded-2xl p-8 text-center w-52">
            <h1 className="text-5xl font-bold text-blue-900">500+</h1>
            <p className="mt-3">Premium Products</p>
          </div>

          <div className="shadow-2xl rounded-2xl p-8 text-center w-52">
            <h1 className="text-5xl font-bold text-blue-900">250+</h1>
            <p className="mt-3">Daily Orders</p>
          </div>

          <div className="shadow-2xl rounded-2xl p-8 text-center w-52">
            <h1 className="text-5xl font-bold text-blue-900">50+</h1>
            <p className="mt-3">Trusted Brands</p>
          </div>

        </div>

      </div>
    </>
  );
};

export default Services;