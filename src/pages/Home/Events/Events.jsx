import React from 'react'
import styles from './Events.module.css'
import Card from 'react-bootstrap/Card'
import womencode from '../../../assets/womencode.png'
import womencode2 from '../../../assets/womencode2.png'
import womencode3 from '../../../assets/womencode3.png'
import womencode4 from '../../../assets/womencode4.png'
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


    return (
        <section className="max-wrapper std-space-top std-space-bottom">
            <div className="max-wrapper__content">
                <header className={styles.header}>
                    <h1>Latest Events</h1>
                </header>
                <div className={styles.content}>
                    {
                        datas.map(data => (
                            <Card style={{ width: '20rem' }} key={data.id}>
                                <Card.Img className={styles.card__img} variant="top" src={data.img} />
                                <Card.Body className={styles.card__body}>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Subtitle>{data.subtitle}</Card.Subtitle>
                                    <button className={styles.btn__more}>See More</button>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
                <div className={styles.summary}>
                <button className={styles.btn__extra}>Explore</button>
                <button className={styles.btn__extra}>Add Events</button>
                </div>
            </div>
        </section>
    )
}

export default Events