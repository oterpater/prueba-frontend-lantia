import React from 'react';
import { faLemon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'react-bootstrap';

import './Page.css';
import './Proceso.css';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

function Proceso() {
  const info = {
    title: "PROCESO DE INTELIGENCIA COMPETITIVA",
    module: "Módulo 01",
    moduleName: "Vigilancia Tecnológica",
  };

  return (
    <div className="page">
      <Header module={info.module} title={info.title} moduleName={info.moduleName}/>
      <Aside />

      <main className="main">
        <div className="content">
          <div className="text__container">
            <div className="text">
              <p>
                El proceso de inteligencia competitiva permite apoyar el desarrollo a nivel
                estratégico, táctico y operativo, de acciones informadas. Captura la información
                que producen grupos de investigación, empresas, gobierno y consumidores, para proveer,
                luego de su análisis, señales y conclusiones para:
              </p>
            </div>

            <div className="list">
              <div className="item">
                <FontAwesomeIcon icon={faLemon} className="faLemon"/>
                <p>
                  Desarrollar capacidades de innovación en la organización a través de proyectos.
                </p>
              </div>
              <div className="item">
                <FontAwesomeIcon icon={faLemon} className="faLemon"/>
                <p>
                  Describir el entorno competitivo para comprender los riesgos y oportunidades existentes.
                </p>
              </div>
              <div className="item">
                <FontAwesomeIcon icon={faLemon} className="faLemon"/>
                <p>
                  Ajustar la estrategia de acuerdo con el entorno, la competencia y la tecnología.
                </p>
              </div>
              <div className="item">
                <FontAwesomeIcon icon={faLemon} className="faLemon"/>
                <p>
                  Redefinir los supuestos del negocio al identificar cambios que retan la estrategia actual.
                </p>
              </div>
            </div>
          </div>

          <div className="icons__container">
            <div className="containers">
              <div className="container">
                <img
                  className="icon"
                  src="/assets/ico1.png"
                  alt="ico1"
                />
                <p>
                  Grupos de investigación
                </p>
              </div>
              <div className="container">
                <img
                  src="/assets/ico1.png"
                  alt="ico1"
                />
                <p>
                  Grupos de investigación
                </p>
              </div>
              <div className="container">
                <img
                  src="/assets/ico1.png"
                  alt="ico1"
                />
                <p>
                  Grupos de investigación
                </p>
              </div>
              <div className="container">
                <img
                  src="/assets/ico1.png"
                  alt="ico1"
                />
                <p>
                  Grupos de investigación
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Proceso;