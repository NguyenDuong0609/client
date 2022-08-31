import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="mobile-web-app-capable" content="yes"/>

                <meta name="description" content=""/>
                <meta name="author" content=""/>
                <link rel="icon" href="favicon.ico"/>

                <title>Mobel - Furniture Website Template</title>

                <link rel="stylesheet" media="all" href={process.env.BASE_URL + "/furniture/css/bootstrap.css"} />
                <link rel="stylesheet" media="all" href={process.env.BASE_URL + "/furniture/css/animate.css"} />
                <link rel="stylesheet" media="all" href={process.env.BASE_URL + "/furniture/css/font-awesome.css"} />
                <link rel="stylesheet" media="all" href={process.env.BASE_URL + "/furniture/css/furniture-icons.css"} />
                <link rel="stylesheet" media="all" href={process.env.BASE_URL + "/furniture/css/linear-icons.css"} />
                <link rel="stylesheet" media="all" href={process.env.BASE_URL + "/furniture/css/magnific-popup.css"} />
                <link rel="stylesheet" media="all" href={process.env.BASE_URL + "/furniture/css/owl.carousel.css"} />
                <link rel="stylesheet" media="all" href={process.env.BASE_URL + "/furniture/css/ion-range-slider.css"} />
                <link rel="stylesheet" media="all" href={process.env.BASE_URL + "/furniture/css/theme.css"} />

                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600&amp;subset=latin-ext" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>

                <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
                <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
            </Head>
            {/* <Header/> */}
            { children }
            {/* <Footer/> */}
            <script src={process.env.BASE_URL + "/furniture/js/jquery.min.js"}></script>
            <script src={process.env.BASE_URL + "/furniture/js/jquery.bootstrap.js"}></script>
            <script src={process.env.BASE_URL + "/furniture/js/jquery.magnific-popup.js"}></script>
            <script src={process.env.BASE_URL + "/furniture/js/jquery.owl.carousel.js"}></script>
            <script src={process.env.BASE_URL + "/furniture/js/jquery.ion.rangeSlider.js"}></script>
            <script src={process.env.BASE_URL + "/furniture/js/jquery.isotope.pkgd.js"}></script>
            <script src={process.env.BASE_URL + "/furniture/js/main.js"}></script>
        </>
    );
}

export default Layout;