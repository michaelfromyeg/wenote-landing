import * as React from 'react';
import styles from './Quote.module.css';

function Quote() {
    return (
        <>
            <p className={styles.quote}>
                Education is what remains after one has forgotten what one has learned in school.
            </p>
            <p className={styles.author}>Albert Einstein</p>
        </>
    );
}

export default Quote;
