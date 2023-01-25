/* eslint-disable @next/next/no-img-element */
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

function OurServices() {
  const allList: {
    id: number;
    name: string;
    text: string;
    leanMore: string;
    src: string;
    findName: string;
  }[] = [
      {
        id: 1,
        findName: "car",
        name: "Car Shipments",
        text: "One of the most widely-known segment of the freight industry is Auto Transport. It offers car shipping services to individuals and organizations who require a car to be transferred from one place to another.",
        leanMore: "Подробнее",
        src: "/Images/ServicesImg/car.avif",
      },
      {
        id: 2,
        findName: "moto",
        name: "Motorcycle shipments",
        text: "Motorcycle shipments are as popular as regular vehicles. People might need motorcycle shipments due to some reasons like moving to another state, buying or selling purposes, and the most popular one “Vintage motorcycle shows”.",
        leanMore: "Подробнее",
        src: "/Images/ServicesImg/moto.avif",
      },
      {
        id: 3,
        findName: "heavy",
        name: "Heavy Equipment",
        text: "Shipping Heavy equipment is not always an easy process to do. Heavy machinery plays an important role in your business.",
        leanMore: "Подробнее",
        src: "/Images/ServicesImg/truc.avif",
      },
      {
        id: 4,
        findName: "hi",
        name: "HI / AK Shipments",
        text: "Therefore, it is obvious that you should bring a car with you on your trip to Hawaii. Unavoidably, you may rent a car, use ride-sharing services, or take the dreaded public transportation.",
        leanMore: "Подробнее",
        src: "/Images/ServicesImg/beach.avif",
      },
      {
        id: 5,
        findName: "boat",
        name: "Boat Shipments",
        text: "You might have purchased a boat after making the trip to a far-off boat show, read about a great offer on a far-off yacht, or purchased a boat directly from the manufacturer.",
        leanMore: "Подробнее",
        src: "/Images/ServicesImg/boat.avif",
      },
      {
        id: 6,
        findName: "man",
        name: "Door to Door delivery",
        text: "Optimum Auto Shipping offers Door to Door delivery to all the services we offer to our valuable customers. Regular cars and even Heavy equipment shipping will be delivery to your front door.",
        leanMore: "Подробнее",
        src: "/Images/ServicesImg/man.avif",
      },
    ];
  return (
    <section
      id="our-services"
      className="pt-20 pb-100 md:pt-118 services md:pb-173"
    >
      <div className="container">
        <div className=" text-center mb-20 mx-auto">
          <h2 className="font-bold text-28 sm:text-4xl mb-2">Our Services</h2>
          <p className="font-normal text-sm text-black-servicesTextColor">
            Optimum Auto Shipping is specialized in shipping different type of
            ...
          </p>
        </div>
        <ul className="hidden sm:flex sm:items-center sm:flex-wrap sm:justify-between">
          {allList.map((item) => (
            <li
              key={item.id}
              className="w-330 bg-white h-450 lg:w-354 lg:h-458 mb-33 mx-auto md:mx-0 shadow-md list overflow-hidden cursor-pointer relative"
            >
              <img
                className="absolute services-img z-10"
                src={item.src}
                width={354}
                height={458}
                alt="img"
              />
              <div className="flex p-5 flex-col z-10 absolute bottom-0 space-y-5">
                <strong className="font-bold text-2xl text-white leading-7">
                  {item.name}
                </strong>
                <a
                  className="text-white pr-5 font-medium text-base cursor-pointer relative after:bg-learnMoreAfterImg after:absolute after:w-[13px]
                       after:h-[12px] after:top-0 after:bottom-0 after:my-auto after:ml-2  after:bg-no-repeat"
                  href="#link"
                >
                  Read more
                </a>
              </div>
              <div className="absolute z-20 rounded-b-xl item-content p-5 bg-white w-full right-0 left-0 mx-auto -bottom-full">
                <h2 className="font-bold text-2xl mb-2.5">{item.name}</h2>
                <p className="font-normal mb-5 text-sm leading-5 text-black-serModalText">
                  {item.text}
                </p>
                <Link
                  href={`/${item.findName}`}
                  className="text-orange-main pr-5 font-medium text-base cursor-pointer relative after:bg-learnMoreModalImg after:absolute after:w-[13px]
                       after:h-[12px] after:top-0 after:bottom-0 after:my-auto after:ml-2  after:bg-no-repeat"
                >
                  Read more
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex sm:hidden">
          <Swiper slidesPerView={"auto"} spaceBetween={0} className="mySwiper">
            {allList.map((item) => (
              <SwiperSlide key={item.id}>
                <li
                  key={item.id}
                  className="w-[321px] bg-white mb-33 shadow-md list cursor-pointer h-[448px] relative"
                >
                  <Image
                    className="absolute z-10"
                    src={item.src}
                    width={354}
                    height={458}
                    alt="img"
                  />
                  <div className="absolute z-20 rounded-b-xl p-5 bg-white w-full right-0 left-0 mx-auto bottom-0">
                    <h2 className="font-bold text-xl mb-2.5">{item.name}</h2>
                    <p className="font-normal mb-5 text-sm leading-5 text-black-serModalText">
                      {item.text}
                    </p>
                    <Link
                      href={`/${item.findName}`}
                      className="text-orange-main pr-5 font-medium text-base cursor-pointer relative after:bg-learnMoreModalImg after:absolute after:w-[13px]
                       after:h-[12px] after:top-0 after:bottom-0 after:my-auto after:ml-2  after:bg-no-repeat"
                    >
                      Read more
                    </Link>
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
}

export default OurServices;
