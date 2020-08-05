import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import DynamicScrollToTop from "./Component/DynamicScrollToTop";
import Home from "./Container/Home/Home";
import Header from "./Component/Navigation/Header";
import Apartemen from "./Container/Produk/Apartemen";
import Hotel from "./Container/Produk/Hotel";
import Footer from "./Component/Navigation/Footer";
import Penginapan from "./Container/Produk/Penginapan";

class Main extends Component {
    render(){
        return(
            <HashRouter>
                <Header/>
                <DynamicScrollToTop/>
                    <Route exact path="/" component={Home} />
                    <Route path="/penginapan/:idBarang" component={Penginapan}/>
                    <Route path="/apartemen" component={Apartemen}/>
                    <Route path="/hotel" component={Hotel}/>
                <Footer/>
            </HashRouter>
        )
    }
}

export default Main;