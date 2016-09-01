import React from "react";

import styles from "../css/MathStep.css";

export default props => {
    const isCorrect = props.answer == props.target;
    const cardStyle = {
        backgroundColor: isCorrect ? "#ff6" : (
            props.answer == 0 ? "#f66" : null
        ),
        color: isCorrect ? "#333" : null
    };

    return (
        <table>
            <tr style={{verticalAlign: "top"}}>
                <td>
                    <div className={styles.step} style={cardStyle}>
                        <p>{props.calc}</p>
                        <p>{props.answer}</p>
                    </div>
                </td>
                <td>
                    { props.answer != 0 ? props.children : null }
                </td>
            </tr>
        </table>
    );
}
