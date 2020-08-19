import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import DynamicScrollToTop from "./Component/DynamicScrollToTop";
import Home from "./Container/Home/Home";
import Header from "./Component/Navigation/Header";
import Footer from "./Component/Navigation/Footer";
import ListProduk from "./Container/Produk/ListProduk";
import DaftarProduk from "./Container/Produk/DaftarProduk";
import ListLoc from "./Container/Produk/ListLoc";

class Main extends Component {
    render(){
        return(
            <HashRouter>
                <Header/>
                <DynamicScrollToTop/>
                    <Route exact path="/" component={Home} />
                    <Route path="/listloc" component={ListLoc}/>
                    <Route path="/listproduk/:idBarang" component={ListProduk}/>
                    <Route path="/daftarprod" component={DaftarProduk}/>
                <Footer/>
            </HashRouter>
        )
    }
}

export default Main;