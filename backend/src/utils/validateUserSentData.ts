/*
    Get the title and description
    Validate the title and description 

    If validation fails then throw error
*/

import { BAD_REQUEST } from "../constants/constants";
import { AppError } from "./AppError";

type ValidateUserSentDataArgs = {
  title: string;
  description: string;
};

export const validateUserSentData = ({
  title,
  description,
}: ValidateUserSentDataArgs): ValidateUserSentDataArgs => {
  // Check title length
  if (title.length < 5) {
    throw new AppError(
      false,
      "Title must be atleast 5 characters long!",
      BAD_REQUEST,
      true
    );
  }

  // Check description length
  if (description.length < 15) {
    throw new AppError(
      false,
      "Description must be atleast 15 characters long!",
      BAD_REQUEST,
      true
    );
  }

  return {
    title,
    description,
  };
};
