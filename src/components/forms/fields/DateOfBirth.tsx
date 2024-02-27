// Field.tsx
import React, { useState, ChangeEvent } from 'react';
import { Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const DATE_FORMAT = 'MM/DD/YYYY';


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



const DateOfBirthInputField: React.FC<FieldProps> = ({ label, name, value, onChange }) => {

  //responsible for internal error handling based on type of field
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

    const value = event.target.value;
    let formattedValue = value;

    //check for empty value
    if (value === '') {
      onChange("");
      setIsError(true);
      return
    }

    //format the date and save to field
    try {
      //format the date
      const formattedValue = formatDate(value);
      onChange(formattedValue);
    } catch (e) {
      setIsError(true);
      setErrorMessage(`Incorrect format ${DATE_FORMAT}`);
    }

    //if the date field is complete, parse and check age
    if (formattedValue.length === DATE_FORMAT.length) {

      try {
        //parse and get age if parsed correctly
        const parsedDate = parseDate(formattedValue);

        if (parsedDate && calculateAge(parsedDate) < 10) {
          setErrorMessage("Must be older then 10");
          setIsError(true);
        }

      } catch (e) {
        setIsError(true);
        setErrorMessage(`Incorrect format ${DATE_FORMAT}`);
        return;
      }

    }
  };


  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input placeholder={DATE_FORMAT} id={name} name={name} type={'text'} value={value} onChange={handleChange} maxLength={DATE_FORMAT.length} />
      {isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default DateOfBirthInputField;
