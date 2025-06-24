import { deleteNote } from "../api/deleteNote";

import type { Note } from "../../../HomePage";

import { useNoteContext } from "../context/notesContext";

import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { useCallback } from "react";

const UserNotes = () => {
  /* Get required values form context */
  const { isLoading, errorMessage, notes, setNotes } = useNoteContext();

  /* Delete a note */
  const handleNoteDelete = useCallback(async (noteId: string) => {
    /* Remove note from local state */
    setNotes(notes.filter((note) => note._id !== noteId));

    /* Api call */
    const { success, message } = await deleteNote(noteId);

    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  }, []);

  /* Handle loading state */
  if (isLoading)
    return <span className="text-white ">Notes are loading...</span>;

  /* Handle error state */
  if (errorMessage) return <span className="text-white ">{errorMessage}</span>;

  return (
    <div className="flex flex-col gap-4">
      {/* TITLE AND CREATE NOTE BUTTON */}

      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold text-white">Your notes</h3>
        <Link
          to="/createNote"
          className="w-[150px] text-center bg-white  text-[#282828] p-3 rounded-sm font-medium cursor-pointer"
        >
          Create note
        </Link>
      </div>

      {/* ALL NOTES */}

      <div className="flex gap-4 flex-col md:flex-row flex-wrap md:justify-center lg:justify-start">
        {notes.map((note) => (
          <SingleNote
            key={note._id}
            note={note}
            handleNoteDelete={handleNoteDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default UserNotes;

/* SINGLE NOTE COMPONENT */

interface SingleNoteProps {
  note: Note;
  handleNoteDelete: (noteId: string) => void;
}

const SingleNote = ({ note, handleNoteDelete }: SingleNoteProps) => {
  return (
    <div className="w-full md:w-[450px] bg-white p-4 rounded-md flex flex-col justify-between gap-4 min-h-[20vh]">
      <div className="flex flex-col gap-1 md:gap-2">
        <div className="flex justify-between md:items-center flex-col md:flex-row ">
          <h4 className="text-xl font-medium">{note.title}</h4>
          <span className="text-sm ">
            Updated on: <b>{new Date(note.updatedAt).toDateString()}</b>
          </span>
        </div>
        <p className="text-sm">{note.description}</p>
      </div>

      <div className="flex justify-end gap-2">
        <span
          onClick={() => handleNoteDelete(note._id)}
          className=" cursor-pointer bg-red-500 text-white rounded-full p-2"
        >
          <GoTrash />
        </span>
      </div>
    </div>
  );
};
