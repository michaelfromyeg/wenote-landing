import * as React from 'react';
import styles from './Newsletter.module.css';

function Newsletter() {
    return (
        <>
            {/* 
            // Substack newsletter -- not really great for our use-case
            <iframe
                src="https://wenote.substack.com/embed"
                width="300"
                height="160"
                className={styles.newsletter}
                frameBorder="0"
                scrolling="no"
                title="newsletter"
            /> */}
            <form
                className={styles.form}
                action="https://tinyletter.com/wenote"
                method="post"
                target="popupwindow"
                // onSubmit="window.open('https://tinyletter.com/wenote', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
            >
                <fieldset className={styles.fields}>
                    <input
                        type="text"
                        name="email"
                        id="tlemail"
                        placeholder="Enter your email address"
                        className={styles.textField}
                    />
                    <input type="hidden" value="1" name="embed" />
                    <input type="submit" value="Sign up" className={styles.button} />
                </fieldset>
            </form>
            <p className={styles.helper}>Subscribe to our mailing list to stay in the loop with all things weNote.</p>
        </>
    );
}

export default Newsletter;
