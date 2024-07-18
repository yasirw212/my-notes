import React, { useState } from 'react'
import './Authentication.css'

const Authentication = () => {
    const [signUp, setSignUp ] = useState(true)
    const [formData, setFormData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello')
    }

  return (
    <div className='auth-container'>
        <div className='clouds-container'>
            <div className="cloud-container">
            <div className="cloud">
            </div>
            <li>hello</li>
            </div>
        </div>
        <form action="" className="auth-form" onSubmit={handleSubmit}>
            <h3>
                {
                    signUp ?
                    'Create Your Account Today'
                    :
                    'Log In'
                }
            </h3>
            {
                signUp ?
                <>
                    <label htmlFor="fullName">Full Name
                        <input type="text" name='fullName' id='fullName' required />
                    </label>
                    <label htmlFor="email">Email 
                        <input type="email" name='email' id='email' required/>
                    </label>
                </>
                :
                null
            }
            <label htmlFor="username">Username
                <input type="text" name='username' id='username' required />
            </label>
            <label htmlFor="password">Password
                <input type="password" name='password' id='password' />
            </label>
            {
                signUp?
                <>
                    <label htmlFor="confirmPassword">Confirm Your Password
                        <input type="password" name='confirmPassword' id='confirmPassword' />
                    </label>
                </>
                :
                null
            }
            <button className='auth-submit-btn' type='submit'>
                {
                    signUp ?
                    'Complete Registration'
                    :
                    'Log In'
                }
            </button>
            <button className='auth-type-btn' onClick={() => setSignUp(!signUp)}>
                {
                    signUp ?
                    'Already Have an Account?'
                    :
                    'Create an Account Today!'
                }
            </button>
        </form>
    </div>
  )
}

export default Authentication