import * as React from 'react';
import styles from './Body.module.css';
import Column from './Column/Column';
import Logos from './Logos/Logos';
import Quote from './Quote/Quote';

function Body() {
    return (
        <div className={styles.body}>
            <div className={styles.row}>
                <Column
                    title="Use your notes to do more than just study"
                    body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />
                <Column
                    title="Generate practice exams and quizzes instantly"
                    body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />
                <Column
                    title="Connect with professors and teaching assistants"
                    body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />
            </div>
            <Logos />
            <Quote />
        </div>
    );
}

export default Body;
