import React, { Component, Fragment } from 'react';
import axios from 'axios';

import ConvertToRoman from '../components/Converters/ConvertToRoman';
import ConvertToInteger from '../components/Converters/ConvertToInteger';
import Result from '../components/Result';
import './index.css';

class RomanConverter extends Component {
    state = {
        data: '',
        integer: '',
        roman: '',
        showRoman: true,
        isResult: false,
        errors: '',
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errors: ''
        })
    }

    submitIntegerHandler = async (e) => {
        e.preventDefault();
        const { integer } = this.state;
        try {
            const result = await axios.post(`http://localhost:2222/api/roman`, {
                integer
            });
            this.setState({ 
                data: result.data,
                isResult: true,
                integer: ''
            });
        } catch(err) {
            this.setState({
                errors: err.response.data
            })
        }
    }

    submitRomanHandler = async (e) => {
        e.preventDefault();
        const { roman } = this.state;
        try {
            const result = await axios.post(`http://localhost:2222/api/integer`, {
                roman
            });
            this.setState({ 
                data: result.data,
                isResult: true,
                roman: ''
                });
        } catch(err) {
            this.setState({
                errors: err.response.data
            })
        }
    }

    toggleConverterHandle = () => {
        this.setState({
            showRoman: !this.state.showRoman,
        })
    }

    render() {
        const {
            data,
            errors,
            showRoman,
            isResult,
            integer,
            roman,
        } = this.state;

        let result = null;
        if(data.success) {
            result = (
                isResult && 
                <Result 
                    roman={data.roman}
                    integer={data.integer}
                    error={errors}
                />
            );
        } 
        let displayInpuField =  (
            <ConvertToRoman 
                change={this.onChangeHandler}
                clicked={this.submitIntegerHandler}
                userInput={integer}
                error={errors}
            />
        )
        if(!showRoman) {
            displayInpuField = (<ConvertToInteger
                change={this.onChangeHandler}
                clicked={this.submitRomanHandler}
                userInput={roman}
                error={errors}
            />);
        }
        return(
            <Fragment>
                <div className="header-title"> 
                    <h1>Welcome!</h1> 
                    <h4>What you can:</h4> <br/>
                    <p>Convert integer to roman </p>
                    <p>Convert roman to integer </p>
                    <p>Press the button below to choose conversion</p>
                    <button 
                        className="btn"
                        onClick={this.toggleConverterHandle}
                    >
                        {showRoman ? 'Convert Roman to Integer': 'Convert Interger to Roman'}
                    </button>
                </div>
                {displayInpuField}
                {result}
            </Fragment>
        );
    }
}

export default RomanConverter;