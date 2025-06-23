export const deleteNote = async (noteId: string) => {
  try {
    const response = await fetch(`http://localhost:5000/notes/${noteId}`, {
      method: "DELETE",
      credentials: "include",
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
