import React from 'react'

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form>
            <div>
                <input placeholder='Login' type='text' />
            </div>
            <div>
                <input placeholder='Password' type='text' />
            </div>
            <div>
                <input type='checkbox' /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default Login
