import { NoteModel } from "../models/notes.model";

/* Get Notes */

export const getNotes = async () => {
  const notes = await NoteModel.find().lean();

  return notes;
};

/* Create Note */

type CreateNoteArgs = {
  validTitle: string;
  validDescription: string;
};

export const createNote = async ({
  validTitle,
  validDescription,
}: CreateNoteArgs) => {
  const createdNote = await NoteModel.create({
    title: validTitle,
    description: validDescription,
  });

  return createdNote;
};

/* Update Note */

type UpdateNoteArgs = {
  id: string;
  updatedFields: {
    title?: string;
    description?: string;
  };
};

export const updateNote = async ({ id, updatedFields }: UpdateNoteArgs) => {
  const updatedNote = await NoteModel.findByIdAndUpdate(
    { _id: id },
    { $set: updatedFields },
    { $new: true }
  );

  return updatedNote;
};

/* Delete Note */

export const deleteNote = async (id: string) => {
  const deletedNote = await NoteModel.findByIdAndDelete(id);

  return deletedNote;
};
