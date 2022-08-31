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

            {/* <!-- ======================== Main header ======================== --> */}

            <section className="main-header" style={{ backgroundImage: "url(" + "../../furniture/assets/images/gallery-2.jpg" + ")" }}>
                <header>
                    <div className="container">
                        <h1 className="h2 title">Shop</h1>
                        <ol className="breadcrumb breadcrumb-inverted">
                            <li><a href="#"><span className="icon icon-home"></span></a></li>
                            <li><a href="#">Product Category</a></li>
                            <li><a className="active" href="#">Product Sub-category</a></li>
                        </ol>
                    </div>
                </header>
            </section>

            {/* <!-- ========================  Icons slider ======================== --> */}

            <section className="owl-icons-wrapper">

                {/* <!-- === header === --> */}

                <header className="hidden">
                    <h2>Product categories</h2>
                </header>

                <div className="container">

                    <div className="owl-icons">

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-sofa"></i>
                                <figcaption>Sofa</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-armchair"></i>
                                <figcaption>Armchairs</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-chair"></i>
                                <figcaption>Chairs</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-dining-table"></i>
                                <figcaption>Dining tables</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-media-cabinet"></i>
                                <figcaption>Media storage</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-table"></i>
                                <figcaption>Tables</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-bookcase"></i>
                                <figcaption>Bookcase</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-bedroom"></i>
                                <figcaption>Bedroom</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-nightstand"></i>
                                <figcaption>Nightstand</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-children-room"></i>
                                <figcaption>Children room</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-kitchen"></i>
                                <figcaption>Kitchen</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-bathroom"></i>
                                <figcaption>Bathroom</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-wardrobe"></i>
                                <figcaption>Wardrobe</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-shoe-cabinet"></i>
                                <figcaption>Shoe cabinet</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-office"></i>
                                <figcaption>Office</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-bar-set"></i>
                                <figcaption>Bar sets</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-lightning"></i>
                                <figcaption>Lightning</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-carpet"></i>
                                <figcaption>Varpet</figcaption>
                            </figure>
                        </a>

                        {/* <!-- === icon item === --> */}

                        <a href="#">
                            <figure>
                                <i className="f-icon f-icon-accessories"></i>
                                <figcaption>Accessories</figcaption>
                            </figure>
                        </a>

                    </div> 
                    {/* <!--/owl-icons--> */}
                </div> 
                {/* <!--/container--> */}
            </section>

            {/* <!-- ======================== Products ======================== --> */}

            <section className="products">

                <div className="container">

                    <header className="hidden">
                        <h3 className="h3 title">Product category list</h3>
                    </header>

                    <div className="row">

                        {/* <!-- === product-filters === --> */}

                        <div className="col-md-3 col-xs-12">
                            <div className="filters">
                                {/* <!--Price--> */}
                                <div className="filter-box active">
                                    <div className="title">Price</div>
                                    <div className="filter-content">
                                        <div className="price-filter">
                                            <input type="text" id="range-price-slider" name="range" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Availability--> */}
                                <div className="filter-box active">
                                    <div className="title">
                                        Availability
                                    </div>
                                    <div className="filter-content">
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-stock" id="availableId1"/>
                                            <label htmlFor="availableId1">In stock <i>(152)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-stock" id="availableId2"/>
                                            <label htmlFor="availableId2">1 Week <i>(100)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-stock" id="availableId3"/>
                                            <label htmlFor="availableId3">2 Weeks <i>(80)</i></label>
                                        </span>
                                    </div>
                                </div> 
                                {/* <!--/filter-box-->
                                <!--Discount--> */}
                                <div className="filter-box active">
                                    <div className="title">
                                        Discount
                                    </div>
                                    <div className="filter-content">
                                        <span className="checkbox">
                                            <input type="radio" id="discountId1" name="discountPrice"/>
                                            <label htmlFor="discountId1">Discount price</label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" id="discountId2" name="discountPrice"/>
                                            <label htmlFor="discountId2">Regular price</label>
                                        </span>
                                    </div>
                                </div> 
                                {/* <!--/filter-box-->
                                <!--Type--> */}
                                <div className="filter-box active">
                                    <div className="title">
                                        Type
                                    </div>
                                    <div className="filter-content">
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeIdAll"/>
                                            <label htmlFor="typeIdAll">All <i>(1200)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId1"/>
                                            <label htmlFor="typeId1">Sofa <i>(20)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId2"/>
                                            <label htmlFor="typeId2">Armchairs <i>(12)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId3"/>
                                            <label htmlFor="typeId3">Chairs <i>(80)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId4"/>
                                            <label htmlFor="typeId4">Dining tables <i>(140)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId5"/>
                                            <label htmlFor="typeId5">Media storage <i>(20)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId6"/>
                                            <label htmlFor="typeId6">Tables <i>(10)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId7"/>
                                            <label htmlFor="typeId7">Bookcase <i>(450)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId8"/>
                                            <label htmlFor="typeId8">Nightstands <i>(750)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId9"/>
                                            <label htmlFor="typeId9">Children room <i>(960)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId10"/>
                                            <label htmlFor="typeId10">Kitchen <i>(44)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId11"/>
                                            <label htmlFor="typeId11">Bathroom <i>(5)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId12"/>
                                            <label htmlFor="typeId12">Wardrobe <i>(80)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId13"/>
                                            <label htmlFor="typeId13">Shoe cabinet <i>(23)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId14"/>
                                            <label htmlFor="typeId14">Office <i>(24)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId15"/>
                                            <label htmlFor="typeId15">Bar sets <i>(92)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-type" id="typeId16"/>
                                            <label htmlFor="typeId16">Lightning <i>(1120)</i></label>
                                        </span>
                                    </div>
                                </div> 
                                {/* <!--/filter-box-->
                                <!--Material--> */}
                                <div className="filter-box active">
                                    <div className="title">
                                        Material
                                    </div>
                                    <div className="filter-content">
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-material" id="matIdAll"/>
                                            <label htmlFor="matIdAll">All <i>(450)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-material" id="matId1"/>
                                            <label htmlFor="matId1">Blend <i>(11)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-material" id="matId2"/>
                                            <label htmlFor="matId2">Leather <i>(12)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-material" id="matId3"/>
                                            <label htmlFor="matId3">Wood <i>(80)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-material" id="matId4"/>
                                            <label htmlFor="matId4">Shell <i>(80)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-material" id="matId5"/>
                                            <label htmlFor="matId5">Metal <i>(80)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-material" id="matId6"/>
                                            <label htmlFor="matId6">Aluminium <i>(80)</i></label>
                                        </span>
                                        <span className="checkbox">
                                            <input type="radio" name="radiogroup-material" id="matId7"/>
                                            <label htmlFor="matId7">Acrilic <i>(80)</i></label>
                                        </span>
                                    </div>
                                </div> 
                                {/* <!--/filter-box-->
                                <!--close filters on mobile / update filters--> */}
                                <div className="toggle-filters-close btn btn-main">
                                    Update search
                                </div>

                            </div> 
                            {/* <!--/filters--> */}
                        </div>

                        {/* <!-- === product items === --> */}

                        <div className="col-md-9 col-xs-12">

                            <div className="sort-bar clearfix">
                                <div className="sort-results pull-left">
                                    {/* <!--Showing result per page--> */}
                                    <select>
                                        <option>10</option>
                                        <option>50</option>
                                        <option>100</option>
                                        <option>All</option>
                                    </select>
                                    {/* <!--Items counter--> */}
                                    <span>Showing all <strong>50</strong> of <strong>3,250</strong> items</span>
                                </div>
                                <div className="sort-options pull-right">
                                    <span className="hidden-xs">Sort by</span>
                                    {/* <!--Sort options--> */}
                                    <select>
                                        <option>Name</option>
                                        <option>Popular</option>
                                        <option>Price: lowest</option>
                                        <option>Price: highest</option>
                                    </select>
                                    {/* <!--Grid-list view--> */}
                                    <span className="grid-list">
                                        <a href="#"><i className="fa fa-th-large"></i></a>
                                        <a href="#"><i className="fa fa-align-justify"></i></a>
                                        <a href="#!" className="toggle-filters-mobile"><i className="fa fa-search"></i></a>
                                    </span>
                                </div>
                            </div>

                            <div className="row">

                                {/* <!-- === product-item === --> */}

                                <div className="col-md-12">
                                    <article>
                                        <div className="info">
                                            <span className="add-favorite">
                                                <a href="#!" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
                                            </span>
                                        </div>
                                        <div className="btn btn-add">
                                            <i className="icon icon-cart"></i>
                                        </div>
                                        <div className="figure-list">
                                            <div className="image">
                                                <a href="#productid1" className="mfp-open">
                                                    <img src="assets/images/product-1.png" alt="" width="360" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <h2 className="title h4"><a href="#">Green corner</a></h2>
                                                <sub>$ 1499,-</sub>
                                                <sup>$ 1099,-</sup>
                                                <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                {/* <!-- === product-item === --> */}

                                <div className="col-md-12">
                                    <article>
                                        <div className="info">
                                            <span className="add-favorite">
                                                <a href="#!" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
                                            </span>
                                        </div>
                                        <div className="btn btn-add">
                                            <i className="icon icon-cart"></i>
                                        </div>
                                        <div className="figure-list">
                                            <span className="label label-warning">New</span>
                                            <div className="image">
                                                <a href="#productid1" className="mfp-open">
                                                    <img src="assets/images/product-2.png" alt="" width="360" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <h2 className="title h4"><a href="#">Laura</a></h2>
                                                <sub>$ 3999,-</sub>
                                                <sup>$ 3499,-</sup>
                                                <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                {/* <!-- === product-item === --> */}

                                <div className="col-md-12">
                                    <article>
                                        <div className="info">
                                            <span className="add-favorite">
                                                <a href="#!" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
                                            </span>
                                        </div>
                                        <div className="btn btn-add">
                                            <i className="icon icon-cart"></i>
                                        </div>
                                        <div className="figure-list">
                                            <div className="image">
                                                <a href="#productid1" className="mfp-open">
                                                    <img src="assets/images/product-3.png" alt="" width="360" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <h2 className="title h4"><a href="#">Nude</a></h2>
                                                <sup>$ 2999,-</sup>
                                                <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                {/* <!-- === product-item === --> */}

                                <div className="col-md-12">
                                    <article>
                                        <div className="info">
                                            <span className="add-favorite">
                                                <a href="#!" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
                                            </span>
                                        </div>

                                        <div className="btn btn-add">
                                            <i className="icon icon-cart"></i>
                                        </div>
                                        <div className="figure-list">
                                            <div className="image">
                                                <a href="#productid1" className="mfp-open">
                                                    <img src="assets/images/product-4.png" alt="" width="360" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <h2 className="title h4"><a href="#">Aurora</a></h2>
                                                <sup>$ 299,-</sup>
                                                <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                {/* <!-- === product-item === --> */}

                                <div className="col-md-12">
                                    <article>
                                        <div className="info">
                                            <span className="add-favorite">
                                                <a href="#!" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
                                            </span>
                                        </div>
                                        <div className="btn btn-add">
                                            <i className="icon icon-cart"></i>
                                        </div>
                                        <div className="figure-list">
                                            <span className="label label-danger">-50%</span>
                                            <div className="image">
                                                <a href="#productid1" className="mfp-open">
                                                    <img src="assets/images/product-5.png" alt="" width="360" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <h2 className="title h4"><a href="#">Dining set</a></h2>
                                                <sub>$ 1999,-</sub>
                                                <sup>$ 1499,-</sup>
                                                <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                {/* <!-- === product-item === --> */}

                                <div className="col-md-12">
                                    <article>
                                        <div className="info">
                                            <span className="add-favorite">
                                                <a href="#!" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
                                            </span>
                                        </div>
                                        <div className="btn btn-add">
                                            <i className="icon icon-cart"></i>
                                        </div>
                                        <div className="figure-list">
                                            <div className="image">
                                                <a href="#productid1" className="mfp-open">
                                                    <img src="assets/images/product-6.png" alt="" width="360" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <h2 className="title h4"><a href="#">Seat chair</a></h2>
                                                <sup>$ 896,-</sup>
                                                <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                {/* <!-- === product-item === --> */}

                                <div className="col-md-12">
                                    <article>
                                        <div className="info">
                                            <span className="add-favorite">
                                                <a href="#!" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
                                            </span>
                                        </div>

                                        <div className="btn btn-add">
                                            <i className="icon icon-cart"></i>
                                        </div>
                                        <div className="figure-list">
                                            <div className="image">
                                                <a href="#productid1" className="mfp-open">
                                                    <img src="assets/images/product-4.png" alt="" width="360" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <h2 className="title h4"><a href="#">Aurora</a></h2>
                                                <sup>$ 299,-</sup>
                                                <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                {/* <!-- === product-item === --> */}

                                <div className="col-md-12">
                                    <article>
                                        <div className="info">
                                            <span className="add-favorite">
                                                <a href="#!" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                            </span>
                                            <span>
                                                <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
                                            </span>
                                        </div>
                                        <div className="btn btn-add">
                                            <i className="icon icon-cart"></i>
                                        </div>
                                        <div className="figure-list">
                                            <span className="label label-danger">-50%</span>
                                            <div className="image">
                                                <a href="#productid1" className="mfp-open">
                                                    <img src="assets/images/product-5.png" alt="" width="360" />
                                                </a>
                                            </div>
                                            <div className="text">
                                                <h2 className="title h4"><a href="#">Dining set</a></h2>
                                                <sub>$ 1999,-</sub>
                                                <sup>$ 1499,-</sup>
                                                <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                            </div>
                            {/* <!--/row-->
                            <!--Pagination--> */}
                            <div className="pagination-wrapper">
                                <ul className="pagination">
                                    <li>
                                        <a href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li>
                                        <a href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div> 
                        {/* <!--/product items--> */}

                    </div>
                    {/* <!--/row--> */}
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
                                        <a href="#"><span className="icon icon-eye"></span> <span className="hidden-xs">View more</span></a>
                                        <a href="#!"><span className="icon icon-cart"></span> <span className="hidden-xs">Buy</span></a>
                                    </div>
                                </div>
                            </div>

                        </div> 
                        {/* <!--/product--> */}
                    </div> 
                    {/* <!--popup-main--> */}
                </div>
                {/* <!--/container--> */}
            </section>

            {/* <!-- ================== Footer  ================== --> */}

            <Footer/> 
        </Layout>
        );
}