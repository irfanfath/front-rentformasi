import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Lokasi () {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        Lokasi
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>DKI Jakarta</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Jawa Barat</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Jawa Tengah</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Jawa Timur</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}


