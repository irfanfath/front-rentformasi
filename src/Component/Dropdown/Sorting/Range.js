import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Harga from './Harga';

export default function Range () {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        Urutkan Berdasarkan
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem><Harga/></DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}


