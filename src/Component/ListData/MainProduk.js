import React from "react";
import { NavLink } from "react-router-dom";

const MainProduk = (props) => {
  return (
    <NavLink to={props.move} className={props.homeCat}>
        <img src={props.gambar} sizes="(max-width: 479px) 100vw, (max-width: 991px) 176px, 220px" alt="" className={props.clsImg} />
        <div className={props.clsTitle}>
            <h3>{props.title}</h3>
            <div className="link-white arrow-link">Lihat Semua</div>
        </div>
    </NavLink>


  );
}

export default MainProduk;