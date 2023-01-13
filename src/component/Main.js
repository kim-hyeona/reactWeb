import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import Nav from './Nav'
import Header from './Header'
import Company from './Company'
import Prodcut from './Prodcut'
import News from './News'
import Contact from './Contact'
import Footer from './Footer'

function Main(props) {
    return (
        <BrowserRouter>
            <Nav/>
            <Header/>
            <Company/>
            <Prodcut/>
            <News/>
            <Contact/>
            <Footer/>
        </BrowserRouter>
    );
}

export default Main;