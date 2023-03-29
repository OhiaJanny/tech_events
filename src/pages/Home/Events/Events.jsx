import React from 'react'
import styles from './Events.module.css'
import Card from 'react-bootstrap/Card'
import womencode from '../../../assets/womencode.png'
import womencode2 from '../../../assets/womencode2.png'
import womencode3 from '../../../assets/womencode3.png'
import womencode4 from '../../../assets/womencode4.png'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';


const Events = () => {

    const datas = [
        {
            id: '1',
            img: womencode,
            title: 'Uk Women Submit',
            subtitle: 'Wed 3rd April 2021, 9:00 AM'
        },
        {
            id: '2',
            img: womencode2,
            title: 'Female Programmers Award',
            subtitle: 'Saturday 5th May 2023, 10:00 AM'
        },
        {
            id: '3',
            img: womencode3,
            title: 'Female Programmers Award',
            subtitle: 'Saturday 5th May 2023, 10:00 AM'
        },
        {
            id: '4',
            img: womencode4,
            title: 'Female Programmers Award',
            subtitle: 'Saturday 5th May 2023, 10:00 AM'
        }
    ]

    const addEvent = (event) =>{

        console.log(event)
        let savedEvents = localStorage.getItem('events')
        if(savedEvents){
            let parsedEvents = JSON.parse(savedEvents)
            parsedEvents.push(event)
            localStorage.setItem('events', JSON.stringify(parsedEvents))
        }else{
            localStorage.setItem('events', JSON.stringify([event]))
        }

        toast.success('Event added succesfully', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    


    return (
        <section className="max-wrapper std-space-top std-space-bottom">
            <div className="max-wrapper__content">
                <header className={styles.header}>
                    <h1>Latest Events</h1>
                </header>
                <div className={styles.content}>
                    {
                        datas.map((data, i) => (
                            <Card style={{ width: '20rem' }} key={data.id}>
                                <Card.Img className={styles.card__img} variant="top" src={data.img} />
                                <Card.Body className={styles.card__body}>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Subtitle>{data.subtitle}</Card.Subtitle>
                                    <button className={styles.btn__more} onClick={()=> addEvent(data)}>Add Event</button>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
                <div className={styles.summary}>
                <Link to='/bootcamp'><button className={styles.btn__extra}>Explore</button></Link>
                <Link to='/events'><button className={styles.btn__extra}>Added Events</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Events