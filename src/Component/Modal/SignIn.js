import React from "react";
import { MDBInput } from "mdbreact";
import ButtonSocmed from "../Button/ButtonSocmed";


class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
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
                            <h2 className="dark-grey-text mb-5"><strong>Sign in</strong></h2>
                        </div>
                        <form
                         className="needs-validation"
                         onSubmit={this.submitHandler}
                         noValidate
                        >
                            <MDBInput label="Username" icon="user" onInput={(e) => this.setState({username: e.target.value})} type="text" required>
                                <div className="invalid-feedback">username wajib diisi</div>
                            </MDBInput>
                            <MDBInput label="Password" icon="lock" autoComplete="on" onInput={(e) => this.setState({password: e.target.value})} type="password" required>
                                <div className="invalid-feedback">password wajib diisi</div>
                            </MDBInput>
                            {this.props.failLogin? 
                            (<div className="font-small blue-text d-flex justify-content-end wrong-login">
                                Username atau password anda salah
                            </div>) : null}
                            <div className="font-small blue-text d-flex justify-content-end pb-3">
                                Lupa
                                <div className="modal-signin-green" onClick={this.props.LupaPass}>&nbsp;Password?</div>
                            </div>
                            <div className="text-center mb-3">
                                <button className="button-full w-full" onClick={() => this.props.pindahPage(this.state.username, this.state.password)} >Sign In</button>
                            </div>
                            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign in with:</p>
                            <div className="row my-3 d-flex justify-content-center">
                                <ButtonSocmed sosmed="fab fa-facebook-f blue-text text-center"/>
                                <ButtonSocmed sosmed="fab fa-twitter blue-text"/>
                                <ButtonSocmed sosmed="fab fa-google-plus-g blue-text"/>
                            </div>                         
                        </form>
                      </div>
                      <div className="modal-footer">
                            <div className="modal-signin">
                                Belum Punya Akun?
                                <div className="modal-signin-green" onClick={this.props.daftar}>&nbsp;Daftar Akun</div>
                            </div>
                        </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default SignIn;