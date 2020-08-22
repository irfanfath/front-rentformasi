import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownToggle } from 'reactstrap';
import Harga from './Harga';

class Range extends Component {
  state = {
    showRange: false
  }

  render () {
    return (
      <UncontrolledDropdown>
        <DropdownToggle caret onClick={()=> this.setState({showRange: true})}>
          Range Harga
        </DropdownToggle>
        { this.state.showRange ? <Harga onClose={()=> this.setState({showRange: false})}/> : null }
      </UncontrolledDropdown>
      
    )
  }
}

export default Range;


