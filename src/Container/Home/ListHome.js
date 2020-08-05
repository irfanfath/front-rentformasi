import React, { Component } from "react";
import TitleProduk from "../../Component/ListData/TitleProduk";
import Produk from "../../Component/ListData/Produk";
import axios from "axios";

class ListHome extends Component{
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://irfanfath.site/Rentformasi_API/home.json')
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    } 

    componentDidMount(){
        this.getPostAPI();
    }

    handleProduct = (IdKategori) => {
        // this.props.history.push(`/penginapan/${IdKategori}`);
        window.location.href = (`#/penginapan/${IdKategori}`)
    }

    render(){
        return(
            <div className="section no-padding-top">
                    <div className="wrapper">
                        <div className="shop-header">
                            <h3 className="no-margin">Sewa .... </h3>
                            <div className="link arrow-link">Lihat Semua</div>
                            <div className="shop-header-line">
                                <div className="shop-header-color"></div>
                            </div>
                        </div>
                        <div className="full-width w-dyn-list">
                            <div className="products w-dyn-items">
                            {/* {
                                this.state.post.map(post => {
                                return <Produk key={post.IdKategori} 
                                               data={post}
                                               goDetail={this.handleProduct}
                                        />
                                        })
                            } */}
                            <div className="product-card-wrapper w-dyn-item">
                                <div className="product-card w-inline-block">
                                    <div className="product-card-image-wrapper"><img src={props.data.gambar} alt="" /></div>
                                    <div className="product-card-heading">{props.data.TitleKategori}</div>
                                    <div className="product-card-price">Selengkapnya</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ListHome;