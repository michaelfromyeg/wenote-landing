import * as React from 'react';
import styles from './Footer.module.css';
import WhiteDots from '../../assets/dots-white.png';
import Orange from '../../assets/orange.png';

function Footer() {
    return (
        <div className={styles.footer}>
            <img src={Orange} className={styles.transition} alt="Orange transition"></img>
            <div className={styles.row}>
                <div className={styles.column}>
                    <p className={`${styles.address} ${styles.company}`}>weNote</p>
                    <p className={styles.address}>Edmonton, AB</p>
                    <p className={styles.address}>(780) 680-9634</p>
                    <p className={styles.address}>admin@wenote.ca</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.copyright}>weNote © 2021</p>
                </div>
                <div className={styles.column}>
                    <img src={WhiteDots} width={50} alt="Dots version of the weNote logo" className={styles.dots} />
                </div>
            </div>
        </div>
    );
}

export default Footer;
