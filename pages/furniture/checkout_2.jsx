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
                        <h2 className="h2 title">Checkout</h2>
                        <ol className="breadcrumb breadcrumb-inverted">
                            <li><a href="#"><span className="icon icon-home"></span></a></li>
                            <li><a href="checkout_1">Cart items</a></li>
                            <li><a className="active" href="checkout_2">Delivery</a></li>
                            <li><a href="checkout_3">Payment</a></li>
                            <li><a href="checkout_4">Receipt</a></li>
                        </ol>
                    </div>
                </header>
            </section>

            {/* <!-- ========================  Step wrapper ======================== --> */}

            <div className="step-wrapper">
                <div className="container">

                    <div className="stepper">
                        <ul className="row">
                            <li className="col-md-3 active">
                                <span data-text="Cart items"></span>
                            </li>
                            <li className="col-md-3 active">
                                <span data-text="Delivery"></span>
                            </li>
                            <li className="col-md-3">
                                <span data-text="Payment"></span>
                            </li>
                            <li className="col-md-3">
                                <span data-text="Receipt"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- ========================  Checkout ======================== --> */}

            <section className="checkout">
                <div className="container">

                    <header className="hidden">
                        <h3 className="h3 title">Checkout - Step 2</h3>
                    </header>

                    {/* <!-- ========================  Cart navigation ======================== --> */}

                    <div className="clearfix">
                        <div className="row">
                            <div className="col-xs-6">
                                <a href="#" className="btn btn-clean-dark"><span className="icon icon-chevron-left"></span> Back to cart</a>
                            </div>
                            <div className="col-xs-6 text-right">
                                <a href="#" className="btn btn-main"><span className="icon icon-cart"></span> Go to payment</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- ========================  Delivery ======================== --> */}

                    <div className="cart-wrapper">

                        <div className="note-block">
                            <div className="row">

                                {/* <!-- === left content === --> */}

                                <div className="col-md-6">

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
                                            {/* <!--/signin-->
                                            <!--signup--> */}

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
                                {/* <!-- === right content === --> */}

                                <div className="col-md-6">

                                    <div className="white-block">

                                        <div className="h4">Choose delivery</div>

                                        <hr />

                                        <span className="checkbox">
                                            <input type="radio" id="deliveryId1" name="deliveryOption"/>
                                            <label htmlFor="deliveryId1">Delivery 1-3 Days - <strong>$50,00</strong></label>
                                        </span>

                                        <span className="checkbox">
                                            <input type="radio" id="deliveryId2" name="deliveryOption"/>
                                            <label htmlFor="deliveryId2">Fast delivery - <strong>$199,00</strong></label>
                                        </span>

                                        <span className="checkbox">
                                            <input type="radio" id="deliveryId3" name="deliveryOption"/>
                                            <label htmlFor="deliveryId3">Pick up in the store - <strong>Free</strong></label>
                                        </span>

                                        <hr />

                                        <div className="clearfix">
                                            <p>A frequently overlooked, powerful fulfillment option is offering local pick-up. If you have a physical location and can allow your customers to forgo paying shipping costs altogether, you should!</p>                            <p><strong>Benefits:</strong></p>
                                            <ul>
                                                <li>Avoid both shipping and packaging costs</li>
                                                <li>Develop a face-to-face relationship with your customers</li>
                                                <li>Potential for additional purchases while customers are at your store</li>
                                            </ul>
                                            <p><strong>Challenges:</strong></p>
                                            <ul>
                                                <li>Limited business hours can sometimes make it difficult to coordinate pickup</li>
                                                <li>Shoppers who cross state lines or ZIP codes may not know the sales tax rates in your area</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <!-- ========================  Cart wrapper ======================== --> */}

                    <div className="cart-wrapper">
                        {/* <!--cart header --> */}

                        <div className="cart-block cart-block-header clearfix">
                            <div>
                                <span>Product</span>
                            </div>
                            <div>
                                <span>&nbsp;</span>
                            </div>
                            <div>
                                <span>Quantity</span>
                            </div>
                            <div className="text-right">
                                <span>Price</span>
                            </div>
                        </div>

                        {/* <!--cart items--> */}

                        <div className="clearfix">
                            <div className="cart-block cart-block-item clearfix">
                                <div className="image">
                                    <a href="#"><img src="assets/images/product-1.png" alt="" /></a>
                                </div>
                                <div className="title">
                                    <div className="h4"><a href="#">Green corner</a></div>
                                    <div>Green corner</div>
                                </div>
                                <div className="quantity">
                                    <strong>1</strong>
                                </div>
                                <div className="price">
                                    <span className="final h3">$ 1.998</span>
                                    <span className="discount">$ 2.666</span>
                                </div>
                            </div>

                            <div className="cart-block cart-block-item clearfix">
                                <div className="image">
                                    <a href="#"><img src="assets/images/product-2.png" alt="" /></a>
                                </div>
                                <div className="title">
                                    <div className="h4"><a href="#">Green corner</a></div>
                                    <div>Green corner</div>
                                </div>
                                <div className="quantity">
                                    <strong>1</strong>
                                </div>
                                <div className="price">
                                    <span className="final h3">$ 1.998</span>
                                    <span className="discount">$ 2.666</span>
                                </div>
                            </div>

                            <div className="cart-block cart-block-item clearfix">
                                <div className="image">
                                    <a href="#"><img src="assets/images/product-3.png" alt="" /></a>
                                </div>
                                <div className="title">
                                    <div className="h4"><a href="#">Green corner</a></div>
                                    <div>Green corner</div>
                                </div>
                                <div className="quantity">
                                    <strong>1</strong>
                                </div>
                                <div className="price">
                                    <span className="final h3">$ 1.998</span>
                                    <span className="discount">$ 2.666</span>
                                </div>
                            </div>

                            <div className="cart-block cart-block-item clearfix">
                                <div className="image">
                                    <a href="#"><img src="assets/images/product-3.png" alt="" /></a>
                                </div>
                                <div className="title">
                                    <div className="h4"><a href="#">Green corner</a></div>
                                    <div>Green corner</div>
                                </div>
                                <div className="quantity">
                                    <strong>1</strong>
                                </div>
                                <div className="price">
                                    <span className="final h3">$ 1.998</span>
                                    <span className="discount">$ 2.666</span>
                                </div>
                            </div>
                        </div>

                        {/* <!--cart prices --> */}

                        <div className="clearfix">
                            <div className="cart-block cart-block-footer clearfix">
                                <div>
                                    <strong>Discount 15%</strong>
                                </div>
                                <div>
                                    <span>$ 159,00</span>
                                </div>
                            </div>

                            <div className="cart-block cart-block-footer clearfix">
                                <div>
                                    <strong>Shipping</strong>
                                </div>
                                <div>
                                    <span>$ 30,00</span>
                                </div>
                            </div>

                            <div className="cart-block cart-block-footer clearfix">
                                <div>
                                    <strong>VAT</strong>
                                </div>
                                <div>
                                    <span>$ 59,00</span>
                                </div>
                            </div>
                        </div>

                        {/* <!--cart final price --> */}

                        <div className="clearfix">
                            <div className="cart-block cart-block-footer clearfix">
                                <div>
                                    <strong>Promo code included!</strong>
                                </div>
                                <div>
                                    <div className="h2 title">$ 1259,00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- ========================  Cart navigation ======================== --> */}

                    <div className="clearfix">
                        <div className="row">
                            <div className="col-xs-6">
                                <a href="#" className="btn btn-clean-dark"><span className="icon icon-chevron-left"></span> Back to cart</a>
                            </div>
                            <div className="col-xs-6 text-right">
                                <a href="#" className="btn btn-main"><span className="icon icon-cart"></span> Go to payment</a>
                            </div>
                        </div>
                    </div>


                </div> 
                {/* <!--/container--> */}

            </section>

            {/* <!-- ================== Footer  ================== --> */}

            <Footer/>
        </Layout>
    );
}