import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className=" text-white pt-4 pb-8 xl:pt-8">
        <div className="w-full mx-8">
          <div className="text-center text-orange-500 text-4xl font-bold">
            <p>L'artisan du livre audio</p>
          </div>
          <div className="w-full flex flex-row text-sm">
            <div>
              <p>2023 StudiodelaTanière. All rights reserved.</p>
              <Link href="/mentionsLegales">Mentions légales</Link>
            </div>
            <div>
              <AiFillYoutube
                className="w-6 h-auto text-xl ml-10 text-logoYoutube transition-colors duration-200 hover:text-gray-800"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
