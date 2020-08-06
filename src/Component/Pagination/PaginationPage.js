import React from "react";
import "./page.css"; 

const PaginationPage = () => {
  return (
    <ul className="pagination modal-4">
  <li><a href="#" className="prev">
    <i className="fa fa-chevron-left"></i>
      Previous
    </a>
  </li>
  <li><a href="#">1</a></li>
  <li> <a href="#">2</a></li>
  <li> <a href="#">3</a></li>
  <li> <a href="#">4</a></li>
  <li> <a href="#" className="active">5</a></li>
  <li> <a href="#">6</a></li>
  <li> <a href="#">7</a></li>
  <li><a href="#" className="next"> Next 
    <i className="fa fa-chevron-right"></i>
  </a></li>
</ul>
    )
}

export default PaginationPage;