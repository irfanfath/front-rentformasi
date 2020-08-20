import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Kota () {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        Pilih Kota
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Bali</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Bandung</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Jakarta</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Yogyakarta</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}


