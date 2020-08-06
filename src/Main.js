import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import DynamicScrollToTop from "./Component/DynamicScrollToTop";
import Home from "./Container/Home/Home";
import Header from "./Component/Navigation/Header";
import Apartemen from "./Container/Produk/Apartemen";
import Hotel from "./Container/Produk/Hotel";
import Footer from "./Component/Navigation/Footer";
import ListProduk from "./Container/Produk/ListProduk";

class Main extends Component {
    render(){
        return(
            <HashRouter>
                <Header/>
                <DynamicScrollToTop/>
                    <Route exact path="/" component={Home} />
                    <Route path="/listproduk/:idBarang" component={ListProduk}/>
                    <Route path="/apartemen" component={Apartemen}/>
                    <Route path="/hotel" component={Hotel}/>
                <Footer/>
            </HashRouter>
        )
    }
}

export default Main;