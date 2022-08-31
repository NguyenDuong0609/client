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
                    <div className="container">
                        <h1 className="h2 title">Sofa Laura</h1>
                        <ol className="breadcrumb breadcrumb-inverted">
                            <li><a href="#"><span className="icon icon-home"></span></a></li>
                            <li><a href="#">Product Category</a></li>
                            <li><a href="#">Product Sub-category</a></li>
                            <li><a className="active" href="#">Product overview</a></li>
                        </ol>
                    </div>
                </header>
            </section>

            {/* <!-- ========================  Product ======================== --> */}

            <section className="product">
                <div className="main">
                    <div className="container">
                        <div className="row product-flex">

                            {/* <!-- product flex is used only for mobile order -->
                            <!-- on mobile 'product-flex-info' goes bellow gallery 'product-flex-gallery' --> */}

                            <div className="col-md-4 col-sm-12 product-flex-info">
                                <div className="clearfix">

                                    {/* <!-- === product-title === --> */}

                                    <h1 className="title" data-title="Sofa">Laura <small>La Linea de Lucco</small></h1>

                                    <div className="clearfix">

                                        {/* <!-- === price wrapper === --> */}

                                        <div className="price">
                                            <span className="h3">
                                                $ 1999,00
                                                <small>$ 2999,00</small>
                                            </span>
                                        </div>
                                        <hr />

                                        {/* <!-- === info-box === --> */}

                                        <div className="info-box">
                                            <span><strong>Maifacturer</strong></span>
                                            <span>Brand name</span>
                                        </div>

                                        {/* <!-- === info-box === --> */}

                                        <div className="info-box">
                                            <span><strong>Materials</strong></span>
                                            <span>Wood, Leather, Acrylic</span>
                                        </div>

                                        {/* <!-- === info-box === --> */}

                                        <div className="info-box">
                                            <span><strong>Availability</strong></span>
                                            <span><i className="fa fa-check-square-o"></i> In stock</span>
                                            <span className="hidden"><i className="fa fa-truck"></i> Out of stock</span>
                                        </div>

                                        <hr />

                                        <div className="info-box info-box-addto added">
                                            <span><strong>Favourites</strong></span>
                                            <span>
                                                <i className="add"><i className="fa fa-heart-o"></i> Add to favorites</i>
                                                <i className="added"><i className="fa fa-heart"></i> Remove from favorites</i>
                                            </span>
                                        </div>

                                        <div className="info-box info-box-addto">
                                            <span><strong>Wishlist</strong></span>
                                            <span>
                                                <i className="add"><i className="fa fa-eye-slash"></i> Add to Watch list</i>
                                                <i className="added"><i className="fa fa-eye"></i> Remove from Watch list</i>
                                            </span>
                                        </div>

                                        <div className="info-box info-box-addto">
                                            <span><strong>Collection</strong></span>
                                            <span>
                                                <i className="add"><i className="fa fa-star-o"></i> Add to Collection</i>
                                                <i className="added"><i className="fa fa-star"></i> Remove from Collection</i>
                                            </span>
                                        </div>

                                        <hr />

                                        {/* <!-- === info-box === --> */}

                                        <div className="info-box">
                                            <span><strong>Available Colors</strong></span>
                                            <div className="product-colors clearfix">
                                                <span className="color-btn color-btn-red"></span>
                                                <span className="color-btn color-btn-blue checked"></span>
                                                <span className="color-btn color-btn-green"></span>
                                                <span className="color-btn color-btn-gray"></span>
                                                <span className="color-btn color-btn-biege"></span>
                                            </div>
                                        </div>

                                        {/* <!-- === info-box === --> */}

                                        <div className="info-box">
                                            <span><strong>Choose size</strong></span>
                                            <div className="product-colors clearfix">
                                                <span className="color-btn color-btn-biege">
                                                    <span className="product-size" data-text="">S</span>
                                                </span>
                                                <span className="color-btn color-btn-biege checked">M</span>
                                                <span className="color-btn color-btn-biege">XL</span>
                                                <span className="color-btn color-btn-biege">XXL</span>
                                            </div>
                                        </div>

                                    </div> 
                                    {/* <!--/clearfix--> */}
                                </div> 
                                {/* <!--/product-info-wrapper--> */}
                            </div> 
                            {/* <!--/col-md-4--> */}
                            {/* <!-- === product item gallery === --> */}

                            <div className="col-md-8 col-sm-12 product-flex-gallery">

                                {/* <!-- === add to cart === --> */}

                                <button type="submit" className="btn btn-buy" data-text="Buy"></button>


                                {/* <!-- === product gallery === --> */}

                                <div className="owl-product-gallery open-popup-gallery">
                                    <a href="assets/images/product-1.png"><img src="assets/images/product-1.png" alt="" height="500" /></a>
                                    <a href="assets/images/product-2.png"><img src="assets/images/product-2.png" alt="" height="500" /></a>
                                    <a href="assets/images/product-3.png"><img src="assets/images/product-3.png" alt="" height="500" /></a>
                                    <a href="assets/images/product-4.png"><img src="assets/images/product-4.png" alt="" height="500" /></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- === product-info === --> */}

                <div className="info">
                    <div className="container">
                        <div className="row">

                            {/* <!-- === product-designer === --> */}

                            <div className="col-md-4">
                                <div className="designer">
                                    <div className="box">
                                        <div className="image">
                                            <img src="assets/images/user-1.jpg" alt="Alternate Text" />
                                        </div>
                                        <div className="name">
                                            <div className="h3 title">John Doe <small>Arhitect</small></div>
                                            <hr />
                                            <p><a href="mailto:johndoe@mail.com"><i className="icon icon-envelope"></i> johndoe@mail.com</a></p>
                                            <p><a href="tel:002255858"><i className="icon icon-phone-handset"></i> +002255858</a></p>
                                            <p>
                                                <a href="#" className="btn btn-main btn-xs"><i className="icon icon-user"></i></a>
                                                <a href="#" className="btn btn-main btn-xs"><i className="icon icon-printer"></i></a>
                                                <a href="#" className="btn btn-main btn-xs"><i className="icon icon-layers"></i></a>
                                            </p>
                                        </div> 
                                        {/* <!--/name--> */}
                                    </div> 
                                    {/* <!--/box--> */}
                                    <div className="btn btn-add">
                                        <i className="icon icon-phone-handset"></i>
                                    </div>
                                </div> 
                                {/* <!--/designer--> */}
                            </div> 
                            {/* <!--/col-md-4--> */}
                            {/* <!-- === nav-tabs === --> */}

                            <div className="col-md-8">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className="active">
                                        <a href="#designer" aria-controls="designer" role="tab" data-toggle="tab">
                                            <i className="icon icon-user"></i>
                                            <span>Collection</span>
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#design" aria-controls="design" role="tab" data-toggle="tab">
                                            <i className="icon icon-sort-alpha-asc"></i>
                                            <span>Specification</span>
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#rating" aria-controls="rating" role="tab" data-toggle="tab">
                                            <i className="icon icon-thumbs-up"></i>
                                            <span>Rating</span>
                                        </a>
                                    </li>
                                </ul>

                                {/* <!-- === tab-panes === --> */}

                                <div className="tab-content">

                                    <div role="tabpanel" className="tab-pane active" id="designer">
                                        <div className="content">

                                            {/* <!-- === designer collection title === --> */}

                                            <h3>Designers collection</h3>

                                            <div className="products">
                                                <div className="row">

                                                    {/* <!-- === product-item === --> */}

                                                    <div className="col-md-6 col-xs-6">
                                                        <article>
                                                            <div className="figure-grid">
                                                                <div className="image">
                                                                    <a href="#productid1" className="mfp-open">
                                                                        <img src="assets/images/product-1.png" alt="" width="360" />
                                                                    </a>
                                                                </div>
                                                                <div className="text">
                                                                    <h4 className="title"><a href="product.html">Green corner</a></h4>
                                                                    <sup>Designer collection</sup>
                                                                    <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>

                                                    {/* <!-- === product-item === --> */}

                                                    <div className="col-md-6 col-xs-6">
                                                        <article>
                                                            <div className="figure-grid">
                                                                <div className="image">
                                                                    <a href="#productid1" className="mfp-open">
                                                                        <img src="assets/images/product-2.png" alt="" width="360" />
                                                                    </a>
                                                                </div>
                                                                <div className="text">
                                                                    <h4 className="title"><a href="product.html">Laura</a></h4>
                                                                    <sup>Designer collection</sup>
                                                                    <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>

                                                    {/* <!-- === product-item === --> */}

                                                    <div className="col-md-6 col-xs-6">
                                                        <article>
                                                            <div className="figure-grid">
                                                                <div className="image">
                                                                    <a href="#productid1" className="mfp-open">
                                                                        <img src="assets/images/product-3.png" alt="" width="360" />
                                                                    </a>
                                                                </div>
                                                                <div className="text">
                                                                    <h4 className="title"><a href="product.html">Nude</a></h4>
                                                                    <sup>Designer collection</sup>
                                                                    <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>

                                                    {/* <!-- === product-item === --> */}

                                                    <div className="col-md-6 col-xs-6">
                                                        <article>
                                                            <div className="figure-grid">
                                                                <div className="image">
                                                                    <a href="#productid1" className="mfp-open">
                                                                        <img src="assets/images/product-4.png" alt="" width="360" />
                                                                    </a>
                                                                </div>
                                                                <div className="text">
                                                                    <h4 className="title"><a href="product.html">Aurora</a></h4>
                                                                    <sup>Designer collection</sup>
                                                                    <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>

                                                </div> 
                                                {/* <!--/row--> */}
                                            </div> 
                                            {/* <!--/products--> */}
                                        </div> 
                                        {/* <!--/content--> */}
                                    </div> 
                                    {/* <!--/tab-pane--> */}
                                    {/* <!-- ============ tab #2 ============ --> */}

                                    <div role="tabpanel" className="tab-pane" id="design">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <h3>Dimensions</h3>
                                                    <p>
                                                        <img className="full-image" src="assets/images/specs.png" alt="Alternate Text" width="350" />
                                                    </p>
                                                    <hr />
                                                    <p>
                                                        <img className="full-image" src="assets/images/specs.png" alt="Alternate Text" width="350" />
                                                    </p>
                                                </div>
                                                <div className="col-md-8">
                                                    <h3>Product Specification</h3>
                                                    <p>
                                                        Sofa Laura is a casual, contemporary collection that your family is sure to love.
                                                        The plush pillows and soft sloped arms create the ultimate combination for relaxation and comfort.
                                                    </p>
                                                    <p>
                                                        The collection is tailored with rounded padded arms, box-welted seat cushions, and loose back cushions.
                                                        Comfort is provided by high density seat cushions supported with a hardwood frame construction.
                                                        This collection is built for comfort and style!
                                                    </p>
                                                    <p>
                                                        Sofa is fun and elegant with beauty and style that will stay cutting-edge trendy through the years.
                                                        It is completely padded, including the back and outside arms - combining comfort and value to make rewarding relaxatio.
                                                    </p>
                                                </div>

                                            </div> 
                                            {/* <!--/row--> */}
                                        </div> 
                                        {/* <!--/content--> */}
                                    </div> 
                                    {/* <!--/tab-pane--> */}
                                    {/* <!-- ============ tab #3 ============ --> */}

                                    <div role="tabpanel" className="tab-pane" id="rating">

                                        {/* <!-- ============ ratings ============ --> */}

                                        <div className="content">
                                            <h3>Rating</h3>

                                            <div className="row">

                                                {/* <!-- === comments === --> */}

                                                <div className="col-md-12">
                                                    <div className="comments">

                                                        {/* <!-- === rating === --> */}

                                                        <div className="rating clearfix">
                                                            <div className="rate-box">
                                                                <strong>Quality</strong>
                                                                <div className="rating">
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <span>3</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <span>5</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <span>0</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <span>1</span>
                                                                </div>
                                                            </div>

                                                            {/* <!-- rate --> */}
                                                            <div className="rate-box">
                                                                <strong>Design</strong>
                                                                <div className="rating">
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <span>3</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <span>5</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <span>0</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <span>1</span>
                                                                </div>
                                                            </div>

                                                            {/* <!-- rate --> */}
                                                            <div className="rate-box">
                                                                <strong>General</strong>
                                                                <div className="rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <span>3</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <span>5</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <span>0</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <span>1</span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="comment-wrapper">

                                                            {/* <!-- === comment === --> */}

                                                            <div className="comment-block">
                                                                <div className="comment-user">
                                                                    <div><img src="assets/images/user-2.jpg" alt="Alternate Text" width="70" /></div>
                                                                    <div>
                                                                        <h5>
                                                                            <span>John Doe</span>
                                                                            <span className="pull-right">
                                                                                <i className="fa fa-star active"></i>
                                                                                <i className="fa fa-star active"></i>
                                                                                <i className="fa fa-star active"></i>
                                                                                <i className="fa fa-star active"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </span>
                                                                            <small>03.05.2017</small>
                                                                        </h5>
                                                                    </div>
                                                                </div>

                                                                {/* <!-- comment description --> */}

                                                                <div className="comment-desc">
                                                                    <p>
                                                                        In vestibulum tellus ut nunc accumsan eleifend. Donec mattis cursus ligula, id
                                                                        iaculis dui feugiat nec. Etiam ut ante sed neque lacinia volutpat. Maecenas
                                                                        ultricies tempus nibh, sit amet facilisis mauris vulputate in. Phasellus
                                                                        tempor justo et mollis facilisis. Donec placerat at nulla sed suscipit. Praesent
                                                                        accumsan, sem sit amet euismod ullamcorper, justo sapien cursus nisl, nec
                                                                        gravida
                                                                    </p>
                                                                </div>

                                                                {/* <!-- comment reply --> */}

                                                                <div className="comment-block">
                                                                    <div className="comment-user">
                                                                        <div><img src="assets/images/user-2.jpg" alt="Alternate Text" width="70" /></div>
                                                                        <div>
                                                                            <h5>Administrator<small>08.05.2017</small></h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="comment-desc">
                                                                        <p>
                                                                            Curabitur sit amet elit quis tellus tincidunt efficitur. Cras lobortis id
                                                                            elit eu vehicula. Sed porttitor nulla vitae nisl varius luctus. Quisque
                                                                            a enim nisl. Maecenas facilisis, felis sed blandit scelerisque, sapien
                                                                            nisl egestas diam, nec blandit diam ipsum eget dolor. Maecenas ultricies
                                                                            tempus nibh, sit amet facilisis mauris vulputate in.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {/* <!--/reply--> */}
                                                            </div>

                                                            {/* <!-- === comment === --> */}

                                                            <div className="comment-block">
                                                                <div className="comment-user">
                                                                    <div><img src="assets/images/user-2.jpg" alt="Alternate Text" width="70" /></div>
                                                                    <div>
                                                                        <h5>
                                                                            <span>John Doe</span>
                                                                            <span className="pull-right">
                                                                                <i className="fa fa-star active"></i>
                                                                                <i className="fa fa-star active"></i>
                                                                                <i className="fa fa-star active"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </span>
                                                                            <small>03.05.2017</small>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-desc">
                                                                    <p>
                                                                        Cras lobortis id elit eu vehicula. Sed porttitor nulla vitae nisl varius luctus.
                                                                        Quisque a enim nisl. Maecenas facilisis, felis sed blandit scelerisque, sapien
                                                                        nisl egestas diam, nec blandit diam ipsum eget dolor. In vestibulum tellus
                                                                        ut nunc accumsan eleifend. Donec mattis cursus ligula, id iaculis dui feugiat
                                                                        nec. Etiam ut ante sed neque lacinia volutpat. Maecenas ultricies tempus
                                                                        nibh, sit amet facilisis mauris vulputate in. Phasellus tempor justo et mollis
                                                                        facilisis. Donec placerat at nulla sed suscipit. Praesent accumsan, sem sit
                                                                        amet euismod ullamcorper, justo sapien cursus nisl, nec gravida
                                                                    </p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        {/* <!--/comment-wrapper--> */}

                                                        <div className="comment-header">
                                                            <a href="#" className="btn btn-clean-dark">12 comments</a>
                                                        </div> 
                                                        {/* <!--/comment-header--> */}
                                                        {/* <!-- === add comment === --> */}

                                                        <div className="comment-add">

                                                            <div className="comment-reply-message">
                                                                <div className="h3 title">Leave a Reply </div>
                                                                <p>Your email address will not be published.</p>
                                                            </div>

                                                            <form action="#" method="post">
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control" name="name" placeholder="Your Name" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control" name="name" placeholder="Your Email" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <textarea rows="10" className="form-control" placeholder="Your comment"></textarea>
                                                                </div>
                                                                <div className="clearfix text-center">
                                                                    <a href="#" className="btn btn-main">Add comment</a>
                                                                </div>
                                                            </form>

                                                        </div>
                                                        {/* <!--/comment-add--> */}
                                                    </div> 
                                                    {/* <!--/comments--> */}
                                                </div>


                                            </div> 
                                            {/* <!--/row--> */}
                                        </div> 
                                        {/* <!--/content--> */}
                                    </div> 
                                    {/* <!--/tab-pane--> */}
                                </div> 
                                {/* <!--/tab-content--> */}
                            </div>
                        </div> 
                        {/* <!--/row--> */}
                    </div> 
                    {/* <!--/container--> */}
                </div> 
                {/* <!--/info--> */}
            </section>

            {/* <!-- ========================  Product info popup - quick view ======================== --> */}

            <div className="popup-main mfp-hide" id="productid1">

                {/* <!-- === product popup === --> */}

                <div className="product">

                    {/* <!-- === popup-title === --> */}

                    <div className="popup-title">
                        <div className="h1 title">Laura <small>product category</small></div>
                    </div>

                    {/* <!-- === product gallery === --> */}

                    <div className="owl-product-gallery">
                        <img src="assets/images/product-1.png" alt="" width="640" />
                        <img src="assets/images/product-2.png" alt="" width="640" />
                        <img src="assets/images/product-3.png" alt="" width="640" />
                        <img src="assets/images/product-4.png" alt="" width="640" />
                    </div>

                    {/* <!-- === product-popup-info === --> */}

                    <div className="popup-content">
                        <div className="product-info-wrapper">
                            <div className="row">

                                {/* <!-- === left-column === --> */}

                                <div className="col-sm-6">
                                    <div className="info-box">
                                        <strong>Maifacturer</strong>
                                        <span>Brand name</span>
                                    </div>
                                    <div className="info-box">
                                        <strong>Materials</strong>
                                        <span>Wood, Leather, Acrylic</span>
                                    </div>
                                    <div className="info-box">
                                        <strong>Availability</strong>
                                        <span><i className="fa fa-check-square-o"></i> in stock</span>
                                    </div>
                                </div>

                                {/* <!-- === right-column === --> */}

                                <div className="col-sm-6">
                                    <div className="info-box">
                                        <strong>Available Colors</strong>
                                        <div className="product-colors clearfix">
                                            <span className="color-btn color-btn-red"></span>
                                            <span className="color-btn color-btn-blue checked"></span>
                                            <span className="color-btn color-btn-green"></span>
                                            <span className="color-btn color-btn-gray"></span>
                                            <span className="color-btn color-btn-biege"></span>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <strong>Choose size</strong>
                                        <div className="product-colors clearfix">
                                            <span className="color-btn color-btn-biege">S</span>
                                            <span className="color-btn color-btn-biege checked">M</span>
                                            <span className="color-btn color-btn-biege">XL</span>
                                            <span className="color-btn color-btn-biege">XXL</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!--/row--> */}
                        </div> 
                        {/* <!--/product-info-wrapper--> */}
                    </div>
                    {/* <!--/popup-content--> */}
                    {/* <!-- === product-popup-footer === --> */}

                    <div className="popup-table">
                        <div className="popup-cell">
                            <div className="price">
                                <span className="h3">$ 1999,00 <small>$ 2999,00</small></span>
                            </div>
                        </div>
                        <div className="popup-cell">
                            <div className="popup-buttons">
                                <a href="product.html"><span className="icon icon-eye"></span> <span className="hidden-xs">View more</span></a>
                                <a href="#!"><span className="icon icon-cart"></span> <span className="hidden-xs">Buy</span></a>
                            </div>
                        </div>
                    </div>

                </div> 
                {/* <!--/product--> */}
            </div> 
            {/* <!--popup-main--> */}

            {/* <!-- ================== Footer  ================== --> */}

            <Footer/>
        </Layout>
    );
}