import Link from "next/link";
import React from "react";

function ButtonRead() {
  return (
    <Link
      className="w-full sm:w-[50%] hover:bg-buttonHover hover:border-buttonHoverBorder duration-200 py-4 border-2 border-orange-main inline-block text-center font-medium text-base rounded-md"
      href={"/"}
    >
      Get Free Quotes
    </Link>
  );
}

export default ButtonRead;
