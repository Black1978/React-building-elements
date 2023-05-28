import React, { useState } from 'react'
import FormInput from '../../components/FormInput'
import './registration.css'

const Registration = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        birthday: '',
        password: '',
        confirmPassword: '',
    })
    const inputs = [
        {
            id: 1,
            placeholder: 'Username',
            name: 'username',
            type: 'text',
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special characters",
            label: 'Username',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true,
        },
        {
            id: 2,
            placeholder: 'e-mail',
            name: 'email',
            type: 'email',
            errorMessage: 'It should be a valid email address!',
            label: 'Email',
            required: true,
        },
        {
            id: 3,
            placeholder: 'Birthday',
            name: 'birthday',
            type: 'date',
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special characters",
            label: 'Birthday',
        },
        {
            id: 4,
            placeholder: 'Password',
            name: 'password',
            type: 'password',
            pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
            errorMessage:
                'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character',
            label: 'Password',
            required: true,
        },
        {
            id: 5,
            placeholder: 'Confirm password',
            name: 'confirmPassword',
            type: 'password',
            pattern: values.password,
            errorMessage: "Passwords don't match",
            label: 'Password',
            required: true,
        },
    ]

     const handleSubmit = (e) => {
        e.preventDefault()
        // const data = new FormData(e.target)
        // console.log(Object.fromEntries(data.entries()))
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    console.count('re-rendered')
    console.log(values)

    return (
        <div className='registration'>
            <form onSubmit={handleSubmit}>
                <h1>Registration</h1>
                {inputs.map((input) => {
                    return (
                        <FormInput
                            key={input.id}
                            {...input}
                            onChange={(e) => onChange(e)}
                            value={values[input.name]}
                        />
                    )
                })}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Registration
