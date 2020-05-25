import React from 'react';
import './Footer.css';
import Pagination from './Pagination';

function Footer( {pages} ) {
  return (
    <div className="footer">
      <div>
        <Pagination pages={pages}/>
      </div>
    </div>
  );
}

export default Footer;