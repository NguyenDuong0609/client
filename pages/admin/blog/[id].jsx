import React, { useState, useEffect } from "react";
import LayoutAdmin from "../../../components/Admin/Layout/LayoutAdmin";
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
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";

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

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export async function getServerSideProps(context) {
  const token = context.req.cookies.token;
  if (!token) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  const { params } = context;
  const { id } = params;
  const res = await fetch(`${process.env.API_URL}/api/v1/admin/blog/` + id, {
    headers: { Authorization: token },
  });
  const res_sub = await fetch(
    `${process.env.API_URL}/api/v1/admin/categories`,
    {
      headers: { Authorization: token },
    }
  );

  const data = await res.json();

  const data_sub = await res_sub.json();

  return {
    props: { blog: data.blog, categories: data_sub.categories },
  };
}

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Edit({ blog, categories }) {
  const classes = useStyles();
  const [deletemodal, setDeleteModal] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [category, setCategory] = useState("");
  const [idBlog, setIdBlog] = useState("");

  useEffect(() => {
    setIdBlog(blog[0]._id);
    setTitle(blog[0].title);
    setSlug(blog[0].slug);
    setDescription(blog[0].description);
    setContent(blog[0].content);
    setCategory(blog[0].category);
    setSelectedCategory(blog[0].category);
  }, []);

  function sanitizeTitle(title) {
    var slug = "";
    // Change to lower case
    var titleLower = title.toLowerCase();
    // Letter "e"
    slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, "e");
    // Letter "a"
    slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, "a");
    // Letter "o"
    slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, "o");
    // Letter "u"
    slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, "u");
    // Letter "d"
    slug = slug.replace(/đ/gi, "d");
    // Trim the last whitespace
    slug = slug.replace(/\s*$/g, "");
    // Change whitespace to "-"
    slug = slug.replace(/\s+/g, "-");

    return slug;
  }

  const handleDescriptionChange = (content) => {
    setDescription(content);
  };

  const handleContentChange = (content) => {
    setContent(content);
  };

  function submit() {
    const token = Cookies.get("token");
    axios
      .put(
        process.env.API_URL + "/api/v1/admin/blog/" + idBlog,
        {
          title: title,
          slug: slug,
          description: description,
          content: content,
          category: selectedCategory,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        if (!res.data.error) {
          window.location.href = "/admin/blog";
        } else {
          alert(res.data.error);
        }
      });
  }

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
            <form>
              <div className="row">
                <div className="col-md-8">
                  <div className="card ">
                    <div className="card-header card-header-rose card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">mail_outline</i>
                      </div>
                      <h4 className="card-title">Stacked Form</h4>
                    </div>
                    <div className="card-body ">
                      <div className="form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          className="form-control"
                          value={title}
                          onChange={(e) => {
                            setSlug(sanitizeTitle(e.target.value));
                            setTitle(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label>Slug</label>
                        <input
                          type="text"
                          className="form-control"
                          value={slug}
                          disabled={true}
                        />
                      </div>
                      <label htmlFor="" className="bmd-label-floating">
                        Description
                      </label>
                      <SunEditor
                        // setContents="My contents"
                        showToolbar={true}
                        onChange={handleDescriptionChange}
                        defaultValue={description}
                        setDefaultStyle="height: auto"
                        setOptions={{
                          buttonList: [
                            [
                              "bold",
                              "underline",
                              "italic",
                              "strike",
                              "list",
                              "align",
                              "fontSize",
                              "formatBlock",
                              "table",
                              "image",
                            ],
                          ],
                        }}
                      />
                      <label htmlFor="" className="bmd-label-floating">
                        Content
                      </label>
                      <SunEditor
                        // setContents="My contents"
                        showToolbar={true}
                        onChange={handleContentChange}
                        defaultValue={content}
                        setDefaultStyle="height: 300px"
                        setOptions={{
                          buttonList: [
                            [
                              "bold",
                              "underline",
                              "italic",
                              "strike",
                              "list",
                              "align",
                              "fontSize",
                              "formatBlock",
                              "table",
                              "image",
                            ],
                          ],
                        }}
                      />
                    </div>
                    <div className="card-footer ">
                      <button
                        type="button"
                        className="btn btn-fill btn-rose"
                        onClick={() => submit()}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header card-header-rose card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">mail_outline</i>
                      </div>
                      <h4 className="card-title">Select Option</h4>
                    </div>
                    <div className="card-body">
                      <select
                        className="selectpicker"
                        data-size="7"
                        data-style="btn btn-primary btn-round"
                        title="Choose One"
                        value={category}
                        onChange={(e) => {
                          setSelectedCategory(e.target.value);
                        }}
                      >
                        {categories.map((category) => (
                          <option value={category._id} key={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* <div className="card">
                    <div className="card-header card-header-rose card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">mail_outline</i>
                      </div>
                      <h4 className="card-title">Customisable Select</h4>
                    </div>
                    <div className="card-body">
                      <label className="title">Tags</label>
                      <input type="text" value="Amsterdam,Washington,Sydney,Beijing" className="form-control tagsinput" data-role="tagsinput" data-color="info"/><br/>
                      <h4 className="title">Choose Tags</h4>
                      <select className="selectpicker" data-style="select-with-transition" multiple title="Choose City" data-size="7">
                            <option disabled> Multiple Options</option>
                            <option value="2">Paris </option>
                            <option value="3">Bucharest</option>
                            <option value="4">Rome</option>
                            <option value="5">New York</option>
                            <option value="6">Miami </option>
                            <option value="7">Piatra Neamt</option>
                            <option value="8">Paris </option>
                            <option value="9">Bucharest</option>
                            <option value="10">Rome</option>
                            <option value="11">New York</option>
                            <option value="12">Miami </option>
                            <option value="13">Piatra Neamt</option>
                            <option value="14">Paris </option>
                            <option value="15">Bucharest</option>
                            <option value="16">Rome</option>
                            <option value="17">New York</option>
                            <option value="18">Miami </option>
                            <option value="19">Piatra Neamt</option>
                      </select>
                    </div>
                  </div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
