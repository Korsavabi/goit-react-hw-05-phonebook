import React from 'react';
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Todo.css'
const Todo = ({ deleteTask, contacts }) => {

    return (
        <>
            <TransitionGroup component='ul' className="list">
                {
                    contacts.map((contact) =>
                        <CSSTransition key={contact.id} classNames="list__item" timeout={1000}>
                            <li className='item'>
                                <div className='list__item-box'>
                                    <p className="todo__text">{contact.name}: {contact.number}</p>

                                    <button onClick={() => deleteTask(contact.id)} className='list__item-box-btn'>DELETE</button>
                                </div>
                            </li>
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </>
    );
};

export default Todo;

Todo.propTypes = {
    deleteTask: PropTypes.func.isRequired,
};