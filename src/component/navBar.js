import '../style/navBar.scss';

const NavBar = () => {
    const links = [
        {link: '/', name: 'Home'},
        //{link: '#', name: 'Category'},
        {link: '/register', name: 'Register'},
        {link: '/aboutme', name: 'About Me'}
    ];

    return (
        <div className="nav-bar">
            <nav>
                <div className="logo">
                    <span className="logop1">Dasteen</span><span className="logop2">.Blog</span>
                </div>
                <div className="nav-container">
                    <ul className="nav-links">
                        {links.map((link) => (
                            <li key={link.name}><a href={link.link}>{link.name}</a></li>
                        ))}

                        <div className="nav-search">
                            <li>
                                <img src="http://127.0.0.1:3001/static/img/searchButton.png" />
                                <a href="#">Search</a>
                            </li>
                        </div>
                    </ul>
                    <div>
                        <button variant="text" className="button-cta">
                            <img src="http://127.0.0.1:3001/static/img/buymeacoffee.png"/>
                            Buy Me A Coffee
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;