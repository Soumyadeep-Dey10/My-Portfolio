import React from 'react'
import styles from './Hero.module.css'
import photo from '../assets/Photo5.jpg';
import cv from "../assets/Soumyadeep_resume Latest.pdf"
const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Hi,i am Soumyadeep</h1>
        <p className={styles.p}>I am a MCA student and passionate about full stack Software Development.Reach out me if you want to know more!</p>
       <div className={styles.aboutButton}>
        
        <a href="mailto:deepsoumya442@gmail.com" className={styles.contactBtn}>Contact Me</a>   
        <a href={cv} target="_blank">
        <button className={styles.cv}>Check Resume</button>
        </a>
        </div>
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