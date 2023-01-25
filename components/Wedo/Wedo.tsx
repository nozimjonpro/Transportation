import { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Wedo() {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <section className="bg-weDoBg sm:bg-center py-75 bg-no-repeat bg-cover">
      <div className="container">
        <div className="flex flex-col text-center lg:text-left lg:flex lg:items-center lg:flex-row lg:justify-between">
          <div className="w-[80%] sm:max-w-weDoContent text-left mb-8 lg:mb-0">
            <h2 className="font-semibold text-white text-2xl sm:text-4xl mb-2 leading-wedoTitile">
              We’re PROs at what we DO
            </h2>
            <p className="text-white text-sm sm:text-base leading-6 font-normal">
              Hire professional carriers for your shipments needs
            </p>
          </div>
          <ul className="flex flex-wrap gap-9 sm:flex sm:flex-nowrap sm:items-center sm:justify-center lg:justify-start sm:space-x-9">
            <li className="flex flex-col">
              <span className="w-10 h-10 rounded-2xl flex items-center justify-center bg-weDoNumber cursor-pointer mb-2">
                <Image
                  src={"/Images/wedoImgs/avatar.svg"}
                  width={22}
                  height={25}
                  alt="avatar img"
                />
              </span>
              <strong
                className="  font-semibold text-left text-white text-4xl sm:text-5xl leading-numberWeDo mb-2"
                data-number="10"
              >
                <CountUp start={viewPortEntered ? 0 : 10} duration={1} end={10}>
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible: any) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
                K
              </strong>
              <p className="font-normal text-sm sm:text-base leading-6 text-white">
                Client Served
              </p>
            </li>
            <li className="flex flex-col">
              <span className="w-10 h-10 rounded-2xl flex items-center justify-center bg-weDoNumber cursor-pointer mb-2">
                <Image
                  src={"/Images/wedoImgs/boat.svg"}
                  width={30}
                  height={30}
                  alt="avatar img"
                />
              </span>
              <strong
                className="font-semibold text-left text-white text-4xl sm:text-5xl leading-numberWeDo mb-2"
                data-number="23"
              >
                <CountUp start={viewPortEntered ? 0 : 23} duration={1} end={23}>
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible: any) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
                K
              </strong>
              <p className="font-normal text-sm sm:text-base leading-6 text-white">
                Vehicle shipped
              </p>
            </li>
            <li className="flex flex-col">
              <span className="w-10 h-10 rounded-2xl flex items-center justify-center bg-weDoNumber cursor-pointer mb-2">
                <Image
                  src={"/Images/wedoImgs/starts.svg"}
                  width={30}
                  height={30}
                  alt="avatar img"
                />
              </span>
              <strong
                className="font-semibold text-left text-white text-4xl sm:text-5xl leading-numberWeDo mb-2"
                data-number="96"
              >
                <CountUp start={viewPortEntered ? 0 : 96} duration={1} end={96}>
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible: any) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
                %
              </strong>
              <p className="font-normal text-sm sm:text-base leading-6 text-white">
                Satisfied customer
              </p>
            </li>
            <li className="flex flex-col">
              <span className="w-10 h-10 rounded-2xl flex items-center justify-center bg-weDoNumber cursor-pointer mb-2">
                <Image
                  src={"/Images/wedoImgs/settings.svg"}
                  width={30}
                  height={30}
                  alt="avatar img"
                />
              </span>
              <strong
                className="font-semibold text-left text-white text-4xl sm:text-5xl leading-numberWeDo mb-2"
                data-number="7"
              >
                <CountUp start={viewPortEntered ? 0 : 7} duration={1} end={7}>
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible: any) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
                +
              </strong>
              <p className="font-normal text-sm sm:text-base leading-6 text-white">
                Years in operation
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Wedo;
