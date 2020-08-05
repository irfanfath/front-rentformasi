import React, { Component } from "react";
import { MDBInput } from 'mdbreact';

class ForgotPass extends Component {
    state = {
        email: "",
        nomortelepon: ""
    }

    render() {
        return (
        <div className="modal-show">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="container">
                        <div className="card-body mx-4">
                            <div className="text-login">
                                <div className="close-modal" onClick={this.props.onClose}><div className="fa fa-times-circle"></div></div>
                                <h2 className="dark-grey-text mb-5"><strong>Ganti Password</strong></h2>
                            </div>
                            <MDBInput label="Email" icon="at" type="email" onInput={(e) => this.setState({email: e.target.value})}/>
                            <MDBInput label="Nomor Telepon" icon="phone-alt" type="number" onInput={(e) => this.setState({nomortelepon: e.target.value})}/>
                            <div className="text-center mb-3"><button className="button-full w-full" onClick={this.props.pindahPage}>Konfirmasi</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
};

export default ForgotPass;