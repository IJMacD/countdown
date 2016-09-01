import React from 'react';
import { Component } from 'react';

import LetterBoard from '../components/LetterBoard';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letterCount = 9;

const getRandomLetters = () => {
    const letters = [];

    for(let i = 0; i < letterCount; i++){
        const index = Math.floor(Math.random() * alphabet.length);
        letters.push(alphabet[index]);
    }

    return letters;
}

export default class LettersGame extends Component {
    constructor () {
        super();

        this.state = {
            letters: getRandomLetters()
        }
    }

    updateLetters () {
        this.setState({letters: getRandomLetters()});
    }

    render () {
        const letters = this.state.letters;
        return (
            <div>
                <LetterBoard letters={letters} />
                <button onClick={()=>this.updateLetters()}>Refresh</button>
            </div>
        )
    }
}