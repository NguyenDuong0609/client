import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="shortcut icon" href={process.env.BASE_URL + "/blog/fav.png"}/>
                <meta name="author" content=""/>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <meta charSet="UTF-8"/>
                <title>Blog | Nguyen Duong Dev</title>

                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/>

                <link rel="stylesheet" href={process.env.BASE_URL + "/blog/css/font-awesome.min.css"}/>
                <link rel="stylesheet" href={process.env.BASE_URL + "/blog/css/themify-icons.css"}/>
                <link rel="stylesheet" href={process.env.BASE_URL + "/blog/css/bootstrap.min.css"}/>
                <link rel="stylesheet" href={process.env.BASE_URL + "/blog/css/animate.css"}/>
                <link rel="stylesheet" href={process.env.BASE_URL + "/blog/css/owl.carousel.css"}/>
                <link rel="stylesheet" href={process.env.BASE_URL + "/blog/css/owl.transitions.css"}/>
                <link rel="stylesheet" href={process.env.BASE_URL + "/blog/css/style.css"}/>
                <link rel="stylesheet" href={process.env.BASE_URL + "/blog/css/responsive.css"}/>
            </Head>
            {/* <Header/> */}
            { children }
            {/* <Footer/> */}
            <script src={process.env.BASE_URL + "/blog/js/vendor/jquery-2.2.4.min.js"}></script>
            <script src={process.env.BASE_URL + "/blog/js/vendor/popper.min.js"}></script>
            <script src={process.env.BASE_URL + "/blog/js/vendor/bootstrap.min.js"}></script>
            <script src={process.env.BASE_URL + "/blog/js/easing.min.js"}></script>
            <script src={process.env.BASE_URL + "/blog/js/bar.js"}></script>
            <script src={process.env.BASE_URL + "/blog/js/parallax.min.js"}></script>
            <script src={process.env.BASE_URL + "/blog/js/jquery.counterup.min.js"}></script>
            <script src={process.env.BASE_URL + "/blog/js/waypoints.min.js"}></script>
            <script src={process.env.BASE_URL + "/blog/js/owl.carousel.min.js"}></script>
            <script src={process.env.BASE_URL + "/blog/js/dopeNav.js"}></script>
            <script src={process.env.BASE_URL + "/blog/js/main.js"}></script>
        </>
    );
}

export default Layout;
