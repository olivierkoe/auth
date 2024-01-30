"use client";
import React, { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === "" || email === "") {
      toast.error("Remplissez tous les champs");
      return;
    }

    if (password.length < 6) {
      toast.error("Le mot de passe doit contenir au minimum 6 charctères");
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error == null) {
        router.push("/");
      } else {
        toast.error("Une erreur s'est produite durant la connexion");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-gray-100 max-w-screen-sm m-auto p-8 flex flex-col align-center justify-center rounded-md">
      <h1 className="mb-4 w-full text-4xl font-light text-center text-gray-800 uppercase sm:text-5xl">
        Connexion
      </h1>
      <div className="flex flex-col w-full px-4 py-8 bg-white rounded-md shadow sm:px-6 md:px-8 lg:px-10">
        <div className="self-center text-xl font-light text-gray-600 sm:text-2xl">
          Bienvenu !
        </div>
        <div className="mt-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <div className="flex">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="Votre email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="sign-in-email"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="Votre mot de passe"
                />
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="py-2 px-4  bg-primary hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Valider
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <a
            href="/register"
            target="_blank"
            className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700"
          >
            <span className="ml-2">Pas encore inscrit ?</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
