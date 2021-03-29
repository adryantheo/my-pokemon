import React, {Suspense} from 'react'
import './Root.css'
// import Header from './Header/Header';
// import Body from './Body/Body';
// import Navigation from './Navigation/Navigation';
const Header = React.lazy(() => import('./Header/Header'));
const Body = React.lazy(() => import('./Body/Body'));
const Navigation = React.lazy(() => import('./Navigation/Navigation'));

export default function Root() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Body />
                <Navigation />
            </Suspense>
        </div>
    )
}
