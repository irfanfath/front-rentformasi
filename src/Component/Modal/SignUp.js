import React, { Component } from "react";
import { MDBInput } from 'mdbreact';
import ButtonSocmed from "../Button/ButtonSocmed";

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        // ulangipassword: ""
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
      };

    render() {
        return (
        <div className="modal-show">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="container">
                        <div className="card-body mx-4">
                            <div className="text-login">
                                <div className="close-modal" onClick={this.props.onClose}><div className="fa fa-times-circle"></div></div>
                                <h2 className="dark-grey-text mb-5"><strong>Daftar Akun</strong></h2>
                            </div>
                            <form
                             className="needs-validation"
                             onSubmit={this.submitHandler}
                             noValidate
                             >
                            <MDBInput label="Email" icon="at" type="text" onInput={(e) => this.setState({email: e.target.value})} required>
                                <div className="invalid-feedback">Email wajib diisi</div>
                            </MDBInput>
                            <MDBInput label="Username" icon="user" type="text" onInput={(e) => this.setState({username: e.target.value})} required>
                                <div className="invalid-feedback">username wajib diisi</div>
                            </MDBInput>
                            <MDBInput autoComplete="on" label="Password" icon="lock" type="password" onInput={(e) => this.setState({password: e.target.value})} required>
                                <div className="invalid-feedback">username wajib diisi</div>
                            </MDBInput>
                            {/* <MDBInput label="Ulangi Password" icon="lock" type="password" onInput={(e) => this.setState({ulangipassword: e.target.value})}/> */}
                            {this.props.failSignUp? 
                                (<div className="font-small blue-text d-flex justify-content-end wrong-login">
                                        Silahkan lengkapi data dengan benar
                                </div>) : null}
                            <div className="text-center mb-3"><button className="button-full w-full" onClick={() => this.props.pindahPage(this.state.username, this.state.email, this.state.password)}>Sign Up</button></div>
                            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign Up with:</p>                          
                            </form>
                            <div className="row my-3 d-flex justify-content-center">
                                <ButtonSocmed sosmed="fab fa-facebook-f blue-text text-center"/>
                                <ButtonSocmed sosmed="fab fa-twitter blue-text"/>
                                <ButtonSocmed sosmed="fab fa-google-plus-g blue-text"/>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
};

export default SignUp;