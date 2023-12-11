import Document, { Html, Main, NextScript } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import LayoutAdmin from '../../components/Admin/Layout/LayoutAdmin'
import Cookies from 'js-cookie'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useState } from 'react';
import axios from "axios";

export default function Home({ req, res }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validationSchema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string().required("Password is required"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(e) {
      axios.post(process.env.API_CSR_URL + "/api/v1/admin/login", { email: e.email, password: e.password })
        .then((res) => {
          if(!res.data.error) {
            localStorage.setItem('authenticate', true);
            Cookies.set('token', res.data.token);
            window.location.href='/admin/user';
          }
        })
        .catch(err => {
          notify('danger', 'Login unsuccessful');
        });
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
          <link href="porfolio/css/custom-toastr.css" rel="stylesheet"/>
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
                    <form className="form" method="" action="" onSubmit={handleSubmit(onSubmit)} id="reset">
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
                              <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Email..."
                                {...register('email')}
                                name="email"
                                id="email"
                              />
                            </div>
                            <div className="error-message" style={{ marginLeft: "15px"}}>{errors.email?.message}</div>
                          </span>
                          <span className="bmd-form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">lock_outline</i>
                                </span>
                              </div>
                              <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password..."
                                {...register('password')}
                                name="password"
                                id="password"
                              />
                            </div>
                            <div className="error-message" style={{ marginLeft: "15px"}}>{errors.password?.message}</div>
                          </span>
                        </div>
                        <div className="card-footer justify-content-center">
                          <a onClick={handleSubmit(onSubmit)} className="btn btn-rose btn-link btn-lg">Lets Go</a>
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
          <script src={process.env.BASE_URL + "/assets/js/notify_custom.js"} />
        </main>

      </>
    );
}