// Field.tsx
import React, { useState, ChangeEvent } from 'react';
import { Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { DATE_FORMAT } from '../validators/date';

export interface Field {
  value: string,
  valid: boolean
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  type: 'text' | 'email' | 'birth';
  onChange: (name: string, value: string, valid: boolean) => void;
  validator: (event: ChangeEvent<HTMLInputElement>) => { valueChange: string, error: boolean, errorMessage: string }
}

const InputField: React.FC<FieldProps> = ({ label, name, value, type, onChange, validator }) => {

  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

    // call validator
    const { valueChange, error, errorMessage } = validator(event);

    //update with validated value
    onChange(name, valueChange, !error);

    //set errors if any
    setIsError(error);
    setErrorMessage(errorMessage);

  };

  return (
    <FormControl isInvalid={isError}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} name={name} type={type === "email" ? type : "text"} value={value} onChange={handleChange} maxLength={type === "birth" ? DATE_FORMAT.length : 50} />
      {isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;
