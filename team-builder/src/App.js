// import React from 'react';
// import './App.css';
// import Member from './component/Member'
// import MemberForm from './component/MemberForm'
// import Form from './component/Form'




// function App() {
//   return (
//     <div className="App">
//       <Form />
//       <Member />
//       <MemberForm />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react'
import MemberForm from './component/MemberForm'
import Member from './component/Member'

const initialTeamValues = [
    {
        id: Date.now(),
        name: '',
        email: '',
        role: '',

    }
]



function App() {

    const [member, setMember] = useState([])

    const [teamValues, setTeamValues] = useState(initialTeamValues)

    const updateForm = (inputName, inputValue) => {
        const updatedTeamValues = { ...teamValues, [inputName]: inputValue }
        setTeamValues(updatedTeamValues)
        
    }


    const submitForm = () => {
        const newMember = {
            name: teamValues.name.trim(),
            email: teamValues.email.trim(),
            role: teamValues.role,
        }

        if (!newMember.name || !newMember.email || !newMember.role) return null

        setMember( [newMember, ...member] )
        setTeamValues(initialTeamValues)
    }

    return (
        <div className='container'>
            <header><h1>Team Member App</h1></header>


            <MemberForm
                values={teamValues}
                update={updateForm}
                submit={submitForm}
            />

            {
                member.map(members => {
                    return (
                        <Member key={member.id} details={members} />
                    )
                })
            }
      
        </div>
    )
}

export default App;