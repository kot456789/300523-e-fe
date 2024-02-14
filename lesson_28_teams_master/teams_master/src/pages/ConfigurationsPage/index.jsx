// import React from 'react'
// import AddTeamForm from '../../components/AddTeamForm'
// import AddUserForm from '../../components/AddUserForm'

// export default function ConfigurationsPage({add_team, teams, add_user}) {
//   return (
//     <div>
//       <AddTeamForm add_team={add_team} />
//       <AddUserForm teams={teams} add_user={add_user} />
//     </div>
//   )
// }


// урок от: 13.02.2024


import React from 'react'
import AddTeamForm from '../../components/AddTeamForm'
import AddUserForm from '../../components/AddUserForm'

export default function ConfigurationsPage() {
  return (
    <div>
      <AddTeamForm />
      <AddUserForm />
    </div>
  )
}