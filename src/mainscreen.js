import React from 'react'
import { windowWidth } from './constants';
import styles from './main.scss';

export default function Mainscreen({toggleSideBar}) {

  return (
    <div onClick={toggleSideBar}  className={styles['mainscreen']}>
        <div className={styles['top']}></div>
        <img src={'../images/main.jpeg'} width={windowWidth} className={styles['image']}/>
    </div>
  )
}
