import * as React from 'react';
import styles from './Footer.module.css';
import Dots from '../../assets/dots.png';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <p className={`${styles.address} ${styles.company}`}>weNote</p>
                    <p className={styles.address}>Edmonton, AB</p>
                    <p className={styles.address}>(780) 680-9634</p>
                    <p className={styles.address}>admin@wenote.ca</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.copyright}>weNote © 2020</p>
                </div>
                <div className={styles.column}>
                    <img src={Dots} width="30%" alt="Dots version of the weNote logo" className={styles.dots} />
                </div>
            </div>
        </div>
    );
}

export default Footer;
