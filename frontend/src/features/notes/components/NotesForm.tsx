import { useState } from "react";

type NotesFormValues = {
  title: string;
  description: string;
};

const NotesForm = () => {
  const [formValues, setFormValues] = useState<NotesFormValues>({
    title: "",
    description: "",
  });

  return (
    <form className="flex flex-col gap-4">
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

      <button className="w-full bg-[#282828] text-white p-3 rounded-sm font-medium">
        Create
      </button>
    </form>
  );
};

export default NotesForm;
