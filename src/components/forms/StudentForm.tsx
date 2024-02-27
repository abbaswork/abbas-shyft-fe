import React, { useState } from 'react';
import InputField, { Field } from "./fields/Input";
import { Button, Flex, useToast } from '@chakra-ui/react';
import { validateText } from './validators/text';
import { validateDateOfBirth } from './validators/date';
import { validateEmail } from './validators/email';

export interface StudentFormData {
    firstName: Field;
    familyName: Field;
    dateOfBirth: Field;
    email: Field;
}

const StudentForm: React.FC = () => {

    const toast = useToast();

    const [formData, setFormData] = useState<StudentFormData>({
        firstName: { value: "", valid: false },
        familyName: { value: "", valid: false },
        dateOfBirth: { value: "", valid: false },
        email: { value: "", valid: false },
    });

    const handleChange = (name: string, value: string, valid: boolean) => {
        setFormData({ ...formData, [name]: { value: value, valid: valid } });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //student notified submission
        toast({
            title: "Student Created",
            description: `${formData.firstName.value}  ${formData.familyName.value} has been created`,
            status: "success",
            duration: 3000,
            position: "top"
        });
    };

    const AllValid = formData.firstName.valid && formData.familyName.valid;


    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label="FirstName" name="firstName" type="text" value={formData.firstName.value}
                onChange={(name: string, value: string, valid: boolean) => handleChange(name, value, valid)}
                validator={validateText}
            />
            <InputField
                label="FamilyName" name="familyName" type="text" value={formData.familyName.value}
                onChange={(name: string, value: string, valid: boolean) => handleChange(name, value, valid)}
                validator={validateText}
            />

            <InputField
                label="Date of Birth" name="dateOfBirth" type="text" value={formData.dateOfBirth.value}
                onChange={(name: string, value: string, valid: boolean) => handleChange(name, value, valid)}
                validator={validateDateOfBirth}
            />

            <InputField
                label="Email" name="email" type="email" value={formData.email.value}
                onChange={(name: string, value: string, valid: boolean) => handleChange(name, value, valid)}
                validator={validateEmail}
            />

            <Flex justifyContent="flex-end" pt={5}>
                <Button type="submit" isDisabled={!AllValid}>
                    Submit
                </Button>
            </Flex>
        </form>
    );
};

export default StudentForm;
