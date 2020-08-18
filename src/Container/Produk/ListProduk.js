import React, { Component } from "react";
import axios from 'axios';
import Cari from "../../Component/Forms/Cari";
import Sorting from "../../Component/Dropdown/Sorting";
import PaginationPage from "../../Component/Pagination/PaginationPage";

class ListProduk extends Component{
    state = {
        post: [],
        star: 4.7,
        trx : 217
    }

    componentDidMount(){
        let id = this.props.match.params.idBarang;  
        axios.get(`https://rentformasi-express.herokuapp.com/product/category/${id}`)
        .then((result)=>{
            // let post = result.data
            this.setState({
                // post: {
                //     title: post.title,
                //     produk: post.SubCategories
                // },
                post: result.data
            })
            console.log(result.data)
        }) 
    }

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
                                <div className="shop-header">
                                    <div>
                                    <h3 className="no-margin">{this.state.post.title}</h3>
                                    <div className="count-produk">Menampilkan {countprod} dari {countprod} produk</div>
                                    </div>
                                    <Sorting/>
                                        <div className="shop-header-line">
                                            <div className="shop-header-color"></div>
                                        </div> 
                                        {/* {
                                            this.state.post.SubCategories.map((data, key) => {
                                                return (
                                                        <div className="product-card-wrapper w-dyn-item" key={key}>
                                                            <div className="product-card">
                                                                <div className="rate">
                                                                    <div style={divStyle}>{bintang}</div>
                                                                    <div className="num-ratings-css">{this.state.star} <span className="num-trx-css">({this.state.trx})</span></div>                                                        
                                                                </div>
                                                                <div className="product-card-image-wrapper"><img className="img-prod" src={data.image} alt="" /></div>
                                                                <div className="title-loc-produk">Buah Batu, Bandung</div>
                                                                <div className="product-card-heading">{data.title}</div>
                                                                <div className="product-card-price">Rp. 120.000/Jam</div>
                                                            </div>
                                                        </div>
                                                )
                                            })
                                        } */}
                                   <PaginationPage/>
                                </div>
                    </div>
                </div>   
        </div>
        )
    }
}

export default ListProduk;