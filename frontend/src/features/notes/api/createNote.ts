import type { NotesFormValues } from "../components/NotesForm";

export const createNote = async (formValues: NotesFormValues) => {
  try {
    const response = await fetch(`http://localhost:5000/notes`, {
      body: JSON.stringify(formValues),
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    /* Handle error */
    if (!response.ok) {
      const errorData = await response.json();

      const error = new Error(errorData.message || "Couldn't get notes!");

      throw error;
    }

    const jsonData = await response.json();

    return {
      success: jsonData.success,
      message: jsonData.message,
      data: jsonData.data,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Internal Server Error!",
    };
  }
};
