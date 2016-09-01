import React from "react";

import styles from "../css/NumberBoard.css"

export default props => (
    <div>
        <p className={styles.target}>{props.target}</p>
        <ul className={styles.list}>
        {
            props.numbers.map((number, i) => <li key={i} className={styles.card}>{number}</li>)
        }
        </ul>
    </div>
);
