import React from 'react'

export default function MemberForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {

        const name = evt.target.name

        const value = evt.target.value

        update(name, value)
    }

    const onSubmit = evt => {
        
        evt.preventDefault()

        submit()
    }


    return (
        <form className='team container' onSubmit={onSubmit}>
            <div className='team-group submit'>
                <h2>Add a Member</h2>
                <button disabled = {!values.name || !values.email || !values.role} >Submit</button>
            </div>

            <div className='member-group inputs'>

                <h4>Information</h4>

                <label htmlFor='nameInput'>Name:&nbsp;
                
                    <input
                        id='nameInput'
                        name='name'
                        type='text'
                        placeholder='Enter name'
                        maxLength='30'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label>Email:&nbsp;
          
                    <input
                        id='emailInput'
                        name='email'
                        type='text'
                        placeholder='Enter email'
                        maxLength='30'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>Role:&nbsp;
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value=''>Select a role</option>
                        <option value='backend'>Backend Engineer</option>
                        <option value='frontend'>Frontend Engineer</option>
                        <option value='designer'>Designer</option>
                    </select>
                </label>
            </div>
        </form>
    )
}
