import React from 'react'
import styles from './Hero.module.css'
import photo from '../assets/Photo.jpg';
const Hero = () => {
  return (
    <section className={styles.section}>
        <div className={styles.content}>
        <h1 className={styles.heading}>Hi,i am Soumyadeep</h1>
        <p className={styles.p}>I am a passionate full stack Software Developer.Reach out me if you want to know more!</p>
        <a href="mailto:deepsoumya442@gmail.com" className={styles.contactBtn}>Contact Me</a>      
        </div>
        <div className={styles.div}>
        <img className={styles.img} src={photo} alt="Photo"></img>

        </div>
        
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero