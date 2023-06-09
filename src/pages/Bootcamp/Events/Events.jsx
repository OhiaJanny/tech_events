import React, {useEffect, useState} from 'react'
import styles from './Events.module.css'
import Card from 'react-bootstrap/Card'
import { endpoint } from '../../../utils/endpoint'
import {Link} from 'react-router-dom'

const Events = () => {

    const [events, setEvents] = useState([])

    useEffect(()=>{
        fetch(`${endpoint}/tech-events`)
        .then(res => res.json())
        .then(result => setEvents(result.data))
        .catch(err => console.log(err))
      },[])


    return (
        <section className="max-wrapper std-space-top std-space-bottom">
            <div className="max-wrapper__content">
                <header className={styles.header}>
                    <h1>Available Courses</h1>
                </header>
                <div className={styles.content}>
                    {
                        events.map(event => (
                            <Card style={{ width: '20rem' }} key={event.id}>
                                <Card.Img className={styles.card__img} variant="top" src={event.img} />
                                <Card.Body className={styles.card__body}>
                                    <Card.Title>{event.title}</Card.Title>
                                    <Card.Subtitle>{event.subtitle}</Card.Subtitle>
                                    <Link to='/savesit'><button className={styles.btn__more}>Register</button></Link>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Events