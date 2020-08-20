import React, { Component } from "react";
import Kota from "./Sorting/Kota";

class Area extends Component{
    render(){
        return(
            <div className="shop-categories-wrapper">
                <div className="w-dyn-list">
                    <div className="shop-categories w-dyn-items">
                        <div className="w-dyn-sorting">
                            <Kota/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Area;