import React, { Component } from 'react';
import Form from '../Form/Form';
import Todo from '../Todo/Todo';
import SearchForm from '../SearchForm/SearchForm';

import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';
class TodoList extends Component {

    state = {
        contacts: [],
        filter: ''
    }
    componentDidMount(){
        const perslistedContacts = localStorage.getItem('contacts');
       if(perslistedContacts){
           this.setState({
            contacts: JSON.parse(perslistedContacts) 
           })
       }
    }
    componentDidUpdate(){
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }

    addTask = (objTask) => {
        const { name } = objTask;
        if (this.state.contacts.every((contact) => !contact.name.includes(name))) {
            this.setState((prev) => ({
                contacts: [...prev.contacts, { ...objTask, id: uuidv4() }]
            }))
        } else alert(`${name} is already in contacts`);
    }

    deleteTask = (id) => {
        this.setState((prev) => ({
            contacts: prev.contacts.filter((el) => el.id !== id)
        }))
    }
    
    searchItem = () => {
        return this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    }
    inputHandler = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value
        })
    }
    render() {
        const { contacts, filter } = this.state;
        return (
            <div className="box__form">
                <div className="form__user-phone">
                    <h2 className="title">Phonebook:</h2>
                    <Form addTask={this.addTask} />
                </div>
                <h2 className="title">Contacts:</h2>
                <SearchForm filter={filter} inputHandler={this.inputHandler} />

                <Todo deleteTask={this.deleteTask} contacts={filter ? this.searchItem() : contacts} />
            </div>
        );
    }
}

export default TodoList;
