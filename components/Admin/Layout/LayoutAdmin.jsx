import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Head from 'next/head'
import Sidebar from './components/Sidebar/Sidebar';
import Document, { Html, Main, NextScript } from 'next/document'

import $ from 'jquery';

const LayoutAdmin = ({ children }) => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png"/>
                <link rel="icon" type="image/png" href="../assets/img/favicon.png"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <title>
                    Material Dashboard PRO by Creative Tim
                </title>
                <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
                {/* Extra details for Live View on GitHub Pages */}
                {/* Canonical SEO */}
                <link rel="canonical" href="https://www.creative-tim.com/product/material-dashboard-pro" />
                {/* Social tags */}
                <meta name="keywords" content="creative tim, html dashboard, html css dashboard, web dashboard, bootstrap 4 dashboard, bootstrap 4, css3 dashboard, bootstrap 4 admin, material dashboard bootstrap 4 dashboard, frontend, responsive bootstrap 4 dashboard, material design, material dashboard bootstrap 4 dashboard"/>
                <meta name="description" content="Material Dashboard PRO is a Premium Material Bootstrap 4 Admin with a fresh, new design inspired by Google's Material Design."/>
                {/* Schema.org markup for Google+ */}
                <meta itemprop="name" content="Material Dashboard PRO by Creative Tim"/>
                <meta itemprop="description" content="Material Dashboard PRO is a Premium Material Bootstrap 4 Admin with a fresh, new design inspired by Google's Material Design."/>
                <meta itemprop="image" content="https://s3.amazonaws.com/creativetim_bucket/products/51/original/opt_mdp_thumbnail.jpg"/>
                {/* Twitter Card data */}
                <meta name="twitter:card" content="product"/>
                <meta name="twitter:site" content="@creativetim"/>
                <meta name="twitter:title" content="Material Dashboard PRO by Creative Tim"/>
                <meta name="twitter:description" content="Material Dashboard PRO is a Premium Material Bootstrap 4 Admin with a fresh, new design inspired by Google's Material Design."/>
                <meta name="twitter:creator" content="@creativetim"/>
                <meta name="twitter:image" content="https://s3.amazonaws.com/creativetim_bucket/products/51/original/opt_mdp_thumbnail.jpg"/>
                {/* Open Graph data */}
                <meta property="fb:app_id" content="655968634437471"/>
                <meta property="og:title" content="Material Dashboard PRO by Creative Tim" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="http://demos.creative-tim.com/material-dashboard-pro/examples/dashboard.html" />
                <meta property="og:image" content="https://s3.amazonaws.com/creativetim_bucket/products/51/original/opt_mdp_thumbnail.jpg" />
                <meta property="og:description" content="Material Dashboard PRO is a Premium Material Bootstrap 4 Admin with a fresh, new design inspired by Google's Material Design." />
                <meta property="og:site_name" content="Creative Tim" />
                {/* Fonts and icons */}
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"/>
                {/* CSS Files */}
                <link href="../assets/css/material-dashboard.min.css?v=2.2.2" rel="stylesheet" />
                {/* CSS Just for demo purpose, don't include it in your project */}
                <link href="../assets/demo/demo.css" rel="stylesheet" />
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-NKDMSK6');`,
                    }}
                />
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                />
                {/* End Google Tag Manager */}
            </Head>
            {/* <Header/> */}
            <div className="wrapper">
                <Sidebar/>
                { children }
            </div>
            <Footer/>
            {/* Core JS Files */}
            <script src="../assets/js/core/jquery.min.js"></script>
            <script src="../assets/js/core/popper.min.js"></script>
            <script src="../assets/js/core/bootstrap-material-design.min.js"></script>
            <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
            {/* Plugin for the momentJs */}
            <script src="../assets/js/plugins/moment.min.js"></script>
            {/* Plugin for Sweet Alert */}
            <script src="../assets/js/plugins/sweetalert2.js"></script>
            {/* Forms Validations Plugin */}
            <script src="../assets/js/plugins/jquery.validate.min.js"></script>
            {/* Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard */}
            <script src="../assets/js/plugins/jquery.bootstrap-wizard.js"></script>
            {/* <Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select */}
            <script src="../assets/js/plugins/bootstrap-selectpicker.js"></script>
            {/* <Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ */}
            <script src="../assets/js/plugins/bootstrap-datetimepicker.min.js"></script>
            {/* DataTables.net Plugin, full documentation here: https://datatables.net/ */}
            <script src="../assets/js/plugins/jquery.dataTables.min.js"></script>
            {/* Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs */}
            <script src="../assets/js/plugins/bootstrap-tagsinput.js"></script>
            {/* Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput */}
            <script src="../assets/js/plugins/jasny-bootstrap.min.js"></script>
            {/* Full Calendar Plugin, full documentation here: https://github.com/fullcalendar/fullcalendar */}
            <script src="../assets/js/plugins/fullcalendar.min.js"></script>
            {/* Vector Map plugin, full documentation here: http://jvectormap.com/documentation/ */}
            <script src="../assets/js/plugins/jquery-jvectormap.js"></script>
            {/* Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ */}
            <script src="../assets/js/plugins/nouislider.min.js"></script>
            {/* Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support SweetAlert */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
            {/* Library for adding dinamically elements */}
            <script src="../assets/js/plugins/arrive.min.js"></script>
            {/* Google Maps Plugin */}
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Yno10-YTnLjjn_Vtk0V8cdcY5lC4plU"></script>
            {/* Place this tag in your head or just before your close body tag. */}
            <script async defer src="https://buttons.github.io/buttons.js"></script>
            {/* Chartist JS */}
            <script src="../assets/js/plugins/chartist.min.js"></script>
            {/* Notifications Plugin */}
            <script src="../assets/js/plugins/bootstrap-notify.js"></script>
            {/* Control Center for Material Dashboard: parallax effects, scripts for the example pages etc */}
            <script src="../assets/js/material-dashboard.min.js?v=2.2.2" type="text/javascript"></script>
            {/* Material Dashboard DEMO methods, don't include it in your project! */}
            {/* Sharrre libray */}
            <script src="../assets/demo/jquery.sharrre.js"></script>
            <script src="../assets/js/custom.js"/>
            <noscript>
                <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=111649226022273&ev=PageView&noscript=1" />
            </noscript>
        </>
    );
}

export default LayoutAdmin;