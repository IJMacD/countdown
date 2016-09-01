import React from "react";

import styles from '../css/LetterBoard.css'

export default props => (
    <ul className={styles.list}>
    {
        props.letters.map((letter, i) => <li key={i} className={styles.card}>{letter}</li>)
    }
    </ul>
);
