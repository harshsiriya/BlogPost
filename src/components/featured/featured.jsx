import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
    
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, I am a Featured Component.</b><br />  
        Discover My Stories and Creative Ideas.
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='Post 1' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p className={styles.postDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sit, alias facere eligendi mollitia voluptas eveniet natus adipisci ipsam veniam quam, harum excepturi doloribus sed veritatis. Expedita veritatis alias cumque esse explicabo.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured