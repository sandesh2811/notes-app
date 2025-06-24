import NotesForm from "./NotesForm";

import { Link } from "react-router-dom";

const NotesPage = () => {
  return (
    <div className=" flex flex-col items-center gap-4">
      {/* HOME BUTTON */}

      <div className="flex w-full">
        <Link
          to="/"
          className="w-[150px] text-center bg-white  text-[#282828] p-3 rounded-sm font-medium cursor-pointer"
        >
          Home
        </Link>
      </div>

      {/* CREATE NOTE WRAPPER */}

      <div className="bg-white w-full md:w-[550px] lg:w-[600px] md:p-8 text-[#282828] border-[1.2px] border-[#282828]/20 rounded-md flex flex-col gap-4 p-4">
        <h2 className="text-xl md:text-2xl tracking-tight font-semibold">
          Create a note
        </h2>

        {/* CREATE NOTE FORM */}
        <NotesForm />
      </div>
    </div>
  );
};

export default NotesPage;
