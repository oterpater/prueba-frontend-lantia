import React from 'react';
import { faLemon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'react-bootstrap';

import './Page.css';
import './Preguntas.css';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

function Preguntas() {
  const info = {
    title: "PREGUNTAS DIAGNÓSTICO",
    module: "Módulo 01",
    moduleName: "Vigilancia Tecnológica",
  };

  return (
    <div className="page">
      <Header module={info.module} title={info.title} moduleName={info.moduleName}/>
      <Aside />

      <main className="main">
        <div className="content">
        
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Preguntas;