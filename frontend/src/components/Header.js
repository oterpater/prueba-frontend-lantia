import React from 'react';
import './Header.css';

function Header( info ) {
  return (
    <div className="header">
      <div className="module">
        <p className="module__text">{info.moduleName}</p>
        <p className="module__text">{info.module}</p>
      </div>
      <div className="title">
        <p className="title__text">{info.title}</p>
      </div>
      <div className="help">
        <img 
          src="/assets/04.png"
          alt="help"
        />
      </div>
    </div>
  );
}

export default Header;