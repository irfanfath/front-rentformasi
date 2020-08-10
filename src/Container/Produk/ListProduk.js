import React, { Component } from "react";
import axios from 'axios';
import Cari from "../../Component/Forms/Cari";
import Sorting from "../../Component/Dropdown/Sorting";
import PaginationPage from "../../Component/Pagination/PaginationPage";

class ListProduk extends Component{
    state = {
        post: [],
        star: 4
    }

    // componentDidMount(){
    //     // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //     let id = this.props.match.params.idBarang;
    //     axios.get(`http://irfanfath.site/Rentformasi_API/home.json/${id}`).then(res => {
    //         let post = res.data;
    //         this.setState({
    //             post : {
    //                 title: post.title,
    //                 harga: post.harga,
    //             }
    //         })
    //     })     
    // }

    getPostAPI = () => {
        axios.get('http://irfanfath.site/Rentformasi_API/produk.json')
        .then((result)=>{
            this.setState({
                post: result.data
            })
            console.log(result.data)
        })
    } 

    componentDidMount(){
        this.getPostAPI();
    }

    // handleDetail = (id) => {
    //     this.props.history.push(`/product_detail/${id}`);
    // }

    render(){
        var prod = this.state.post;
        var countprod = prod.length;
        return(
        <div className="section-produk">
            <Cari/>
                <div className="section no-padding-top">
                    <div className="wrapper">
                            {this.state.post.map((post, key) => {
                            return (
                                <div className="shop-header" key={key}>
                                    <div>
                                    <h3 className="no-margin">{post.SubKatTitle}</h3>
                                    <div className="count-produk">Menampilkan {countprod} dari {countprod} produk</div>
                                    </div>
                                    <Sorting/>
                                        <div className="shop-header-line">
                                            <div className="shop-header-color"></div>
                                        </div>
                                    {
                                        post.Items.Product.map((data, key) => {
                                            return (
                                                    <div className="product-card-wrapper w-dyn-item" key={key}>
                                                        <div className="product-card">
                                                            <div className="star-ratings-css" title={this.state.star}></div>
                                                            <div className="product-card-image-wrapper"><img className="img-prod" src="https://static-id.lamudi.com/static/media/cXVhbGl0eS83MA%3D%3D/2x2x2x700x340/0fe7d581d69389.jpg" alt="" /></div>
                                                            <div className="title-loc-produk">Buah Batu, Bandung</div>
                                                            <div className="product-card-heading">{data.ProdukTitle}</div>
                                                            <div className="product-card-price">Rp. {data.ProdukHarga}</div>
                                                        </div>
                                                    </div>
                                            )
                                        })
                                    }
                                    <PaginationPage/>
                                </div>
                            )
                        })}
                    </div>
                </div>   
        </div>
        )
    }
}

export default ListProduk;