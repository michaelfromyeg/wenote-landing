import * as React from 'react';
import styles from './Newsletter.module.css';

function Newsletter() {
    return (
        <>
            <iframe
                src="https://wenote.substack.com/embed"
                width="300"
                height="160"
                className={styles.newsletter}
                frameBorder="0"
                scrolling="no"
                title="newsletter"
            />
            <p className={styles.helper}>Subscribe to our mailing list to stay in the loop with all things weNote.</p>
        </>
    );
}

export default Newsletter;
