import React from 'react'
import {reduxForm, Field} from 'redux-form'

const Login = (props) => {
    const onSubmit = (formData) => {}

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} placeholder='Login' type='text' />
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder='Password' type='text' />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type='checkbox' /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    //uniq name for the form
    form: 'login',
})(LoginForm)

export default Login
