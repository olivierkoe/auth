"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete, AiFillLike, AiOutlineLike } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Book from "./../../../components/Book";

const BookDetails = (ctx) => {
  const [bookDetails, setBookDetails] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [bookLikes, setBookLikes] = useState(0);
  const [commentBookText, setCommentBookText] = useState("");
  const [commentsBooks, setCommentsBooks] = useState([]);

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    async function fetchCommentsBooks() {
      const res = await fetch(
        `http://localhost:3000/api/commentBook/${ctx.params.id}`,
        { cache: "no-store" }
      );
      const commentsBooks = await res.json();

      setCommentsBooks(commentsBooks);
    }
    fetchCommentsBooks();
  }, []);
  useEffect(() => {
    async function fetchBook() {
      const res = await fetch(
        `http://localhost:3000/api/book/${ctx.params.id}`,
        { cache: "no-store" }
      );
      const book = await res.json();

      setBookDetails(book);
      setIsLiked(book?.likes?.includes(session?.user?._id));
      setBookLikes(book?.likes?.length || 0);
    }
    session && fetchBook();
  }, [session]);

  const handleDelete = async () => {
    try {
      const confirmModal = confirm(
        "Are you sure you want to delete your book?"
      );

      if (confirmModal) {
        const res = await fetch(
          `http://localhost:3000/api/book/${ctx.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${session?.user?.accessToken}`,
            },
            method: "DELETE",
          }
        );

        if (res.ok) {
          router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async () => {
    try {
      const res = await fetch(
        `https://localhost:3000/api/book/${ctx.params.id}/like`,
        {
          headers: {
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          method: "PUT",
        }
      );

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
  const handleCommentBook = async () => {
    if (commentBookText?.length < 2) {
      toast.error("Comment must be at least 2 characters long");
      return;
    }

    try {
      const body = {
        postId: ctx.params.id,
        authorId: session?.user?._id,
        text: commentBookText,
      };

      const res = await fetch(`http://localhost:3000/api/commentBook`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        method: "POST",
        body: JSON.stringify(body),
      });

      const newCommentBook = await res.json();

      setCommentsBooks((prev) => {
        return [newCommentBook, ...prev];
      });

      setCommentBookText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="max-w-screen-sm m-auto">
        <div className="container px-5 py-12 mx-auto ">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 flex flex-col">
              <h2 className="sm:text-3xl text-xl title-font font-medium text-white mt-4 mb-4 text-center">
                {bookDetails.titre}
              </h2>

              <span className="text-center py-2 px-2 rounded text-white text-2xl font-medium tracking-widest">
                {bookDetails.genre}
              </span>
              <p className="leading-relaxed mb-8">{bookDetails.description}</p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 cursor-pointer">
                  {bookLikes}{" "}
                  {isLiked ? (
                    <AiFillLike size={16} onClick={handleLike} />
                  ) : (
                    <AiOutlineLike size={16} onClick={handleLike} />
                  )}
                </span>
              </div>
            </div>
          </div>
          <h2 className="text-center">Laisser un commentaire</h2>
          <div>
            <input
              onChange={(e) => setCommentBookText(e.target.value)}
              value={commentBookText}
              type="text"
              className="w-full focus:outline-none p-8 mt-4 text-black"
              placeholder="Leave your comment here..."
            />
          </div>
          <div>
            <button
              onClick={handleCommentBook}
              className="px-6 py-2.5 rounded-md bg-primary mt-3 text-white hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Comment book
            </button>
          </div>
          <div>
            {commentsBooks?.length > 0 ? (
              commentsBooks.map((commentBook) => (
                <Book
                  key={commentBook._id}
                  commentBook={commentBook}
                  setCommentsBooks={setCommentsBooks}
                />
              ))
            ) : (
              <h4>Be the first one to leave a comment!</h4>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-5 pb-5">
                {bookDetails?.authorId?._id.toString() ===
                session?.user?._id.toString() ? (
                  <>
                    <Link
                      href={`/book/edit/${ctx.params.id}`}
                      className="px-3 py-2 rounded-md text-whitefont-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex flex-col items-center"
                    >
                      Modifier <BsFillPencilFill style={{ fontSize: "24px" }} />
                    </Link>
                    <button
                      onClick={handleDelete}
                      className="px-3 py-2 rounded-md text-white font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex flex-col items-center"
                    >
                      Delete <AiFillDelete style={{ fontSize: "24px" }} />
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="text-center text-gray-400 mb-2">
                      Book By: {bookDetails?.authorId?.username}
                    </h2>
                  </>
                )}
              </div>
      </section>
    </>
  );
};

export default BookDetails;
