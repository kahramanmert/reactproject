import '../style/sections.scss';
import axios from "axios";
import {useState, useEffect} from "react";

const Sections = () => {

    const [articles, setArticles] = useState([]);
    const [artSecA, setartSecA] = useState([]);
    const [artSecB, setartSecB] = useState([]);
    const [artSecC, setartSecC] = useState([]);
    const [artSecD, setartSecD] = useState([]);


    function fetchArticles () {
        axios.get('http://127.0.0.1:3001/myarticles').then((response) => {
            setArticles(response.data);
            setartSecA([response.data[0],response.data[1],response.data[2],response.data[3]]);
            setartSecB([response.data[4],response.data[5],response.data[6],response.data[7]]);
            setartSecC([response.data[8],response.data[9],response.data[10],response.data[11]]);
            setartSecD([response.data[12],response.data[13],response.data[14],response.data[15]]);
        });
    }

    useEffect(() => {
        fetchArticles();
    }, []);


    return (
        <div className="section2-container">
            <section>
                <div className="aSection">
                    <div className="secHeadBar">
                        <p id="shb-text1">Featured Article <img className="img" src="http://127.0.0.1:3001/static/img/line.png"/></p>
                        <a href="#">
                            <p id="shb-text2">See All Category <img className="img" src="http://127.0.0.1:3001/static/img/cat-link-button.png"/>
                        </p></a>
                    </div>
                    <div className="secCardPost">

                        {artSecA.map((art) => {
                            return (

                        <div className="cardPostItem">
                            <div className="cardPostContent">
                                <a href="#">
                                    <div className="article">
                                        <img src={art.image}/>
                                            <p className="articleNameText">{art.name}</p>
                                    </div>
                                </a>
                                <div className="writer-content">
                                    <div>
                                        <img src="http://127.0.0.1:3001/static/img/writer.png"/>
                                    </div>
                                    <div className="info">
                                        <p className="writerNameText">Dasteen</p>
                                        <p className="articleInfoText">Jan 10, 2022 ∙ 3 min read</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                            );
                        })}
                    </div>
                </div>
            </section>

            <section>
                <div className="aSection">
                    <div className="secHeadBar">
                        <p id="shb-text1">CSS <img className="img" src="http://127.0.0.1:3001/static/img/line.png"/></p>
                        <a href="#">
                            <p id="shb-text2">See All Category <img className="img" src="http://127.0.0.1:3001/static/img/cat-link-button.png"/>
                            </p></a>
                    </div>
                    <div className="secCardPost">

                        {artSecB.map((art) => {
                            return (

                                <div className="cardPostItem">
                                    <div className="cardPostContent">
                                        <a href="#">
                                            <div className="article">
                                                <img src={art.image}/>
                                                <p className="articleNameText">{art.name}</p>
                                            </div>
                                        </a>
                                        <div className="writer-content">
                                            <div>
                                                <img src="http://127.0.0.1:3001/static/img/writer.png"/>
                                            </div>
                                            <div className="info">
                                                <p className="writerNameText">Dasteen</p>
                                                <p className="articleInfoText">Jan 10, 2022 ∙ 3 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            );
                        })}
                    </div>
                </div>
            </section>

            <section>
                <div className="aSection">
                    <div className="secHeadBar">
                        <p id="shb-text1">Javascript <img className="img" src="http://127.0.0.1:3001/static/img/line.png"/></p>
                        <a href="#">
                            <p id="shb-text2">See All Category <img className="img" src="http://127.0.0.1:3001/static/img/cat-link-button.png"/>
                            </p></a>
                    </div>
                    <div className="secCardPost">

                        {artSecC.map((art) => {
                            return (

                                <div className="cardPostItem">
                                    <div className="cardPostContent">
                                        <a href="#">
                                            <div className="article">
                                                <img src={art.image}/>
                                                <p className="articleNameText">{art.name}</p>
                                            </div>
                                        </a>
                                        <div className="writer-content">
                                            <div>
                                                <img src="http://127.0.0.1:3001/static/img/writer.png"/>
                                            </div>
                                            <div className="info">
                                                <p className="writerNameText">Dasteen</p>
                                                <p className="articleInfoText">Jan 10, 2022 ∙ 3 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            );
                        })}
                    </div>
                </div>
            </section>

            <section>
                <div className="aSection">
                    <div className="secHeadBar">
                        <p id="shb-text1">React JS <img className="img" src="http://127.0.0.1:3001/static/img/line.png"/></p>
                        <a href="#">
                            <p id="shb-text2">See All Category <img className="img" src="http://127.0.0.1:3001/static/img/cat-link-button.png"/>
                            </p></a>
                    </div>
                    <div className="secCardPost">

                        {artSecD.map((art) => {
                            return (

                                <div className="cardPostItem">
                                    <div className="cardPostContent">
                                        <a href="#">
                                            <div className="article">
                                                <img src={art.image}/>
                                                <p className="articleNameText">{art.name}</p>
                                            </div>
                                        </a>
                                        <div className="writer-content">
                                            <div>
                                                <img src="http://127.0.0.1:3001/static/img/writer.png"/>
                                            </div>
                                            <div className="info">
                                                <p className="writerNameText">Dasteen</p>
                                                <p className="articleInfoText">Jan 10, 2022 ∙ 3 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            );
                        })}
                    </div>
                </div>
            </section>

            <div className="button-more">
                <button type="button" className="more-article-button">More Article</button>
            </div>
        </div>
    );
}

export default Sections;