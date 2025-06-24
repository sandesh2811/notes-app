export const getUserNotes = async () => {
  try {
    const response = await fetch(`http://localhost:5000/notes`);

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

    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: false,
      message: "Internal sever error!",
    };
  }
};
