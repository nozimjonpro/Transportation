import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section id="about-us" className="pt-100 pb-6 lg:py-100">
      <div className="container">
        <div className=" sm:flex sm:justify-between">
          <div className="sm:w-[48%] mb-50 sm:mb-0 mx-auto sm:mx-0 ">
            <h2 className="font-semibold text-28 sm:text-3xl  md:text-aboutTitle md:leading-wedoTitile mb-2 md:mb-4">
              About <span className="text-orange-main">Us</span>
            </h2>
            <p className="font-light text-[11px] md:text-base md:leading-aboutText text-black-dark mb-30 sm:mb-50">
              Optimum Auto Transport is a vehicle shipping company in the USA.
              We make sure that our professional drivers serve customers with
              very high quality. Our priorities are putting customers’
              satisfaction first place.
            </p>
            <Image
              className="w-full hidden sm:flex"
              src={"/Images/aboutUsImgs/bus.avif"}
              width={500}
              height={500}
              alt="Site bus img"
            />
            <Image
              className="w-full sm:hidden"
              src={"/Images/aboutUsImgs/bus-mobile.avif"}
              width={500}
              height={500}
              alt="Site bus img"
            />
          </div>
          <div className="sm:w-[48%] mx-auto sm:mx-0  sm:flex sm:flex-col-reverse">
            <div className="flex-col-reverse">
              <h2 className="font-semibold text-28 sm:text-3xl  md:text-aboutTitle md:leading-wedoTitile mb-2 md:mb-4">
                Our <span className="text-orange-main">Mission</span>
              </h2>
              <p className="font-light mb-30 sm:mb-0 text-[11px] md:text-base md:leading-aboutText text-black-dark">
                Our Mission is to help people to ship their cars from state to
                state SAFE, FAST, and AFFORDABLE way. We make sure your vehicle
                will be picked up on time and delivered on time.
              </p>
            </div>
            <Image
              className="hidden sm:flex w-full mb-0 sm:mb-50"
              src={"/Images/aboutUsImgs/misson.avif"}
              width={500}
              height={500}
              alt="Site bus img"
            />
            <Image
              className="sm:hidden w-full mb-0 sm:mb-50"
              src={"/Images/aboutUsImgs/misson-molie.avif"}
              width={500}
              height={500}
              alt="Site bus img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
