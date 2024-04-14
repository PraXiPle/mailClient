import React, { useState } from 'react'
import "./registerPage.scss"
import { FormSignContainer } from '../../components/FormSignContainer/formSignContainer'
import { InputUser } from '../../components/InputUser/inputUser'
import { InputSubmit } from '../../components/InputSubmit/inputSubmit'
import { NavLink } from 'react-router-dom'
import { axiosReq } from '../../functions/webApi'
export const RegisterPage = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Auburn&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Side&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Yellow"
  })
  const onChangHendler = (e) => {
    setUserInput((perv) => {
      return { ...perv, [e.target.name]: e.target.value }
    })
  }
  const onSubmitHendler = async (e) => {
    e.preventDefault()
    const userObj = {
      fullName: userInput.firstName.trim() + " " + userInput.lastName.trim(),
      email: userInput.email.trim(),
      password: userInput.password,
      avatar:userInput.avatar
    }
    const data = await axiosReq({body:userObj , url:"user/register" , method:"POST"})
  }

  
  return (
    <FormSignContainer title="Your First Mail Box Is Here">
      <form className='RegisterPage' onSubmit={onSubmitHendler}>
        <InputUser name="firstName" labelName="first name" onChange={onChangHendler} />
        <InputUser name="lastName" labelName="last name" onChange={onChangHendler} />
        <InputUser name="email" labelName="Email" type='email' onChange={onChangHendler} />
        <InputUser name="password" labelName="password" type='password' onChange={onChangHendler} />
        <InputUser name="passwordConfirm" labelName="confirm password" type='password' onChange={onChangHendler} />
        <InputSubmit value='Register' />
        <p className='pTag'>already have an account? <NavLink to="/login">Log in Here</NavLink></p>
      </form>
    </FormSignContainer>
  )
}
