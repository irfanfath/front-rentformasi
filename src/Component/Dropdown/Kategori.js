import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Kategori () {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        Kategori
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Kendaraan</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Alat Berat</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Elektronik</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Olahraga</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}


