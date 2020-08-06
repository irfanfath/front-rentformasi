import React, { Component } from "react";
import axios from 'axios';
import Cari from "../../Component/Forms/Cari";
import Sorting from "../../Component/Dropdown/Sorting";
import Produk from "../../Component/ListData/Produk";
// import PaginationPage from "../Component/Pagination/PaginationPage";

class ListProduk extends Component{
    state = {
        post: []
    }

    // componentDidMount(){
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
        let id = this.props.match.params.idBarang;
        axios.get(`http://irfanfath.site/Rentformasi_API/produk.json/${id}`)
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

    // moveCart = () => {
    //     window.location.href = "#/product_detail/1"
    // }

    render(){
        return(
        <div className="section-produk">
            <Cari/>
                <div className="section no-padding-top">
                    <div className="wrapper">
                        <div className="shop-header">
                            <div>
                            <h3>Semua Penginapan</h3>
                            <div className="count-produk">Menampilkan 1-23 dari 253 produk</div>
                            </div>
                            <Sorting/>
                            <div className="shop-header-line">
                                <div className="shop-header-color"></div>
                            </div>
                        </div>
                        <div className="full-width w-dyn-list">
                            <div className="products w-dyn-items">
                            {
                                this.state.post.map(post => {
                                return <Produk key={post.ProdukId} 
                                               data={post}
                                        />
                                        })
                            }
                            </div>
                        </div>
                    </div>
                </div>   
                {/* <PaginationPage/>                                   */}
        </div>
        )
    }
}

export default ListProduk;