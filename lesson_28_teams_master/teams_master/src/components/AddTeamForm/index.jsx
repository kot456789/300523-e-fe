// // Урок от 08.02.2024

// import React from 'react'
// import s from './index.module.css'

// export default function AddTeamForm({add_team}) {

//   const submit = e => {
//     e.preventDefault();

//     const { team_name } = e.target;

//     const new_team = {
//       value: team_name.value,
//       label: team_name.value
//     }

//     add_team(new_team);

//     e.target.reset()
//   }

//   return (
//     <form onSubmit={submit} className={s.add_team}>                
//       <label>        
//         <p>Add team</p> 
//         <input type='text' placeholder="Teams's name" name='team_name'></input>
//       </label>                     
//       <button>Add team</button>
//     </form>
//   )                  /*<p>Add team</p> - это описание imput. При заворачивании   <p>Add team</p>   и
//                      <input type='text' placeholder="Teams's name" name='team_name'></input>   
//                      в  Label -программа понимает ,что это единое */
// }



//----------------------------------
// Урок от 13.02.2024

import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context';

export default function AddTeamForm() {

  const { add_team } = useContext(Context);

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