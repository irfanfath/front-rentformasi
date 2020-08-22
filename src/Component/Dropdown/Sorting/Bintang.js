import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Bintang () {
    var bintang = "★"
        const divStyle = {
            color: "gold",
            fontSize: "20px"
        }
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        Rating
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem><div style={divStyle}>{bintang}&nbsp;1</div></DropdownItem>
        <DropdownItem divider />
        <DropdownItem><div style={divStyle}>{bintang}{bintang}&nbsp;2</div></DropdownItem>
        <DropdownItem divider />
        <DropdownItem><div style={divStyle}>{bintang}{bintang}{bintang}&nbsp;3</div></DropdownItem>
        <DropdownItem divider />
        <DropdownItem><div style={divStyle}>{bintang}{bintang}{bintang}{bintang}&nbsp;4</div></DropdownItem>
        <DropdownItem divider />
        <DropdownItem><div style={divStyle}>{bintang}{bintang}{bintang}{bintang}{bintang}&nbsp;5</div></DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}


