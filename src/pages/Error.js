 /* eslint-disable */
import React from 'react'
import error from "../assets/error.svg"
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className='error height100vh background flex flex-col gap2rem'>
        <img className='error__img' src={error} alt="error" />
        <h1 className="error__heading">Oops! An error has occurred!</h1>
        <Link className='route-link error__gohome' to = "/homepage">home</Link>
    </main>
  )
}

export default Error