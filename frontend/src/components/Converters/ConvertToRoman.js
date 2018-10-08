import React from 'react'

import Input from '../UI/Input';

import './Convertor.css';

const convertToRoman = ({
    change,
    clicked,
    userInput,
    error,
}) => {
  return (
    <form>
        <label>Integer to Roman </label>
        <div className="form-group">
            <Input 
                type="text" 
                name='integer' 
                itemValue={userInput} 
                change={change}
                placeholder="Enter an integer..."
        />
        {"  "}
            <Input
                type="submit"
                value="Get Roman"
                clicked={clicked}
            />    
        </div>
        {error && userInput.length > 0  && <p className="error-msg">{error.message}</p>}
    </form>
)
};

export default convertToRoman;
