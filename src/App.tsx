import React from 'react';
import './App.css';
import data from "./data.json";
import {images} from './img';

type IData = number[][][][];

function App() {
    return (
        <div className="App">
            {(data as IData).map((tRy, index) => (
                <div className="try">
                    {tRy.map((block, index) => (
                        <div key={index} className="block">
                            {block.map((arr, index) => (
                                <div key={index} className="row">
                                    {arr.map((index, key) => <Cell key={key} index={index}/>)}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}


interface ICell {
    index: number
}

function Cell(props: ICell) {
    return (
        <img src={images[props.index]} alt=""/>
    )
}

export default App;
