import React, { Component } from "react";
import axios from 'axios';
import ProdukPenginapan from "../../Component/ListData/ProdukPenginapan";
import Cari from "../../Component/Forms/Cari";
import Sorting from "../../Component/Dropdown/Sorting";
// import PaginationPage from "../Component/Pagination/PaginationPage";

class Apartemen extends Component{
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://irfanfath.site/Rentformasi_API/ListProduk.json')
        .then((result)=>{
            this.setState({
                post: result.data.Apartemen
            })
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
                                return <ProdukPenginapan key={post.ProdukId} 
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

export default Apartemen;