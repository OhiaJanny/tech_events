import React, {useState} from 'react'
import styles from './Savesit.module.css'
import Input from '../../components/Input/Input'
import {Link} from 'react-router-dom'


const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [desc, setDesc] = useState('')
    const [desc2, setDesc2] = useState('')


  return (
    <section className="max-wrapper">
        <div className="max-wrapper__content">
            <div className={styles.signup}>
                <header className={styles.header}>
                    <h1>Save Your Sit</h1>
                    <p>Lets get you started. Please fill in your informations correctly</p>
                </header>
                <div>
                    <div className={styles.row}>
                        <p>Name</p>
                        <Input value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <p>Email Address</p>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <p>Phone Number</p>
                        <Input value={number} onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <p>Gender</p>
                        <Input value={gender} onChange={(e) => setGender(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <p>Age</p>
                        <Input value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <p>Country</p>
                        <Input value={country} onChange={(e) => setCountry(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <p>State</p>
                        <Input value={state} onChange={(e) => setState(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <p>Why are you a good fit for this position?</p>
                        <Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <p>Tell us something about you that you are proud of.</p>
                        <Input value={desc2} onChange={(e) => setDesc2(e.target.value)}/>
                    </div>
                    <div className={styles.row}>
                        <button>Submit</button>
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