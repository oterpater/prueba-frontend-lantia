import React from 'react';

import './Page.css';
import './InteligenciaA.css';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

function InteligenciaA() {
  const info = {
    title: "INTELIGENCIA APLICADA A LAS ETAPAS DE DESARROLLO DE PRODUCTOS",
    module: "Módulo 01",
    moduleName: "Vigilancia Tecnológica",
  };

  return (
    <div className="page">
      <Header module={info.module} title={info.title} moduleName={info.moduleName}/>
      <Aside />

      <main className="main">
        <div className="content">
          <div className="text">
            <p>
              Las incertidumbres sobre los atributos del producto a desarrollar se abordan a través
              de consecutivos ejercicios de vigilancia e inteligencia, que alimentan a los equipos
              encargados con ideas sobre <strong>tecnologías, atributos, segmentos, canales, tendencias, entre otras.</strong>
            </p>
            <p>
              Ya que todas las compañías desarrollan productos o servivios, de manera permanente toman
              información del entorno, ya sea de manera <strong>formal</strong> o <strong>informal.</strong>
            </p>
          </div>

          <div className="image">
            <img
              className="img"
              src="/assets/block.png"
              alt="imagen"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default InteligenciaA;