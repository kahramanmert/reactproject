import './App.css';
import React from 'react';
import Navbar from "./component/navBar";
import Header from "./component/header";
import Footer from "./component/footer";
import CategorySection from "./component/categorySection";
import Subscribe from "./component/subscribe";

function App() {
  return (
    <div>
        <Navbar />
        <Header />
        <CategorySection />

        <Subscribe />
        <Footer />
    </div>
  );
}

export default App;
