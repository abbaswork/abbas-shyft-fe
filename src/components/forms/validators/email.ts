import { ChangeEvent } from "react";

//validate and return validation
export const validateEmail = (event: ChangeEvent<HTMLInputElement>) => {

  const value = event.target.value;

  // Regular expression for email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if email is empty
  if (!value) {
    return {
      valueChange: value,
      error: true,
      errorMessage: "'Email is required."
    }
  }

  // Check if email matches the regular expression
  if (!emailRegex.test(value)) {
    return {
      valueChange: value,
      error: true,
      errorMessage: 'Invalid email format. Please enter a valid email address.'
    }
  } else {
    return {
      valueChange: value,
      error: false,
      errorMessage: ""
    }
  }

};