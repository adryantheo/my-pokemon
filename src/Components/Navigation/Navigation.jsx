import React from 'react'
import './Navigation.css';

export default function Navigation() {
    return (
        <div className="navigation">
            <div className="row">
                <div className="column">
                    <img src="https://image.flaticon.com/icons/png/128/167/167755.png" alt="pokeball"/>
                   <p> Pokemon List </p>
                </div>
                <div className="column">
                    <img src="https://image.flaticon.com/icons/png/512/188/188918.png" alt="pokeball"/>
                   <p> Catch Poke </p>
                </div>
                <div className="column">
                    <img src="https://image.flaticon.com/icons/png/128/189/189000.png" alt="pokeball"/>
                   <p> My Poke </p>
                </div>
            </div>
        </div>
    )
}
