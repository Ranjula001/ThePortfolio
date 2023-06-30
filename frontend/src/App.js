import React from 'react';

import './App.scss';

import { About, Footer, Header, Imonials} from './container';

import {Navbar} from './components';

const App = () => {
    return(
        <div className='app'>
            <Navbar/>
            <Header/>
            <About/>
            <Imonials/>
            <Footer/>
        </div>
    )
}
export default App