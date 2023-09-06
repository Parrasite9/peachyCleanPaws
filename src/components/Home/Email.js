import React, { useState } from 'react'
import '../../css/Home/Email.css'

function Email() {

    const [email, setEmail] = useState("")
    const [isEmailValid, setIsEmailValid] = useState(true)

    function handleInput(e) {
        setEmail(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
            setEmail(false)
        } else {
            setIsEmailValid(true);
            alert(`Thank you for subscribing with ${email}`)
            setEmail("")
        }
    }

  return (
    <div className='email'>
        <h2>Subscribe to our newsletter!</h2>
        <form className='newsletter' onSubmit={handleSubmit}>
            <input 
                type="email"
                placeholder='Enter your email'
                value={email}
                onChange={handleInput}
                />
        </form>

        <button
            type='submit'
        >Submit</button>
    </div>
  )
}

export default Email
