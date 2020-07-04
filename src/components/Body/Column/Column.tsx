import * as React from 'react';
import styles from './Column.module.css';

type ColumnProps = {
    title: string;
    body: string;
};

function Column({ title, body }: ColumnProps) {
    return (
        <div className={styles.column}>
            <p className={styles.title}>{title}</p>
            <p className={styles.body}>{body}</p>
        </div>
    );
}

export default Column;
