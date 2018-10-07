import React, { Component, Fragment } from 'react';
import axios from 'axios';

import ConvertToRoman from '../components/Converters/ConvertToRoman'
import ConvertToInteger from '../components/Converters/ConvertToInteger'

class RomanConverter extends Component {
    state = {
        data: '',
        integer: '',
        roman: '',
        showRoman: true
    }

    onChangeHandler = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitIntegerHandler = async (e) => {
        e.preventDefault();
        const { integer } = this.state;
        try {
            const result = await axios.post(`http://localhost:2222/api/roman`, {integer});
            this.setState({ data: result.data });
        } catch(err) {
            console.log(err);
        }
    }

    submitRomanHandler = async (e) => {
        e.preventDefault();
        const { integer } = this.state;
        try {
            const result = await axios.post(`http://localhost:2222/api/roman`, {integer});
            this.setState({ data: result.data });
        } catch(err) {
            console.log(err);
        }
    }

    toggleConverterHandle = () => {
        this.setState({
            showRoman: !this.state.showRoman
        })
    }

  render() {
      const {
          data,
        //   integer,
        //   roman,
          showRoman
      } = this.state;

      const { status, errors } = data;
      console.log(data);
      if(!status){
          console.log(errors);
      }
    let result =  (
        <ConvertToRoman 
            change={this.onChangeHandler}
            clicked={this.submitIntegerHandler}
            // itemValue={roman}
        />
    )
    if(!showRoman) {
        result = (<ConvertToInteger
            change={this.onChangeHandler}
            clicked={this.submitRomanHandler}
            // itemValue={integer}
        />);
    }
    return(
        <Fragment>
            {result}
            <button onClick={this.toggleConverterHandle}>Reset</button>
        </Fragment>
    );
  }
}

export default RomanConverter;