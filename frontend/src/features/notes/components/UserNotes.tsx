import { GoTrash } from "react-icons/go";
import { useEffect, useState } from "react";
import { deleteNote } from "../api/deleteNote";

type Note = {
  _id: string;
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
};

const UserNotes = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const response = await fetch(`http://localhost:5000/notes`);

        /* Handle error */
        if (!response.ok) {
          const errorData = await response.json();

          const error = new Error(errorData.message || "Couldn't get notes!");

          throw error;
        }

        const jsonData = await response.json();

        setNotes(jsonData.data);
      } catch (error) {
        if (error instanceof Error) setErrorMessage(error.message);

        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (isLoading)
    return <span className="text-white ">Notes are loading...</span>;

  if (errorMessage) return <span className="text-white ">{errorMessage}</span>;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-white">Your notes</h3>

      <div className="flex gap-4 flex-col md:flex-row ">
        {notes.map((note) => (
          <SingleNote key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default UserNotes;

/* SINGLE NOTE COMPONENT */

const SingleNote = ({ note }: { note: Note }) => {
  const handleNoteDelete = async () => {
    const { success, message } = await deleteNote(note._id);

    console.log(success, message);
  };

  return (
    <div className="w-[450px] bg-white p-4 rounded-md flex flex-col justify-between gap-4 min-h-[20vh]">
      <div className="flex flex-col gap-1 md:gap-2">
        <div className="flex justify-between md:items-center flex-col md:flex-row ">
          <h4 className="text-xl font-medium">{note.title}</h4>
          <span className="text-sm ">
            Updated on: <b>{new Date(note.updatedAt).toDateString()}</b>
          </span>
        </div>
        <p className="text-sm">{note.description}</p>
      </div>

      <div className="flex justify-end">
        <span
          onClick={handleNoteDelete}
          className=" cursor-pointer bg-red-500 text-white rounded-full p-2"
        >
          <GoTrash />
        </span>
      </div>
    </div>
  );
};
