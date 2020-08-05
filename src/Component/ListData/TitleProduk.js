import React from "react";

const TitleProduk = (props) => {
  return (
    <div className="shop-header">
        <h3 className="no-margin">{props.title}</h3>
        <div className="link arrow-link">Lihat Semua</div>
        <div className="shop-header-line">
            <div className="shop-header-color"></div>
        </div>
    </div>
  );
}

export default TitleProduk;