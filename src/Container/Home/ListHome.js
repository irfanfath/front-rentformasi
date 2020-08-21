import React, { Component } from "react";
import axios from "axios";
import LoadingSpinner from "../../Component/Loader/LoadingSpinner";

class ListHome extends Component{
    state = {
        post: [],
        stok: 16,
        loading: true
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       post: [], // will hold the results from our ajax call
    //       loading: true, // will be true when ajax request is running
    //       stok: 16
    //     }
    //   }

    getPostAPI = () => {
        axios.get('https://rentformasi-express.herokuapp.com/product/category')
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

    handleProductAll = (id) => {
        window.location.href = (`#/listproduk/${id}`)
    }

    handleProduct = (id) => {
        // this.props.history.push(`/penginapan/${IdKategori}`);
        window.location.href = (`#/listproduk/${id}`)
        // window.open(`#/listproduk/${SubKatId}`, "_blank")
    }

    render(){
        return(
            <div className="section no-padding-top">
                    <div className="wrapper">
                            {this.state.loading? <LoadingSpinner /> : this.state.post.map((post, key) => {
                                return (
                                    <div className="shop-header" key={key}>
                                        <h3 className="no-margin">{post.title}</h3>
                                        <div className="link arrow-link" onClick={() => this.handleProductAll(post.id)}>Lihat Semua</div>
                                        <div className="shop-header-line">
                                            <div className="shop-header-color"></div>
                                        </div>
                                            {
                                                post.SubCategories.map((data, key) => {
                                                    return (
                                                                <div className="kategori-card-wrapper" key={key}>
                                                                    <div className="product-card w-inline-block" onClick={() => this.handleProduct(data.id)}>
                                                                        <div className="product-card-stok">{this.state.stok} produk tersedia</div>
                                                                        <div className="product-card-image-wrapper"><img className="img-prod" src={data.image} alt="" /></div>
                                                                        <div className="product-card-heading">{data.title}</div>
                                                                        <div className="product-card-selengkapnya">Selengkapnya</div>
                                                                    </div>
                                                                </div>
                                                    )
                                                })
                                            }   
                                            {/* {
                                                this.state.loading? <LoadingSpinner /> : null 
                                            }    */}
                                    </div>
                                )
                            })}
                    </div>
                </div>
        )
    }
}

export default ListHome;