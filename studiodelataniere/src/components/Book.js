"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import Image from "next/image";
import ImageLivre from "./../../public/Petit_Ciel_cover_10x10cm.jpg";

const Book = ({
  book: {
    titre,
    auteur,
    likes,
    genre,
    authorId,
    _id,
    // image,
    // audioShort,
    // audioFull,
    description,
    motAuteur,
    nChapitre,
    dTotal,
    prix,
    offreLancement,
  },
}) => {
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = useState(false);
  const [bookLikes, setBookLikes] = useState(0);
  useEffect(() => {
    session && likes && setIsLiked(likes.includes(session?.user?._id));
    session && likes && setBookLikes(likes.length);
  }, [likes, session]);

  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/book/${_id}/like`, {
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        method: "PUT",
      });

      console.log(res);
      if (res.ok) {
        if (isLiked) {
          setIsLiked((prev) => !prev);
          setBookLikes((prev) => prev - 1);
        } else {
          setIsLiked((prev) => !prev);
          setBookLikes((prev) => prev + 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-4 mx-auto w-[400px] border-[3px] border-orange-300 rounded-xl">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 flex flex-col items-start mx-5">
            <h2 className="sm:text-5xl text-2xl title-font font-extrabold text-white mt-4 mb-8 mx-auto">
              {titre}
            </h2>
            <Image src={ImageLivre} alt="Cover of the book" />
            <p className="sm:text-3xl text-2xl leading-relaxed my-4 text-white font-bold">
              {auteur}
            </p>
            <p className="sm:text-sm text-2xl leading-relaxed mb-4 text-white">
              {genre}
            </p>
            {/* <p className="leading-relaxed mb-8 text-white">{description}</p>
            <p className="leading-relaxed mb-8 text-white">{motAuteur}</p>
            <p className="leading-relaxed mb-8 text-white">{nChapitre}</p>
            <p className="leading-relaxed mb-8 text-white">{dTotal}</p>
            <p className="leading-relaxed mb-8 text-white">{prix}</p>
            <p className="leading-relaxed mb-8 text-white">{offreLancement}</p> */}
            <div className="flex items-center flex-wrap pb-4 mb-2 mt-auto w-full">
              <Link
                href={`/book/${_id}`}
                className="text-orange-300 inline-flex items-center"
              >
                voir +
              </Link>
              <span className="text-orange-300 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1">
                {bookLikes}{" "}
                {isLiked ? (
                  <AiFillLike onClick={handleLike} size={20} />
                ) : (
                  <AiOutlineLike onClick={handleLike} size={20} />
                )}
              </span>
            </div>
            <a className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  Auteur: {authorId.username}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
