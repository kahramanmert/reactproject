import '../style/footer.scss';

const Footer = () => {
    return(
        <div className="footer-container">
            <section>
                <div className="secFooter">
                    <div className="aboutWebSite">
                        <div className="logoFooter">
                            <span className="logop1">Dasteen</span><span className="logop2">.Blog</span>
                        </div>
                        <div className="aboutSiteText">
                            <p>Digitaldastin by Dastin Darmawan</p>
                        </div>
                        <div className="siteIcons">

                            <a href="#"><img src="http://127.0.0.1:3001/static/img/mediumIcon.png"/></a>
                            <a href="#"><img src="http://127.0.0.1:3001/static/img/twitterIcon.png"/></a>
                            <a href="#"><img src="http://127.0.0.1:3001/static/img/instagramIcon.png"/></a>
                            <a href="#"><img src="http://127.0.0.1:3001/static/img/linkedinIcon.png"/></a>

                        </div>
                    </div>

                    <div className="footerLinkContainer">
                        <div className="footerLinkContent">
                            <p>CATEGORY</p>
                            <ul>
                                <a href="#">
                                    <li>CSS</li>
                                </a>
                                <a href="#">
                                    <li>Javascript</li>
                                </a>
                                <a href="#">
                                    <li>Tailwind</li>
                                </a>
                                <a href="#">
                                    <li>React JS</li>
                                </a>
                                <a href="#">
                                    <li>More Category</li>
                                </a>
                            </ul>
                        </div>
                        <div className="footerLinkContent">
                            <p>ABOUT ME</p>
                            <ul>
                                <a href="#">
                                    <li>About Me</li>
                                </a>
                                <a href="#">
                                    <li>Projects</li>
                                </a>
                                <a href="#">
                                    <li>Achievement</li>
                                </a>
                            </ul>
                        </div>
                        <div className="footerLinkContent">
                            <p>GET IN TOUCH</p>
                            <ul>
                                <a href="#">
                                    <li>+62-8XXX-XXX-XX</li>
                                </a>
                                <a href="#">
                                    <li>demo@gmail.com</li>
                                </a>
                            </ul>
                        </div>
                        <div className="footerLinkContent">
                            <p>FOLLOW US</p>
                            <ul>
                                <a href="#">
                                    <li>Medium</li>
                                </a>
                                <a href="#">
                                    <li>Instagram</li>
                                </a>
                                <a href="#">
                                    <li>Twitter</li>
                                </a>
                                <a href="#">
                                    <li>Facebook</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="signature">
                    <p>© 2022 Digitaldastin</p>
                    <p>Made With ❤️ Jakarta, Indonesia</p>
                </div>
            </section>
        </div>
    );
}

export default Footer;