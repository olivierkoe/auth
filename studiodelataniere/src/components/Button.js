import React from "react";
import Link from "next/link";

const Button = ({ url, text }) => {
  return (
    <Link href={url}>
      <button className="px-6 py-2.5 rounded-md bg-secondary mt-3 text-white hover:bg-blue-500 hover:text-white transition-all duration-300">
        {text}
      </button>
    </Link>
  );
};

export default Button;
