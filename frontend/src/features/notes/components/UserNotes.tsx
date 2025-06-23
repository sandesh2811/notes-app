import { GoTrash } from "react-icons/go";

const UserNotes = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-white">Your notes</h3>
      <div className="max-w-[400px] bg-white p-4 rounded-md flex flex-col gap-4">
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex justify-between md:items-center flex-col md:flex-row ">
            <h4 className="text-xl font-medium">Notes title</h4>
            <span className="text-sm ">
              Last updated on: <b>blah</b>
            </span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            fuga quaerat rem magni beatae totam nobis aliquam quibusdam
            nesciunt, quos illo officiis, incidunt sapiente architecto pariatur
            nisi, placeat saepe. Suscipit?
          </p>
        </div>

        <div className="flex justify-end">
          <span className=" cursor-pointer bg-red-500 text-white  rounded-full p-2">
            <GoTrash />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserNotes;
