import UserNotes from "./features/notes/components/UserNotes";
import NotesPage from "./features/notes/components/NotesPage";

const HomePage = () => {
  return (
    <div className="px-2 py-8 bg-[#282828]  min-h-screen">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <h1 className="text-3xl text-white font-bold tracking-tight md:text-center">
          Simple full-stack notes app
        </h1>

        <div className="flex gap-10 justify-evenly flex-col">
          <NotesPage />
          <UserNotes />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
