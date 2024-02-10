import React from 'react'
import s from './index.module.css'

export default function AddTeamForm({add_team}) {

  const submit = e => {
    e.preventDefault();

    const { team_name } = e.target;

    const new_team = {
      value: team_name.value,
      label: team_name.value
    }

    add_team(new_team);

    e.target.reset()
  }

  return (
    <form onSubmit={submit} className={s.add_team}>
      <label>
        <p>Add team</p>
        <input type='text' placeholder="Teams's name" name='team_name'></input>
      </label>
      <button>Add team</button>
    </form>
  )
}