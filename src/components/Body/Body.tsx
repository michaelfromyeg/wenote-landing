import * as React from 'react';
import styles from './Body.module.css';
import Column from './Column/Column';
// import Logos from './Logos/Logos';
import Quote from './Quote/Quote';
import White from '../../assets/white.png';

function Body() {
    return (
        <>
            <img src={White} className={styles.transition} alt="White transition"></img>
            <div className={styles.body}>
                <div className={styles.row}>
                    <Column
                        title="Use your notes to do more than just study"
                        body="Generate practice exams and quizzes instantly, get hints about what is likely to be on your exam, and more through state of the art machine learning technology."
                    />
                    <Column
                        title="Collaborate with your classmates and never miss a beat"
                        body="Zoned out in lecture? Couldn't copy everything from the slide? No longer a problem; make sure your notes are truly comprehensive with the help of your friends."
                    />
                    <Column
                        title="Connect with professors and teaching assistants"
                        body="Tired of getting vague answers to your questions? weNote gives you a way to meaningfully connect with your professors and teaching assistants, making online education personable."
                    />
                </div>
                {/* <Logos /> */}
                <Quote />
            </div>
        </>
    );
}

export default Body;
