import { ChangeEvent } from "react";

//validate and return validation
export const validateText = (event: ChangeEvent<HTMLInputElement>) => {

    const value = event.target.value;

    // Check if email is empty
    if (!value) {
        return {
            valueChange: value,
            error: true,
            errorMessage: "This field is required."
        }
    }

    else {
        return {
            valueChange: value,
            error: false,
            errorMessage: ""
        }
    }

};