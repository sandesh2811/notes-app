import { Router } from "express";
import {
  CreateNote,
  DeleteNote,
  GetNotes,
} from "../controllers/notes.controller";

const notesRouter = Router();

notesRouter.route("/").get(GetNotes);
notesRouter.route("/").post(CreateNote);
notesRouter.route("/:id").delete(DeleteNote);

export default notesRouter;
