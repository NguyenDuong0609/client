import Document, { Html, Main, NextScript } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import LayoutAdmin from '../../components/Admin/Layout/LayoutAdmin'
import Cookies from 'js-cookie'

import { useState } from 'react';
import axios from "axios";

export default function Home({ req, res }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function submit(e) {
      if(email == null || password == null) {
        alert('Please login');
      } else {
        axios.post("http://localhost:5000/api/v1/admin/login", { email: email, password: password })
        .then((res) => {
          if(!res.data.error) {
            localStorage.setItem('authenticate', true);
            Cookies.set('token', res.data.token);
            window.location.href='/admin/user';
          }else {
              alert(res.data.error);
          }
        });
      }
    }
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" type="image/png" href="../../assets/img/favicon.png"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>
            Material Dashboard PRO by Creative Tim
          </title>
          <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
          {/* Fonts and icons */}
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"/>
          {/* CSS Files */}
          <link href="../../assets/css/material-dashboard.min.css?v=2.2.2" rel="stylesheet" />
          {/* CSS Just for demo purpose, don't include it in your project */}
          <link href="../../assets/demo/demo.css" rel="stylesheet" />
        </Head>

        <main className="off-canvas-sidebar">

          <div className="wrapper wrapper-full-page">
            <div className="page-header login-page header-filter" filter-color="black" 
                style={{ 
                    backgroundImage: "url(" + "../../assets/img/login.jpg" + ")",
                    backgroundPosition: 'top center',
                    backgroundSize: 'cover',
                }}
            >
              {/*   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                    <form className="form" method="" action="">
                      <div className="card card-login card-hidden">
                        <div className="card-header card-header-rose text-center">
                          <h4 className="card-title">Login</h4>
                          <div className="social-line">
                            <a href="#pablo" className="btn btn-just-icon btn-link btn-white">
                              <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="#pablo" className="btn btn-just-icon btn-link btn-white">
                              <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#pablo" className="btn btn-just-icon btn-link btn-white">
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </div>
                        </div>
                        <div className="card-body ">
                          <p className="card-description text-center">Or Be Classical</p>
                          <span className="bmd-form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">email</i>
                                </span>
                              </div>
                              <input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="form-control" placeholder="Email..."/>
                            </div>
                          </span>
                          <span className="bmd-form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">lock_outline</i>
                                </span>
                              </div>
                              <input type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} className="form-control" placeholder="Password..."/>
                            </div>
                          </span>
                        </div>
                        <div className="card-footer justify-content-center">
                          <a onClick={() => submit()} className="btn btn-rose btn-link btn-lg">Lets Go</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*   Core JS Files   */}
          <script src="../../assets/js/core/jquery.min.js"></script>
          <script src="../../assets/js/core/popper.min.js"></script>
          <script src="../../assets/js/core/bootstrap-material-design.min.js"></script>
          <script src="../../assets/js/plugins/perfect-scrollbar.min.js"></script>
          {/* Place this tag in your head or just before your close body tag. */}
          <script async defer src="https://buttons.github.io/buttons.js"></script>
          {/* Chartist JS */}
          <script src="../../assets/js/plugins/chartist.min.js"></script>
          {/*  Notifications Plugin    */}
          <script src="../../assets/js/plugins/bootstrap-notify.js"></script>
          {/* Control Center for Material Dashboard: parallax effects, scripts for the example pages etc */}
          <script src="../../assets/js/material-dashboard.min.js?v=2.2.2"></script>
          {/* Material Dashboard DEMO methods, don't include it in your project! */}
          <script src="../../assets/js/login.js"></script>
          {/* Sharrre libray */}
          <script src="../../assets/demo/jquery.sharrre.js"></script>
        </main>

      </>
    );
}