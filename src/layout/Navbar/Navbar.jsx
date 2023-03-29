import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    let tk = localStorage.getItem('_tk')

    return (
        <nav className="max-wrapper">
            <div className={["max-wrapper__content", styles.nav].join(' ')}>
                <div className={styles.logo}>
                    <Link to='/'><img src={logo} alt="She Codes Logo" /></Link>
                </div>
                {
                    !tk ?
                        <div>
                            <Link to='/signup'><button className={styles.btn__start}>Get Started</button></Link>
                            <Link to='login'><button className={styles.btn__sign}>Sign in</button></Link>
                        </div>
                        :
                        ''
                }

            </div>
        </nav>
    )
}

export default Navbar