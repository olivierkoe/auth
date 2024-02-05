import db from "./../../../lib/db";

import { verifyJwtToken } from "./../../../lib/jwt";

import CommentBook from "./../../../models/CommentBook";

export async function POST(req) {
  await db.connect();

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
    const body = await req.json();

    let newCommentBook = await CommentBook.create(body);
    newCommentBook = await newCommentBook.populate("authorId");

    return new Response(JSON.stringify(newCommentBook), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
