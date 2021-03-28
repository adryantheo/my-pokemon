import React from 'react'
import './Root.css'
import Header from './Header/Header';
import Body from './Body/Body';
import Navigation from './Navigation/Navigation';

export default function Root() {
    return (
        <div>
            <Header />
            <Body />
            <Navigation />
        </div>
    )
}
