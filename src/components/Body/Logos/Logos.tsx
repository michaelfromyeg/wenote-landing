import * as React from 'react';
import styles from './Logos.module.css';
import SEBlack from '../../../assets/external/se-black.png';

function Logos() {
    return (
        <div className={styles.lines}>
            <img src={SEBlack} width="100%" alt="Startup Edmonton logo" className={styles.se} />
        </div>
    );
}

export default Logos;
