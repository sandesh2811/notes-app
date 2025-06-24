import { createNote } from "../api/createNote";

import { useNoteContext } from "../context/notesContext";

import toast from "react-hot-toast";
import { useState, type FormEvent } from "react";

export type NotesFormValues = {
  title: string;
  description: string;
};

const NotesForm = () => {
  /* Get notes from context */
  const { notes, setNotes } = useNoteContext();

  const initialState = { title: "", description: "" };
  const [formValues, setFormValues] = useState<NotesFormValues>(initialState);

  /* Handle note creation */
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* Api call */
    const { success, message, data } = await createNote(formValues);

    if (success) {
      toast.success(message);

      /* Update the existing notes */
      setNotes([...notes, data]);

      /* Reset the form values */
      setFormValues(initialState);
    } else {
      toast.error(message);
    }
  };

  return (
    <form
      action="#"
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="note-title" className="md:text-lg font-medium">
          Title
        </label>
        <input
          type="text"
          id="note-title"
          name="note-title"
          value={formValues.title}
          onChange={(e) =>
            setFormValues({ ...formValues, title: e.target.value })
          }
          className=" p-1 md:p-2 border-[1.2px] border-[#282828]/50 rounded-sm"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="note-description" className="md:text-lg font-medium">
          Description
        </label>
        <textarea
          id="note-description"
          name="note-description"
          rows={4}
          cols={8}
          value={formValues.description}
          onChange={(e) =>
            setFormValues({ ...formValues, description: e.target.value })
          }
          className="p-1 md:p-2 border-[1.2px] border-[#282828]/50 rounded-sm"
          required
        />
      </div>

      <button className="w-full bg-[#282828] text-white p-3 rounded-sm font-medium cursor-pointer">
        Create
      </button>
    </form>
  );
};

export default NotesForm;
