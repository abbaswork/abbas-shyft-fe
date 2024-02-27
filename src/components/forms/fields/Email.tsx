// Field.tsx
import React, { useState, ChangeEvent } from 'react';
import { Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}


const EmailInputField: React.FC<FieldProps> = ({ label, name, value, onChange }) => {

  //responsible for internal error handling based on type of field
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

    const value = event.target.value;
    onChange(value);

    // Regular expression for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is empty
    if (!value) {
      setIsError(true);
      setErrorMessage('Email is required.');
    }

    console.log("emailRegex.test(value)", emailRegex.test(value));

    // Check if email matches the regular expression
    if (!emailRegex.test(value)) {
      setIsError(true);
      setErrorMessage('Invalid email format. Please enter a valid email address.');
    }

  };


  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input placeholder={"Enter valid email"} type="email" id={name} name={name} value={value} onChange={handleChange} />
      {isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default EmailInputField;
