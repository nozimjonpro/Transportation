import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer(): any {
  return (
    <footer className="w-full bg-black-footer_bg">
      <div className="container">
        <div className="md:flex md:justify-between gap-2 sm:grid-cols-2 sm:justify-between grid grid-cols-1 justify-center text-center md:text-start md:max-h-[250px]">
          <div className="md:max-w-354 w-full flex-shrink-0 mt-12 md:my-50 justify-start">
            <Link href="/">
              <Image
                src={"/Images/Footer_Img/main.svg"}
                alt="logo"
                width={245}
                height={40}
                className="md:w-[245px] mx-auto mb-9 md:h-[43px] w-[202px] h-10 md:ml-0"
              />
            </Link>
            <p className="hidden md:block font-light text-base leading-[19px] lg:mt-3 lg:mb-8 text-[#ffffffde]">
              Transportation Services that you can trust
            </p>
            <h1 className="hidden md:block font-light text-[#ffffff61] mt-[55px]  text-xs my-8 text-start">
              Copyright © All rights reserved
            </h1>
          </div>
          <div className="md:max-w-155 max-h-197 w-full my-4 md:mt-[50px]">
            <h1 className="text-lg font-semibold leading-7 text-[#ffffffde]">
              Our Services
            </h1>
            <ul className="text-[#ffffffad] mt-4  md:mt-5">
              <li className="text-sm hover:underline underline-offset-2">
                <Link href={`/car`}>Car Shipments</Link>
              </li>
              <li className="mt-3 text-sm hover:underline underline-offset-2">
                <Link href={`/moto`}>Motorcycle shipments</Link>
              </li>
              <li className="mt-3 text-sm hover:underline underline-offset-2">
                <Link href={"/heavy"}>Heavy Equipment</Link>
              </li>
              <li className="mt-3 text-sm hover:underline underline-offset-2">
                <Link href="/#our-services">All Services</Link>
              </li>
            </ul>
          </div>
          <div className="md:max-w-166 max-h-131 w-full my-4 md:mt-[50px]">
            <h1 className="text-lg font-semibold leading-7 text-[#ffffffde]">
              Shipping Methods
            </h1>
            <ul className="text-[#ffffffad] mt-4  md:mt-5">
              <li className="text-sm hover:underline underline-offset-2">
                <a href="#">Rail Freight</a>
              </li>
              <li className="mt-3 text-sm hover:underline underline-offset-2">
                <a href="#">Truck Transport</a>
              </li>
              <li className="mt-3 text-sm hover:underline underline-offset-2">
                <a href="#">Air Transport</a>
              </li>
            </ul>
          </div>
          <div className="md:max-w-155 max-h-197 w-full  my-4 md:mt-[50px]">
            <h1 className="text-lg font-semibold leading-7 text-[#ffffffde]">
              About US
            </h1>
            <ul className="text-[#ffffffad] mt-4  md:mt-5">
              <li className="text-sm hover:underline underline-offset-2">
                <Link href="/#about-us">Our Company</Link>
              </li>
              <li className="mt-3 text-sm hover:underline underline-offset-2">
                <Link href="/#faq">F.A.Q.</Link>
              </li>
              <li className="mt-3 text-sm hover:underline underline-offset-2">
                <Link href="/#contact-us">Contact us</Link>
              </li>
            </ul>
          </div>
          <strong className="md:hidden font-light text-[#ffffff61] mt-16 mb-12 text-xs my-8 text-center">
            Copyright © All rights reserved
          </strong>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
