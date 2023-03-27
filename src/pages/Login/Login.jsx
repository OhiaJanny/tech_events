import React, {useState} from 'react'
import styles from './Login.module.css'
import Input from '../../components/Input/Input'
import {Link} from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  return (
    <section className="max-wrapper">
        <div className="max-wrapper__content">
            <div className={styles.login}>
                <header className={styles.header}>
                    <h1>Sign in</h1>
                </header>
                <div>
                    <div className={styles.row}>
                        <p>Email</p>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <p>Password</p>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className={[styles.row, styles.remember].join(' ')}>
                        <div className={styles.flex}>
                            <div className={styles.checkbox} onClick={() => setRemember(!remember)}>{remember ? '✔️' : ''}</div>
                            <p>Remember Me</p>
                        </div>
                        <p>Forgot Password?</p>
                    </div>
                    <div className={styles.row}>
                        <button>Sign in</button>
                    </div>
                    <div className={styles.row}>
                        <span>Don't have an account?</span><Link to='/signup'>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login