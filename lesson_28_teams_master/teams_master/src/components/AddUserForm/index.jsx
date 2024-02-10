import React from 'react'
import s from './index.module.css'
import Select from 'react-select'

export default function AddUserForm({teams, add_user}) {

  const submit = e => {
    e.preventDefault();

    const { user_name, team_name } = e.target;

    const new_user = {
      id: Date.now(),
      user: user_name.value,
      team: team_name.value
    }

    add_user(new_user);

    e.target.reset()
  }

  return (
    <form onSubmit={submit} className={s.add_user}>
      <label>
        <p>Add user</p>
        <input type='text' placeholder="User's name" name='user_name'></input>
      </label>
      <Select options={teams} name='team_name' />
      <button>Add user</button>
    </form>
  )
}