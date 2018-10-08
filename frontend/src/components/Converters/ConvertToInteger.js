import React from 'react'

import Input from '../UI/Input';

import './Convertor.css';

const convertToInteger = ({
    change,
    clicked,
    userInput,
    error
}) => {
    return (
        <form>
            <label>Roman to Integer </label>
            <div className="form-group">
                <Input 
                    type="text" 
                    name='roman' 
                    itemValue={userInput} 
                    change={change}
                    placeholder="Enter a roman number... "
                />
            {" "}
                <Input
                    type="submit"
                    value="Get Roman"
                    clicked={clicked}
                />
            </div>
            {error && userInput.length > 0  && <p className="error-msg">{error.message}</p>}    
        </form>
    );
};

export default convertToInteger;
