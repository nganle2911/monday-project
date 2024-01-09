import React from 'react'
import { Button, Input } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function CreateAccount() {
  return (
      <div className='createAcc customCom'>
          <div className='createAcc__left partLeft'>
              <div className='createAcc__content content'>
                  <div className='createAcc__logo logo'>
                      <img src='https://cdn.monday.com/images/logos/logo-full-big.png' alt='logo-monday' />
                  </div>
                  <div className='createAcc__form contentMiddle'>
                      <h1 className='title'>Create your account</h1>
                      <div className='input_groups'>
                          <div className='input_item xl:w-full w-4/5'>
                              <p className='mb-1'>Full name</p>
                              <Input className='inputItem' placeholder='Enter your full name' />
                              <div className='input_err'></div>
                          </div>
                          <div className='input_item xl:w-full w-4/5'>
                              <p className='mb-1'>Password</p>
                              <Input className='inputItem' placeholder='Enter at least 8 characters' />
                              <div className='input_err'></div>
                          </div>
                          <div className='input_item xl:w-full w-4/5'>
                              <p className='mb-1'>Account name</p>
                              <Input className='inputItem' placeholder="For example, company's or department's name" />
                              <div className='input_err'></div>
                          </div>
                      </div>
                  </div>
                  <div className='createAcc__footer formFooter'>
                      <Button className='btnFooter btnContinue'>
                          <a>Continue</a>
                          <FontAwesomeIcon icon={faChevronRight} style={{fontSize: "12px"}} />
                      </Button>
                  </div>
              </div>
          </div>
          <div className='createAcc__right partRight partImg'>
              <img src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png" alt="create-acc-img" />
          </div>
      </div>
  )
}
