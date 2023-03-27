import React, {useState} from 'react'
import styles from './Signup.module.css'
import Input from '../../components/Input/Input'
import {Link} from 'react-router-dom'


const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


  return (
    <section className="max-wrapper">
        <div className="max-wrapper__content">
            <div className={styles.signup}>
                <header className={styles.header}>
                    <h1>Sign up</h1>
                </header>
                <div>
                    <div className={styles.row}>
                        <p>Name</p>
                        <Input value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <p>Email</p>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <p>Create Password</p>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <p>Confirm Password</p>
                        <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <button>Sign up</button>
                    </div>
                    <div className={styles.row}>
                        <span>Have an account?</span><Link to='/login'>Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup