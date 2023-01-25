import React from "react";
import Image from "next/image";
import ButtonRead from "../BaseComponents/Buttons/ButtonRead";

function Shipping() {
  return (
    <section
      id="shipping"
      className="pt-70 sm:pb-196 sm:before:bg-shippingBeforeImg before:bg-no-repeat before:absolute sm:before:left-0 sm:before:bottom-0 sm:before:w-[450px] sm:before:h-[516px]  relative after:absolute after:w-[183px] after:h-[76px] lg:after:w-450 lg:after:h-112 after:bg-black-shippingAfter after:top-0 after:right-0"
    >
      <div className="container">
        <div className="max-w-shippingTop mt-6 sm:mt-0 text-center mx-auto mb-60 sm:mb-20">
          <h2 className="font-bold text-28 sm:text-aboutTitle  mb-4">
            Shipping <span className="text-orange-main">Method</span>
          </h2>
          <p className="font-normal text-base text-black-serModalText">
            Car transportation services can fall under several different
            categories depending on the shipping company employed to move the
            car. Vehicle transport services may use any number of transportation
            methods to get a vehicle from one point to another.
          </p>
        </div>
        <ul className="space-y-12">
          <li className="lg:flex lg:justify-between">
            <Image
              className="w-full md:w-[49%] mx-auto lg:mx-0"
              src={"/Images/shippingImgs/train.avif"}
              width={542}
              height={297}
              alt="train"
            />
            <div className="w-full md:w-[49%] mx-auto lg:mx-0 p-6">
              <h2 className="font-semibold text-2xl mb-4">Rail Transport</h2>
              <p className="font-normal text-base mb-5">
                Car transportation services can fall under several different
                categories depending on the shipping company employed to move
                the car. Vehicle transport services may use any number of
                transportation methods to get a vehicle from one point to
                another.
              </p>
              <ButtonRead />
            </div>
          </li>
          <li className="lg:flex lg:justify-between lg:flex-row-reverse">
            <div className="w-full mx-auto lg:mx-0 md:w-[49%] relative">
              <Image
                className="w-full"
                src={"/Images/shippingImgs/pupularBus.avif"}
                width={542}
                height={297}
                alt="train"
              />
              <a
                className="absolute hover:bg-mostButtonHover duration-200 w-151 py-4 bg-orange-main text-center top-5 font-semibold text-base text-white"
                href="#link"
              >
                Most popular
              </a>
            </div>
            <div className="w-full mx-auto lg:mx-0 md:w-[49%] p-6">
              <h2 className="font-semibold text-2xl mb-4">Truck Transport</h2>
              <p className="font-normal text-base mb-5">
                One of the most well-known vehicle shipping services that youll
                find is ordinary truck transport. Its a basic way to transport a
                car and takes a little more time. However, the vehicle gets to
                its destination safe and sound. It’s also the most convenient
                method of moving a car between locations. Another advantage of a
                truck is that the truck can get right up to the final point
                before the owner gets the car.
              </p>
              <ButtonRead />
            </div>
          </li>
          <li className=" lg:flex lg:justify-between">
            <Image
              className="w-full mx-auto lg:mx-0 md:w-[49%] "
              src={"/Images/shippingImgs/palane.avif"}
              width={542}
              height={297}
              alt="train"
            />
            <div className="w-full mx-auto lg:mx-0 md:w-[49%] p-6">
              <h2 className="font-semibold text-2xl mb-4">Air Transport</h2>
              <p className="font-normal text-base mb-5">
                Another category of vehicle transport service is air transport.
                This is the fastest way to get a car from origin to destination,
                regardless of where in the US it is. On the other hand, air
                transport is much more expensive and may cost quite a lot,
                depending on where the car needs to be delivered. The safest way
                to move a car is by air, and there are many airports and
                airstrips across the state, so its simple to discover one with a
                landing strip close to you.
              </p>
              <ButtonRead />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Shipping;
