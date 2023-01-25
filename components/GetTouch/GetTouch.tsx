import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import GetTouchForm from "../BaseComponents/FormInput/GetTouchForm";

interface Props { }

function GetTouch(props: Props) {
  const { } = props;

  const [success, setSuccess] = useState<any>();
  const [error, setError] = useState<any>();

  // ------> Successfully Sent
  useEffect(() => {
    if (success) {
      toast.success('Successfully sent!')
    } else if (error) {
      toast.error('Sending failed!')
    }
  }, [success, error])

  return (
    <section
      id="contact-us"
      className="w-full bg-getTouch_bg_mb md:bg-getTouch_bg bg-cover bg-no-repeat bg-fixed pt-8 md:pb-12 md:py-20 "
    >
      <div className="container grid grid-cols-1 md:flex md:items-center md:justify-between">
        <div className="px-16 md:px-0 mb-50 md:mb-0">
          <h1 className=" text-[28px] sm:text-[30px] tablet:text-[38px] text-white leading-10 font-bold">
            Get in Touch
          </h1>
          <p className=" text-15 tablet:text-base text-white leading-6 mr-2  font-normal mt-4">
            Our professional agents will get in touch with quickly.
          </p>
          <div className="mt-[40px] tablet:mt-9 flex">
            <Image
              src={"/Images/getTouch/call.svg"}
              width={38}
              height={38}
              alt="call"
              priority={true}
            />
            <Link href="/" className="ml-5">
              <p className="text-15 leading-5 text-gray-text">Phone Number</p>
              <span className="text-white text-lg  font-semibold">
                +1 (513) 264-2969
              </span>
            </Link>
          </div>
          <hr className="w-full md:w-64 text-[#989898] my-5" />
          <div className="mt-9 flex">
            <Image
              src={"/Images/getTouch/mail.svg"}
              width={38}
              height={38}
              alt="call"
              priority={true}
            />
            <Link href="/" className="ml-5">
              <p className="text-sm leading-5 text-gray-text">Email address</p>
              <span className="text-white text-base tablet:text-lg  font-semibold">
                +1 (513) 264-2969
              </span>
            </Link>
          </div>
        </div>
        <GetTouchForm setSuccess={setSuccess} setError={setError} />
      </div>
    </section>
  );
}

export default GetTouch;
