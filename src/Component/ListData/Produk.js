import React from "react";

const Produk = (props) => {
  return (
        <div className="product-card-wrapper w-dyn-item" onClick={() => props.goDetail(props.data.IdKategori)}>
            <div className="product-card w-inline-block">
                <div className="product-card-image-wrapper"><img src={props.data.gambar} alt="" /></div>
                <div className="product-card-heading">{props.data.TitleKategori}</div>
                <div className="product-card-price">Selengkapnya</div>
            </div>
        </div>
  );
}

export default Produk;