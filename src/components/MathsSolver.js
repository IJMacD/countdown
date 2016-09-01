import React from 'react';

import MathStep from '../components/MathStep';
import Fragment from '../components/Fragment';

export default (props) => {
    const nums = props.numbers;
    const steps = getFourCalculations(props.numbers, props.target);
    return <ul>{ steps }</ul>;
}

function getFourCalculations(nums, target) {
    const numA = nums[0], numB = nums[1];
    return [
        <MathStep calc={numA + " + " + numB} answer={numA + numB} target={target}>
            { (nums.length > 2) ? getFourCalculations([numA + numB, ...nums.slice(2)], target) : null }
        </MathStep>,
        <MathStep calc={numA + " × " + numB} answer={numA * numB} target={target}>
            { (nums.length > 2) ? getFourCalculations([numA * numB, ...nums.slice(2)], target) : null }
        </MathStep>,
        <MathStep calc={numA + " - " + numB} answer={numA - numB} target={target}>
            { (nums.length > 2) ? getFourCalculations([numA - numB, ...nums.slice(2)], target) : null }
        </MathStep>,
        <MathStep calc={numA + " ÷ " + numB} answer={numA / numB} target={target}>
            { (nums.length > 2) ? getFourCalculations([numA / numB, ...nums.slice(2)], target) : null }
        </MathStep>
    ];
}
