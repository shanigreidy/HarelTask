import React from 'react';
import Input from '../Input'
import { inputs } from './config'

export default ({ inputsFields = [] , handleChange = (e) => {e.preventDefault();} }) => {
    const updatedInputs = inputs.map(input => {
        return {...input, value: inputsFields[input.name]}
    })

    return updatedInputs.map(input => {
        return (
            <Input 
                input={input} 
                handleChange={handleChange}  
                containerClass="form-group" 
                invalidInputClass="invalid-feedback d-block"
            />
        )
    })
}