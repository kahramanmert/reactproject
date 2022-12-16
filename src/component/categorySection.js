import '../style/categorySection.scss';
const CategorySection = () => {
    return (
        <div className="section1-container">
            <section>
                <div className="categorySection">
                    <div className="secHeadBar">
                        <p id="shb-text1">Browse The Category
                            <img className="img" src="http://127.0.0.1:3001/static/img/line.png"/>
                        </p>
                        <a href="#">
                            <p id="shb-text2">See All Category
                                <img className="img" src="http://127.0.0.1:3001/static/img/cat-link-button.png"/>
                            </p>
                        </a>
                    </div>
                    <div className="categoryContent">
                        <a href="#">
                            <div className="categoryItem">
                                <img src="http://127.0.0.1:3001/static/img/css-icon.png"/>
                                    <p>CSS</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="categoryItem">
                                <img src="http://127.0.0.1:3001/static/img/javascript-icon.png"/>
                                    <p>Javascript</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="categoryItem">
                                <img src="http://127.0.0.1:3001/static/img/tailwind-icon.png"/>
                                    <p>Tailwind</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="categoryItem">
                                <img src="http://127.0.0.1:3001/static/img/vue-js-icon.png"/>
                                    <p>Vue JS</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="categoryItem">
                                <img src="http://127.0.0.1:3001/static/img/react-js-icon.png"/>
                                    <p>React JS</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default  CategorySection;