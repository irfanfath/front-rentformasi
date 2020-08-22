import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Urutan () {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        Urutkan Berdasarkan
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Harga Terendah</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Harga Tertinggi</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Paling Banyak Disewa</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Rating Terbaik</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}


