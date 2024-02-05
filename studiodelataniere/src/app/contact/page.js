"use client";
import React, { useState } from "react";
import ContactForm from "./../../components/contactForm";
import Link from "next/link";
// import Books from "./../../components/Datas/studio";
import Background from "./../../../public/wood1.webp";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
  };

  return (
    <div
      className="max-w-screen-xl mt-10 m-auto"
      style={{ backgroundImage: `url${Background}` }}
    >
      <div className="flex flex-row">
        <div className="w-1/2 mx-5 my-5">
          <p className="text-2xl">
            Créateur du projet du Studio de la Tanière en 2023, Ludo Vey est un
            artiste au parcours atypique.
            <br />
            <br /> Une des premières aventures de sa jeunesse fut de se former
            au théâtre amateur.
            <br /> Puis il fut musicien (bassiste) au sein d’un groupe de métal
            français, « Svart Crown » de 2007 à 2019, avec lequel il donnera
            plus de 500 concerts dans toute l’Europe, au Japon, aux USA… Une
            première vie de baroudeur, riche d’expériences, de rock’n roll et de
            folklore ! <br />
            <br />
            Un changement d’orientation survient en 2019 avec la création de la
            chaîne YouTube « SANGLIER JAUNE » qui s'organise autour d'une idée :{" "}
            <br />
            Pratiquer un « Tour de France des gilets jaunes » comme un reporter
            citoyen, simplement armé d’un téléphone et d’un micro, au cœur du
            mouvement social. L’objectif était de montrer ce qu’il s’y passait
            de positif et de constructif. Plus de 120 vidéos produites en deux
            ans et demi, une ligne éditoriale orientée vers la parole donnée aux
            activistes.
            <br />
            <br /> Aujourd’hui, depuis le fin-fond de l’Ardèche est née l’envie
            de devenir un narrateur, un conteur. L’écriture de « Petit Ciel »
            marquera le début de l’aventure de production puis d’édition de
            livres audio.
            <br />
            <br /> Ses inspirations les plus anciennes ?<br />
            Sa passion pour la science et l’envie de partager <br />« la magie
            du réel ».
            <br /> Et à l’âge de sept ans, lorsqu’il a découvert le film : «
            l’histoire sans fin », où le petit garçon se réfugie dans un grenier
            et ouvre un vieux livre pour fuir un monde fou et où, petit à petit,
            une voie entre l’imagination et le réel se crée.
            <br />
            <br />
            D’une certaine manière on peut dire que par sa voix, le Studio de la
            Tanière est un refuge d’où les livres ressortent vivants.
            <br />
            Une idée qui grandit avec Ludo Vey, depuis ses sept ans !
          </p>
        </div>
        <div className="w-1/2 mx-5 my-5 bg-black rounded-lg">
          <div className="flex justify-between items-center mx-5">
            <h1 className="text-5xl mt-5 font-bold text-orange-300">Contact</h1>{" "}
            <p className="text-orange-300 text-3xl mt-7">
              <Link href={"mailto:ludovpl@protonmail.com"}>
                ludovpl@protonmail.com
              </Link>
            </p>
          </div>
          <div>
            <p className="mx-5 my-8 text-white text-2xl">
              Vous êtes auteur et vous souhaitez donner une voix,
              <br /> une portée audio à votre livre pour toucher un nouveau
              public ?<br /> Nous vous accompagnons de la production à l’édition
              de votre livre audio.
            </p>
            <div className="mx-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
