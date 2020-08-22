import React from 'react';

export default function Lokasi () {
  return (
    // <UncontrolledDropdown>
    //   <DropdownToggle caret>
    //     Lokasi
    //   </DropdownToggle>
    //   <DropdownMenu>
    //     <DropdownItem>Bojongsoang</DropdownItem>
    //     <DropdownItem divider />
    //     <DropdownItem>Dago</DropdownItem>
    //     <DropdownItem divider />
    //     <DropdownItem>Lembang</DropdownItem>
    //     <DropdownItem divider />
    //     <DropdownItem>Ujung Berung</DropdownItem>
    //   </DropdownMenu>
    // </UncontrolledDropdown>
    <>
    <div className="title-fasilitas">Lokasi :</div>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" className="custom-control-input" id="loc1" />
        <label className="custom-control-label" htmlFor="loc1">Bojongsoang</label>
      </div>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" className="custom-control-input" id="loc2" />
        <label className="custom-control-label" htmlFor="loc2">Dago</label>
      </div>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" className="custom-control-input" id="loc3" />
        <label className="custom-control-label" htmlFor="loc3">Lembang</label>
      </div>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" className="custom-control-input" id="loc4" />
        <label className="custom-control-label" htmlFor="loc4">Ujung Berung</label>
      </div>
    </>
  );
}


