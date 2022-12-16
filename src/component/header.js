import '../style/header.scss'
const Header = () => {
    return (
        <div className="header-container">
            <header>
                <div className="hero-wrap">
                    <div className="hero-container">
                        <h1>Hi, i’m Dasteen Front end dev</h1>
                        <p>On this blog I share tips and tricks, frameworks, projects, tutorials, etc Make sure you
                            subscribe to get the latest updates</p>
                        <div>
                            <input type="email" placeholder="Enter your email here...."/>
                                <button variant="text" className="button-subscribe">Subscribe</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="http://127.0.0.1:3001/static/img/hero-image.png" alt="Hero Image" title="Hero Image"/>
                    </div>
                </div>
                <div id="scrollHeader">
                    <img src="http://127.0.0.1:3001/static/img/scroll-icon.png" width="18px" height="10px"/>
                </div>
            </header>
        </div>
    );
}

export default Header;