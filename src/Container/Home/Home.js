import React, { Component } from "react";
import MainProduk from "../../Component/ListData/MainProduk";
import ListHome from "./ListHome";

class Home extends Component{
    render(){
        return(
            <div className="margin-home-box">
                <div className="section-produk">
                    <div className="wrapper">
                        <div className="home-categories">
                            <MainProduk move="/barang" homeCat="home-category-card" gambar="https://cdn.pixabay.com/photo/2019/09/04/11/48/men-4451373_960_720.png" clsImg="home-category-image-1" clsTitle="home-category-info-1" title="Sewa Barang" />
                            <MainProduk move="/jasa" homeCat="home-category-card red" gambar="https://www.pngkey.com/png/full/165-1654001_you-can-only-ask-a-co-worker-out.png" clsImg="home-category-image-2" clsTitle="home-category-info-2" title="Sewa Jasa" />
                        </div>
                    </div>
                </div>
                <ListHome/>
                <div className="section haze">
                    <div className="wrapper">
                        <div className="intro">
                            <div className="title">official vendor</div>
                            <h2 className="no-margin-bottom">Vendor Kami</h2>
                        </div>
                        <div className="instagram">
                            <div className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg" alt="" className="full-width" /></div>
                            <div className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg" alt="" className="full-width" /></div>
                            <div className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg" alt="" className="full-width" /></div>
                            <div className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg" alt="" className="full-width" /></div>
                            <div className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg" alt="" className="full-width" /></div>
                            <div className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg" alt="" className="full-width" /></div>
                        </div>
                        <div className="button w-button">Lihat Lainnya</div>
                    </div>
                </div>
            </div>
          
        )
    }
}

export default Home;