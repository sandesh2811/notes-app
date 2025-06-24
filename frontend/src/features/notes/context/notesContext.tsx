import { getUserNotes } from "../api/getUserNotes";

import type { Note } from "../../../HomePage";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type NotesContext = {
  notes: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;
  isLoading: boolean;
  errorMessage: string;
};

const NotesContext = createContext<NotesContext | null>(null);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  /* Get the user created notes */
  const getUserCreatedNotes = async () => {
    setLoading(true);

    /* Api call */
    const { success, message, data } = await getUserNotes();

    if (!success) {
      setErrorMessage(message);
      setLoading(false);
    }

    /* Set the incoming data in local state */
    setNotes(data);

    setLoading(false);
  };

  useEffect(() => {
    getUserCreatedNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, setNotes, isLoading, errorMessage }}>
      {children}
    </NotesContext.Provider>
  );
};

/* For using the context */
export const useNoteContext = () => {
  const context = useContext(NotesContext);

  if (!context) throw new Error("Note context must be used inside provider!");

  return context;
};
