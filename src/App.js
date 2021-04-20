import React, { useState } from 'react';
import Form from './Form';

const teamList = [
  { name: 'Connor', role: 'front end', email: 'connor@connor.com', age: '25' },
  { name: 'Michael', role: 'full stack', email: 'michael@michael.com', age: '21' },
  { name: 'Joe', role: 'back end', email: 'joe@joe.com', age: '29' },
];

const initialFormValues = {
  name: '',
  role: '',
  email: '',
  age: '',
}

function App() {
  const [teamMembers, setteamMembers] = useState(teamList)
  const [formValues, setFormValues] = useState(initialFormValues)


  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues, [inputName]: inputValue
    })
  }

  const submitForm = (evt) => {
    evt.preventDefault();

    const newteamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      age: formValues.age.trim(),
      role: formValues.role
    }
    setteamMembers([...teamMembers, newteamMember])
    setFormValues(initialFormValues)
  }

  return (
    <>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      <br/>
      {teamMembers.map((teamMember, index) => {
        return (
          <div key={index} >
            <div>Name: {teamMember.name}</div>
            <div>role: {teamMember.role}</div>
            <div>email: {teamMember.email}</div>
            <div>Age: {teamMember.age}</div><br/>
          </div>
        )
      })}
    </>
  );
}

export default App;