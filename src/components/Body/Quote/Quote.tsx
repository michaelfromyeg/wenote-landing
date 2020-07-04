import * as React from 'react';
import styles from './Quote.module.css';

function Quote() {
    return (
        <>
            <p className={styles.quote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className={styles.author}>Barack Obama</p>
        </>
    );
}

export default Quote;
