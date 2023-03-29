import React, {useState} from 'react'
import Navbar from '../../layout/Navbar/Navbar'
import styles from './YourEvents.module.css'
import Card from 'react-bootstrap/Card'
import { toast } from 'react-toastify';


const YourEvents = () => {

    const [datas, setDatas] = useState(JSON.parse(localStorage.getItem('events')) || [])

    const deleteEvent = (event) =>{
        let newEventArray = datas.filter(data => data.id !== event.id)
        localStorage.setItem('events', JSON.stringify(newEventArray))
        setDatas(newEventArray)
        toast.success('Event Deleted!', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    return (
        <>
        <Navbar show={true}/>
        <section className="max-wrapper std-space-top std-space-bottom">
            <div className="max-wrapper__content">
                <header className={styles.header}>
                    <h1>Your Events</h1>
                </header>
                <div className={styles.content}>
                    {
                        datas.length > 0 ?
                        datas.map((data) => (
                            <Card style={{ width: '20rem' }} key={data.id}>
                                <Card.Img className={styles.card__img} variant="top" src={data.img} />
                                <Card.Body className={styles.card__body}>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Subtitle>{data.subtitle}</Card.Subtitle>
                                    <button className={styles.btn__more} onClick={()=> deleteEvent(data)}>Delete Event</button>
                                </Card.Body>
                            </Card>
                        ))
                        : <h2 style={{color: '#fff'}}>You have not added an events</h2>
                    }
                </div>
            </div>
        </section>
        </>
    )
}

export default YourEvents