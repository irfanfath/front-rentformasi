import React, { Component } from "react";
import Kategori from "../Dropdown/Sorting/Kategori";

class Cari extends Component{
    state = {
        cari: ""
    }

    handlecek = () => {
        console.log(this.state.cari)
    }
    
    render(){
        return(
        <div className="margin-cari">
                <div className="subscribe-cari">
                            <Kategori/>
                            <input type="text" className="input-cari subscribe-input w-input" placeholder="Kata Kunci Pencarian" id="nama_barang1" onChange={(e) => this.setState({cari: e.target.value})} />
                            <i className="fa fa-search prefix" onClick={this.handlecek} /> 
                </div>
        </div>
        )
    }
}

export default Cari;