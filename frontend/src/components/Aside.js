import React from 'react';
import { faAlignJustify, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Aside.css';

function Aside( info ) {
  return (
    <div className="aside">
      <div className="background">
        <div className="container__blue1">
          <img
            className="brand"
            src="/assets/logo-menu.png"
            alt="imagen"
          />
          <div className="menu">
            <FontAwesomeIcon icon={faAlignJustify} size="3x" className="faAlignJustify"/>
            <p>Menú</p>
          </div>
        </div>
        <div className="container__blue2">
          <div className="array">
            <FontAwesomeIcon icon={faCaretRight} size="2x" className="faCaretRight"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;