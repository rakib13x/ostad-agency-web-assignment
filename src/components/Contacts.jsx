import React from "react";

const Contacts = () => {
  return (
    <div className="py-[120px]">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-green-500 font-semibold">Subscribe</p>
        <h1 className="text-3xl font-bold">
          Subscribe To Get The Latest
          <br />
          <span className="flex items-center justify-center">
            News About Us
          </span>
        </h1>
        <p className="text-sm text-gray-400 pb-6">
          Please Drop Your Email Below To Get Daily Update About What We Do
        </p>
        <div className="p-1 border border-black rounded-xl ">
          <input
            className="h-12 w-[300px] rounded items-center pl-4 focus:outline-none"
            placeholder="Enter Your Email Address"
          />
          <button className="h-12 w-[130px] bg-orange-500 rounded-xl text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
