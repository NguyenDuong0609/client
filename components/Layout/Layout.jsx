import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                {/* meta tag is here
                css script libary font is here */}
            </Head>
            <Header/>
            { children }
            <Footer/>
            {/* script is here */}
        </>
    );
}

export default Layout;
