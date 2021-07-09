import { Html } from 'next/document';
import Head from 'next/head'
import Image from 'next/image'
import LayoutAdmin from '../../components/Admin/Layout/LayoutAdmin'

export default function Home() {
    return (
      <html lang="en">

        <head>
          <meta charSet="utf-8" />
          <link rel="apple-touch-icon" sizes="76x76" href="../../assets/img/apple-icon.png"/>
          <link rel="icon" type="image/png" href="../../assets/img/favicon.png"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>
            Material Dashboard PRO by Creative Tim
          </title>
          <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
          {/* Extra details for Live View on GitHub Pages */}
          {/* Canonical SEO */}
          <link rel="canonical" href="https://www.creative-tim.com/product/material-dashboard-pro" />
          {/* Social tags */}
          <meta name="keywords" content="creative tim, html dashboard, html css dashboard, web dashboard, bootstrap 4 dashboard, bootstrap 4, css3 dashboard, bootstrap 4 admin, material dashboard bootstrap 4 dashboard, frontend, responsive bootstrap 4 dashboard, material design, material dashboard bootstrap 4 dashboard"/>
          <meta name="description" content="Material Dashboard PRO is a Premium Material Bootstrap 4 Admin with a fresh, new design inspired by Google's Material Design."/>
          {/* Schema.org markup for Google+ */}
          <meta itemProp="name" content="Material Dashboard PRO by Creative Tim"/>
          <meta itemProp="description" content="Material Dashboard PRO is a Premium Material Bootstrap 4 Admin with a fresh, new design inspired by Google's Material Design."/>
          <meta itemProp="image" content="https://s3.amazonaws.com/creativetim_bucket/products/51/original/opt_mdp_thumbnail.jpg"/>
          {/* Twitter Card data */}
          <meta name="twitter:card" content="product"/>
          <meta name="twitter:site" content="@creativetim"/>
          <meta name="twitter:title" content="Material Dashboard PRO by Creative Tim"/>
          <meta name="twitter:description" content="Material Dashboard PRO is a Premium Material Bootstrap 4 Admin with a fresh, new design inspired by Google's Material Design."/>
          <meta name="twitter:creator" content="@creativetim"/>
          <meta name="twitter:image" content="https://s3.amazonaws.com/creativetim_bucket/products/51/original/opt_mdp_thumbnail.jpg"/>
          {/* Open Graph data */}
          <meta property="fb:app_id" content="655968634437471"/>
          <meta property="og:title" content="Material Dashboard PRO by Creative Tim" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="http://demos.creative-tim.com/material-dashboard-pro/examples/dashboard.html" />
          <meta property="og:image" content="https://s3.amazonaws.com/creativetim_bucket/products/51/original/opt_mdp_thumbnail.jpg" />
          <meta property="og:description" content="Material Dashboard PRO is a Premium Material Bootstrap 4 Admin with a fresh, new design inspired by Google's Material Design." />
          <meta property="og:site_name" content="Creative Tim" />
          {/* Fonts and icons */}
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"/>
          {/* CSS Files */}
          <link href="../../assets/css/material-dashboard.min.css?v=2.2.2" rel="stylesheet" />
          {/* CSS Just for demo purpose, don't include it in your project */}
          <link href="../../assets/demo/demo.css" rel="stylesheet" />
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-NKDMSK6');`,
                }}
                />
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                />
          {/* End Google Tag Manager */}
        </head>

        <body className="off-canvas-sidebar">
          {/* Extra details for Live View on GitHub Pages */}
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{ 
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" height="0" width="0"  style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top text-white">
            <div className="container">
              <div className="navbar-wrapper">
                <a className="navbar-brand" href="javascript:;">Login Page</a>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon icon-bar"></span>
                <span className="navbar-toggler-icon icon-bar"></span>
                <span className="navbar-toggler-icon icon-bar"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="../dashboard.html" className="nav-link">
                      <i className="material-icons">dashboard</i>
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a href="../pages/register.html" className="nav-link">
                      <i className="material-icons">person_add</i>
                      Register
                    </a>
                  </li>
                  <li className="nav-item  active ">
                    <a href="../pages/login.html" className="nav-link">
                      <i className="material-icons">fingerprint</i>
                      Login
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a href="../pages/lock.html" className="nav-link">
                      <i className="material-icons">lock_open</i>
                      Lock
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
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
                                  <i className="material-icons">face</i>
                                </span>
                              </div>
                              <input type="text" className="form-control" placeholder="First Name..."/>
                            </div>
                          </span>
                          <span className="bmd-form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">email</i>
                                </span>
                              </div>
                              <input type="email" className="form-control" placeholder="Email..."/>
                            </div>
                          </span>
                          <span className="bmd-form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">lock_outline</i>
                                </span>
                              </div>
                              <input type="password" className="form-control" placeholder="Password..."/>
                            </div>
                          </span>
                        </div>
                        <div className="card-footer justify-content-center">
                          <a href="#pablo" className="btn btn-rose btn-link btn-lg">Lets Go</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <footer className="footer">
                <div className="container">
                  <nav className="float-left">
                    <ul>
                      <li>
                        <a href="https://www.creative-tim.com">
                          Creative Tim
                        </a>
                      </li>
                      <li>
                        <a href="https://creative-tim.com/presentation">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="http://blog.creative-tim.com">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="https://www.creative-tim.com/license">
                          Licenses
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="copyright float-right">
                    &copy;
                    <script>
                      document.write(new Date().getFullYear())
                    </script>, made with <i className="material-icons">favorite</i> by
                    <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web.
                  </div>
                </div>
              </footer>
            </div>
          </div>
          {/*   Core JS Files   */}
          <script src="../../assets/js/core/jquery.min.js"></script>
          <script src="../../assets/js/core/popper.min.js"></script>
          <script src="../../assets/js/core/bootstrap-material-design.min.js"></script>
          <script src="../../assets/js/plugins/perfect-scrollbar.min.js"></script>
          {/*  Google Maps Plugin    */}
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Yno10-YTnLjjn_Vtk0V8cdcY5lC4plU"></script>
          {/* Place this tag in your head or just before your close body tag. */}
          <script async defer src="https://buttons.github.io/buttons.js"></script>
          {/* Chartist JS */}
          <script src="../../assets/js/plugins/chartist.min.js"></script>
          {/*  Notifications Plugin    */}
          <script src="../../assets/js/plugins/bootstrap-notify.js"></script>
          {/* Control Center for Material Dashboard: parallax effects, scripts for the example pages etc */}
          <script src="../../assets/js/material-dashboard.min.js?v=2.2.2" type="text/javascript"></script>
          {/* Material Dashboard DEMO methods, don't include it in your project! */}
          <script src="../../assets/js/login.js"></script>
          {/* Sharrre libray */}
          <script src="../../assets/demo/jquery.sharrre.js"></script>
          <noscript>
            <img height="1" width="1" style={{ display:"none" }} src="https://www.facebook.com/tr?id=111649226022273&ev=PageView&noscript=1" />
          </noscript>
        </body>

      </html>
    );
}