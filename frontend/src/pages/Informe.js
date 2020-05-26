import React from 'react';

import './Page.css';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

function Actividad1() {
  const info = {
    title: "INFORME DE RESULTADOS (RADAR)",
    module: "Módulo 01",
    moduleName: "Vigilancia Tecnológica",
  };

  const pages = {
    currentPage: 3,
    previousPage: "/inteligencia",
    nextPage: "/proceso"
  };

  return (
    <div className="page">
      <Header module={info.module} title={info.title} moduleName={info.moduleName}/>
      <Aside />

      <main className="main">
        <div className="content--activity">
          <p>
            El <strong>resultado</strong> de cada eje, es el promedio de la sumatoria de todas
            las preguntas de ese respectivo bloque (propósito, herramientas, procesos, estructura).
            Rango de evaluación: entre 1 y 4, siendo 1 el menor y 4 la mayor puntuación.          </p>
        </div>
      </main>

      <Footer pages={pages}/>
    </div>
  );
}

export default Actividad1;