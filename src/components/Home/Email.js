import React, { useState } from 'react'

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
      THIS IS EMAIL
    </div>
  )
}

export default Email
