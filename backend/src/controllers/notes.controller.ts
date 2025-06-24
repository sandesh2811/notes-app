import { CREATED, OK } from "../constants/constants";

import {
  createNoteService,
  deleteNoteService,
  getNotesService,
} from "../services/notes.service";

import { ApiResponse } from "../utils/ApiResponse";

import { RequestHandler } from "express";

/* Get Note */

export const GetNotes: RequestHandler = async (
  request,
  response,
  next
): Promise<void> => {
  try {
    /* Get the notes from the database */

    const notes = await getNotesService();
    ApiResponse({
      response,
      statusCode: OK,
      success: true,
      message: "All notes!",
      data: notes,
    });
  } catch (error) {
    next(error);
  }
};

/* Create Note */

export const CreateNote: RequestHandler<
  {},
  {},
  { title: string; description: string }
> = async (request, response, next): Promise<void> => {
  try {
    /* Getting user sent data */
    const { title, description } = request.body;

    /* Create note in the database */
    const createdNote = await createNoteService({ title, description });

    ApiResponse({
      response,
      statusCode: CREATED,
      success: true,
      message: "Note created successfully!",
      data: createdNote,
    });
  } catch (error) {
    next(error);
  }
};

/* Delete note */

export const DeleteNote: RequestHandler<{ id: string }> = async (
  request,
  response,
  next
): Promise<void> => {
  try {
    /* Get the note id from params */
    const { id } = request.params;

    /* Delete the note from database */
    await deleteNoteService(id);

    ApiResponse({
      response,
      statusCode: OK,
      success: true,
      message: "Note deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};
