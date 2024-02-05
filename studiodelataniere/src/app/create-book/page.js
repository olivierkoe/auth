"use client";

import { useRouter } from "next/navigation";

import React, { useState } from "react";

import { useSession } from "next-auth/react";

const Createbook = () => {
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [genre, setGenre] = useState("");
  // const [image, setImage] = useState("");
  // const [audioShort, setAudioShort] = useState("");
  // const [audioFull, setAudioFull] = useState("");
  const [description, setDescription] = useState("");
  const [motAuteur, setMotAuteur] = useState("");
  const [nChapitre, setNChapitre] = useState("");
  const [dTotal, setDTotal] = useState("");
  const [prix, setPrix] = useState("");
  const [offreLancement, setOffreLancement] = useState("");

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p className="text-center text-5xl">Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !titre ||
      !auteur ||
      !genre ||
      !description ||
      !motAuteur ||
      !nChapitre ||
      !dTotal ||
      !prix ||
      !offreLancement
    ) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/book`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        method: "POST",
        body: JSON.stringify({
          titre,
          auteur,
          genre,
          description,
          motAuteur,
          nChapitre,
          dTotal,
          prix,
          offreLancement,
          authorId: session?.user?._id,
        }),
      });

      if (!res.ok) {
        throw new Error("Error occured");
      }

      const book = await res.json();

      router.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-gray-100 max-w-screen-sm m-auto p-8">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Créer un livre audio
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={(e) => setTitre(e.target.value)}
            className="w-full focus:outline-none p-2 text-black"
            placeholder="Titre du livre"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setAuteur(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4 text-black"
            placeholder="Nom de l'auteur"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setGenre(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4 text-black"
            placeholder="Genre du livre"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4 text-black"
            placeholder="Decription du livre"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setMotAuteur(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4 text-black"
            placeholder="Le mot de l'auteur"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setNChapitre(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4 text-black"
            placeholder="Le nombre de chapitres"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setDTotal(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4 text-black"
            placeholder="La durée du livre audio"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setPrix(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4 text-black"
            placeholder="Le prix du livre audio"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setOffreLancement(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4 text-black"
            placeholder="Le prix de lancement"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2.5 rounded-md bg-primary mt-3 text-white hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          Valider
        </button>
      </form>
    </section>
  );
};

export default Createbook;
