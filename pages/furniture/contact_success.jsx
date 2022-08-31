import React from "react";
import Layout from "../../components/Furniture/Layout";
import Navbar from "../../components/Furniture/components/Navbar";
import Footer from "../../components/Furniture/components/Footer";
import dynamic from "next/dynamic";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export default function Index({ }) {
    return (
        <Layout>
            {/* <!-- ======================== Navigation ======================== --> */}

            <Navbar/>

            {/* <!-- ========================  Main header ======================== --> */}

            <section className="main-header" style={{ backgroundImage: "url(" + "../../furniture/assets/images/gallery-2.jpg" + ")" }}>
                <header>
                    <div className="container text-center">
                        <h2 className="h2 title">Contact</h2>
                        <ol className="breadcrumb breadcrumb-inverted">
                            <li><a href="#"><span className="icon icon-home"></span></a></li>
                            <li><a className="active" href="#">Contact</a></li>
                        </ol>
                    </div>
                </header>
            </section>

            {/* <!-- ========================  Contact ======================== --> */}

            <section className="contact">

                {/* <!-- === Goolge map === --> */}

                <div id="map"></div>

                <div className="container">

                    <div className="row">

                        <div className="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">

                            <div className="contact-block">

                                <div className="alert alert-success text-center" role="alert">
                                    Your message has been successfully sent!
                                </div>

                                <div className="contact-info">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <figure className="text-center">
                                                <span className="icon icon-map-marker"></span>
                                                <figcaption>
                                                    <strong>Where are we?</strong>
                                                    <span>200 12th Ave, New York, <br />NY 10001, USA</span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-sm-4">
                                            <figure className="text-center">
                                                <span className="icon icon-phone"></span>
                                                <figcaption>
                                                    <strong>Call us</strong>
                                                    <span>
                                                        <strong>T</strong> +1 222 333 4444 <br />
                                                        <strong>F</strong> +1 222 333 5555
                                                    </span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-sm-4">
                                            <figure className="text-center">
                                                <span className="icon icon-clock"></span>
                                                <figcaption>
                                                    <strong>Working hours</strong>
                                                    <span>
                                                        <strong>Mon</strong> - Sat: 10 am - 6 pm <br />
                                                        <strong>Sun</strong> 12pm - 2 pm
                                                    </span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>

                                <div className="banner">
                                    <div className="row">
                                        <div className="col-md-offset-1 col-md-10 text-center">
                                            <h2 className="title">Thank you for contacting us!</h2>
                                            <p>
                                                You are very important to us, all information received will always remain confidential. We will contact you as soon as we review your message.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-info">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-4">
                                            <figure>
                                                <figcaption>
                                                    <strong>Sales</strong>
                                                    <span>
                                                        <strong>T</strong> +1 125 251 4586 <br />
                                                        <strong>F</strong> +1 251 333 5555
                                                    </span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-xs-6 col-sm-4">
                                            <figure>
                                                <figcaption>
                                                    <strong>Services</strong>
                                                    <span>
                                                        <strong>T</strong> +1 654 333 8541 <br />
                                                        <strong>F</strong> +1 125 251 5555
                                                    </span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-xs-6 col-sm-4">
                                            <figure>
                                                <figcaption>
                                                    <strong>Support</strong>
                                                    <span>
                                                        <strong>T</strong> +1 222 852 9632 <br />
                                                        <strong>F</strong> +1 357 333 5555
                                                    </span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-xs-6 col-sm-4">
                                            <figure>
                                                <figcaption>
                                                    <strong>Human resources</strong>
                                                    <span>
                                                        <strong>T</strong> +1 963 333 8745 <br />
                                                        <strong>F</strong> +1 159 333 5555
                                                    </span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-xs-6 col-sm-4">
                                            <figure>
                                                <figcaption>
                                                    <strong>Factory</strong>
                                                    <span>
                                                        <strong>T</strong> +1 753 333 1259 <br />
                                                        <strong>F</strong> +1 247 652 5555
                                                    </span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="col-xs-6 col-sm-4">
                                            <figure>
                                                <figcaption>
                                                    <strong>Delivery</strong>
                                                    <span>
                                                        <strong>T</strong> +1 134 197 7532 <br />
                                                        <strong>F</strong> +1 291 468 4563
                                                    </span>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/* <!--col-sm-8--> */}
                    </div> 
                    {/* <!--/row--> */}
                </div>
                {/* <!--/container--> */}
            </section>

            {/* <!-- ================== Footer  ================== --> */}

            <Footer/>
        </Layout>
    );
}