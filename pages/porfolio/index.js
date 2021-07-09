import React from 'react';
import Head from 'next/head'

const porfolio = () => {
    return (
        <div>
           <Head>
                <title>Personal Portfolio Webiste</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="porfolio/css/style.css" rel="stylesheet"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.5/typed.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
                <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
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
                        <li><a href="#teams" className="menu-btn">Teams</a></li>
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
                        <a href="#">Hire me</a>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src="porfolio/images/profile-1.jpeg" alt=""/>
                        </div>
                        <div className="column right">
                            <div className="text">I'm Nguyễn Dương <span className="typing-2"></span></div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi sapiente vitae. Eaque eius neque tempora saepe debitis, reprehenderit adipisci asperiores, eveniet vitae quam pariatur, recusandae quod quia commodi soluta
                                quaerat praesentium! Quasi odit rem obcaecati alias dolor expedita accusamus aut ad asperiores non cumque vitae ex perferendis, maiores et itaque voluptatum ab eveniet distinctio eaque molestias quod fugiat excepturi!</p>
                            <a href="#">Download CV</a>
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
                                <i className="fas fa-paint-brush"></i>
                                <div className="text">Web Design</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam porro corporis nemo, quod necessitatibus!</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-chart-line"></i>
                                <div className="text">Advertising</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam porro corporis nemo, quod necessitatibus!</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-code"></i>
                                <div className="text">Apps Design</div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam porro corporis nemo, quod necessitatibus!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My skills</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">My creative skill & experiences.</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quas totam repellendus, distinctio saepe tempora ea quae eum expedita odio repellat esse molestiae fugiat harum veniam nisi unde quidem itaque voluptatum consequatur
                                sit? Minima atque quas eos aperiam ducimus debitis corporis impedit perferendis nam, accusantium doloremque ex recusandae voluptas suscipit fuga esse sint qui quos velit assumenda culpa dolor magnam.</p>
                            <a href="#">Read more</a>
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>HTML</span>
                                    <span>90%</span>
                                </div>
                                <div className="line html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>CSS</span>
                                    <span>60%</span>
                                </div>
                                <div className="line css"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Javascript</span>
                                    <span>80%</span>
                                </div>
                                <div className="line js"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>PHP</span>
                                    <span>50%</span>
                                </div>
                                <div className="line php"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>MySQL</span>
                                    <span>70%</span>
                                </div>
                                <div className="line mysql"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="teams" id="teams">
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
            </section>

            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">Get in Touch</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rem.</p>
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
                                        <div className="sub-title">Hoc Mon, HCM</div>
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
                            <form action="#">
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" placeholder="Name" required/>
                                    </div>
                                    <div className="field email">
                                        <input type="email" placeholder="Email" required/>
                                    </div>
                                </div>
                                <div className="fields">
                                    <div className="field">
                                        <input type="text" placeholder="Subject" required/>
                                    </div>
                                </div>
                                <div className="field textarea">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Describle project.." required></textarea>
                                </div>
                                <div className="button">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <span>Created By <a href="#">Coding Nepal</a> | <span className="far fa-copyright"> 2020 All rights reserved.</span></span>
            </footer>
           <script src="porfolio/js/script.js"></script>
        </div>
    );
}

export default porfolio;
