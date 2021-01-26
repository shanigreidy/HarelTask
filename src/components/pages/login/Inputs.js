import React from 'react';
import Input from '../../global/Input'
import { inputs } from './config'

export default ({ inputsFields = [] , handleChange = (e) => {e.preventDefault();} }) => {
    const updatedInputs = [];
    
    for (const input of inputs) {
        if (input.name in inputsFields) {
            updatedInputs.push({...input, value: inputsFields[input.name]})
        }
        
    }

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