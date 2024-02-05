import Link from "next/link";
import Post from "./../components/Post";
import Book from "../components/Book";
import Studio from "public/studio/Photo_du_Studio.webp";
import Image from "next/image";

// export async function fetchPosts() {
//   const res = await fetch("http://localhost:3000/api/post", {
//     cache: "no-store",
//   });

//   return res.json();
// }

export async function fetchBooks() {
  const response = await fetch("http://localhost:3000/api/book", {
    cache: "no-store",
  });

  return response.json();
}

export default async function Home() {
  // const posts = await fetchPosts();
  const books = await fetchBooks();
  return (
    <main className="max-w-screen-xl mx-auto">
      <section>
        <div></div>
        <div className="flex items-center">
          <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto"></div>
        </div>
      </section>
      <div className="flex flex-wrap gap-8 justify-center">
        {/* {books?.length > 0 && <h2 className="text-center">The Books Spot</h2>} */}
        {books?.length > 0 ? (
          books.map((book) => <Book key={book._id} book={book} />)
        ) : (
          <h3>Les livres seront bitot charger</h3>
        )}
      </div>
      <div className="flex gap-10 mt-8 ">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-orange-300">
            Studio de la Tanière
          </h2>
          <p className="text-2xl mt-8">
            Au milieu de la forêt, loin du bruit et de l’agitation de la vie
            quotidienne, imaginez un sanctuaire bois sauvage et matériel
            professionnel. Imaginez une bulle artistique ou seule votre
            inspiration est invitée. Imaginez un refuge d'où les livres
            ressortent vivants.
            <br /> N’imaginez plus, ce lieu existe : c’est le Studio de la
            Tanière.
          </p>
        </div>
        <div className="">
          <Image src={Studio} alt="Image Studio de la tanière" />
        </div>
      </div>
    </main>
  );
}
