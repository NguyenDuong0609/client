import React, {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import LayoutAdmin from "../../components/Admin/Layout/LayoutAdmin";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons

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

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/api/v1/admin/users');
  const data = await res.json();

  return {
    props: { users: data.users }
  }

}

/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps> } props */
export default function Home({ users }) {
  const classes = useStyles();
  const [editmodal, setEditModal] = useState(false);
  const [deletemodal, setDeleteModal] = useState(false);

  const [role, setRole] = useState("")
  const [idUser, setIdUser] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function submit() {
      if(idUser === "") {
        add();
      } else {
        update();
        getStaticProps();
      }
  }

  function hanldeEditUser(idUser) {
    if (idUser == null) {
      setName("");
      setEmail("");
      setPassword("");
    }else{
      setIdUser(idUser);
      axios.get("http://localhost:5000/api/v1/admin/user/"+ idUser)
        .then((res) => {
          setName(res.data.user.name);
          setEmail(res.data.user.email);
          setRole(res.data.user.role);
        });
    }
  }

  function hanldeDeleteUser() {
    axios.delete("http://localhost:5000/api/v1/admin/user/"+ idUser)
      .then((res) => {
        window.location.href='/admin/user';
      });
  }

  function add() {
    if(email == "" || password == "" || name == "" || role == "") {
      alert('Please enter fields');
    } else {
      axios.post("http://localhost:5000/api/v1/admin/register", { name: name, email: email, password: password, role: role })
      .then((res) => {
        if(!res.data.error) {
          window.location.href='/admin/user';
        }else {
            alert(res.data.error);
        }
      });
    }
  }

  function update() {
    axios.put("http://localhost:5000/api/v1/admin/user/"+ idUser, { name: name, email: email, role: role })
      .then((res) => {
        if(!res.data.error) {
          setIdUser("");
          window.location.href='/admin/user';
        }else {
            alert(res.data.error);
        }
      });
  }

  return (
    <>
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
              <a className="navbar-brand" href="javascript:;">
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
              <form className="navbar-form">
                <div className="input-group no-border">
                  <input
                    type="text"
                    value=""
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button
                    type="submit"
                    className="btn btn-white btn-round btn-just-icon"
                  >
                    <i className="material-icons">search</i>
                    <div className="ripple-container"></div>
                  </button>
                </div>
              </form>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="javascript:;">
                    <i className="material-icons">dashboard</i>
                    <p className="d-lg-none d-md-block">Stats</p>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="http://example.com"
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
                    <a className="dropdown-item" href="#">
                      Mike John responded to your email
                    </a>
                    <a className="dropdown-item" href="#">
                      You have 5 new tasks
                    </a>
                    <a className="dropdown-item" href="#">
                      You're now friend with Andrew
                    </a>
                    <a className="dropdown-item" href="#">
                      Another Notification
                    </a>
                    <a className="dropdown-item" href="#">
                      Another One
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="javascript:;"
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
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
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
              onClick={() => {setEditModal(true); hanldeEditUser(null)}}
            >
              Add User
            </button>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header card-header-rose card-header-icon">
                    <div className="card-icon">
                      <i className="material-icons">assignment</i>
                    </div>
                    <h4 className="card-title">Simple Table</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          { users.map(user => (
                            <tr key={user._id}>
                            <td className="text-center">1</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                className="btn btn-success"
                                style={{ marginRight: "5px" }}
                                onClick={() => {setEditModal(true); hanldeEditUser(user._id)}}
                              >
                                <i className="material-icons">edit</i>
                              </button>
                              <button
                                type="button"
                                rel="tooltip"
                                className="btn btn-danger"
                                style={{ marginRight: "5px" }}
                                onClick={() => {setDeleteModal(true); setIdUser(user._id);}}
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
        <footer className="footer">
          <div className="container-fluid">
            <nav className="float-left">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com">Creative Tim</a>
                </li>
                <li>
                  <a href="https://creative-tim.com/presentation">About Us</a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com">Blog</a>
                </li>
                <li>
                  <a href="https://www.creative-tim.com/license">Licenses</a>
                </li>
              </ul>
            </nav>
            <div className="copyright float-right">
              &copy;
              <script>document.write(new Date().getFullYear())</script>, made
              with <i className="material-icons">favorite</i> by
              <a href="https://www.creative-tim.com" target="_blank">
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        </footer>
        <Dialog
          fullWidth={true}
          open={editmodal}
          keepMounted
          onClose={() => setEditModal(false)}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
          style={{ paddingBottom: "400px", with: "1000px" }}
        >
          <DialogTitle id="classic-modal-slide-title" disableTypography>
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
                <h4 className="card-title">Register Form</h4>
              </div>
              <div className="card-body ">
                <div className="form-group">
                  <label className="bmd-label-floating">
                    {" "}
                    Name *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required={true}
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label className="bmd-label-floating">
                    {" "}
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    required={true}
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label className="bmd-label-floating">
                    {" "}
                    Password *
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="examplePassword"
                    required={true}
                    placeholder="Password...."
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label className="bmd-label-floating">
                    {" "}
                    Role *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required={true}
                    placeholder="Role...."
                    value={role}
                    onChange={(e) => {setRole(e.target.value)}}
                  />
                </div>
                <div className="category form-category">* Required fields</div>
              </div>
              <div className="card-footer text-right">
                <button type="button" className="btn btn-rose" onClick={() => submit()}>
                  Register
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
            <button type="button" className="btn btn-rose" onClick={() => hanldeDeleteUser()}>
              Yes
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
