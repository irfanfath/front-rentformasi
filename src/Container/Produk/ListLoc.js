import React, { Component } from "react";
import axios from 'axios';
import Cari from "../../Component/Forms/Cari";
import Sorting from "../../Component/Dropdown/Sorting";
import maps from "../../Component/Images/maps.png";
import marker from "../../Component/Images/marker.png";

class ListLoc extends Component{
    render(){
        // var prod = this.state.post;
        // var countprod = prod.length;
        
        return(
        <div className="section-produk">
            <Cari/>
                <div className="section no-padding-top">
                    <div className="wrapper">
                                <div className="shop-header">
                                    <div>
                                        <h3 className="no-margin">Jelajahi Berbagai Tempat </h3>
                                    </div>
                                    <Sorting/>
                                    <div className="shop-header-line">
                                        <div className="shop-header-color"></div>
                                    </div> 
                                    <img className="img-maps" src={maps} alt="" />
                                    <div className="desc-maps">
                                        <div className="title">Silahkan Pilih Lokasi Yang Anda Inginkan</div>
                                        <ul className="title-maps"><img className="img-marker" src={marker} alt="" />Bojonagara Area
                                            <ol className="subtitle-maps">dago - sadangserang - dago atas</ol>
                                        </ul>
                                        <ul className="title-maps"><img className="img-marker" src={marker} alt="" />Cibeunying Area
                                            <ol className="subtitle-maps">dago - sadangserang - dago atas</ol>
                                        </ul>  
                                        <ul className="title-maps"><img className="img-marker" src={marker} alt="" />Bojongsoang Area
                                            <ol className="subtitle-maps">dago - sadangserang - dago atas</ol>
                                        </ul>  
                                        <ul className="title-maps"><img className="img-marker" src={marker} alt="" />Ujungberung Area
                                            <ol className="subtitle-maps">dago - sadangserang - dago atas</ol>
                                        </ul>  
                                        <ul className="title-maps"><img className="img-marker" src={marker} alt="" />Lembang Area
                                            <ol className="subtitle-maps">dago - sadangserang - dago atas</ol>
                                        </ul>  
                                    </div>

                                </div>
                    </div>
                </div>   
        </div>
        )
    }
}

export default ListLoc;