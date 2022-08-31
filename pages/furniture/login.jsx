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
                        <h2 className="h2 title">Customer page</h2>
                        <ol className="breadcrumb breadcrumb-inverted">
                            <li><a href="#"><span className="icon icon-home"></span></a></li>
                            <li><a className="active" href="#">Login & Register</a></li>
                        </ol>
                    </div>
                </header>
            </section>

            {/* <!-- ========================  Login & register ======================== --> */}

            <section className="login-wrapper login-wrapper-page">
                <div className="container">

                    <header className="hidden">
                        <h3 className="h3 title">Sign in</h3>
                    </header>

                    <div className="row">

                        {/* <!-- === left content === --> */}

                        <div className="col-md-6 col-md-offset-3">

                            {/* <!-- === login-wrapper === --> */}

                            <div className="login-wrapper">

                                <div className="white-block">

                                    {/* <!--signin--> */}

                                    <div className="login-block login-block-signin">

                                        <div className="h4">Sign in <a href="#!" className="btn btn-main btn-xs btn-register pull-right">create an account</a></div>

                                        <hr />

                                        <div className="row">

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="User ID"/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password"/>
                                                </div>
                                            </div>

                                            <div className="col-xs-6">
                                                <span className="checkbox">
                                                    <input type="checkbox" id="checkBoxId3"/>
                                                    <label htmlFor="checkBoxId3">Remember me</label>
                                                </span>
                                            </div>

                                            <div className="col-xs-6 text-right">
                                                <a href="#" className="btn btn-main">Login</a>
                                            </div>
                                        </div>
                                    </div> 
                                    {/* <!--/signin--> */}
                                    {/* <!--signup--> */}

                                    <div className="login-block login-block-signup">

                                        <div className="h4">Register now <a href="#!" className="btn btn-main btn-xs btn-login pull-right">Log in</a></div>

                                        <hr />

                                        <div className="row">

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="First name: *"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Last name: *"/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">

                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Company name:"/>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Zip code: *"/>
                                                </div>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="City: *"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Email: *"/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Phone: *"/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <hr />
                                                <span className="checkbox">
                                                    <input type="checkbox" id="checkBoxId1"/>
                                                    <label htmlFor="checkBoxId1">I have read and accepted the <a href="#">terms</a>, as well as read and understood our terms of <a href="#">business contidions</a></label>
                                                </span>
                                                <span className="checkbox">
                                                    <input type="checkbox" id="checkBoxId2"/>
                                                    <label htmlFor="checkBoxId2">Subscribe to exciting newsletters and great tips</label>
                                                </span>
                                                <hr />
                                            </div>

                                            <div className="col-md-12">
                                                <a href="#" className="btn btn-main btn-block">Create account</a>
                                            </div>

                                        </div>
                                    </div> 
                                    {/* <!--/signup--> */}
                                </div>
                            </div> 
                            {/* <!--/login-wrapper--> */}
                        </div> 
                        {/* <!--/col-md-6--> */}

                    </div>

                </div>
            </section>

            {/* <!-- ================== Footer  ================== --> */}

            <Footer/>
        </Layout>
    );
}