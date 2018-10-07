import React, { Component } from 'react';
import axios from 'axios';

import Input from '../components/UI/Input';


class RomanConverter extends Component {
    state = {
        integer: '',
        data: {}
    }

    onChangeHandler = (e) => {
        this.setState({
            integer: e.target.value
        })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        const { integer } = this.state;
        try {
            const result = await axios.post(`http://localhost:2222/api/roman`, {integer});
            this.setState({ data: result.data });
        } catch(err) {
            console.log(err);
        }
    }

  render() {
      const { integer, data } = this.state;
      const { status, errors } = data;
      console.log(data)
      if(!status){
          console.log(errors);
      }

    return (
      <form>
        <Input 
            type="text" 
            name='integer' 
            value={integer} 
            change={this.onChangeHandler}
            label = "Integer to roman"
            placeholder="Enter an "
        />
        {" "}
        <Input
            type="submit"
            value="Get Roman"
            clicked={this.submitHandler}
        />    
      </form>
    )
  }
}

export default RomanConverter;