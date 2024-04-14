import React, { useState } from 'react'
import "./loginPage.scss"
import { FormSignContainer } from '../../components/FormSignContainer/formSignContainer'
import { InputUser } from '../../components/InputUser/inputUser'
import { InputSubmit } from '../../components/InputSubmit/inputSubmit'
import { NavLink } from 'react-router-dom'
import { axiosReq } from '../../functions/webApi'
export const LoginPage = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" })
  const setPasswordHendler = (e) => {
    setUserInput({ ...userInput, password: e.target.value })
  }
  const setEmaildHendler = (e) => {
    setUserInput({ ...userInput, email: e.target.value })
  }
  const onSubmitHendler = async (e) => {
    e.preventDefault()
    userInput.email.trim()
    userInput.password.trim()
    const user = await axiosReq({ method: "POST", body: userInput, url: "user/login" })
    console.log(user);
  }
  return (
    <FormSignContainer title="Welcome To Mail Box">
      <form className='LogInPage' onSubmit={onSubmitHendler}>
        <InputUser labelName="Email" name="email" onChange={setEmaildHendler} />
        <InputUser labelName="password" name="password" type='password' onChange={setPasswordHendler} />
        <InputSubmit value='Log In' />
      </form>
      <p className='pTag'> dont have an account? <NavLink to="/register">register Here</NavLink></p>

    </FormSignContainer>
  )
}
