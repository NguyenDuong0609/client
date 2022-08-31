import React, { useState, useEffect } from "react";

export default function Sidebar(props) {
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

                    <a href="index.html" className="logo"><img src={ process.env.BASE_URL + "/furniture/assets/images/logo.png"} alt="" /></a>

                    {/* <!-- Mobile toggle menu --> */}

                    <a href="#" className="open-menu"><i className="icon icon-menu"></i></a>

                    {/* <!-- Convertible menu (mobile/desktop)--> */}

                    <div className="floating-menu">

                        {/* <!-- Mobile toggle menu trigger--> */}

                        <div className="close-menu-wrapper">
                            <span className="close-menu"><i className="icon icon-cross"></i></span>
                        </div>

                        <ul>
                            <li><a href="index.html">Home</a></li>
                            
                            {/* <!-- Multi-content dropdown --> */}

                            <li>
                                <a href="index.html">Pages <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                <div className="navbar-dropdown">
                                    <div className="navbar-box">

                                        {/* <!-- box-1 (left-side)--> */}

                                        <div className="box-1">
                                            <div className="box">
                                                <div className="h2">Find your inspiration</div>
                                                <div className="clearfix">
                                                    <p>Homes that differ in terms of style, concept and architectural solutions have been furnished by Furniture Factory. These spaces tell of an international lifestyle that expresses modernity, research and a creative spirit.</p>
                                                    <a className="btn btn-clean btn-big" href="products-grid.html">Shop now</a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- box-2 (right-side)--> */}

                                        <div className="box-2">
                                            <div className="box clearfix">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <ul>
                                                            <li className="label">Homepage</li>
                                                            <li><a href="index.html">Home - Slider</a></li>
                                                            <li><a href="index-2.html">Home - Tabsy gallery</a></li>
                                                            <li><a href="index-3.html">Home - Slider full screen</a></li>
                                                            <li><a href="index-4.html">Home - Info icons</a></li>
                                                            <li><a href="index-xmas.html">Home - Xmas</a></li>
                                                            <li><a href="index-rtl.html">Home - RTL <span className="label label-warning">New</span></a></li>
                                                            <li><a href="index-5.html">Onepage</a></li>
                                                            <li><a href="index-6.html">Onepage - Filters <span className="label label-warning">Isotope</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul>
                                                            <li className="label">Blog</li>
                                                            <li><a href="blog-grid.html">Blog grid</a></li>
                                                            <li><a href="blog-list.html">Blog list</a></li>
                                                            <li><a href="blog-grid-fullpage.html">Blog fullpage</a></li>
                                                            <li><a href="ideas.html">Blog ideas</a></li>
                                                            <li><a href="article.html">Blog article</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul>
                                                            <li className="label">Pages</li>
                                                            <li><a href="about.html">About us</a></li>
                                                            <li><a href="contact.html">Contact</a></li>
                                                            <li><a href="login.html">Login & Register <span className="label label-warning">New</span></a></li>
                                                        </ul>
                                                        <ul>
                                                            <li className="label">Extras</li>
                                                            <li><a href="shortcodes.html">Shortcodes</a></li>
                                                            <li><a href="email-receipt.html">Email template <span className="label label-warning">New</span></a></li>
                                                            <li><a href="404.html">Not found 404 <span className="label label-warning">New</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div> 
                                                {/* <!--/row--> */}
                                            </div> 
                                            {/* <!--/box--> */}
                                        </div> 
                                        {/* <!--/box-2--> */}
                                    </div> 
                                    {/* <!--/navbar-box--> */}
                                </div> 
                                {/* <!--/navbar-dropdown--> */}
                            </li>

                            {/* <!-- Single dropdown--> */}

                            <li>
                                <a href="#">Shop <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                <div className="navbar-dropdown navbar-dropdown-single">
                                    <div className="navbar-box">

                                        {/* <!-- box-2 (without 'box-1', box-2 will be displayed as full width)--> */}

                                        <div className="box-2">
                                            <div className="box clearfix">
                                                <ul>
                                                    <li className="label">Shop</li>
                                                    <li><a href="products-grid.html">Products grid</a></li>
                                                    <li><a href="products-list.html">Products list</a></li>
                                                    <li><a href="category.html">Products intro</a></li>
                                                    <li><a href="products-topbar.html">Products topbar</a></li>
                                                    <li><a href="product.html">Product overview</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="label">Shop Isotope</li>
                                                    <li><a href="products-grid-isotope.html">Products filters <span className="label label-warning">New</span></a></li>
                                                    <li><a href="products-topbar-isotope.html">Products topbar <span className="label label-warning">New</span></a></li>
                                                </ul>
                                                <ul>
                                                    <li className="label">Checkout</li>
                                                    <li><a href="checkout-1.html">Checkout - Cart items</a></li>
                                                    <li><a href="checkout-2.html">Checkout - Delivery</a></li>
                                                    <li><a href="checkout-3.html">Checkout - Payment</a></li>
                                                    <li><a href="checkout-4.html">Checkout - Receipt</a></li>
                                                </ul>
                                            </div> 
                                            {/* <!--/box--> */}
                                        </div> 
                                        {/* <!--/box-2--> */}
                                    </div> 
                                    {/* <!--/navbar-box--> */}
                                </div> 
                                {/* <!--/navbar-dropdown--> */}
                            </li>

                            {/* <!-- Furniture icons in dropdown--> */}

                            <li>
                                <a href="category.html">Icons <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                <div className="navbar-dropdown">
                                    <div className="navbar-box">

                                        {/* <!-- box-1 (left-side)--> */}

                                        <div className="box-1">
                                            <div className="image">
                                                <img src={ process.env.BASE_URL + "/furniture/assets/images/blog-2.jpg"} alt="Lorem ipsum" />
                                            </div>
                                            <div className="box">
                                                <div className="h2">Best ideas</div>
                                                <div className="clearfix">
                                                    <p>Homes that differ in terms of style, concept and architectural solutions have been furnished by Furniture Factory. These spaces tell of an international lifestyle that expresses modernity, research and a creative spirit.</p>
                                                    <a className="btn btn-clean btn-big" href="ideas.html">Explore</a>
                                                </div>
                                            </div>
                                        </div> 
                                        {/* <!--/box-1-->

                                        <!-- box-2 (right-side)--> */}

                                        <div className="box-2">
                                            <div className="clearfix categories">
                                                <div className="row">
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-sofa"></i>
                                                                <figcaption>Sofa</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-armchair"></i>
                                                                <figcaption>Armchairs</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-chair"></i>
                                                                <figcaption>Chairs</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-dining-table"></i>
                                                                <figcaption>Dining tables</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-media-cabinet"></i>
                                                                <figcaption>Media storage</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-table"></i>
                                                                <figcaption>Tables</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-bookcase"></i>
                                                                <figcaption>Bookcase</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-bedroom"></i>
                                                                <figcaption>Bedroom</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-nightstand"></i>
                                                                <figcaption>Nightstand</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-children-room"></i>
                                                                <figcaption>Children room</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-kitchen"></i>
                                                                <figcaption>Kitchen</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-bathroom"></i>
                                                                <figcaption>Bathroom</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-wardrobe"></i>
                                                                <figcaption>Wardrobe</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-shoe-cabinet"></i>
                                                                <figcaption>Shoe cabinet</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-office"></i>
                                                                <figcaption>Office</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-bar-set"></i>
                                                                <figcaption>Bar sets</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-lightning"></i>
                                                                <figcaption>Lightning</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                    {/* <!--icon item-->                                                 */}

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="#!">
                                                            <figure>
                                                                <i className="f-icon f-icon-carpet"></i>
                                                                <figcaption>Carpet</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                </div> 
                                                {/* <!--/row--> */}
                                            </div> 
                                            {/* <!--/categories--> */}
                                        </div> 
                                        {/* <!--/box-2--> */}
                                    </div> 
                                    {/* <!--/navbar-box--> */}
                                </div> 
                                {/* <!--/navbar-dropdown--> */}
                            </li>

                            {/* <!-- Mega menu dropdown --> */}

                            <li>
                                <a href="#">Megamenu <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                <div className="navbar-dropdown">
                                    <div className="navbar-box">
                                        <div className="box-2">
                                            <div className="box clearfix">
                                                <div className="row">
                                                    <div className="clearfix">
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Seating</li>
                                                                <li><a href="#!">Benches</a></li>
                                                                <li><a href="#!">Submenu <span className="label label-warning">New</span></a></li>
                                                                <li><a href="#!">Chaises</a></li>
                                                                <li><a href="#!">Recliners</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Storage</li>
                                                                <li><a href="#!">Bockcases</a></li>
                                                                <li><a href="#!">Closets</a></li>
                                                                <li><a href="#!">Wardrobes</a></li>
                                                                <li><a href="#!">Dressers <span className="label label-success">Trending</span></a></li>
                                                                <li><a href="#!">Sideboards </a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Tables</li>
                                                                <li><a href="#!">Consoles</a></li>
                                                                <li><a href="#!">Desks</a></li>
                                                                <li><a href="#!">Dining tables</a></li>
                                                                <li><a href="#!">Occasional tables</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Chairs</li>
                                                                <li><a href="#!">Dining Chairs</a></li>
                                                                <li><a href="#!">Office Chairs</a></li>
                                                                <li><a href="#!">Lounge Chairs <span className="label label-warning">Offer</span></a></li>
                                                                <li><a href="#!">Stools</a></li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix">
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Kitchen</li>
                                                                <li><a href="#!">Kitchen types</a></li>
                                                                <li><a href="#!">Kitchen elements <span className="label label-info">50%</span></a></li>
                                                                <li><a href="#!">Bars</a></li>
                                                                <li><a href="#!">Wall decoration</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Accessories</li>
                                                                <li><a href="#!">Coat Racks</a></li>
                                                                <li><a href="#!">Lazy bags <span className="label label-success">Info</span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Beds</li>
                                                                <li><a href="#!">Beds</a></li>
                                                                <li><a href="#!">Sofabeds</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Entertainment</li>
                                                                <li><a href="#!">Wall units <span className="label label-warning">Popular</span></a></li>
                                                                <li><a href="#!">Media sets</a></li>
                                                                <li><a href="#!">Decoration</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            {/* <!--/box--> */}
                                        </div> 
                                        {/* <!--/box-2--> */}
                                    </div> 
                                    {/* <!--/navbar-box--> */}
                                </div> 
                                {/* <!--/navbar-dropdown--> */}
                            </li>

                            {/* <!-- Simple menu link--> */}

                            <li><a href="shortcodes.html">Shortcodes</a></li>
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
                                        <a href="product.html"><img src={ process.env.BASE_URL + "/furniture/assets/images/product-1.png"} alt="" /></a>
                                    </div>
                                    <div className="title">
                                        <div><a href="product.html">Green corner</a></div>
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
                                        <a href="product.html"><img src={ process.env.BASE_URL + "/furniture/assets/images/product-2.png"} alt="" /></a>
                                    </div>
                                    <div className="title">
                                        <div><a href="product.html">Green corner</a></div>
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
                                        <a href="product.html"><img src={ process.env.BASE_URL + "/furniture/assets/images/product-3.png"} alt="" /></a>
                                    </div>
                                    <div className="title">
                                        <div><a href="product.html">Green corner</a></div>
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
                                        <a href="product.html"><img src={ process.env.BASE_URL + "/furniture/assets/images/product-4.png"} alt="" /></a>
                                    </div>
                                    <div className="title">
                                        <div><a href="product.html">Green corner</a></div>
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
                                        <a href="products-grid.html" className="btn btn-clean-dark">Continue shopping</a>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                        <a href="checkout-1.html" className="btn btn-main"><span className="icon icon-cart"></span> Checkout</a>
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