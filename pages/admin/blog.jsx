import React, { useState, useEffect } from "react";
import LayoutAdmin from "../../components/Admin/Layout/LayoutAdmin";
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;
  const res = await fetch(`${process.env.API_URL}/api/v1/admin/blogs`, {
    headers: { Authorization: token },
  });

  const data = await res.json();

  return {
    props: { blogs: data.blogs },
  };
};

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Blog({ blogs }) {
  const classes = useStyles();
  const [deletemodal, setDeleteModal] = useState(false);
  const [idBlog, setIdBlog] = useState("");

  function hanldeEditBlog(idBlog) {
    window.location.href = "/admin/blog/edit/?id=" + idBlog;
  }

  function hanldeDeleteBlog() {
    const token = Cookies.get("token");
    axios
      .delete(process.env.API_URL + "/api/v1/admin/blog/" + idBlog, {
        headers: { Authorization: token },
      })
      .then((res) => {
        window.location.href = "/admin/blog";
      });
  }

  var stt = 1;
  return (
    <LayoutAdmin>
      <div className="main-panel">
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
          <div className="container-fluid">
            <div className="navbar-wrapper">
              <div className="navbar-minimize">
                <button
                  id="minimizeSidebar"
                  className="btn btn-just-icon btn-white btn-fab btn-round"
                >
                  <i className="material-icons text_align-center visible-on-sidebar-regular">
                    more_vert
                  </i>
                  <i className="material-icons design_bullet-list-67 visible-on-sidebar-mini">
                    view_list
                  </i>
                </button>
              </div>
              <a className="navbar-brand" href="#!">
                Extended Tables
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    <i className="material-icons">dashboard</i>
                    <p className="d-lg-none d-md-block">Stats</p>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#!"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="material-icons">notifications</i>
                    <span className="notification">5</span>
                    <p className="d-lg-none d-md-block">Some Actions</p>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#!">
                      Mike John responded to your email
                    </a>
                    <a className="dropdown-item" href="#!">
                      You have 5 new tasks
                    </a>
                    <a className="dropdown-item" href="#!">
                      You're now friend with Andrew
                    </a>
                    <a className="dropdown-item" href="#!">
                      Another Notification
                    </a>
                    <a className="dropdown-item" href="#!">
                      Another One
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#!"
                    id="navbarDropdownProfile"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="material-icons">person</i>
                    <p className="d-lg-none d-md-block">Account</p>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownProfile"
                  >
                    <a className="dropdown-item" href="#!">
                      Profile
                    </a>
                    <a className="dropdown-item" href="#!">
                      Settings
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#!">
                      Log out
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="content">
          <div className="container-fluid">
            <button
              type="button"
              className="btn btn-primary"
                onClick={() => {
                  window.location.href = "/admin/blog/create";
                }}
            >
              Add Blog
            </button>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header card-header-rose card-header-icon">
                    <div className="card-icon">
                      <i className="material-icons">assignment</i>
                    </div>
                    <h4 className="card-title">Blog List</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Slug</th>
                            <th>Category</th>
                            <th>User</th>
                            <th className="text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blogs.map((blog) => (
                            <tr key={blog._id}>
                              <td className="text-center">{stt++}</td>
                              <td>{blog.title}</td>
                              <td style={{width: "100px"}}>{ ReactHtmlParser(blog.description) }</td>
                              <td>{blog.slug}</td>
                              <td>{blog.category.name}</td>
                              <td>{blog.user.name}</td>
                              <td className="td-actions text-right">
                                <a
                                  href={`/admin/blog/${blog._id}`} 
                                  rel="tooltip"
                                  className="btn btn-success"
                                  style={{ marginRight: "5px", color: "white" }}
                                    onClick={() => {
                                      hanldeEditBlog(blog._id);
                                    }}
                                ><i className="material-icons">edit</i></a>
                                <button
                                  type="button"
                                  rel="tooltip"
                                  className="btn btn-danger"
                                  style={{ marginRight: "5px" }}
                                  onClick={() => {
                                    setDeleteModal(true);
                                    setIdBlog(blog._id);
                                  }}
                                >
                                  <i className="material-icons">close</i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Dialog
          fullWidth={true}
          open={deletemodal}
          keepMounted
          onClose={() => setDeleteModal(false)}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
          style={{ paddingBottom: "400px", with: "1000px" }}
        >
          <DialogTitle id="classic-modal-slide-title" disableTypography>
            <button
              type="button"
              onClick={() => setDeleteModal(false)}
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              <i className="material-icons">clear</i>
            </button>
          </DialogTitle>
          <DialogContent>
            <h5>Are you sure you want to do this?</h5>
          </DialogContent>
          <DialogActions>
            <button type="button" className="btn btn-primary">
              No
            </button>
            <button
              type="button"
              className="btn btn-rose"
              onClick={() => hanldeDeleteBlog()}
            >
              Yes
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </LayoutAdmin>
  );
}
