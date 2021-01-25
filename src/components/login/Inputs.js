import React from 'react';
import Input from '../Input'

export default ({ inputsFields = [] , handleChange = (e) => {e.preventDefault();} }) => {
    const inputs = [
        {
            label: 'email',
            type: 'email',
            name: 'email',
            value: inputsFields.email,
            required: true,
            isShowInvalidMsg: true
        },
        {
            label: 'first name',
            type: 'text',
            name: 'firstName',
            value: inputsFields.firstName,
            pattern: "[a-zA-Z\u0590-\u05FF]{2,15}",
            title: 'Insert 3-15 characters',
            required: true,
            isShowInvalidMsg: true
        },
        {
            label: 'last name',
            type: 'text',
            name: 'lastName',
            value: inputsFields.lastName,
            pattern: "[a-zA-Z\u0590-\u05FF]{2,15}",
            title: 'Insert 3-15 characters',
            required: true,
            isShowInvalidMsg: true
        },
        {
            label: 'password',
            type: 'password',
            name: 'password',
            value: inputsFields.password,
            pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$",
            title: "Minimum 8 characters, at least one uppercase and lowercase letter, and one number",
            required: true,
            isShowInvalidMsg: true
        }
    ];

    return inputs.map(input => {
        return (
            <Input input={input} 
                handleChange={handleChange}  
                containerClass="form-group" 
                invalidInputClass="invalid-feedback d-block"
            />
        )
    })
}