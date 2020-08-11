import React, { Component } from "react";
import axios from "axios";

class ListHome extends Component{
    state = {
        post: [],
        stok: 16
    }

    getPostAPI = () => {
        axios.get('http://irfanfath.site/Rentformasi_API/home.json')
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

    handleProductAll = (IdKategori) => {
        window.location.href = (`#/listproduk/${IdKategori}`)
    }

    handleProduct = (SubKatId) => {
        // this.props.history.push(`/penginapan/${IdKategori}`);
        window.location.href = (`#/listproduk/${SubKatId}`)
        // window.open(`#/listproduk/${SubKatId}`, "_blank")
    }

    render(){
        return(
            <div className="section no-padding-top">
                    <div className="wrapper">
                            {this.state.post.map((post, key) => {
                                return (
                                    <div className="shop-header" key={key}>
                                        <h3 className="no-margin">{post.TitleKategori}</h3>
                                        <div className="link arrow-link" onClick={() => this.handleProductAll(post.IdKategori)}>Lihat Semua</div>
                                        <div className="shop-header-line">
                                            <div className="shop-header-color"></div>
                                        </div>
                                            {
                                                post.SubKat.Subkategori.map((data, key) => {
                                                    return (
                                                                <div className="kategori-card-wrapper" key={key}>
                                                                    <div className="product-card w-inline-block" onClick={() => this.handleProduct(data.SubKatId)}>
                                                                        <div className="product-card-stok">{this.state.stok} produk tersedia</div>
                                                                        <div className="product-card-image-wrapper"><img className="img-prod" src={data.gambar} alt="" /></div>
                                                                        <div className="product-card-heading">{data.SubKatTitle}</div>
                                                                        <div className="product-card-selengkapnya">Selengkapnya</div>
                                                                    </div>
                                                                </div>
                                                    )
                                                })
                                            }      
                                    </div>
                                )
                            })}
                    </div>
                </div>
        )
    }
}

export default ListHome;