import React, { Component } from "react";
import TitleProduk from "../../Component/ListData/TitleProduk";
import Produk from "../../Component/ListData/Produk";
import axios from "axios";

class ListPenginapan extends Component{
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://irfanfath.site/Rentformasi_API/penginapan.json')
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

    handleProduct = (IdKategori) => {
        // this.props.history.push(`/penginapan/${IdKategori}`);
        window.location.href = (`#/penginapan/${IdKategori}`)
    }

    render(){
        return(
            <div className="section no-padding-top">
                    <div className="wrapper">
                        <TitleProduk title="Sewa Penginapan" />
                        <div className="full-width w-dyn-list">
                            <div className="products w-dyn-items">
                            {
                                this.state.post.map(post => {
                                return <Produk key={post.IdKategori} 
                                               data={post}
                                               goDetail={this.handleProduct}
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

export default ListPenginapan;