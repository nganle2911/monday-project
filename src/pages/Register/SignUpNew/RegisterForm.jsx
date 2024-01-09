import { Button, Form, Input } from 'antd'
import React from 'react'

export default function RegisterForm() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    
    return (
        <div className='register__form'>
            <h1 className='register__title title'>Welcome to monday.com</h1>
            <p className='register__text title'>Get started - it's free. No credit card needed.</p>

            {/* Form */}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item className='mb-0'>
                    <Button className='form__gg flex items-center justify-center w-full py-2'>
                        <img className='mr-2' src='https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg' width={"16px"} />
                        <a>Continue with Google</a>
                    </Button>
                </Form.Item>
                <div className='form__line'>Or</div>
                <Form.Item className='mb-4'>
                    <Input className='form__input' type='email' placeholder='name@company.com' />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' className="login-form-button form__continue">
                        Continue
                    </Button>
                </Form.Item>
                <Form.Item className='mt-4 mb-0 form__terms'>
                    <div className='terms__text'>By proceeding, you agree to the</div>
                    <div className='terms__text'>
                        <a href='#' className='terms__link'>Terms of Service </a>
                        and
                        <a href='#' className='terms__link'> Privacy Policy</a>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}
