import React from 'react';
import { Card } from 'react-bootstrap';

import './Page.css';
import './Introduction.css';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

function Intro() {
  const info = {
    title: "INTRODUCCIÓN A LOS CONCEPTOS",
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
              En el contexto empresarial suele usarse el término vigilancia tecnológica e inteligencia competitiva
              de forma intercambiada, y por esto suelen aceptarse ambos términos.
            </p>
            <p>
              Ambos provesos manejan metodologías y etapas similares, y se diferencian
              pricipalmente su alcance de búsqueda, y la puesta
              en valor de la información: procurando principalmente en el caso de inteligencia, 
              que se contextualice la información a la organización que la realiza. En adelante
              cuando se use el término Inteligencia Competitiva, entenderemos que la vigilancia
              tecnológica está contenida dentro de su definición.
            </p>
            <p>
              Para mayor entendimiento sobre sus diferencias, podemos ver las siguientes tablas:
            </p>
          </div>

          <div className="tables">
            <Card className="card">
              <Card.Header className="classHeader1">
                <Card.Title>Proceso de Vigilancia</Card.Title>                
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="card">
              <Card.Header>
                <Card.Title>Proceso de Inteligencia</Card.Title>                
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="caption">
            <p>
              Tabla: Paralelo entre el proceso de vigilancia tecnológica y de inteligencia competitiva.
              Fuente: (AENOR, 2018)
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Intro;