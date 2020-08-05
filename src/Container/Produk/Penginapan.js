import React, { Component } from "react";
import axios from 'axios';
import ProdukPenginapan from "../../Component/ListData/ProdukPenginapan";
import Cari from "../../Component/Forms/Cari";
import Sorting from "../../Component/Dropdown/Sorting";
// import PaginationPage from "../Component/Pagination/PaginationPage";

class Penginapan extends Component{
    state = {
        post: []
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
                                return <ProdukPenginapan key={post.IdKategori} 
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

export default Penginapan;