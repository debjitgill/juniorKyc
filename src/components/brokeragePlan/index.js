import React from "react";
import Zero from "../../assets/kyc/zero.png";
import Cross from "../../assets/kyc/crossIcon.svg";
import Offer from "../../assets/kyc/offer.svg";
const BrokeragePlan = () => {
  return (
    <>
      <div className="flex justify-center my-12">
        <div className="relative border border-grey w-[50%]">
          <div className="flex justify-center bg-priceListBgBlue">
            <div className="flex">
              <img width="40px" src={Zero} alt="" />
              <p className="p-2 font-serif text-center text-xl text-white">
                Possible with <b>RYZ</b> brokerage Plan
              </p>
            </div>
            <img
              className="absolute right-[1%] top-[1%]"
              width="20px"
              src={Cross}
              alt=""
            />
          </div>
          <div className="flex m-4 justify-between flex-wrap">
            <div className="my-4 w-[45%] ">
              <div className="bg-blueNeutral rounded-t-lg text-center">
                <p className="py-1 font-bold text-xl text-blue">Plan A</p>
              </div>
              <div className="border border-grey">
                <div className="text-center">
                  <p className="font-bold text-sm mt-2">
                    Zero Brokerage Account Opening
                  </p>
                  <p className="text-xl font-bold">
                    @RS 1000
                    <sup className="text-red">
                      &nbsp;
                      <del className="text-sm">2000</del>
                    </sup>
                  </p>
                </div>
                <div>
                  <div className="flex justify-end">
                    <img className="mr-12" width="50px" src={Offer} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <p className="p-1 font-bold w-3/4 bg-secondary rounded-full text-xs text-center text-white">
                      Independence Day
                    </p>
                  </div>
                </div>
                <div className="opacity-75">
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">Delivery</p>
                    <p className="text-sm">0</p>
                  </div>
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">Mutual Fund</p>
                    <p className="text-sm">0</p>
                  </div>
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">IPO</p>
                    <p className="text-sm">0</p>
                  </div>
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">Intraday</p>
                    <p className="text-sm">0</p>
                  </div>
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">Commodities</p>
                    <p className="text-sm">0</p>
                  </div>
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">Currencies</p>
                    <p className="text-sm">0</p>
                  </div>
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">F&O</p>
                    <p className="text-sm">0</p>
                  </div>
                </div>
              </div>
              <div className="p-1 text-center font-bold rounded-b-lg text-white bg-secondary">
                <button>SELECT</button>
              </div>
            </div>
            <div className="my-4 w-[45%]">
              <div className="bg-blueNeutral rounded-t-lg text-center">
                <p className="py-1 font-bold text-xl text-blue">Plan B</p>
              </div>
              <div className="border border-grey">
                <div className="text-center mb-[50px]">
                  <p className="font-bold text-sm mt-2">
                    Free Delivery Account Opening
                  </p>
                  <p className="text-xl font-bold">@RS 0</p>
                </div>
                <div className="opacity-75">
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">Brokerage</p>
                    <p className="text-red text-xs">13 per trade</p>
                  </div>
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">Delivery</p>
                    <p className="text-sm">0</p>
                  </div>
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className=" text-sm">IPO</p>
                    <p className="text-sm">0</p>
                  </div>
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">Intraday</p>
                    <p className="text-sm">13</p>
                  </div>
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">Commodities</p>
                    <p className="text-sm">13</p>
                  </div>
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">Currencies</p>
                    <p className="text-sm">13</p>
                  </div>
                  <div className="flex justify-between mx-4 my-2 font-bold">
                    <p className="text-sm">F&O</p>
                    <p className="text-sm">13</p>
                  </div>
                </div>
              </div>
              <div className="p-1 text-center font-bold rounded-b-lg text-white bg-secondary">
                <button>SELECT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrokeragePlan;
