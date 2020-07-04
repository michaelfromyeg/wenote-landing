import * as React from 'react';
import styles from './Logos.module.css';
import SE from '../../../assets/external/se.png';

function Logos() {
    return (
        <div className={styles.lines}>
            <img src={SE} width="100%" alt="Startup Edmonton logo" className={styles.se} />
        </div>
    );
}

export default Logos;
