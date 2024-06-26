import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from "axios";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

const porfolio = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required").email("Email is invalid"),
        subject: Yup.string().required("Subject is required"),
        message: Yup.string().required("Message is required"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function notify(status, message) {
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-custom-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
        toastr.clear();
        if(status) {
            setTimeout(() => toastr.success(message));
        }
        if(!status) {
            setTimeout(() => toastr.error(message));
        }
      }

    function onSubmit(e) {
        axios
        .post(process.env.API_URL + "/api/v1/portfolio/contact", {
            name: e.name,
            subject: e.subject,
            email: e.email,
            message: e.message
        })
        .then((res) => {
            notify(true, 'Send contact successfully');
        })
        .catch(err => {
            notify(false, 'Send contact unsuccessful');
        });
    }

    return (
        <div>
           <Head>
                <title>Portfolio | Nguyen Duong Dev</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="porfolio/css/style.css" rel="stylesheet"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.5/typed.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
                <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
                <link href="porfolio/css/custom-toastr.css" rel="stylesheet"/>
           </Head>
           <div className="scroll-up-btn">
                <i className="fas fa-angle-up"></i>
            </div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
                    <ul className="menu">
                        <li><a href="#home" className="menu-btn">Home</a></li>
                        <li><a href="#about" className="menu-btn">About</a></li>
                        <li><a href="#services" className="menu-btn">Services</a></li>
                        <li><a href="#skills" className="menu-btn">Skills</a></li>
                        <li><a href="/blog" className="menu-btn">Blog</a></li>
                        <li><a href="#contact" className="menu-btn">Contact</a></li>
                    </ul>
                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>

            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Hello, my name</div>
                        <div className="text-2">Nguyễn Dương</div>
                        <div className="text-3">And I'm a <span className="typing"></span></div>
                        {/* <a href="#contact">Hire me</a> */}
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src="porfolio/images/profile.jpg" alt=""/>
                        </div>
                        <div className="column right">
                            <div className="text">I'm Nguyễn Dương <span className="typing-2"></span></div>
                            <p>
                                I am a software developer, I like working on the backend-end of the web and mobile app.<br/>

                                I love creating, whether those things are web applications, Mobile Ecommerce Apps. I always like learning new things. I often write about my findings on my blog.<br/>

                                This is my site, nguyenduongdev, I'm glad you're here!
                            </p>
                            {/* <a href="#">Download CV</a> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <div className="max-width">
                    <h2 className="title">My services</h2>
                    <div className="serv-content">
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-atom"></i>
                                <div className="text">Backend Apps</div>
                                <p>
                                    Build scalable and maintainable server applications using modern
                                    technology stacks such as Node.js, Express, and MongoDB
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-chart-line"></i>
                                <div className="text">Ongoing Support</div>
                                <p>
                                    For select projects, we stay on as technical support providers and partners to offer ongoing maintenance and updates.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-mobile"></i>
                                <div className="text">Native Apps</div>
                                <p>
                                    As a Flutter app developer, we help you design, develop, test & release platform-independent apps with a native look & feel!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My skills</h2>
                    <div className="skills-content">
                        <div className="column left" style={{ marginBottom: '100px' }}>
                            <div className="text">My creative skill & experiences.</div>
                            <p>
                                I’m familiar with technologies such as:<br/>
                                    - Node/JavaScript, Laravel as the main backend solution.<br/>
                                    - Flutter for mobile development.<br/>
                                    - MySQL or Mongo as databases.<br/>
                            </p>
                            {/* <a href="#">Read more</a> */}
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>HTML, CSS, Javascript</span>
                                    <span>60%</span>
                                </div>
                                <div className="line html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Laravel</span>
                                    <span>80%</span>
                                </div>
                                <div className="line laravel"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Nodejs</span>
                                    <span>50%</span>
                                </div>
                                <div className="line nodejs"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Flutter</span>
                                    <span>20%</span>
                                </div>
                                <div className="line flutter"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>MySQL, Mongo</span>
                                    <span>70%</span>
                                </div>
                                <div className="line mysql"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="teams" id="teams">
                <div className="max-width">
                    <h2 className="title">My teams</h2>
                    <div className="carousel owl-carousel">
                        <div className="card">
                            <div className="box">
                                <img src="porfolio/images/profile-1.jpeg" alt=""/>
                                <div className="text">Someone name</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src="porfolio/images/profile-2.jpeg" alt=""/>
                                <div className="text">Someone name</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src="porfolio/images/profile-3.jpeg" alt=""/>
                                <div className="text">Someone name</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src="porfolio/images/profile-4.jpeg" alt=""/>
                                <div className="text">Someone name</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <img src="porfolio/images/profile-5.jpeg" alt=""/>
                                <div className="text">Someone name</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div style={{height: '1px', color: '#111', width: '400px', border: '1px double', margin: 'auto'}}></div>
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">Get in Touch</div>
                            <p>
                                I am available to work on your projects and bring your ideas to life. I am just a click away.
                            </p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user"></i>
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title">Nguyễn Dương</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title">HCM city</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title">nguyenduong2824@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">Message me</div>
                            <form action="" method="" onSubmit={handleSubmit(onSubmit)} id="reset">
                                <div className="fields" style={{ marginBottom: "30px"}}>
                                    <div className="field name">
                                        <input 
                                            type="text" 
                                            placeholder="Name" 
                                            {...register('name')}
                                            name="name"
                                            id="name"
                                        />
                                        <div className="error-message">{errors.name?.message}</div>
                                    </div>
                                    <div className="field email">
                                        <input 
                                            type="text" 
                                            placeholder="Email" 
                                            {...register('email')}
                                            name="email"
                                            id="email"
                                        />
                                        <div className="error-message">{errors.email?.message}</div>
                                    </div>
                                </div>
                                <div className="fields" style={{ marginBottom: "30px"}}>
                                    <div className="field">
                                        <input 
                                            type="text" 
                                            placeholder="Subject" 
                                            {...register('subject')}
                                            name="subject"
                                            id="subject"
                                        />
                                        <div className="error-message">{errors.subject?.message}</div>
                                    </div>
                                </div>
                                <div className="field textarea" style={{ marginBottom: "30px"}}>
                                    <textarea 
                                        cols="30" 
                                        rows="10" 
                                        placeholder="Enter Message.." 
                                        {...register('message')}
                                        name="message"
                                        id="message"
                                    ></textarea>
                                     <div className="error-message">{errors.message?.message}</div>
                                </div>
                                <div className="button">
                                    <button type="button" onClick={handleSubmit(onSubmit)}>Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <span>Created By <a href="#">Coding Nguyen Duong</a> | <span className="far fa-copyright"> 2021 All rights reserved.</span></span>
            </footer>
           <script src="porfolio/js/script.js"></script>
        </div>
    );
}

export default porfolio;
