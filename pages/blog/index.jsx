import React from "react";
import Layout from "../../components/Blog/Layout";
import Sidebar from "../../components/Blog/components/Sidebar";
import dynamic from "next/dynamic";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export const getServerSideProps = async (context) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/client/categories`);

  const blogRes = await fetch(`${process.env.API_URL}/api/v1/client/blogs`);

  const data = await res.json();

  const blogData = await blogRes.json();

  return {
    props: { categories: data.categories, blogs: blogData.blogs },
  };
};

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Index({ categories, blogs }) {

  return (
    <Layout>
      {/* Start preloader */}
      <div id="preloader">
        <div className="pre-container">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
      {/* End Preloader */}

      {/* Start header section */}
      <header className="header-area" id="header-area">
        <div className="dope-nav-container breakpoint-off">
          <div className="container">
            <div className="row">
              <nav className="dope-navbar justify-content-between" id="dopeNav">
                <a className="nav-brand" href="index.html">
                  <img
                    src={process.env.BASE_URL + "/blog/img/logo.png"}
                    alt=""
                  />
                </a>
                <div className="dope-navbar-toggler">
                  <span className="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div className="dope-menu">
                  <div className="dopecloseIcon">
                    <div className="cross-wrap">
                      <span className="top"></span>
                      <span className="bottom"></span>
                    </div>
                  </div>
                  <div className="dopenav">
                    <ul id="nav">
                      <li>
                        <a href="#">Pages</a>
                        {/* <ul className="dropdown">
                          <li>
                            <a href="category.html">Category</a>
                          </li>
                          <li>
                            <a href="archive.html">Archive</a>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <a href="#about-section">About</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Start header section */}

      {/* Start blog-head section */}
      <section className="blog-head-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 text-center">
              <h1>Blog Posts</h1>
              <div className="paginations">
                <a href="index.html">Home</a><span>/</span><a href="blog.html">Blog</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End blog-head section */}

      {/* Start blog-list section */}
      <section className="blog-list-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              {blogs.map((blog) => (
                <div className="single-post" key={blog._id}>
                  <div className="meta-info">
                    <a href={"/blog/" + blog.slug}>
                      <h2>
                       {blog.title}.{" "}
                      </h2>
                    </a>
                    <ul className="category">
                      <li>
                        <a href="#">{blog.category.name}</a>
                      </li>
                    </ul>
                    <ul className="list-inline">
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-calendar-check-o"
                            aria-hidden="true"
                          ></i>{" "}
                          {blog.createdAt.slice(0,10)}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>{ReactHtmlParser(blog.description)}</div>
                  <a href={"/blog/" + blog.slug} className="primary-btn black-btn">
                    Read more
                  </a>
                </div>
              ))}
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">
                    Prev
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">2<span className="sr-only">(current)</span></a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
            <Sidebar categories={categories} />
          </div>
        </div>
      </section>
      {/* End blog-list section */}

      {/* Start footer section */}
      <footer className="footer-section black-bg section-half">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 footer-left">
              <img
                src={process.env.BASE_URL + "/blog/img/logo-w.png"}
                alt="logo"
              />
            </div>
            <div className="col-lg-6 col-sm-6 footer-right">
              <ul className="social_links">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-google-plus-square"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-12 text-center copyright-wrap">
              <div>&copy; F4H3M 2018 All Rights Reserved</div>
            </div>
          </div>
        </div>
      </footer>
      {/* End footer section */}
    </Layout>
  );
}