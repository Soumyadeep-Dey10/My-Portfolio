import React from 'react'
import java from '../assets/java-removebg-preview.png'
import react from '../assets/React.png'
import python from '../assets/Python.png'
import Mysql from '../assets/Mysql.png'
import Html from '../assets/Html2.png'
import css from '../assets/Css2.png'
import Node from '../assets/Node.png'
import styles from './Skills.module.css';
const Skills = () => {
  return (
    <div className={styles.div} id="skills">
        <h1 className={styles.heading}>Skills</h1>

      

        <div className={styles.skillItems}>

        <div className={styles.skillItem}>
        <img className={styles.java}src={java}></img>
        <p>Java</p>
        </div>
       
        <div className={styles.skillItem}>
        <img className={styles.react}src={react}></img>
        <p>React</p>
        </div>

        <div className={styles.skillItem}>
        <img className={styles.python}src={python}></img>
        <p>Python</p>
        </div>
        

        <div className={styles.skillItem}>
        <img className={styles.Mysql}src={Mysql}></img>
        <p>My SQL</p>
        </div>
        
        <div className={styles.skillItem}>
        <img className={styles.html}src={Html}></img>
        <p>HTML</p>
        </div>

        <div className={styles.skillItem}>
        <img className={styles.Css}src={css}></img>
        <p>CSS</p>
        </div>

        <div className={styles.skillItem}>
        <img className={styles.Node}src={Node}></img>
        <p>Node Js</p>
        </div>
        </div>
        </div>
        
   
  )
}

export default Skills