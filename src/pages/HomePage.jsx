import React from 'react';
import styles from './homepage.module.css';
import image from '../assets/shopping.png';
import { Link, Outlet } from 'react-router';

const HomePage = () => {
    return (
        <>
            <div className={styles.shop}>
            <div className={styles.content}>
            <h2 className={styles.shophead}>Click it. Cart it. Love it</h2>
            <img src={image} className={styles.image}/>
            </div>
            <button className={styles.shopBtn}><Link to ='shop'>Let`s Shop</Link></button>

            </div>

        </>
    )
}

export default HomePage;