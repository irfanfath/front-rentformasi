import React from "react";

const Produk = (props) => {
  return (
        <div className="product-card-wrapper w-dyn-item">
            <div className="product-card w-inline-block">
                <div className="product-card-image-wrapper"><img src={props.data.gambar} alt="" /></div>
                <div className="product-card-heading">{props.data.TitleProduct}</div>
                <div className="product-card-price">Rp. {props.data.HargaProduct}</div>
            </div>
        </div>
  );
}

export default Produk;