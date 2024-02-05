import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true,
    },
    auteur: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    // image: {
    //   type: String,
    //   // required: true,
    // },
    // audioShort: {
    //   type: String,
    //   // required: true,
    // },
    // audioFull: {
    //   type: String,
    //   // required: true,
    // },
    description: {
      type: String,
      required: true,
    },
    motAuteur: {
      type: String,
      required: true,
    },
    nChapitre: {
      type: Number,
      required: true,
    },
    dTotal: {
      type: String,
      required: true,
    },
    prix: {
      type: String,
      required: true,
    },
    offreLancement: {
      type: String,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Book || mongoose.model("Book", BookSchema);
