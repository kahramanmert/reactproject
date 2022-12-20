import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import AboutMe from "./aboutMe";
import React from "react";


const Rout = () => {
    return (
        <>
            <div>
                <a href="/">Anasayfa</a>
                <a href="/aboutme">About Me</a>
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/aboutme" element={<AboutMe />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Rout;