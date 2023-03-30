import React, {useState} from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import Input from '../../components/Input/Input'
import { validateEmail } from '../../utils/validateEmail'
import { toast } from 'react-toastify';

const Footer = () => {

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState('')

  const subscribe =(e)=>{
    e.preventDefault()

    if(!validateEmail(email)){
      return toast.error('Invalid Email', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    setLoading(true)
    fetch("https://newsletter-plne.onrender.com/subscribe", {
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({email:email})
    })
    .then(res => res.json())
    .then(data =>{
      setLoading(false)
        if(data.success){
          toast.success(data.success, {
            position: toast.POSITION.TOP_RIGHT
          });
          setEmail('')
        }else{
          toast.error(data.error, {
            position: toast.POSITION.TOP_RIGHT
          });
        }
    })
    .catch(error => {
      setLoading(false)
      console.log(error)
    })
  }

  return (
    <footer className={styles.footer}>
        <div className='max-wrapper'>
        <div className={["max-wrapper__content", styles.footerContent].join(' ')}>
            <p className={styles.copyright}>@copyright 2023.  all right reserved.</p>
            <div className={styles.footer__logo}>
                <Link to='/'><img src={logo} alt="She Codes"/></Link>
                <p>Her Code Events</p>
            </div>
            <form className={styles.form} onSubmit={subscribe}>
              <Input value={email} placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} /> <button >{loading ? 'Loading...' : 'Subscribe'}</button>
            </form>
        </div>
        </div>
    </footer>
  )
}

export default Footer