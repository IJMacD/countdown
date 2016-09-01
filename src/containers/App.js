import React from 'react';
import { Component } from 'react';

import LettersGame from '../containers/LettersGame';
import MathsGame from '../containers/MathsGame';

export default class App extends Component {
    render () {
        return (
            <div>
                <LettersGame />
                <MathsGame />
            </div>
        );
    }
}