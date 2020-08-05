import React, { Component } from "react";
import Urutan from "./Sorting/Urutan";
import Lokasi from "./Sorting/Lokasi";

class Sorting extends Component{
    render(){
        return(
            <div className="shop-categories-wrapper">
                <div className="w-dyn-list">
                    <div className="shop-categories w-dyn-items">
                        <div className="w-dyn-sorting">
                            <Urutan/>
                            <Lokasi/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sorting;