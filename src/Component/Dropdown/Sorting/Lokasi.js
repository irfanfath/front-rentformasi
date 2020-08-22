import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Lokasi () {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        Lokasi
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Bojongsoang</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Dago</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Lembang</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Ujung Berung</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}


