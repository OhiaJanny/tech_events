import React from 'react'
import heroimg from '../../../assets/hero_img.png'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <section className='max-wrapper'>
            <div className={['max-wrapper__content', styles.hero].join(' ')}>
                <div className={styles.heroContent}>
                    <h1>Looking for  female tech events and Bootcamp?</h1>
                    <p>We provide you with  women in tech Bootcamp, webinars, 
events and news alerts. Start your career in tech today
 by subscribing to our news letter to stay updated.</p>
                </div>
                <div>
                    <img src={heroimg} alt="She Codes" className={styles.heroimg}/>
                </div>
            </div>
        </section>
    )
}

export default Hero