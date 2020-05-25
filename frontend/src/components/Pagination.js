import React from 'react';
import { 
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleRight,
  faAngleLeft,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import './Pagination.css';

function Pagination( {pages} ) {
  return (
    <div>
      <div>
        <Link to="/">
          <FontAwesomeIcon className="icon--pagination" icon={faAngleDoubleLeft} size="lg"/>
        </Link>
        <Link to={pages.previousPage}>
          <FontAwesomeIcon className="icon--pagination" icon={faAngleLeft} size="lg"/>
        </Link>
        <Link to="/">
          <FontAwesomeIcon className="icon--pagination" icon={faHome} size="lg"/>
        </Link>
        <Link to={pages.nextPage}>
          <FontAwesomeIcon className="icon--pagination" icon={faAngleRight} size="lg"/>
        </Link>
        <Link to="/proceso">
          <FontAwesomeIcon className="icon--pagination" icon={faAngleDoubleRight} size="lg"/>
        </Link>
      </div>
      <div className="pagination">
        <p>0{pages.currentPage}/04</p>
      </div>
    </div>
  );
}

export default Pagination;