import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const env = process.env.NEXT_PUBLIC_TOKEN;

function QuoteForm({ setHeroPage, setRev, rev }: any) {
  // ---------->
  const [render, setRender] = useState(false);
  const [yearVal, setYearVal] = useState<string>("");
  // ---------->
  const [render1, setRender1] = useState(false);
  const [makeVal, setMakeVal] = useState<string>();
  const [foundId, setFoundId] = useState<number>(0);
  // ---------->
  const [render2, setRender2] = useState(false);
  const [modelVal, setModelVal] = useState<string>();
  // --------->
  const [data, setData] = useState([]);
  const [modelData, setModelData] = useState([]);
  const [yearData, setYearData] = useState([
    { year: "2023" },
    { year: "2022" },
    { year: "2021" },
    { year: "2020" },
    { year: "2019" },
    { year: "2018" },
    { year: "2017" },
    { year: "2016" },
    { year: "2015" },
    { year: "2014" },
    { year: "2013" },
    { year: "2012" },
    { year: "2011" },
    { year: "2010" },
    { year: "2009" },
    { year: "2008" },
    { year: "2007" },
    { year: "2006" },
    { year: "2005" },
    { year: "2004" },
    { year: "2003" },
    { year: "2002" },
    { year: "2001" },
    { year: "2000" },
    { year: "1999" },
    { year: "1998" },
    { year: "1997" },
    { year: "1996" },
    { year: "1995" },
    { year: "1994" },
    { year: "1993" },
    { year: "1992" },
    { year: "1991" },
    { year: "1990" },
    { year: "1989" },
    { year: "1988" },
    { year: "1987" },
    { year: "1986" },
    { year: "1985" },
    { year: "1984" },
    { year: "1983" },
    { year: "1982" },
    { year: "1981" },
    { year: "1980" },
    { year: "1979" },
    { year: "1978" },
    { year: "1977" },
    { year: "1976" },
    { year: "1975" },
    { year: "1974" },
    { year: "1973" },
    { year: "1972" },
    { year: "1971" },
    { year: "1970" },
    { year: "1969" },
    { year: "1968" },
    { year: "1967" },
    { year: "1966" },
    { year: "1965" },
    { year: "1964" },
    { year: "1963" },
    { year: "1962" },
    { year: "1961" },
    { year: "1960" },
    { year: "1959" },
    { year: "1958" },
    { year: "1957" },
    { year: "1956" },
    { year: "1955" },
    { year: "1954" },
    { year: "1953" },
    { year: "1952" },
    { year: "1951" },
    { year: "1950" },
    { year: "1949" },
    { year: "1948" },
    { year: "1947" },
    { year: "1946" },
    { year: "1945" },
    { year: "1944" },
    { year: "1943" },
    { year: "1942" },
    { year: "1941" },
    { year: "1940" },
    { year: "1939" },
    { year: "1938" },
    { year: "1937" },
    { year: "1936" },
    { year: "1935" },
    { year: "1934" },
    { year: "1933" },
    { year: "1932" },
    { year: "1931" },
    { year: "1930" },
    { year: "1929" },
    { year: "1928" },
    { year: "1927" },
    { year: "1926" },
    { year: "1925" },
    { year: "1924" },
    { year: "1923" },
    { year: "1922" },
    { year: "1921" },
    { year: "1920" },
    { year: "1919" },
    { year: "1918" },
    { year: "1917" },
    { year: "1916" },
    { year: "1915" },
    { year: "1914" },
    { year: "1913" },
    { year: "1912" },
    { year: "1911" },
    { year: "1910" },
    { year: "1909" },
    { year: "1908" },
    { year: "1907" },
    { year: "1906" },
    { year: "1905" },
    { year: "1904" },
    { year: "1903" },
    { year: "1902" },
    { year: "1901" },
    { year: "1900" },
  ]);
  // ------> Input Refs
  const inputYearRef = useRef<HTMLInputElement>(null!);
  const inputMakeRef = useRef<HTMLInputElement>(null!);
  const inputModelRef = useRef<HTMLInputElement>(null!);
  // ------> Validation
  const [locErrorName, setErrorName] = useState("There should be no head left");
  const [year1, setYear1] = useState(true);
  const [year2, setYear2] = useState(true);
  const [year3, setYear3] = useState(true);
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  // -----> Get Make
  useEffect(() => {
    axios
      .get(`${env}make`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
      .finally(() => { });
  }, []);

  // -----> Get Model
  useEffect(() => {
    axios
      .get(`${env}models?company_id=${foundId}`)
      .then((res) => setModelData(res.data))
      .catch((err) => console.error(err))
      .finally(() => { });
  }, [foundId]);

  // ------> Submit Form
  const SubmitData = (e: any) => {
    e.preventDefault();
    const secoundData = {
      year: e.target.elements.year.value,
      make: e.target.elements.make.value,
      model: e.target.elements.modal.value,
      vehicle: e.target.elements[3].checked ? "run" : "inoperable",
    };
    setRev(!rev);

    window.localStorage.setItem("seconData", JSON.stringify(secoundData));
    window.localStorage.setItem("second", "thrid");
    setHeroPage("thrid");
  };

  // ------> Search Product
  function searchProduct(yearVal: string, year: any) {
    let regex = new RegExp(yearVal, "gi");
    const filterInput = year?.filter((product: any) =>
      product?.year.match(regex)
    );

    return filterInput;
  }

  // ------> Search Make
  function searchMakeProduct(makeVal: string, data: any) {
    let regex = new RegExp(makeVal, "gi");
    const filterInput = data?.filter((product: any) =>
      product?.company_name.match(regex)
    );

    return filterInput;
  }

  // ------> Search Model
  function searchModelProduct(modelVal: string, data: any) {
    let regex = new RegExp(modelVal, "gi");
    const filterInput = data?.filter((product: any) =>
      product?.model_name.match(regex)
    );

    return filterInput;
  }

  // ------> Validation
  const handleBlur1 = (evt: any) => {
    if (evt.target.value) {
      setYear1(true);
      setBtn1(true);
    } else {
      setYear1(false);
      setBtn1(false);
    }
  };
  const handleBlur2 = (evt: any) => {
    if (evt.target.value) {
      setYear2(true);
      setBtn2(true);
    } else {
      setYear2(false);
      setBtn2(false);
    }
  };
  const handleBlur3 = (evt: any) => {
    if (evt.target.value) {
      setYear3(true);
      setBtn3(true);
    } else {
      setYear3(false);
      setBtn3(false);
    }
  };
  const handleCheckType = () => {
    if (
      inputYearRef.current.value === "" &&
      inputMakeRef.current.value === ""
    ) {
      setYear1(false);
      setYear2(false);
      setYear3(true);
    }
    if (
      inputYearRef.current.value === "" &&
      inputModelRef.current.value === ""
    ) {
      setYear1(false);
      setYear2(true);
      setYear3(false);
    }
    if (
      inputMakeRef.current.value === "" &&
      inputModelRef.current.value === ""
    ) {
      setYear1(true);
      setYear2(false);
      setYear3(false);
    }
    if (
      inputYearRef.current.value === "" &&
      inputMakeRef.current.value === "" &&
      inputModelRef.current.value === ""
    ) {
      setYear1(false);
      setYear2(false);
      setYear3(false);
    }
  };

  return (
    <form onSubmit={SubmitData} className="flex flex-col" autoComplete="off">
      <label className="mt-1 relative flex flex-col">
        <span className="text-white text-sm font-normal">Year</span>
        <input
          required
          type="number"
          name="year"
          ref={inputYearRef}
          placeholder="Select a year"
          onBlur={handleBlur1}
          onClick={() => {
            setRender(true);
            if (inputYearRef.current.value) {
              setRender(false);
            }
          }}
          onChange={(e) => {
            setYearVal(e.target.value || "");
            setRender(true);
            if (e.target.value === "") {
              setRender(false);
              setYear1(false);
              setBtn1(false);
            } else {
              setYear1(true);
              setBtn1(true);
            }
          }}
          className={`relative ${year1 ? "" : "border-red-500"
            } h-45 mt-1 text-base rounded-md px-3 outline-none border-2 mb-3 sm:mb-4`}
        />
        {year1 ? (
          ""
        ) : (
          <span className="text-red-500 text-[12px] absolute -bottom-1 md:-bottom-[1px]">
            {locErrorName}
          </span>
        )}
        <Image
          width={15}
          height={10}
          alt="select-icon"
          src={"/Images/Quote/select.svg"}
          className={`absolute top-10 right-3 duration-100 ${yearVal!?.length > 0 ? "rotate-180" : ""
            } ${render ? "" : "rotate-0"}`}
        />
        {render ? (
          <div className="w-full max-h-[200px] overflow-y-scroll rounded absolute bg-white z-50 top-[68px] shadow-selectShadow">
            {searchProduct(yearVal || "", yearData).map(
              (item: any, id: any) => (
                <p
                  key={id}
                  onClick={() => {
                    inputYearRef.current.value = item?.year;
                    setYear1(true);
                    setBtn1(true);
                  }}
                  className="text-black-servicesTextColor pl-3 py-2 cursor-pointer hover:bg-[#f5f5f5] hover:text-orange-main duration-100"
                >
                  {item?.year}
                </p>
              )
            )}
          </div>
        ) : null}
      </label>
      <label className="relative flex flex-col">
        <span className="text-white text-sm font-normal">Make</span>
        <input
          required
          type="text"
          name="make"
          ref={inputMakeRef}
          placeholder="Select a year"
          onBlur={handleBlur2}
          onClick={() => {
            setRender1(true);
            if (inputMakeRef.current.value) {
              setRender1(false);
            }
          }}
          onChange={(e) => {
            setMakeVal(e.target.value || "");
            setRender1(true);
            if (e.target.value === "") {
              setRender1(false);
              setYear2(false);
              setBtn2(false);
            } else {
              setYear2(true);
              setBtn2(true);
            }
          }}
          className={`relative ${year2 ? "" : "border-red-500"
            } h-45 mt-1 text-base rounded-md px-3 outline-none border-2 mb-3 sm:mb-4`}
        />
        {year2 ? (
          ""
        ) : (
          <span className="text-red-500 text-[12px] absolute -bottom-1 md:-bottom-[1px]">
            {locErrorName}
          </span>
        )}
        <Image
          width={15}
          height={10}
          alt="select-icon"
          src={"/Images/Quote/select.svg"}
          className={`absolute top-10 right-3 duration-100 ${makeVal!?.length > 0 ? "rotate-180" : ""
            } ${render1 ? "" : "rotate-0"}`}
        />
        {render1 ? (
          <div className="w-full max-h-[200px] overflow-y-scroll rounded absolute bg-white z-40 top-[68px] shadow-selectShadow">
            {searchMakeProduct(makeVal || "", data).map(
              (item: any, id: any) => (
                <p
                  key={id}
                  onClick={() => {
                    setFoundId(item?.id);
                    inputMakeRef.current.value = item?.company_name;
                    setYear2(true);
                    setBtn2(true);
                  }}
                  className="text-black-servicesTextColor pl-3 py-2 cursor-pointer hover:bg-black-line_bg hover:text-orange-main duration-100"
                >
                  {item?.company_name}
                </p>
              )
            )}
          </div>
        ) : null}
      </label>
      <label className="relative flex flex-col">
        <span className="text-white text-sm font-normal">Model</span>
        <input
          required
          type="text"
          name="modal"
          ref={inputModelRef}
          placeholder="Select a year"
          onBlur={handleBlur3}
          onClick={() => {
            setRender2(true);
            if (inputModelRef.current.value) {
              setRender2(false);
            }
          }}
          onChange={(e) => {
            setModelVal(e.target.value || "");
            setRender2(true);
            if (e.target.value === "") {
              setRender2(false);
              setYear3(false);
              setBtn3(false);
            } else {
              setYear3(true);
              setBtn3(true);
            }
          }}
          className={`relative ${year3 ? "" : "border-red-500"
            } h-45 mt-1 text-base rounded-md px-3 outline-none border-2 mb-3 sm:mb-4`}
        />
        {year3 ? (
          ""
        ) : (
          <span className="text-red-500 text-[12px] absolute -bottom-1 md:-bottom-[1px]">
            {locErrorName}
          </span>
        )}
        <Image
          width={15}
          height={10}
          alt="select-icon"
          src={"/Images/Quote/select.svg"}
          className={`absolute top-10 right-3 duration-100 ${modelVal!?.length > 0 ? "rotate-180" : ""
            } ${render2 ? "" : "rotate-0"}`}
        />
        {render2 ? (
          <div className="w-full max-h-[130px] overflow-y-scroll rounded absolute bg-white z-30 top-[68px] shadow-selectShadow">
            {searchModelProduct(modelVal || "", modelData).map(
              (item: any, id: any) => (
                <p
                  key={id}
                  onClick={() => {
                    inputModelRef.current.value = item?.model_name;
                    setYear3(true);
                    setBtn3(true);
                  }}
                  className="text-black-servicesTextColor pl-3 py-2 cursor-pointer hover:bg-black-line_bg hover:text-orange-main duration-100"
                >
                  {item?.model_name}
                </p>
              )
            )}
          </div>
        ) : null}
      </label>
      <h3 className="text-15 text-white">Vehicle</h3>
      <div className="grid grid-cols-2 gap-4 mt-1">
        <div className="flex items-center pl-4 rounded-xl border-2 h-45 border-white bg-white cursor-pointer">
          <input
            required
            type="radio"
            value={"run"}
            id="bordered-radio-1-q"
            name="bordered-radio"
            className="w-7 h-7 border border-[#D3D3D3] accent-amber-600 cursor-pointer"
          />
          <label
            htmlFor="bordered-radio-1-q"
            className="py-4 ml-2 w-full text-base font-medium text-gray-900 cursor-pointer"
          >
            Run
          </label>
        </div>
        <div className="flex items-center pl-4 rounded-xl border-2 h-45 border-white bg-white cursor-pointer">
          <input
            required
            type="radio"
            id="bordered-radio-2"
            value={"inoperable"}
            name="bordered-radio"
            className="w-7 h-7 border border-[#D3D3D3] accent-amber-600 cursor-pointer"
          />
          <label
            htmlFor="bordered-radio-2"
            className="py-4 ml-2 w-full text-base font-medium text-gray-900 cursor-pointer"
          >
            Inoperable
          </label>
        </div>
      </div>
      <span className="w-full h-[1px] inline-block bg-black-line_bg mt-6 mb-5"></span>
      <button
        onClick={handleCheckType}
        className="bg-orange-main h-45 hover:bg-orange-500 transition-all ease-in-out rounded-lg text-base text-white "
        type={`${btn1 && btn2 && btn3 ? "submit" : "button"}`}
      >
        Send
      </button>
    </form>
  );
}

export default QuoteForm;
