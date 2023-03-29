import React, {useState} from 'react'
import styles from './Signup.module.css'
import Input from '../../components/Input/Input'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import { endpoint } from '../../utils/endpoint';
import { useNavigate} from 'react-router-dom'
import Navbar from '../../layout/Navbar/Navbar'

const Signup = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const submit = () =>{

        if(name.trim() === ''){
          return toast.error("Full name can't be blank", {
            position: toast.POSITION.TOP_RIGHT
          });
        }
    
        if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))){
          return toast.error("Invalid email", {
            position: toast.POSITION.TOP_RIGHT
          });
        }
        if(password.length < 6){
          return toast.error("Password length: > 5", {
            position: toast.POSITION.TOP_RIGHT
          });
        }
    
        setLoading(true)
        const xhr = new XMLHttpRequest()
        xhr.open('post', `${endpoint}/signup`)
        xhr.setRequestHeader('Content-Type', 'application/json')
    
        xhr.onload = function () {
          setLoading(false)
          const data = JSON.parse(xhr.response)
          if (data.error) {
            toast.error(data.error, {
              position: toast.POSITION.TOP_RIGHT
            });
          } else {
            toast.success(data.success, {
              position: toast.POSITION.TOP_RIGHT
            });
            navigate('/login')
          }
        }
        xhr.onerror = function () {
          setLoading(false)
          toast.error("An error occurred!", {
            position: toast.POSITION.TOP_RIGHT
          });
        }
        xhr.ontimeout = function () {
          setLoading(false)
          toast.error("An error occurred!", {
            position: toast.POSITION.TOP_RIGHT
          });
        }
    
        xhr.send(JSON.stringify({fullname: name, email, password}))
    
      }

    


  return (
    <>
    <Navbar show={true}/>
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
                        {
                            loading ? <button className={styles.btn__loading}>Sign up</button> : <button onClick={submit}>Sign up</button>
                        }
                    </div>
                    <div className={styles.row}>
                        <span>Have an account?</span><Link to='/login'>Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Signup