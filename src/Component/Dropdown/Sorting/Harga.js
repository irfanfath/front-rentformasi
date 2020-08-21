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
        max: 7,
      },
    };
  }

  render() {
    return (
      <>
      <div className="title-harga">Range Harga :</div>
    <div className="section-harga">
      <div className="form-harga">  
        <input type="text" className="input-harga subscribe-harga w-harga" value={this.state.value.min} onChange={value => this.setState({ value: value })} id="nama_barang1" /> 
        <InputRange
          draggableTrack
          maxValue={10}
          minValue={0}
          onChange={value => this.setState({ value: value })}
          onChangeComplete={value => console.log(value)}
          value={this.state.value} />
        <input type="text" className="input-harga subscribe-harga w-harga" value={this.state.value.max} onChange={value => this.setState({ value: value })} id="nama_barang1" /> 
      </div>
      </div>
      </>
    );
  }
}

export default Harga;
