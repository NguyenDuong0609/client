import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Head from "next/head";
import Sidebar from "./components/Sidebar/Sidebar";
import Document, { Html, Main, NextScript } from "next/document";
import { Container, Typography } from "@material-ui/core";

const LayoutAdmin = ({ children }) => {
  useEffect(() => {
    if (
      localStorage.getItem("authenticate") == false ||
      !localStorage.getItem("authenticate")
    ) {
      window.location.href = "/admin/login";
    }
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="../assets/img/apple-icon.png"
        />
        <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>
          Material Dashboard PRO by Creative Tim {process.env.BASE_URL}
        </title>
        <meta
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
          name="viewport"
        />
        {/* Fonts and icons */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        />
        {/* CSS Files */}
        <link
          href={
            process.env.BASE_URL +
            "/assets/css/material-dashboard.min.css?v=2.2.2"
          }
          rel="stylesheet"
        />
        {/* CSS Just for demo purpose, don't include it in your project */}
        <link
          href={process.env.BASE_URL + "/assets/demo/demo.css"}
          rel="stylesheet"
        />
      </Head>
      {/* <Header/> */}
      <div className="wrapper">
        <Sidebar />
        {children}
      </div>
      {/* Core JS Files */}
      <script
        src={process.env.BASE_URL + "/assets/js/core/jquery.min.js"}
      ></script>
      <script
        src={process.env.BASE_URL + "/assets/js/core/popper.min.js"}
      ></script>
      <script
        src={
          process.env.BASE_URL +
          "/assets/js/core/bootstrap-material-design.min.js"
        }
      ></script>
      <script
        src={
          process.env.BASE_URL + "/assets/js/plugins/perfect-scrollbar.min.js"
        }
      ></script>
      {/* Plugin for the momentJs */}
      <script
        src={process.env.BASE_URL + "/assets/js/plugins/moment.min.js"}
      ></script>
      {/* Plugin for Sweet Alert */}
      <script
        src={process.env.BASE_URL + "/assets/js/plugins/sweetalert2.js"}
      ></script>
      {/* Forms Validations Plugin */}
      <script
        src={process.env.BASE_URL + "/assets/js/plugins/jquery.validate.min.js"}
      ></script>
      {/* Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard */}
      <script
        src={
          process.env.BASE_URL + "/assets/js/plugins/jquery.bootstrap-wizard.js"
        }
      ></script>
      {/* <Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select */}
      <script
        src={
          process.env.BASE_URL + "/assets/js/plugins/bootstrap-selectpicker.js"
        }
      ></script>
      {/* <Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ */}
      <script
        src={
          process.env.BASE_URL +
          "/assets/js/plugins/bootstrap-datetimepicker.min.js"
        }
      ></script>
      {/* DataTables.net Plugin, full documentation here: https://datatables.net/ */}
      <script
        src={
          process.env.BASE_URL + "/assets/js/plugins/jquery.dataTables.min.js"
        }
      ></script>
      {/* Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs */}
      <script
        src={process.env.BASE_URL + "/assets/js/plugins/bootstrap-tagsinput.js"}
      ></script>
      {/* Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput */}
      <script
        src={process.env.BASE_URL + "/assets/js/plugins/jasny-bootstrap.min.js"}
      ></script>
      {/* Full Calendar Plugin, full documentation here: https://github.com/fullcalendar/fullcalendar */}
      <script
        src={process.env.BASE_URL + "/assets/js/plugins/fullcalendar.min.js"}
      ></script>
      {/* Vector Map plugin, full documentation here: http://jvectormap.com/documentation/ */}
      <script
        src={process.env.BASE_URL + "/assets/js/plugins/jquery-jvectormap.js"}
      ></script>
      {/* Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ */}
      <script
        src={process.env.BASE_URL + "/assets/js/plugins/nouislider.min.js"}
      ></script>
      {/* Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support SweetAlert */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
      {/* Library for adding dinamically elements */}
      <script
        src={process.env.BASE_URL + "/assets/js/plugins/arrive.min.js"}
      ></script>
      {/* Google Maps Plugin */}
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Yno10-YTnLjjn_Vtk0V8cdcY5lC4plU"></script>
      {/* Place this tag in your head or just before your close body tag. */}
      <script async defer src="https://buttons.github.io/buttons.js"></script>
      {/* Chartist JS */}
      <script
        src={process.env.BASE_URL + "/assets/js/plugins/chartist.min.js"}
      ></script>
      {/* Notifications Plugin */}
      <script
        src={process.env.BASE_URL + "/assets/js/plugins/bootstrap-notify.js"}
      ></script>
      {/* Control Center for Material Dashboard: parallax effects, scripts for the example pages etc */}
      <script
        src={
          process.env.BASE_URL + "/assets/js/material-dashboard.min.js?v=2.2.2"
        }
        type="text/javascript"
      ></script>
      {/* Material Dashboard DEMO methods, don't include it in your project! */}
      {/* Sharrre libray */}
      <script
        src={process.env.BASE_URL + "/assets/js/plugins/bootstrap-notify.js"}
      ></script>
      <script
        src={process.env.BASE_URL + "/assets/demo/jquery.sharrre.js"}
      ></script>
      <script src={process.env.BASE_URL + "/assets/js/custom.js"} />
    </>
  );
};

export default LayoutAdmin;
