import NotesForm from "./NotesForm";

const NotesPage = () => {
  return (
    <div className=" flex flex-col items-center ">
      <div className="bg-white w-full md:w-[550px] lg:w-[600px] md:p-8 text-[#282828] border-[1.2px] border-[#282828]/20 rounded-md flex flex-col gap-4 p-4">
        <h2 className="text-xl md:text-2xl tracking-tight font-semibold">
          Create a note
        </h2>

        <NotesForm />
      </div>
    </div>
  );
};

export default NotesPage;
