import React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface Item {
  id?: number;
  zip?: string;
  primary_city?: string;
  acceptable_cities?: string | null;
  state: string;
  county?: string;
  country?: string;
  latitude?: string;
  longitude?: string;
}

const env = process.env.NEXT_PUBLIC_TOKEN;

function HeroForm({ setHeroPage, svgImages, setRev, rev, from, to }: any) {
  const [data, setData] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [render, setRender] = useState(false);
  const [booleon, setBooleon] = useState(true);
  // ---------> Second Input
  const [data1, setData1] = useState([]);
  const [zipCode1, setZipCode1] = useState("");
  const [country1, setCountry1] = useState("");
  const [render1, setRender1] = useState(false);
  const [booleon1, setBooleon1] = useState(true);
  // --------->
  const [date, setDate] = useState("");
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");
  const [checked, setChecked] = useState(false);
  // ------> Ref
  const inputFromRef = useRef<HTMLInputElement>(null!);
  const inputToRef = useRef<HTMLInputElement>(null!);
  const inputDateRef = useRef<HTMLInputElement>(null!);

  // ------> Validation
  const [loc, setLoc] = useState(false);
  const [loc3, setLoc3] = useState(false);
  const [loc2, setLoc2] = useState(false);
  const [btnLoc1, setBtnLoc1] = useState(false);
  const [btnLoc2, setBtnLoc2] = useState(false);
  const [btnLoc3, setBtnLoc3] = useState(false);
  const [locErrorName, setErrorName] = useState("There should be no head left");

  // -----> Get Zip Codes
  useEffect(() => {
    axios
      .get(
        booleon
          ? `${env}zip-codes?primary_city=${country}`
          : `${env}zip-codes?zip=${zipCode}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
      .finally(() => { });
  }, [country, zipCode, booleon]);

  // -----> Get Zip Codes
  useEffect(() => {
    axios
      .get(
        booleon1
          ? `${env}zip-codes?primary_city=${country1}`
          : `${env}zip-codes?zip=${zipCode1}`
      )
      .then((res) => setData1(res.data))
      .catch((err) => console.error(err))
      .finally(() => { });
  }, [country1, zipCode1, booleon1]);

  // ------> Submit Data
  const SubmitData = (e: any) => {
    e.preventDefault();

    const from = e.target.elements.from.value;
    const to = e.target.elements.to.value;
    setRev(!rev);

    const firstData = {
      from: from,
      to: to,
      estimate_time: date,
      transport_type: checked ? open : close,
    };

    window.localStorage.setItem("data", JSON.stringify(firstData));
    window.localStorage.setItem("second", "second");
    setHeroPage("second");
  };

  // ------> Day Before
  function dayBefore() {
    let date = new Date();
    let day = date.getUTCDate();
    let month = date.getUTCMonth() + 1;
    let year = date.getUTCFullYear();
    return year + "-" + month + "-" + day;
  }

  // ------> Validation
  const handleBlur = (e: any) => {
    if (e.target.value) {
      setLoc(false);
    } else {
      setLoc(true);
      setBtnLoc1(false);
    }
  };
  const handleBlur2 = (e: any) => {
    if (e.target.value) {
      setLoc2(false);
    } else {
      setLoc2(true);
      setBtnLoc2(false);
    }
  };
  const handleBlur3 = (e: any) => {
    if (e.target.value) {
      setLoc3(false);
    } else {
      setLoc3(true);
      setBtnLoc3(false);
    }
  };
  const handleCheckType = () => {
    if (inputFromRef.current.value === "" && inputToRef.current.value === "") {
      setLoc(true);
      setLoc2(true);
      setLoc3(false);
    }
    if (
      inputFromRef.current.value === "" &&
      inputDateRef.current.value === ""
    ) {
      setLoc(true);
      setLoc2(false);
      setLoc3(true);
    }
    if (inputToRef.current.value === "" && inputDateRef.current.value === "") {
      setLoc(false);
      setLoc2(true);
      setLoc3(true);
    }
    if (
      inputFromRef.current.value === "" &&
      inputToRef.current.value === "" &&
      inputDateRef.current.value === ""
    ) {
      setLoc(true);
      setLoc2(true);
      setLoc3(true);
    }
  };

  return (
    <form onSubmit={SubmitData} className="flex flex-col" autoComplete="off">
      <label className="relative text-15 flex flex-col text-white">
        From
        <input
          ref={inputFromRef}
          name="from"
          type="text"
          required
          placeholder="Select ZIP code or location"
          onBlur={handleBlur}
          className={`input_bg ${loc ? "border-red-500" : ""
            } h-45 relative w-full text-black-inputPlaceholderColor text-15 rounded-md pl-9 mt-1 outline-none border-2 mb-4`}
          onChange={(e) => {
            if (e.target.value) {
              setLoc(false);
              setBtnLoc1(true);
            }
            if (e.target.value.match(/[0-9]/g)) {
              setBooleon(false);
              setZipCode(e.target.value.trim());
            } else {
              setBooleon(true);
              setCountry(e.target.value.trim());
            }
            setRender(true);
            if (e.target.value === "") {
              setRender(false);
              setBtnLoc1(false);
            }
          }}
        />
        {render ? (
          <div className="w-full max-h-[200px] overflow-y-scroll rounded absolute bg-white z-40 top-[73px] shadow-selectShadow">
            {data?.map((item: Item, id) => (
              <p
                onClick={() => {
                  setRender(false);
                  inputFromRef.current.value = item?.zip
                    ? item.zip +
                    ", " +
                    item?.primary_city +
                    ", " +
                    item.state +
                    ", USA"
                    : item?.primary_city + ", " + item.state + ", USA";
                  svgImages.map((i: any) => {
                    if (item.state === i?.name) {
                      i.fill = "red";
                      from(i.name);
                      window.localStorage.setItem("from", i.name);
                    }
                    return i;
                  });
                }}
                className="text-black-servicesTextColor pl-3 py-2 cursor-pointer hover:bg-black-line_bg hover:text-orange-main duration-100"
                key={id}
              >{`${item.zip
                ? item.zip +
                ", " +
                item?.primary_city +
                ", " +
                item.state +
                ", USA"
                : item?.primary_city + ", " + item.state + ", USA"
                }`}</p>
            ))}
          </div>
        ) : null}
        {loc ? (
          <span className="absolute bottom-[2px] text-[12px] text-red-500 leading-3">
            {locErrorName}
          </span>
        ) : (
          ""
        )}
      </label>
      <label className="text-15 relative flex flex-col text-white">
        To
        <input
          ref={inputToRef}
          name="to"
          type="text"
          required
          placeholder="Select ZIP code or location"
          onBlur={handleBlur2}
          className={`input_bg ${loc2 ? "border-red-500" : ""
            } h-45 relative w-full text-black-inputPlaceholderColor text-15 rounded-md pl-9 mt-1 outline-none border-2 mb-4 `}
          onChange={(e) => {
            if (e.target.value) {
              setLoc2(false);
              setBtnLoc2(true);
            }
            if (e.target.value.match(/[0-9]/g)) {
              setBooleon1(false);
              setZipCode1(e.target.value.trim());
            } else {
              setBooleon1(true);
              setCountry1(e.target.value.trim());
            }
            setRender1(true);
            if (e.target.value === "") {
              setRender1(false);
              setBtnLoc2(false);
            }
          }}
        />
        {render1 ? (
          <div className="w-full max-h-[200px] overflow-y-scroll rounded absolute bg-white z-40 top-[73px] shadow-selectShadow">
            {data1?.map((item: Item, id) => (
              <p
                onClick={() => {
                  setRender1(false);
                  inputToRef.current.value = item?.zip
                    ? item.zip +
                    ", " +
                    item?.primary_city +
                    ", " +
                    item.state +
                    ", USA"
                    : item?.primary_city + ", " + item.state + ", USA";
                  svgImages.map((i: any) => {
                    if (item.state === i?.name) {
                      i.fill = "red";
                      to(i.name);
                      window.localStorage.setItem("to", i.name);
                    }
                    return i;
                  });
                }}
                className="text-black-servicesTextColor pl-3 py-2 cursor-pointer hover:bg-black-line_bg hover:text-orange-main duration-100"
                key={id}
              >{`${item.zip
                ? item.zip +
                ", " +
                item?.primary_city +
                ", " +
                item.state +
                ", USA"
                : item?.primary_city + ", " + item.state + ", USA"
                }`}</p>
            ))}
          </div>
        ) : null}
        {loc2 ? (
          <span className="absolute bottom-[2px] text-[12px] text-red-500 leading-3">
            {locErrorName}
          </span>
        ) : (
          ""
        )}
      </label>
      <label
        className="text-15 relative flex flex-col text-white"
        htmlFor="date"
      >
        Estimate time
        <input
          id="date"
          type="date"
          ref={inputDateRef}
          required
          min={dayBefore()}
          placeholder="Select estimate time"
          onBlur={handleBlur3}
          onChange={(e) => {
            if (e.target.value) {
              setLoc3(false);
              setBtnLoc3(true);
            } else {
              setBtnLoc3(false);
            }
            setDate(e.target.value);
          }}
          className={`date_bg ${loc3 ? "border-red-500" : ""
            } date h-45 w-full relative text-black-inputPlaceholderColor text-15 rounded-md pl-10 pr-3 mt-1 outline-none border-2 mb-4 `}
        />
        {loc3 ? (
          <span className="absolute bottom-[2px] text-[12px] text-red-500 leading-3">
            {locErrorName}
          </span>
        ) : (
          ""
        )}
      </label>
      <h3 className="text-15 text-white">Vehicle</h3>
      <div className="grid grid-cols-2 gap-4 mt-1">
        <div className="flex items-center pl-4 rounded-xl border-2 h-45 border-white bg-white cursor-pointer">
          <input
            type="radio"
            required
            value={"open"}
            id="bordered-radio-1"
            name="bordered-radio"
            onChange={(e) => {
              setOpen(e.target.value);
              setChecked(true);
            }}
            className="w-7 h-7 border border-[#D3D3D3] accent-amber-600 cursor-pointer"
          />
          <label
            htmlFor="bordered-radio-1"
            className="py-4 ml-2 w-full text-base font-medium text-gray-900 cursor-pointer"
          >
            Open
          </label>
        </div>
        <div className="flex items-center pl-4 rounded-xl border-2 h-45 border-white bg-white cursor-pointer">
          <input
            type="radio"
            required
            value={"enclose"}
            id="bordered-radio-2"
            name="bordered-radio"
            onChange={(e) => {
              setClose(e.target.value);
              setChecked(false);
            }}
            className="w-7 h-7 border border-[#D3D3D3] accent-amber-600 cursor-pointer"
          />
          <label
            htmlFor="bordered-radio-2"
            className="py-4 ml-2 w-full text-base font-medium text-gray-900 cursor-pointer"
          >
            Enclosed
          </label>
        </div>
      </div>
      <span className="w-full h-[1px] inline-block bg-black-line_bg mt-4"></span>
      <button
        onClick={handleCheckType}
        className="h-45 w-full rounded-lg bg-bg_color mt-5 text-white text-base"
        type={`${btnLoc1 && btnLoc2 && btnLoc3 ? "submit" : "button"}`}
      >
        Get Shipment estimate
      </button>
    </form>
  );
}

export default HeroForm;
