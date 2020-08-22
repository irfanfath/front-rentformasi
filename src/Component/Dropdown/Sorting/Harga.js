import React from 'react';
import InputRange from 'react-input-range';
import "../../../Assets/slider.css"
import "react-input-range/lib/css/index.css"

class Harga extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {
        min: 3,
        max: 50,
      },
    };
  }

  render() {
    return (
      <div className="modal-show">
        <div className="modal-dialog-range modal-dialog-centered">
            <div className="modal-range">
                <div className="container">
                      <form>
                      <div className="title-harga">Range Harga :</div>
                        <div className="section-harga">
                            <div className="form-harga">  
                              <input type="text" className="input-harga subscribe-harga w-harga" value={this.state.value.min} onChange={value => this.setState({ value: value })}/> 
                              <InputRange
                                draggableTrack
                                maxValue={100}
                                minValue={0}
                                onChange={value => this.setState({ value: value })}
                                value={this.state.value} />
                              <input type="text" className="input-harga subscribe-harga w-harga" value={this.state.value.max} onChange={value => this.setState({ value: value })}/> 
                          </div>
                        </div>
                          <div className="text-center mb-3">
                              <button className="button-full w-range">Atur</button>
                              <button className="button-full w-range" onClick={this.props.onClose}>Batal</button>
                          </div>
                      </form>
                </div>
            </div>
        </div>
  </div>
      
    );
  }
}

export default Harga;
