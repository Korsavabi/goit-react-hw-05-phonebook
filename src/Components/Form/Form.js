import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Button = styled.button`
    outline: none;
    border: 1px solid black;
    cursor: pointer;
    padding: 10px 20px;
    background: rgb(71, 71, 255);
    box-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);
    margin: 15px;
    padding: 20px 30px;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    transition: .2s linear;
    &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    &:focus{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;
const Input = styled.input`
width: 300px;
    height: 25px;
    padding: 10px;
    font-size: 28px;
    box-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    &:focus{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

`;
const Text = styled.p`
font-size: 36px;
    font-weight: 900;
`;
const TodoForm = styled.form`
border: 1px solid black;
width: 500px;
padding: 50px;
margin: 0 auto;
`;

const formInitalState = {
    name: '',
    number: '',
}
const Form = ({ addTask }) => {
    const [{ name, number }, setForm] = useState({ ...formInitalState })
    const submitHendler = (e) => {
        e.preventDefault();
        const singleTask = {
            name: name,
            number: number,
            id: uuidv4()
        }
        addTask(singleTask)
        setForm({ ...formInitalState })
    }
    const inputHandler = ({ target }) => {
        const { value, name } = target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }
    return (
        <>
            <TodoForm autoComplete="on" onSubmit={submitHendler}>
                <Text className="form__text">Name / Surname</Text>
                <Input className="input__form"
                    placeholder='Name'
                    type="text"
                    name="name"
                    value={name}
                    onChange={inputHandler}
                />
                <Text className="form__text">Number</Text>
                <Input className="input__form"
                    placeholder='Number'
                    type="tel"
                    name="number"
                    onChange={inputHandler}
                    value={number} />
                <Button type='submit' className="form__btn">Add contact</Button>
            </TodoForm>
        </>
    );
};

export default Form;