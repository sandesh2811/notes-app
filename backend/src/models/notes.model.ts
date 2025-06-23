import mongoose, { Schema, Model } from "mongoose";

export interface Notes extends Document {
  title: string;
  description: string;
}

const NotesSchema = new Schema<Notes>(
  {
    title: {
      type: String,
      required: [true, "Note title is required!"],
    },
    description: {
      type: String,
      required: [true, "Note description is required!"],
    },
  },
  { timestamps: true }
);

export const NoteModel =
  (mongoose.models.Notes as Model<Notes>) ||
  mongoose.model("Note", NotesSchema);
