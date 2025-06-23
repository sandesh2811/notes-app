import { CREATED, OK } from "../constants/constants";

import {
  createNoteService,
  deleteNoteService,
  getNotesService,
  updateNoteService,
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
    await createNoteService({ title, description });

    ApiResponse({
      response,
      statusCode: CREATED,
      success: true,
      message: "Note created successfully!",
    });
  } catch (error) {
    next(error);
  }
};

/* Update Note */

export const UpdateNote: RequestHandler<
  { id: string },
  {},
  { title?: string; description?: string }
> = async (request, response): Promise<void> => {
  /* Get the note id from params */
  const { id } = request.params;

  /* Get the title and description if available from request body */
  const { title, description } = request.body;

  /* Update note in database */
  const updatedNote = await updateNoteService({ id, title, description });

  ApiResponse({
    response,
    statusCode: OK,
    success: true,
    message: "Note updated successfully!",
    data: updatedNote,
  });
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
