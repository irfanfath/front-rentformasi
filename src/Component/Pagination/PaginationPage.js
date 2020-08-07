import React from "react";
import "./page.css"; 

const PaginationPage = () => {
  return (
    <div className="pagination-box">
      <ul className="pagination">
        <div className="pagination-num">
          <div className="page-arah">&laquo;</div>
          <div className="page-num active">1</div>
          <div className="page-num">2</div>
          <div className="page-num">3</div>
          <div className="page-num">4</div>
          <div className="page-limit">...</div>
          <div className="page-num">8</div>
          <div className="page-arah">&raquo;</div>
        </div>
      </ul>
    </div>
    )
}

export default PaginationPage;