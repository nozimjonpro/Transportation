import React, { useState } from "react";

interface Props {
  name: string;
  text: string;
}

function DropDownFre(props: Props) {
  const { name, text } = props;
  const [rotateEl, setRotateEl] = useState(false);
  const handleClick = () => {
    setRotateEl(!rotateEl);
  };
  return (
    <li className=" py-7 cursor-pointer border-b-2">
      <div
        onClick={handleClick}
        className={`flex items-center duration-300 ${rotateEl ? "mb-4" : "mb-0"
          }  justify-between`}
      >
        <h2 className="font-semibold text-lg">{name}</h2>
        <div className={`relative inline-block`}>
          <span
            className={`inline-block absolute w-5 h-0.5 bg-black-servicesTextColor`}
          ></span>
          <span
            className={`inline-block absolute  ${rotateEl ? "" : "rotate-90"
              }  w-5 h-0.5 duration-300 bg-black-servicesTextColor`}
          ></span>
        </div>
      </div>
      <div
        className={`duration-300 ${rotateEl
          ? "translate-y-0 h-auto overflow-auto"
          : "-translate-y-[40px] h-0 overflow-hidden"
          }`}
      >
        <p className="font-normal text-base text-black-serModalText">{text}</p>
      </div>
    </li>
  );
}

export default DropDownFre;
