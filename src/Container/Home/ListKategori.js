import React from 'react';

const ListKategori = (props) => {
    return(
        <div className="product-card-wrapper w-dyn-item" onClick={() => props.goDetail(props.data.id)}>
            <div className="product-card w-inline-block">
                <div className="product-card-image-wrapper">
                    <img src={props.data.gambar} alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" /></div>
                    <h6 className="product-card-heading">{props.data.SubKatTitle}</h6>
            </div>
        </div>
    )
}

export default ListKategori