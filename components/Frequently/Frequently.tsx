import React, { useState } from "react";

function Frequently() {
  const [rotateEl, setRotateEl] = useState(false);
  const [rotateEl2, setRotateEl2] = useState(false);
  const [rotateEl3, setRotateEl3] = useState(false);
  const [rotateEl4, setRotateEl4] = useState(false);
  const handleClick = () => {
    setRotateEl(!rotateEl);
    setRotateEl2(false);
    setRotateEl3(false);
    setRotateEl4(false);
  };
  const handleClick2 = () => {
    setRotateEl2(!rotateEl2);
    setRotateEl(false);
    setRotateEl3(false);
    setRotateEl4(false);
  };
  const handleClick3 = () => {
    setRotateEl3(!rotateEl3);
    setRotateEl2(false);
    setRotateEl(false);
    setRotateEl4(false);
  };
  const handleClick4 = () => {
    setRotateEl4(!rotateEl4);
    setRotateEl3(false);
    setRotateEl2(false);
    setRotateEl(false);
  };
  return (
    <section id="faq" className="pb-100 pt-20 sm:py-20">
      <div className="container">
        <div className="text-center mb-60 sm:mb-16">
          <h2 className="font-bold text-28 sm:text-aboutTitle mb-4">
            <span className="text-orange-main">Frequently</span> Asked Questions
          </h2>
          <p className="font-normal text-base">
            Need help? Here are the top questions asked by our Subscribers
          </p>
        </div>
        <ul className="max-w-738 mx-auto">
          <li className=" py-7 cursor-pointer border-b-2">
            <div
              onClick={handleClick}
              className={`flex mb-4 sm:mb-0 items-center justify-between`}
            >
              <h2 className="font-semibold text-lg">
                Is my vehicle insured during transport?
              </h2>
              <div className={`relative hidden sm:flex`}>
                <span
                  className={`inline-block absolute w-5 h-0.5 bg-black-servicesTextColor`}
                ></span>
                <span
                  className={`inline-block absolute  ${
                    rotateEl ? "" : "rotate-90"
                  }  w-5 h-0.5 duration-300 bg-black-servicesTextColor`}
                ></span>
              </div>
            </div>
            <div
              className={`duration-300 ${
                rotateEl
                  ? " sm:h-[65px] pt-4 sm:overflow-auto scrollbar-hide"
                  : " sm:h-0 sm:overflow-hidden"
              }`}
            >
              <p className="font-normal text-base text-black-serModalText">
                Yes, your vehicle will be covered by the carrier’s cargo
                insurance which will be from $100,000 up to $250,000.
              </p>
            </div>
          </li>
          <li className=" py-7 cursor-pointer border-b-2">
            <div
              onClick={handleClick2}
              className={`flex mb-4 sm:mb-0 items-center justify-between`}
            >
              <h2 className="font-semibold text-lg">
                Can I Store Luggage in My Car When It is Being Shipped?
              </h2>
              <div className={`relative hidden sm:flex `}>
                <span
                  className={`inline-block absolute w-5 h-0.5 bg-black-servicesTextColor`}
                ></span>
                <span
                  className={`inline-block absolute  ${
                    rotateEl2 ? "" : "rotate-90"
                  }  w-5 h-0.5 duration-300 bg-black-servicesTextColor`}
                ></span>
              </div>
            </div>
            <div
              className={`duration-300 ${
                rotateEl2
                  ? "sm:h-[90px] pt-4 sm:overflow-visible scrollbar-hide"
                  : "sm:h-0 sm:overflow-hidden"
              }`}
            >
              <p className="font-normal text-base text-black-serModalText">
                Yes, you can put your luggage inside your car up to 100lbs in a
                box or a single piece of luggage that will be in the trunk of
                the car during transport for free, for each other 100lbs will be
                subject to the extra charge by the carrier.
              </p>
            </div>
          </li>
          <li className=" py-7 cursor-pointer border-b-2">
            <div
              onClick={handleClick3}
              className={`flex mb-4 sm:mb-0 items-center justify-between`}
            >
              <h2 className="font-semibold text-lg">
                When is the vehicle going to be picked-up?
              </h2>
              <div className={`relative hidden sm:flex`}>
                <span
                  className={`inline-block absolute w-5 h-0.5 bg-black-servicesTextColor`}
                ></span>
                <span
                  className={`inline-block absolute  ${
                    rotateEl3 ? "" : "rotate-90"
                  }  w-5 h-0.5 duration-300 bg-black-servicesTextColor`}
                ></span>
              </div>
            </div>
            <div
              className={`duration-300 ${
                rotateEl3
                  ? " sm:h-[60px] pt-4 sm:overflow-visible scrollbar-hide"
                  : "sm:h-0 sm:overflow-hidden"
              }`}
            >
              <p className="font-normal text-base text-black-serModalText">
                After an order is placed, we search our car carrier network to
                find a trucker to transport your vehicle. We will assign the
                best one available within 24 hours and your car will be picked
                up.
              </p>
            </div>
          </li>
          <li className=" py-7 cursor-pointer border-b-2">
            <div
              onClick={handleClick4}
              className={`flex mb-4 sm:mb-0 items-center justify-between`}
            >
              <h2 className="font-semibold text-lg">
                How Do I Pay for My Auto Shipping?
              </h2>
              <div className={`relative hidden sm:flex`}>
                <span
                  className={`inline-block absolute w-5 h-0.5 bg-black-servicesTextColor`}
                ></span>
                <span
                  className={`inline-block absolute  ${
                    rotateEl4 ? "" : "rotate-90"
                  }  w-5 h-0.5 duration-300 bg-black-servicesTextColor`}
                ></span>
              </div>
            </div>
            <div
              className={`duration-300 ${
                rotateEl4
                  ? "sm:h-[60px] pt-4 sm:overflow-visible scrollbar-hide"
                  : "sm:h-0 sm:overflow-hidden"
              }`}
            >
              <p className="font-normal text-base text-black-serModalText">
                Optimum Auto Transport is ready to offer a variety of payment
                methods. You are able to pay for your shipment Online, Cash,
                PayPal, CashApp, Cashiers check, or Money Order.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Frequently;
