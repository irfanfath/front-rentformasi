import React, { Component } from "react";
import TitleProduk from "../../Component/ListData/TitleProduk";
import Produk from "../../Component/ListData/Produk";
import axios from "axios";

class ListBest extends Component{
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://irfanfath.site/Rentformasi_API/best.json')
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    } 

    componentDidMount(){
        this.getPostAPI();
    }

    render(){
        return(
            <div className="section no-padding-top">
                    <div className="wrapper">
                        <TitleProduk title="Paling Banyak Disewa" />
                        <div className="full-width w-dyn-list">
                            <div className="products w-dyn-items">
                            {
                                this.state.post.map(post => {
                                return <Produk key={post.IdKategori} 
                                            data={post}
                                        />
                                        })
                            }
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ListBest;