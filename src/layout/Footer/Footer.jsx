import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className='max-wrapper'>
        <div className={["max-wrapper__content", styles.footerContent].join(' ')}>
            <p className={styles.copyright}>@copyright 2023.  all right reserved.</p>
            <div className={styles.footer__logo}>
                <Link to='/'><img src={logo} alt="She Codes"/></Link>
                <p>Her Code Events</p>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer