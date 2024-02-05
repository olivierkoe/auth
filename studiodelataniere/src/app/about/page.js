"use client";
import Button from "./../../components/Button";
import Image from "next/image";
import ImgStudio from "public/studio/Studio_de_la_Taniere_presentation_2_z_copie.jpg";
import Hero from "public/hero/hero3.webp";

const About = () => {
  return (
    <main className="max-w-screen-xl m-auto">
      <section className="w-full flex flex-col items-center">
        <div className="flex frlex-row justify-center mb-5 gap-8 mt-5 w-full">
          <Image
            src={ImgStudio}
            style={{ width: "50%", height: "auto" }}
            alt="Image Studio de la tanière"
          />
          <Image
            src={Hero}
            style={{ width: "50%", height: "auto" }}
            alt="Image Studio de la tanière"
          />
        </div>
        <div className="container flex flex-col">
          <h1 className="w-full text-4xl font-bold my-8 text-secondary uppercase sm:text-4xl">
            Pourquoi le livre audio ?
          </h1>
          <p className="w-full text-2xl">
            La lecture est un plaisir, une passion, une source de culture et de
            développement. <br />
            Mais elle implique certaines difficultés.
            <br /> Pour diverses raisons, beaucoup n’en profitent pas ou très
            peu, souvent à regret.
            <br />
            <br /> C’est alors que le Studio de la Tanière vous offre un pont,
            une voix, entre deux mondes.
            <br /> Comme si le livre s’ouvrait devant vous et que les
            personnages en sortaient pour vous emmener vagabonder dans leur
            univers.
            <br />
            <br /> Lorsque lecture est faite d’une œuvre culturelle ou
            politique, c’est votre esprit qui est accompagné lors d’une séance
            de musculation de la tête !<br /> Plus jeune, j’avais moi aussi du
            mal à lire. A lire vraiment. Aujourd’hui, c’est avec appétit que
            nous nourrissons votre imagination. Lorsque je dis « nous », je
            parle de la plume de l’auteur et de la voix du conteur.
            <br />
            <br /> Un travail minutieux afin de proposer des lectures agréables
            et claires, une touche d’interprétation ou un jeu plus marqué selon
            les personnages et les histoires.
            <br />
            <br /> Donner vie à un livre n’est pas aussi simple que le lire
            soi-même.
            <br /> Ici c’est une passion, c’est du « fait-maison ».
            <br />
            <br />
            Bienvenue au Studio de la Tanière.
          </p>
        </div>
        <div className="my-8">
          <Button url="contact" text="Contact" />
        </div>
      </section>
    </main>
  );
};

export default About;
