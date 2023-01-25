import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

function Third({ setSuccess, setError, setHeroPage }: any) {
  const [loc, setLoc] = useState(false);
  const [loc3, setLoc3] = useState(false);
  const [loc2, setLoc2] = useState(false);
  const [btnLoc1, setBtnLoc1] = useState(false);
  const [btnLoc2, setBtnLoc2] = useState(false);
  const [btnLoc3, setBtnLoc3] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [locErrorName, setErrorName] = useState("There should be no head left");
  const [focusTel, setFocusTel] = useState(false);
  const nameRef: any = useRef();
  const emailRef: any = useRef();
  const phoneRef: any = useRef();

  const env = process.env.NEXT_PUBLIC_TOKEN;

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

  const handleValid = () => {
    if (
      nameRef.current.value &&
      emailRef.current.value &&
      phoneRef.current.value
    ) {
    } else {
      setLoc(true);
      setLoc2(true);
      setLoc3(true);
    }
  };

  const [firstData, setFirstData] = useState<any>();
  const [secoundData, setSecoundData] = useState<any>();

  useEffect(() => {
    setFirstData(JSON.parse(window.localStorage.getItem("data") || ""));
  }, []);

  useEffect(() => {
    setSecoundData(JSON.parse(window.localStorage.getItem("seconData") || ""));
  }, []);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    const thirdData = {
      name: evt.target.elements[0].value,
      email: evt.target.elements[1].value,
      phone: evt.target.elements[2].value,
    };

    // ------> Post data
    axios
      .post(`${env}orders`, {
        ...firstData,
        ...secoundData,
        ...thirdData,
      })
      .then((res) => {
        if (res.status === 201) {
          setSuccess(true);
          setTimeout(() => {
            window.localStorage.setItem("second", "first");
            setHeroPage("first");
          }, 2500);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        evt.target.reset();
        localStorage.clear();
      });
  };
  const handleFocus = () => {
    setFocusTel(true);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col" autoComplete="off">
      <label className="mt-1 relative flex flex-col">
        <span className="text-white text-sm font-normal">Full name</span>
        <input
          type="text"
          id="fullName"
          ref={nameRef}
          onBlur={handleBlur}
          onChange={(e) => {
            if (e.target.value === "") {
              setLoc(true);
              setBtnLoc1(false);
              setNameErr(false);
            } else {
              setLoc(false);
              setBtnLoc1(true);
              if (Number(e.target.value)) {
                setBtnLoc1(false);
                setNameErr(true);
              } else {
                setBtnLoc1(true);
                setNameErr(true);
                setNameErr(false);
              }
            }
          }}
          placeholder="Write your full name"
          className={`h-45 mt-1 ${nameErr ? "border-red-500" : ""} ${loc ? "border-red-500" : ""
            } relative text-base rounded-md px-3 outline-none border-2 mb-3 sm:mb-4`}
        />
        {loc ? (
          <span className="absolute -bottom-1 text-red-500 text-[11px]">
            {locErrorName}
          </span>
        ) : (
          ""
        )}
        {nameErr ? (
          <label className="absolute -bottom-1 text-red-500 text-[11px]">
            Dont write number
          </label>
        ) : (
          ""
        )}
      </label>
      <label className="relative flex flex-col">
        <span className="text-white text-sm font-normal">Email address</span>
        <input
          type="email"
          id="email"
          ref={emailRef}
          onChange={(e) => {
            if (e.target.value === "") {
              setLoc2(true);
              setBtnLoc2(false);
            } else {
              setLoc2(false);
              setBtnLoc2(true);
            }
          }}
          onBlur={handleBlur2}
          placeholder="Write your email address"
          className={`h-45 ${loc2 ? "border-red-500" : ""
            } mt-1 text-base rounded-md px-3 outline-none border-2 mb-3 sm:mb-4`}
        />
        {loc2 ? (
          <span className="absolute -bottom-1 text-red-500 text-[11px]">
            {locErrorName}
          </span>
        ) : (
          ""
        )}
      </label>
      <label className="relative flex flex-col">
        <span className="text-white text-sm font-normal">Phone number</span>
        <input
          id="number"
          type="tel"
          maxLength={12}
          minLength={12}
          ref={phoneRef}
          onFocus={handleFocus}
          defaultValue={`${focusTel ? "+1" : ""}`}
          onChange={(e) => {
            if (e.target.value === "") {
              setLoc3(true);
              setBtnLoc3(false);
            } else {
              setLoc3(false);
              setBtnLoc3(true);
              if (Number(e.target.value)) {
                setLoc3(false);
                setBtnLoc3(true);
              } else {
                setLoc3(true);
                setBtnLoc3(false);
              }
            }
          }}
          onBlur={handleBlur3}
          placeholder="Your phone number"
          className={`h-45 ${loc3 ? "border-red-500" : ""
            } mt-1 text-base rounded-md px-3 outline-none border-2 mb-3 sm:mb-4`}
        />
        {loc3 ? (
          <span className="absolute -bottom-1 text-red-500 text-[11px]">
            {locErrorName}
          </span>
        ) : (
          ""
        )}
      </label>
      <span className="w-full h-[1px] inline-block bg-black-line_bg mt-6 mb-5"></span>
      <button
        onClick={handleValid}
        className="bg-orange-main h-45 hover:bg-orange-500 transition-all ease-in-out rounded-lg text-base text-white "
        type={`${btnLoc1 && btnLoc2 && btnLoc3 ? "submit" : "button"}`}
      >
        Send me the Free Quote Now
      </button>
    </form>
  );
}

export default Third;
