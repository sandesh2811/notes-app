import { Router } from "express";
import {
  CreateNote,
  DeleteNote,
  GetNotes,
  UpdateNote,
} from "../controllers/notes.controller";

const notesRouter = Router();

notesRouter.route("/").get(GetNotes);
notesRouter.route("/").post(CreateNote);
notesRouter.route("/:id").delete(DeleteNote);
notesRouter.route("/:id").patch(UpdateNote);

export default notesRouter;
