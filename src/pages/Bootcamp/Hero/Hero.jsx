import React from 'react'
import bootcamp from '../../../assets/bootcamp.png'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <section className='max-wrapper'>
            <div className={['max-wrapper__content', styles.hero].join(' ')}>
                <div className={styles.heroContent}>
                    <h1>Upcoming Female Bootcamp</h1>
                </div>
                <div>
                    <img src={bootcamp} alt="She Codes" className={styles.heroimg}/>
                </div>
            </div>
        </section>
    )
}

export default Hero