import React from 'react';

export default function Urutan () {
  return (
    // <UncontrolledDropdown>
    //   <DropdownToggle caret>
    //     Urutkan Berdasarkan
    //   </DropdownToggle>
    //   <DropdownMenu>
    //     <DropdownItem>Harga Terendah</DropdownItem>
    //     <DropdownItem divider />
    //     <DropdownItem>Harga Tertinggi</DropdownItem>
    //     <DropdownItem divider />
    //     <DropdownItem>Paling Banyak Disewa</DropdownItem>
    //     <DropdownItem divider />
    //     <DropdownItem>Rating Terbaik</DropdownItem>
    //   </DropdownMenu>
    // </UncontrolledDropdown>
    <>
    <div className="title-fasilitas">Urutkan Berdasarkan :</div>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" className="custom-control-input" id="sort1" />
        <label className="custom-control-label" htmlFor="sort1">Harga Terendah</label>
      </div>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" className="custom-control-input" id="sort2" />
        <label className="custom-control-label" htmlFor="sort2">Harga Tertinggi</label>
      </div>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" className="custom-control-input" id="sort3" />
        <label className="custom-control-label" htmlFor="sort3">Paling Banyak Disewa</label>
      </div>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" className="custom-control-input" id="sort4" />
        <label className="custom-control-label" htmlFor="sort4">Rating Terbaik</label>
      </div>
    </>
  );
}


