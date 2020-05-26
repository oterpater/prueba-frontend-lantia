import React from 'react';
import { faLemon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Page.css';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

function Actividad1() {
  const info = {
    title: "ACTIVIDAD PRÁTICA 1",
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
          <div className="image--activity">
            <img
              className="img--activity"
              src="/assets/activity.png"
              alt="activity"
            />
          </div>

          <div className="text--activity">
            <p>
              A continuación lo invitamos a diligenciar el siguiente <strong>autodiagnóstico,</strong>
              que consta de cuatro bloques de preguntas, eligiendo una respuesta para cada pregunta, teniendo
              en cuenta una escala de puntación de 1 a 4, siendo uno <strong>NUNCA</strong> y cuatro <strong>SIEMPRE.</strong>
            </p>
            <p>
              Importante: si el curso lo están realizando varias personas de la misma organización,
              los resultados generados corresponden a las respuestas que diligencie usted por lo cual
              recomendamos alguna de estas dos opciones:
            </p>
          </div>

          <div className="list--activity">
            <div className="item--activity">
              <FontAwesomeIcon icon={faLemon} className="faLemon"/>
              <p>
                Concertar previamente las respuestas a dar en cada punto del diagnóstico.
              </p>
            </div>
            <div className="item--activity">
              <FontAwesomeIcon icon={faLemon} className="faLemon"/>
              <p>
                Diligenciar individualmente y luego comparar los resultados para reconocer un 
                diagnóstico unificado.
              </p>
            </div>
          </div>

          <Link to="/preguntas">
            <Button variant="secondary" className="button--activity">INICIAR</Button>
          </Link>
        </div>
      </main>

      <Footer pages={pages}/>
    </div>
  );
}

export default Actividad1;