import React, { useEffect, useState } from 'react';
import Section from '../Section/Section';
import Form from '../Form/Form';
import FilterForm from '../FilterForm/FilterForm';
import PhoneItem from '../PhoneItem/PhoneItem';
import transition from "styled-transition-group";

const Div = transition.div.attrs({
    unmountOnExit: true,
    mountOnEntry: true,
    timeout: 250,
})`
position: absolute;
width: 300px;
top: 10px;
left: 10px;
padding: 10px 20px;
background: rgb(71, 71, 255);
box-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);
border-radius: 8px;
text-align: center;
color: white;
  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Title = transition.h1.attrs({
    // unmountOnExit: true,
    // // mountOnEntry: true,
    timeout: 500,
})`
font-size: 38px;
text-align: center;
&:appear{
    animation: focus-in-contract-bck 1000ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
  &:appearActive {
    animation: focus-in-contract-bck 1000ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  @keyframes focus-in-contract-bck {
    0% {
      letter-spacing: 1em;
              transform: translateZ(300px);
              filter: blur(12px);
      opacity: 0;
    }
    100% {
              transform: translateZ(12px);
              filter: blur(0);
      opacity: 1;
    }
  }
`;

const TodoPhone = () => {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const perslistedContacts = localStorage.getItem('contacts');
        if (perslistedContacts) {
            setContacts(JSON.parse(perslistedContacts))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    })
    useEffect(() => {
        if (!!error) {
            setTimeout(() => {
                setError(false)
            }, 1000)
        }
    }, [error])

    const addTask = (objTask) => {
        const { name } = objTask;
        if (!name) {
            return;
        }
        if (contacts.every((contact) => !contact.name.includes(name))) {
            setContacts((prev) => ([...prev, objTask]))
        } else {
            setError(`${name} is already in contacts`)
        }
    }
    const addFilter = (query) => {
        setFilter(query)
    }
    const getFilter = () => filter;
    const deleteTask = (id) => {
        setContacts(prev => prev.filter((el) => el.id !== id))
    }

    const searchItem = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()));
    }

    return (
        <>
            <Div in={!!error}>
                <p>{error}</p>
            </Div>
            <Title in={true} appear={true}>Phonebook</Title>
            <Form addTask={addTask} />
            <Section title={'Contacts:'}>
                {contacts.length > 1 &&<FilterForm getFilter={getFilter} addFilter={addFilter} />}
                <PhoneItem deleteTask={deleteTask} contacts={filter ? searchItem() : contacts} />
            </Section>
        </>
    );
};

export default TodoPhone;