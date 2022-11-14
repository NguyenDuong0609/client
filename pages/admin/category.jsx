import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import LayoutAdmin from "../../components/Admin/Layout/LayoutAdmin";
import Cookies from "js-cookie";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
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
  if(!token) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    }
  }
  const res = await fetch(`${process.env.API_URL}/api/v1/admin/categories`, {
    headers: { Authorization: token },
  });

  const parent = await fetch(`${process.env.API_URL}/api/v1/admin/categories-parent`, {
    headers: { Authorization: token },
  });

  const dataParent = await parent.json();

  const data = await res.json();

  return {
    props: { categories: data.categories, categoriesParent: dataParent.categories },
  };
};

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Category({ categories, categoriesParent }) {
  const classes = useStyles();
  const [editmodal, setEditModal] = useState(false);
  const [deletemodal, setDeleteModal] = useState(false);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [parentId, setParentId] = useState("");
  const [idCategory, setIdCategory] = useState(null);

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

  function hanldeEditCategory(idCategory) {
    if (idCategory == null) {
      setName("");
      setSlug("");
      setParentId("");
    } else {
      setIdCategory(idCategory);
      axios
        .get(process.env.API_URL + "/api/v1/admin/category/" + idCategory)
        .then((res) => {
          setName(res.data.category[0].name);
          setSlug(res.data.category[0].slug);
          setParentId(res.data.category[0].parentId);
        });
    }
  }

  function hanldeDeleteCategory() {
    axios
      .delete(process.env.API_URL + "/api/v1/admin/category/delete/" + idCategory, {headers: { Authorization: Cookies.get('token') }})
      .then((res) => {
        setDeleteModal(false);
        notify('success', 'delete category successfully');
        setTimeout(() => { }, 10000);
        window.location.href = "/admin/category";
      });
  }

  function submit() {
    if (idCategory == null) {
      add();
    } else {
      update();
    }
  }

  function add() {
    if (name == "" || slug == "") {
      alert("Please enter fields");
    } else {
      axios
        .post(process.env.API_URL + "/api/v1/admin/category/create", {
          name: name,
          slug: slug,
          parentId: parentId,
        }, {headers: { Authorization: Cookies.get('token') }},)
        .then((res) => {
          if (!res.data.error) {
            setEditModal(false);
            notify('success', 'create category successfully');
            setTimeout(() => { }, 10000);
            window.location.href = "/admin/category";
          } else {
            alert(res.data.error);
          }
        });
    }
  }

  function update() {
    if (idCategory === parentId) {
      // alert('category cannot be parent category for itself');
      // setDeleteModal(false);
      setEditModal(false);
      notify('danger', 'category cannot be parent category for itself');
      setTimeout(() => { }, 10000);
    } else {
      axios
      .put(process.env.API_URL + "/api/v1/admin/category/update", {
        _id: idCategory,
        name: name,
        slug: slug,
        parentId: parentId,
        type: 'category'
      }, {headers: { Authorization: Cookies.get('token') }})
      .then((res) => {
        console.log(res);
        if (!res.data.error) {
          setIdCategory(null);
          setEditModal(false);
          notify('success', 'update category successfully');
          setTimeout(() => { }, 10000);
          window.location.href = "/admin/category/";
        } else {
          alert(res.data.error);
        }
      });
    }
  }

  function getParent(categoriesParent, category) {
    let cateParent;
    categoriesParent.filter(item => {
      if ( item._id === category.parentId) {
        cateParent = item;
      }
    })
    return <p>{cateParent ? cateParent.name : ""}</p>
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
                {/* <li className="nav-item">
                  <a className="nav-link" href="#!">
                    <i className="material-icons">dashboard</i>
                    <p className="d-lg-none d-md-block">Stats</p>
                  </a>
                </li> */}
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
                {/* <li className="nav-item dropdown">
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
                </li> */}
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
                setEditModal(true);
                hanldeEditCategory(null);
              }}
            >
              Add Category
            </button>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header card-header-rose card-header-icon">
                    <div className="card-icon">
                      <i className="material-icons">assignment</i>
                    </div>
                    <h4 className="card-title">List Category</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>ParentId</th>
                            <th className="text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories.map((category) => (
                            <tr key={category._id}>
                              <td className="text-center">1</td>
                              <td>{category.name}</td>
                              <td>{category.slug}</td>
                              {/* <td>{category.parentId}</td> */}
                              <td>{ getParent(categoriesParent, category)}</td>
                              <td className="td-actions text-right">
                                <button
                                  type="button"
                                  rel="tooltip"
                                  className="btn btn-success"
                                  style={{ marginRight: "5px" }}
                                    onClick={() => {
                                      setEditModal(true);
                                      hanldeEditCategory(category._id);
                                    }}
                                >
                                  <i className="material-icons">edit</i>
                                </button>
                                <button
                                  type="button"
                                  rel="tooltip"
                                  className="btn btn-danger"
                                  style={{ marginRight: "5px" }}
                                    onClick={() => {
                                      setDeleteModal(true);
                                      setIdCategory(category._id);
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
          open={editmodal}
          keepMounted
          onClose={() => setEditModal(false)}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
          
        >
          <DialogTitle id="classic-modal-slide-title" disableTypography style={{height: "5px"}}>
            <button
              type="button"
              onClick={() => setEditModal(false)}
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              <i className="material-icons">clear</i>
            </button>
          </DialogTitle>
          <form id="RegisterValidation" action="" method="">
            <div className="card ">
              <div className="card-header card-header-rose card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">mail_outline</i>
                </div>
                <h4 className="card-title">Add/Edit Category</h4>
              </div>
              <div className="card-body ">
                <div className="form-group">
                  <label> Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    required={true}
                    value={name}
                    onChange={(e) => {
                      setSlug(sanitizeTitle(e.target.value));
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="category form-category">* Required fields</div>
              </div>
              <div className="card-body ">
                <div className="form-group">
                  <label> Slug *</label>
                  <input
                    type="text"
                    className="form-control"
                    required={true}
                    value={slug}
                    disabled={true}
                  />
                </div>
                <div className="category form-category">* Required fields</div>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label style={{ marginRight: '10px' }}> ParentId *</label>
                  <select
                    className="selectpicker"
                    data-size="7"
                    data-style="btn btn-primary btn-round"
                    title="Choose One"
                    value={parentId}
                    onChange={(e) => {
                      setParentId(e.target.value);
                    }}
                  >
                    {categoriesParent.map((parent) => (
                      <option value={parent._id} key={parent._id}>{parent.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="card-footer text-right">
                <button
                  type="button"
                  className="btn btn-rose"
                  onClick={() => submit()}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Dialog>
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
              onClick={() => hanldeDeleteCategory()}
            >
              Yes
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </LayoutAdmin>
  );
}
