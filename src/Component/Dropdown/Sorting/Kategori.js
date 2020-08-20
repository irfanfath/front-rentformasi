import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Kategori () {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        Kategori
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Apartemen</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Hotel</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Bungalow</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Villa</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}


