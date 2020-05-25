import React from 'react';
import { Button } from 'react-bootstrap';

import './Page.css';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Survey from '../components/Encuesta';

function Preguntas() {
  const [ company, setCompany ] = React.useState("");

  const info = {
      title: "PREGUNTAS DIAGNÓSTICO",
      module: "Módulo 01",
      moduleName: "Vigilancia Tecnológica",
    };

  const pages = {
    currentPage: 3,
    previousPage: "/inteligencia",
    nextPage: "/proceso"
  };

  const handleChange = e => {
    const { value } = e.target;
    setCompany(value);
  };

  return (
    <div className="page">
      <Header module={info.module} title={info.title} moduleName={info.moduleName}/>
      <Aside />

      <main className="main">
        <div className="content--questions">
          <p>
            Bloques de preguntas que se convierten en cuatro ejes: <strong>propósito, herramienta, procesos, estructura.</strong>
          </p>
          <form>
            <label htmlFor="name" className="label">
              Nombre de la empresa:
              <input 
                type="text"
                name="name"
                id="name"
                value={company}
                onChange={handleChange}
                className="input"
              />
            </label>
          </form>  
          <Survey/>        
        </div>
      </main>

      <Footer pages={pages}/>
    </div>
  );
}

export default Preguntas;