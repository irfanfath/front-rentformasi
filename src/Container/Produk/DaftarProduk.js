import React, { Component } from "react";
import axios from 'axios';
import Cari from "../../Component/Forms/Cari";
import Sorting from "../../Component/Dropdown/Sorting";
import PaginationPage from "../../Component/Pagination/PaginationPage";
import Fasilitas from "../../Component/Dropdown/Sorting/Fasilitas";
import LoadingSpinner from "../../Component/Loader/LoadingSpinner";
import Range from "../../Component/Dropdown/Sorting/Range";
import Bintang from "../../Component/Dropdown/Sorting/Bintang";

class DaftarProduk extends Component{
    state = {
        post: [],
        star: 4.7,
        trx : 217,
        loading: true
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
                loading: false,
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
        var bintang = "★"
        const divStyle = {
            color: "gold",
            fontSize: "22px"
        }
        return(
        <div className="section-produk">
            <Cari/>
                <div className="section no-padding-top">
                    <div className="wrapper">
                            {this.state.loading? <LoadingSpinner /> : this.state.post.map((post, key) => {
                            return (
                                <div className="shop-header" key={key}>
                                    <div>
                                    <h2 className="no-margin">{post.SubKatTitle}</h2>
                                    <div className="count-produk">Menampilkan 1 - {countprod} dari {countprod} produk</div>
                                    </div>
                                    <Sorting/>
                                    <div className="shop-header-fasilitas">
                                            <Fasilitas/>
                                        </div>
                                        <div className="shop-header-harga">
                                            <Bintang />
                                            <Range />
                                        </div>
                                        <div className="shop-header-line">
                                            <div className="shop-header-color"></div>
                                        </div>          
                                    {
                                        post.Items.Product.map((data, key) => {
                                            return (
                                                    <div className="product-card-vertikal" key={key}>
                                                        <div className="product-vertikal">
                                                            <div className="half-prod">
                                                                <div className="product-card-image-vertikal"><img src="data:image/jpeg;base64,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" alt="" /></div>                                                           
                                                            </div>
                                                            <div className="half-prod">
                                                                <div className="grid-prod">
                                                                    <div className="rate">
                                                                        <div style={divStyle}>{bintang}</div>
                                                                        <div className="num-ratings-css">{this.state.star} <span className="num-trx-css">({this.state.trx})</span></div>                                                        
                                                                    </div>
                                                                    <div className="title-loc-produk">Buah Batu, Bandung</div>
                                                                    <div className="product-card-heading-vertikal">{data.ProdukTitle}df</div>
                                                                    <div className="title-fasilitas-produk">2 Kamar Tidur, Wifi, Ac</div>
                                                                </div>
                                                                <div className="product-card-price">
                                                                    Rp. {data.ProdukHarga}
                                                                    <span className="product-card-duration">/ Day</span></div>
                                                            </div>
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

export default DaftarProduk;