import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
  
export default function Sidebar({users}) {
    const [infoUser, setInFoUser] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/admin/me", {
            headers: { Authorization: Cookies.get("token") },
          })
            .then((res) => {
              setInFoUser(res.data.user);
            });
    }, []);

    function logOut() {
        axios.get("http://localhost:5000/api/v1/admin/logout/")
            .then((res) => {
                Cookies.remove("token");
                localStorage.removeItem('authenticate');
                window.location.href = "/admin/login";
            });
    }

    return (
        <div className="sidebar" data-color="rose" data-background-color="black" data-image="http://103.81.86.16:3000/assets/img/sidebar-1.jpg">
            <div className="logo">
                <a href="http://www.creative-tim.com" className="simple-text logo-mini">CT</a>
                <a href="http://www.creative-tim.com" className="simple-text logo-normal">Creative Tim</a>
            </div>
            <div className="sidebar-wrapper">
                <div className="user">
                    <div className="photo">
                        <img src="http://103.81.86.16:3000/assets/img/faces/avatar.jpg" />
                    </div>
                    <div className="user-info">
                        <a data-toggle="collapse" href="#collapseExample" className="username">
                            <span>{infoUser.name}<b className="caret"></b></span>
                        </a>
                        <div className="collapse" id="collapseExample">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className="sidebar-mini"> MP </span>
                                        <span className="sidebar-normal"> My Profile </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className="sidebar-mini"> EP </span>
                                        <span className="sidebar-normal"> Edit Profile </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span className="sidebar-mini"> L </span>
                                        <span className="sidebar-normal" onClick={() => logOut()}> Logout </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/user">
                            <i className="material-icons">Users</i>
                            <p> User </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/category">
                            <i className="material-icons">Category</i>
                            <p> Category </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/blog">
                            <i className="material-icons">Blog</i>
                            <p> Blog </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sidebar-background"></div>        
        </div>
    );
}