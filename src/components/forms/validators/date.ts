import { ChangeEvent } from "react";

export const DATE_FORMAT = 'MM/DD/YYYY';

//parse date from string format
const parseDate = (formattedDate: string) => {
  try {
    return new Date(formattedDate);
  } catch (error) {
    return null;
  }
};

//calculate age from a parsed Date
const calculateAge = (date: Date) => {
  const today = new Date();
  const birthYear = date.getFullYear();
  const currentYear = today.getFullYear();
  const age = currentYear - birthYear;
  return age;
};

//Date field formatter to support 'MM/DD/YYYY'
const formatDate = (value: string) => {

  //set vars
  let formattedValue = value;
  let dateLength = value.length;

  //check if last char added is a number, if not return everything before it
  if (isNaN(Number(value.charAt(dateLength - 1))))
    return value.slice(0, dateLength - 1);

  //add slash after 2 or 5 characters
  if (dateLength === 2 || dateLength === 5)
    formattedValue += "/";

  return formattedValue;
};

//return validation
export const validateDateOfBirth = (event: ChangeEvent<HTMLInputElement>) => {

  const value = event.target.value;
  let formattedValue = value;

  //check for empty value
  if (value === '') {
    return {
      valueChange: "",
      error: true,
      errorMessage: "Date of Birth Required"
    }
  }

  //format the date and save to field
  try {
    //format the date
    formattedValue = formatDate(value);
  } catch (e) {
    return {
      valueChange: formattedValue,
      error: true,
      errorMessage: `Incorrect format ${DATE_FORMAT}`
    }
  }

  //if the date field is complete, parse and check age
  if (formattedValue.length === DATE_FORMAT.length) {

    try {
      //parse and get age if parsed correctly
      const parsedDate = parseDate(formattedValue);

      if (parsedDate && calculateAge(parsedDate) < 10) {
        return {
          valueChange: formattedValue,
          error: true,
          errorMessage: "Must be older then 10"
        }
      }

    } catch (e) {
      return {
        valueChange: formattedValue,
        error: true,
        errorMessage: `Incorrect format ${DATE_FORMAT}`
      }
    }

  }

    return {
      valueChange: formattedValue,
      error: false,
      errorMessage: ""
    }
};