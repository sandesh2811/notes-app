import { BAD_REQUEST, NOT_FOUND } from "../constants/constants";

import {
  createNote,
  deleteNote,
  getNotes,
} from "../repositories/notes.repository";

import { AppError } from "../utils/AppError";
import { validateUserSentData } from "../utils/validateUserSentData";

/* Get All Notes */

/*
  Find all the notes in the database
  If notes are not available then throw respective error
  Else return notes
*/

export const getNotesService = async () => {
  const notes = await getNotes();

  /* If no notes then send respective response */
  if (notes.length === 0)
    throw new AppError(false, "Notes not found!", NOT_FOUND, true);

  return notes;
};

/* Create Note */

/*
  Get the title and description 
  Check if title and description are available or note
  If not then throw respective error

  Validate the data
  If data is invalid then throw respective error
  Else create note in the database
    
  If creation is successful then throw respective error
*/

type CreateNoteServiceArgs = {
  title: string;
  description: string;
};

export const createNoteService = async ({
  title,
  description,
}: CreateNoteServiceArgs) => {
  /* Check if title and description is available or not */
  if (!title || !description)
    throw new AppError(false, "Missing fields!", BAD_REQUEST, true);

  /* Validate the user sent data */
  const { title: validTitle, description: validDescription } =
    validateUserSentData({ title, description });

  const createdNote = await createNote({ validTitle, validDescription });

  if (!createdNote)
    throw new AppError(false, "Couldn't create note!", BAD_REQUEST, true);

  return createdNote;
};

/* Delete Note */

/*
  Get the note id
  If note id is not available then throw respective error
  Else query database to find and delete the note based on notes id

  If note couldn't be deleted then throw respective error
*/

export const deleteNoteService = async (noteId: string): Promise<void> => {
  /* Check if note id exists */
  if (!noteId) throw new AppError(false, "Invalid note id!", BAD_REQUEST, true);

  const deletedNote = await deleteNote(noteId);

  if (!deletedNote)
    throw new AppError(false, "Couldn't delete note!", BAD_REQUEST, true);
};
