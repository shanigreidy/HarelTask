import React from 'react';
import Input from '../../global/Input'
import { inputs } from './config'

export default ({ inputsFields = [] , handleChange = (e) => {e.preventDefault();} }) => {
    const updatedInputs = inputs.map(input => {
        if (inputsFields[input.name]) {
            return {...input, value: inputsFields[input.name]}
        }
    })

    return updatedInputs.map((input, idx) => {
        return (
            <Input
                key={idx} 
                input={input} 
                handleChange={handleChange}  
                containerClass="form-group" 
                invalidInputClass="invalid-feedback d-block"
                checkValidation={true}
            />
        )
    })
}