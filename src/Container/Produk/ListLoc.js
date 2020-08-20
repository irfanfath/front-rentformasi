import React, { Component } from "react";
import Cari from "../../Component/Forms/Cari";
import Area from "../../Component/Dropdown/Area";
import marker from "../../Component/Images/marker.png";

class ListLoc extends Component{
    render(){        
        return(
        <div className="section-produk">
            <Cari/>
                <div className="section no-padding-top">
                    <div className="wrapper">
                                <div className="shop-header">
                                    <div>
                                        <h3 className="no-margin">Jelajahi Berbagai Tempat </h3>
                                    </div>
                                    <Area/>
                                    <div className="shop-header-line">
                                        <div className="shop-header-color"></div>
                                    </div> 
                                    <img className="img-maps" src="https://i.pinimg.com/originals/b3/65/7d/b3657dba51faa25f258815c401ef32cf.jpg" alt="" />
                                    <div className="desc-maps">
                                        <div className="title">Silahkan Pilih Lokasi Yang Anda Inginkan</div>
                                        <ul className="title-maps"><img className="img-marker" src={marker} alt="" />Seluruh Area Bandung
                                            <ol className="subtitle-maps">Mencakup Seluruh Area Kota Bandung</ol>
                                        </ul>
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