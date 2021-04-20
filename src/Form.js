import React from 'react'


export default function Form({ values, update, submit }) {

  const onChange = evt => {
    const { name, value } = evt.target
    update(name, value);

  }

  return (
    <form>
      <h2>Team Chasers</h2>
      <label>Name
                <input
          type="text"
          onChange={onChange}
          value={values.name}
          name="name"
          placeholder="name"
          maxLength="30"
        />
      </label>
      <label>Email
                <input
          type="text"
          onChange={onChange}
          value={values.email}
          name="email"
          placeholder="email"
          maxLength="30"
        />
      </label>
      <label>Age
                <input
          type="number"
          onChange={onChange}
          value={values.age}
          name="age"
          placeholder="age"
          maxLength="3"
        />
      </label>
      <label>Role
                <select
          onChange={onChange}
          value={values.role}
          name="role">
          <option value='' disabled>--role</option>
          <option value='front end'>front end</option>
          <option value='back end'>back end</option>
          <option value='full stack'>full stack</option>
        </select>
      </label>
      <div>
        <br/>
        <button onClick={submit}>SUBMIT</button>
      </div>
    </form>
  )
}