import UserNotes from "./features/notes/components/UserNotes";

export type Note = {
  _id: string;
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
};

const HomePage = () => {
  return (
    <div className="flex gap-10 justify-evenly flex-col">
      <UserNotes />
    </div>
  );
};

export default HomePage;
