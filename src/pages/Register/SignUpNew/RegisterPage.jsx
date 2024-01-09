import React from 'react'
import RegisterForm from './RegisterForm'

export default function RegisterPage() {
  return (
    <div className='register customCom'>
      <div className='register__left partLeft'>
        <div className='register__content'>
          <RegisterForm />
        </div>
        <div className='register__footer'>
          <p className='register__text'>
            Already have an account? 
            <a className='text__link' href='#'> Log in</a>
          </p>
        </div>
      </div>
      <div className='register__right partRight partImg'>
        <img src='https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png' alt='register-img' />
      </div>
    </div>
  )
}
