import React from 'react'
import Navbar from '../../layout/Navbar/Navbar'
import styles from './YourEvents.module.css'
import Card from 'react-bootstrap/Card'


const YourEvents = () => {

    const datas = JSON.parse(localStorage.getItem('events'))

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
                        datas ?
                        datas.map((data, i) => (
                            <Card style={{ width: '20rem' }} key={i}>
                                <Card.Img className={styles.card__img} variant="top" src={data.img} />
                                <Card.Body className={styles.card__body}>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Subtitle>{data.subtitle}</Card.Subtitle>
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