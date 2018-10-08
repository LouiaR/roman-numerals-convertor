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
        <label> <h2>Integer to Roman</h2> </label>
        <div className="form-group">
            <Input 
                type="number" 
                name='integer' 
                itemValue={userInput} 
                change={change}
                placeholder="Enter an integer..."
        />
        {"  "}
            <Input
                type="submit"
                itemValue="Convert to Roman"
                clicked={clicked}
            />    
        </div>
        {error && userInput.length > 0  && <p className="error-msg">{error.message}</p>}
    </form>
)
};

export default convertToRoman;
