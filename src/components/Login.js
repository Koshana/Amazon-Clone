import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import { AUTH } from '../config/firebase'

import './Login.css'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const signIn = e => {
        e.preventDefault();
        AUTH.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        AUTH.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className={'login'}>
            <Link to={'/'}>
                <img
                    className={'login__logo'}
                    src={'http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'}
                />
            </Link>
            <div className={'login__container'}>
                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input 
                        type={'email'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                        type={'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className={'login__signInButton'} type={'submit'} onClick={signIn}>Sign In</button>

                </form>
                <p>
                    By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.
                </p>
                <button className={'login__registerButton'} onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
