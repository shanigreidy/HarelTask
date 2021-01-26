import React, { useState } from 'react';
import './style.css'

export default ({ input = {} , handleChange = (e) => {e.preventDefault();}, containerClass = '' ,invalidInputClass = '', checkValidation = false }) => {
    const [isInvalidInput, setIsInvalidInput] = useState(false);

    const handleInputChange = (e) => {
        if (checkValidation) {
            if (e.target.value) {
                setIsInvalidInput(!e.target.validity.valid);
            } else {
                setIsInvalidInput(false);
            }
        }
        
        handleChange(e);
    }
    
    return (
        <div className={containerClass}>
            {
                input.label && <label>{input.label}</label>
            }
            <input type={input.type}
                name={input.name}
                value={input.value}
                onChange={handleInputChange}
                title={input.title}
                pattern={input.pattern}
                required={input.required}
                placeholder={input.placeholder}
            />
            {
                input.isShowInvalidMsg && isInvalidInput &&
                    <div className={invalidInputClass}>{input.title || 'Please match the pattern'}</div>
            }
        </div>
    )
}