import HomePage from "./HomePage";
import NotesPage from "./features/notes/components/NotesPage";
import { NotesProvider } from "./features/notes/context/notesContext";

import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <NotesProvider>
      <Toaster />
      <div className="px-2 py-8 bg-[#282828]  min-h-screen">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
          <h1 className="text-3xl text-white font-bold tracking-tight md:text-center">
            Simple full-stack notes app
          </h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/createNote" element={<NotesPage />} />
          </Routes>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
