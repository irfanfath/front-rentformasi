import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MDBCollapse } from "mdbreact";
import axios from "axios";
import SignIn from "../Modal/SignIn";
import ButtonLogin from "../Button/ButtonLogin";
import UserNavbar from "./UserNavbar";
import SignUp from "../Modal/SignUp";
import ForgotPass from "../Modal/ForgotPass";

class Header extends Component{
    state = {
        username: "",
        password: "",
        email: "",
        collapseID: "",
        showLoader: false,
        failLogin : false,
        failSignUp : false,
        showLogin: false,
        showForgotPass: false,
        showSignUp: false,
        token : localStorage.getItem("token"),
        nameUser: localStorage.getItem("nameUser"),
        session : localStorage.getItem("session")
      };

      LoaderModal = () => {
        return (
            <div id="posisi-loader">
              <div className="lds-dual-ring"></div>
              <div className="title-loader">Harap Tunggu Beberapa Saat...</div>
            </div>
        )
    }

      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      }

      handlePostLogin = (username, password) => {
        this.setState({
          showLoader: true
        })
        const data = {
          "username" : username,
          "password": password
        }
        axios.post('http://irfanfath.site/Rentformasi_API/Login/masuk', data)
        .then((res) => {
            console.log(res)
          if(res.data.message === "success"){
              localStorage.setItem("token", res.data.data.token)
              // localStorage.setItem("nameUser", res.data.data.firstName)
              localStorage.setItem('session', "active");
              this.setState({token: res.data.data.token, nameUser: res.data.data.firstName, showLogin: false, showLoader: false})
            //   window.location.reload()
          }else{
            this.setState({failLogin: true, showLogin: true, showLoader: false})
          }
        }).catch((err) => {
            console.log(err)
        });      
      }

      handlePostSignUp = (username, email, password) => {
        this.setState({
          showLoader: true
        })
        const data = {
          "username" : username,
          "email" : email,
          "password" : password
        }   
        axios.post('http://irfanfath.site/Rentformasi_API/Login/daftar', data)
        .then((res) => {
            console.log(res)
          if(res.data.status_message === "berhasil medaftarkan akun"){
              this.setState({showSignUp: false, showLogin: false, showLoader: false})
            //   window.location.reload()
          }else{
            this.setState({showSignUp: true, failSignUp: true, showLoader: false})
          }
        }).catch((err) => {
            console.log(err)
        });      
      }

      moveGantiPass = () => {
          this.setState({
              showForgotPass: false
          })
      }

      moveWish = () => {
          window.location.href = "#/wish"
      }

      moveCart = () => {
        window.location.href = "#/keranjang"
    }
      
      moveProfile = () => {
          window.location.href = "#/profile"
      }

      handleLogout = () => {
        //   localStorage.removeItem('token')
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload()

      }

    render(){
        return(
            <div data-collapse="medium" data-animation="default" className="nav-bar w-nav">                
                <div className="nav-main">
                    <div className="wrapper nav-bar-wrapper">
                        <NavLink to="/" className="brand w-nav-brand w--current">
                                Rentformasi
                        </NavLink>
                        <div className="navigation">
                            <nav role="navigation" className="nav-menu w-nav-menu">
                                <NavLink to="/" className="nav-link w-nav-link">FAQ</NavLink>
                                <NavLink to="/bantuan" className="nav-link w-nav-link">Bantuan</NavLink>
                                <NavLink to="/" className="nav-link w-nav-link">Daftar Menjadi Vendor</NavLink>
                            </nav>
                            <div className="menu-button w-nav-button">
                                <div className="w-icon-nav-menu" onClick={this.toggleCollapse("basicCollapse")}></div>
                            </div>
                            {
                                this.state.showLoader ? <this.LoaderModal /> : null
                            }
                            {
                                this.state.token !== null? <UserNavbar nameUser={this.state.nameUser} Logout={this.handleLogout} Wish={this.moveWish} Profile={this.moveProfile} Cart={this.moveCart} /> :  <ButtonLogin klik={()=> this.setState({showLogin: true})} />
                            }
                            {
                                this.state.showLogin ? <SignIn 
                                    pindahPage={this.handlePostLogin}
                                    LupaPass={()=> this.setState({showForgotPass: true, showLogin: false})}
                                    daftar={()=> this.setState({showSignUp: true, showLogin: false})}
                                    onClose={()=> this.setState({showLogin: false})}
                                    failLogin={this.state.failLogin}
                                    /> : null
                            }
                            {
                                this.state.showForgotPass ? <ForgotPass pindahPage={this.moveGantiPass} onClose={()=> this.setState({showForgotPass: false})}/> : null
                            }
                            {
                                this.state.showSignUp ? <SignUp pindahPage={this.handlePostSignUp} onClose={()=> this.setState({showSignUp: false})} failSignUp={this.state.failSignUp}/> : null
                            }
                            
                        </div>
                    </div>
                    <div className="collapse-header">
                        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                            <div className="value-header-collapse">
                                <NavLink className="isi-header-collapse" to="/jasa" onClick={this.toggleCollapse("")}>FAQ</NavLink>
                                <NavLink className="isi-header-collapse" to="/bantuan" onClick={this.toggleCollapse("")}>Bantuan</NavLink>
                                <NavLink className="isi-header-collapse" to="/jasa" onClick={this.toggleCollapse("")}>Daftar Menjadi Vendor</NavLink>
                            </div>                           
                        </MDBCollapse>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;