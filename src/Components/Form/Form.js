import React, { Component } from 'react';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

import './Form.css';

class Form extends Component {
    formInitalState = {
        name: '',
        number: '',
    }
    state = {
        name: '',
        number: '',
    }
  
    submitHandler = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        const singleTask = {
            name,
            number
        }
        this.props.addTask(singleTask);
        this.setState({
            ...this.formInitalState
        })
    }
    inputHandler = ({ target }) => {
        const { value, name  } = target;
        this.setState({
            [name]: value
        })
    }
    render() {
        const { name,number} = this.state;
        return (
            <form onSubmit={this.submitHandler} >
                <p className="form__text">Name / Surname</p>
                <input className="input__form"
                    placeholder='Name'
                    type="text"
                    name="name"
                    value={name} 
                    onChange={this.inputHandler}
                    />
                <p className="form__text">Number</p>
                <input className="input__form"
                    placeholder='Number'
                    type="number"
                    name="number"
                    onChange={this.inputHandler}
                    value={number} />
                <button type='submit' className="form__btn">Add contact</button>
            </form>

        )
    }
}

export default Form;

Form.propTypes ={
    addTask:  PropTypes.func.isRequired,
}