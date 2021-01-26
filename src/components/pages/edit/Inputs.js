import React, { useEffect, useState } from 'react';
import Input from '../../global/Input'

export default ({ objData = {}, handleChange = (e) => {e.preventDefault();} }) => {
    const [inputs, setInputs] = useState([]);

    const setInputsData = () => {
        const inputsData = [];

        for (const [key, value] of Object.entries(objData)) {
            if (key !== 'id') {
                inputsData.push({type: 'text', name: key, value, placeholder: key})
            }
        }
        
        setInputs(inputsData);
    }

    useEffect(() => {
        setInputsData();
    }, [objData]);


    return inputs.map((input, idx) => {
        return (
            <Input 
                key={idx}
                input={input} 
                handleChange={handleChange}  
                containerClass="form-group" 
            />
        )
    })
}