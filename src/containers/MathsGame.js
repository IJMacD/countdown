import React from 'react';
import { Component } from 'react';

import NumberBoard from '../components/NumberBoard';
import MathsSolver from '../components/MathsSolver';


const alphabet = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
const numberCount = 6;

const getRandomNumbers = () => {
    const bigOnes = Math.floor(Math.random() * 4);
    const smallOnes = numberCount - bigOnes;
    const numbers = shuffle([25,50,75,100]).slice(0, bigOnes);

    for(let i = 0; i < smallOnes; i++){
        const index = Math.floor(Math.random() * alphabet.length);
        numbers.push(alphabet[index]);
    }

    return numbers;
}

const getRandomState = () => ({
    target: 100 + Math.floor(Math.random() * 900),
    numbers: getRandomNumbers(),
});

export default class MathsGame extends Component {
    constructor () {
        super();

        this.state = getRandomState();
    }

    updateNumbers () {
        this.setState(getRandomState());
    }

    render () {
        return (
            <div>
                <NumberBoard {...this.state} />
                <button onClick={()=>this.updateNumbers()}>Refresh</button>
                <MathsSolver {...this.state} />
            </div>
        )
    }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}