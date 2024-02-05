import db from "./../../../../lib/db";
import { verifyJwtToken } from "./../../../../lib/jwt";
import CommentBook from "./../../../../models/CommentBook";

export async function GET(req, ctx) {
  await db.connect();

  const id = ctx.params.id;

  try {
    const commentsBooks = await CommentBook.find({ bookId: id }).populate(
      "authorId"
    );

    return new Response(JSON.stringify(commentsBooks), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function DELETE(req, ctx) {
  await db.connect();

  const id = ctx.params.id;
  const accessToken = req.headers.get("authorization");
  const token = accessToken.split(" ")[1];

  const decodedToken = verifyJwtToken(token);

  if (!accessToken || !decodedToken) {
    return new Response(
      JSON.stringify({ error: "unauthorized (wrong or expired token)" }),
      { status: 403 }
    );
  }

  try {
    const commentBook = await CommentBook.findById(id).populate("authorId");
    if (commentBook.authorId._id.toString() !== decodedToken._id.toString()) {
      return new Response(
        JSON.stringify({ msg: "Only author can delete his book" }),
        { status: 401 }
      );
    }

    await CommentBook.findByIdAndDelete(id);

    return new Response(
      JSON.stringify({ msg: "Successfully deleted commentBook" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
