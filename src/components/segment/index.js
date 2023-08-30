import React from "react";
import Star from "../../assets/kyc/star.svg";

export const Segments = () => {
  return (
    <>
      <div className="m-12 p-10 main-div bg-grey">
        <p className="font-bold text-2xl">Segments</p>
        <div className="flex mt-4">
          <span className="font-bold text-sm opacity-80">NSE:</span>
          <div className="flex justify-around flex-wrap w-[60%]">
            <div className="flex flex-wrap">
              <input onChange={() => {}} type="checkbox" />
              <span className="ms-2 font-bold opacity-80 me-2">CASH</span>
            </div>
            <div className="flex flex-wrap">
              <input onChange={() => {}} type="checkbox" />
              <span className="ms-2 font-bold opacity-80">F&O</span>
            </div>
            <div className="flex flex-wrap">
              <input onChange={() => {}} type="checkbox" />
              <span className="ms-2 font-bold opacity-80">CDS</span>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex">
          <span className="font-bold text-sm opacity-80">MCX:</span>
          <div className="flex justify-around flex-wrap w-[60%]">
            <div className="flex flex-wrap">
              <input
                onChange={() => {}}
                type="checkbox"
                name=""
                value=""
                className=""
              />
              <span className="ms-2 font-bold opacity-80">MCX</span>
            </div>
            <button className="bg-priceListBgBlue font-bold text-white rounded-lg text-sm px-3">
              View Brokerage
            </button>
          </div>
        </div>
        <hr className="mt-10 mb-4" />
        <div className="flex">
          <sup>
            <img src={Star} alt={"star"} className="w-[15px]" />
          </sup>
          <h1 className="font-bold text-blue text-2xl">Trading Flat at Rs.</h1>
        </div>
        <div className="text-xs mt-6 font-bold opacity-80">Monthly Charges</div>
        <hr className="my-4" />
        <div className="w-[40%]">
          <div className="flex justify-between">
            <p className="font-bold mb-4 text-sm opacity-80">Amount Payable</p>
            <p className="font-bold text-sm opacity-80">0.00</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold mb-4 text-sm opacity-80">GST + PG</p>
            <p className="font-bold text-sm opacity-80">0.00</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold  mb-4 text-sm opacity-80">Total</p>
            <p className="font-bold text-sm opacity-80">0.00</p>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-center">
            <div className="bg-secondary px-4 py-1 rounded-lg font-bold text-center">
              <button className="opacity-80">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
