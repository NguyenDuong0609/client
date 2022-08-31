import React, { useState, useEffect } from "react";

export default function Navbar(props) {
    return (
        <nav className="navbar-fixed">
            <div className="container">

                {/* <!-- ==========  Top navigation ========== --> */}

                <div className="navigation navigation-top clearfix">
                    <ul>
                        {/* <!--add active class for current page--> */}

                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>

                        {/* <!--Currency selector--> */}

                        <li className="nav-settings">
                            <a href="#!" className="nav-settings-value"> USD $</a>
                            <ul className="nav-settings-list">
                                <li>USD $</li>
                                <li>EUR €</li>
                                <li>CHF Fr.</li>
                                <li>GBP £</li>
                            </ul>
                        </li>

                        {/* <!--Language selector--> */}

                        <li className="nav-settings">
                            <a href="#!" className="nav-settings-value"> ENG</a>
                            <ul className="nav-settings-list">
                                <li>ENG</li>
                                <li>GER</li>
                                <li>لعربية</li>
                                <li>עִבְרִית</li>
                            </ul>
                        </li>
                        <li><a href="#!" className="open-login"><i className="icon icon-user"></i></a></li>
                        <li><a href="#!" className="open-search"><i className="icon icon-magnifier"></i></a></li>
                        <li><a href="#!" className="open-cart"><i className="icon icon-cart"></i> <span>3</span></a></li>
                    </ul>
                </div> 
                {/* <!--/navigation-top--> */}

                {/* <!-- ==========  Main navigation ========== --> */}

                <div className="navigation navigation-main">

                    {/* <!-- Setup your logo here--> */}

                    <a href="#" className="logo"><img src={ process.env.BASE_URL + "/furniture/assets/images/logo.png"} alt="" /></a>

                    {/* <!-- Mobile toggle menu --> */}

                    <a href="#" className="open-menu"><i className="icon icon-menu"></i></a>

                    {/* <!-- Convertible menu (mobile/desktop)--> */}

                    <div className="floating-menu">

                        {/* <!-- Mobile toggle menu trigger--> */}

                        <div className="close-menu-wrapper">
                            <span className="close-menu"><i className="icon icon-cross"></i></span>
                        </div>

                        <ul>
                            <li><a href="/furniture">Home</a></li>
                            <li><a href="/furniture/product_list">Product List</a></li>
                            <li><a href="/furniture/product">Product</a></li>
                            <li><a href="/furniture/about">About</a></li>
                            <li><a href="/furniture/contact">Contact</a></li>
                            <li><a href="/furniture/login">Login</a></li>
                            <li><a href="/furniture/checkout_1">Checkout</a></li>    
                        </ul>
                    </div> 
                    {/* <!--/floating-menu--> */}
                </div> 
                {/* <!--/navigation-main--> */}

                {/* <!-- ==========  Search wrapper ========== --> */}

                <div className="search-wrapper">

                    {/* <!-- Search form --> */}
                    <input className="form-control" placeholder="Search..." />
                    <button className="btn btn-main btn-search">Go!</button>

                    {/* <!-- Search results - live search --> */}
                    <div className="search-results">
                        <div className="search-result-items">
                            <div className="title h4">Products <a href="#" className="btn btn-clean-dark btn-xs">View all</a></div>
                            <ul>
                                <li><a href="#"><span className="id">42563</span> <span className="name">Green corner</span> <span className="category">Sofa</span></a></li>
                                <li><a href="#"><span className="id">42563</span> <span className="name">Laura</span> <span className="category">Armchairs</span></a></li>
                                <li><a href="#"><span className="id">42563</span> <span className="name">Nude</span> <span className="category">Dining tables</span></a></li>
                                <li><a href="#"><span className="id">42563</span> <span className="name">Aurora</span> <span className="category">Nightstands</span></a></li>
                                <li><a href="#"><span className="id">42563</span> <span className="name">Dining set</span> <span className="category">Kitchen</span></a></li>
                                <li><a href="#"><span className="id">42563</span> <span className="name">Seat chair</span> <span className="category">Bar sets</span></a></li>
                            </ul>
                        </div> 
                        {/* <!--/search-result-items--> */}
                        <div className="search-result-items">
                            <div className="title h4">Blog <a href="#" className="btn btn-clean-dark btn-xs">View all</a></div>
                            <ul>
                                <li><a href="#"><span className="id">01 Jan</span> <span className="name">Creating the Perfect Gallery Wall </span> <span className="category">Interior ideas</span></a></li>
                                <li><a href="#"><span className="id">12 Jan</span> <span className="name">Making the Most Out of Your Kids Old Bedroom</span> <span className="category">Interior ideas</span></a></li>
                                <li><a href="#"><span className="id">28 Dec</span> <span className="name">Have a look at our new projects!</span> <span className="category">Modern design</span></a></li>
                                <li><a href="#"><span className="id">31 Sep</span> <span className="name">Decorating When You're Starting Out or Starting Over</span> <span className="category">Best of 2017</span></a></li>
                                <li><a href="#"><span className="id">22 Sep</span> <span className="name">The 3 Tricks that Quickly Became Rules</span> <span className="category">Tips for you</span></a></li>
                            </ul>
                        </div> 
                        {/* <!--/search-result-items--> */}
                    </div> 
                    {/* <!--/search-results--> */}
                </div>

                {/* <!-- ==========  Login wrapper ========== --> */}

                <div className="login-wrapper">
                    <form>
                        <div className="h4">Sign in</div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <a href="#forgotpassword" className="open-popup">Forgot password?</a>
                            <a href="#createaccount" className="open-popup">Don't have an account?</a>
                        </div>
                        <button type="submit" className="btn btn-block btn-main">Submit</button>
                    </form>
                </div>

                {/* <!-- ==========  Cart wrapper ========== --> */}

                <div className="cart-wrapper">
                    <div className="checkout">
                        <div className="clearfix">

                            {/* <!--cart item--> */}

                            <div className="row">

                                <div className="cart-block cart-block-item clearfix">
                                    <div className="image">
                                        <a href="#"><img src={ process.env.BASE_URL + "/furniture/assets/images/product-1.png"} alt="" /></a>
                                    </div>
                                    <div className="title">
                                        <div><a href="#">Green corner</a></div>
                                        <small>Green corner</small>
                                    </div>
                                    <div className="quantity">
                                        <input type="number" className="form-control form-quantity" />
                                    </div>
                                    <div className="price">
                                        <span className="final">$ 1.998</span>
                                        <span className="discount">$ 2.666</span>
                                    </div>
                                    {/* <!--delete-this-item--> */}
                                    <span className="icon icon-cross icon-delete"></span>
                                </div>

                                {/* <!--cart item--> */}

                                <div className="cart-block cart-block-item clearfix">
                                    <div className="image">
                                        <a href="#"><img src={ process.env.BASE_URL + "/furniture/assets/images/product-2.png"} alt="" /></a>
                                    </div>
                                    <div className="title">
                                        <div><a href="#">Green corner</a></div>
                                        <small>Green corner</small>
                                    </div>
                                    <div className="quantity">
                                        <input type="number" className="form-control form-quantity" />
                                    </div>
                                    <div className="price">
                                        <span className="final">$ 1.998</span>
                                        <span className="discount">$ 2.666</span>
                                    </div>
                                    {/* <!--delete-this-item--> */}
                                    <span className="icon icon-cross icon-delete"></span>
                                </div>

                                {/* <!--cart item--> */}

                                <div className="cart-block cart-block-item clearfix">
                                    <div className="image">
                                        <a href="#"><img src={ process.env.BASE_URL + "/furniture/assets/images/product-3.png"} alt="" /></a>
                                    </div>
                                    <div className="title">
                                        <div><a href="#">Green corner</a></div>
                                        <small>Green corner</small>
                                    </div>
                                    <div className="quantity">
                                        <input type="number" className="form-control form-quantity" />
                                    </div>
                                    <div className="price">
                                        <span className="final">$ 1.998</span>
                                        <span className="discount">$ 2.666</span>
                                    </div>
                                    {/* <!--delete-this-item--> */}
                                    <span className="icon icon-cross icon-delete"></span>
                                </div>

                                {/* <!--cart item--> */}

                                <div className="cart-block cart-block-item clearfix">
                                    <div className="image">
                                        <a href="#"><img src={ process.env.BASE_URL + "/furniture/assets/images/product-4.png"} alt="" /></a>
                                    </div>
                                    <div className="title">
                                        <div><a href="#">Green corner</a></div>
                                        <small>Green corner</small>
                                    </div>
                                    <div className="quantity">
                                        <input type="number" className="form-control form-quantity" />
                                    </div>
                                    <div className="price">
                                        <span className="final">$ 1.998</span>
                                        <span className="discount">$ 2.666</span>
                                    </div>
                                    {/* <!--delete-this-item--> */}
                                    <span className="icon icon-cross icon-delete"></span>
                                </div>
                            </div>

                            <hr />

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

                            <hr />

                            {/* <!--cart final price --> */}

                            <div className="clearfix">
                                <div className="cart-block cart-block-footer clearfix">
                                    <div>
                                        <strong>Total</strong>
                                    </div>
                                    <div>
                                        <div className="h4 title">$ 1259,00</div>
                                    </div>
                                </div>
                            </div>


                            {/* <!--cart navigation --> */}

                            <div className="cart-block-buttons clearfix">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a href="#" className="btn btn-clean-dark">Continue shopping</a>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                        <a href="#" className="btn btn-main"><span className="icon icon-cart"></span> Checkout</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> 
                    {/* <!--/checkout--> */}
                </div> 
                {/* <!--/cart-wrapper--> */}
            </div> 
            {/* <!--/container--> */}
        </nav>
    );
}