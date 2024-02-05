"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Edit = (ctx) => {
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [audioShort, setAudioShort] = useState("");
  const [audioFull, setAudioFull] = useState("");
  const [description, setDescription] = useState("");
  const [motAuteur, setMotAuteur] = useState("");
  const [nChapitre, setNChapitre] = useState("");
  const [dTotal, setDTotal] = useState("");
  const [offreLancement, setOffreLancement] = useState("");
  const [prix, setPrix] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    async function fetchBook() {
      const res = await fetch(
        `http://localhost:3000/api/book/${ctx.params.id}`
      );

      const book = await res.json();

      setTitre(book.titre);
      setAuteur(book.auteur);
      setGenre(book.genre);
      setImage(book.image);
      setAudioShort(book.audioShort);
      setAudioFull(book.audioFull);
      setDescription(book.description);
      setMotAuteur(book.motAuteur);
      setNChapitre(book.nChapitre);
      setDTotal(book.dTotal);
      setPrix(book.prix);
      setOffreLancement(book.offreLancement);
    }
    fetchPost();
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      titre === "" ||
      auteur === "" ||
      genre === "" ||
      description === "" ||
      motAuteur === "" ||
      nChapitre === "" ||
      dTotal === "" ||
      prix === "" ||
      offreLancement === ""
    ) {
      toast.error("All fields are required");
      return;
    }

    try {
      const body = {
        titre,
        auteur,
        genre,
        image,
        audioShort,
        audioFull,
        description,
        motAuteur,
        nChapitre,
        dTotal,
        prix,
        offreLancement,
      };

      const res = await fetch(
        `http://localhost:3000/api/book/${ctx.params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          method: "PUT",
          body: JSON.stringify(body),
        }
      );

      if (!res.ok) {
        throw new Error("Error has occured");
      }
      const book = await res.json();

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-gray-100 max-w-screen-sm m-auto p-8">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Update Book
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            className="w-full focus:outline-none p-2"
            placeholder="Nouveau titre"
          />
        </div>
        <div>
          <textarea
            value={auteur}
            onChange={(e) => setAuteur(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Nouvel auteur"
          />
        </div>
        <div>
          <textarea
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Nouvel genre"
          />
        </div>
        <div>
          <textarea
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Nouvel image"
          />
        </div>
        <div>
          <textarea
            value={audioShort}
            onChange={(e) => setAudioShort(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Nouvel extrait audio"
          />
        </div>
        <div>
          <textarea
            value={audioFull}
            onChange={(e) => setAudioFull(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Nouvel audio"
          />
        </div>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Nouvel description"
          />
        </div>
        <div>
          <textarea
            value={motAuteur}
            onChange={(e) => setMotAuteur(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Nouvel mot de l'auteur"
          />
        </div>
        <div>
          <textarea
            value={nChapitre}
            onChange={(e) => setNChapitre(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Nouveau nombre de chapitre"
          />
        </div>
        <div>
          <textarea
            value={dTotal}
            onChange={(e) => setDTotal(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Nouvel durée"
          />
        </div>
        <div>
          <textarea
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Nouveau prix"
          />
        </div>
        <div>
          <textarea
            value={offreLancement}
            onChange={(e) => setOffreLancement(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Nouvel offre de lancement"
          />
        </div>
        {/* <div>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full focus:outline-none p-2 mt-4"
          >
            <option>Categories</option>
            <option value="Sports">Sports</option>
            <option value="Money">Money</option>
            <option value="News">News</option>
            <option value="Tech">Tech</option>
            <option value="Programming">Programming</option>
          </select>
        </div> */}
        <div>
          <button className="px-6 py-2.5 rounded-md bg-primary mt-3 text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
            Valider
          </button>
        </div>
      </form>
    </section>
  );
};

export default Edit;
