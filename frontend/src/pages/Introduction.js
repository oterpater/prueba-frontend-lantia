import React from 'react';
import { faLemon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Page.css';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

class Intro extends React.Component {
  render() {
    const info = {
      title: "INTRODUCCIÓN A LOS CONCEPTOS",
      module: "Módulo 01",
      moduleName: "Vigilancia Tecnológica",
    };

    const pages = {
      currentPage: 1,
      previousPage: "/",
      nextPage: "/inteligencia"
    };

    return (
      <div className="page">
        <Header module={info.module} title={info.title} moduleName={info.moduleName}/>
        <Aside />

        <main className="main">
          <div className="content--intro">
            <div className="text--intro">
              <p>
                En el contexto empresarial suele usarse el término vigilancia tecnológica e inteligencia competitiva
                de forma intercambiada, y por esto suelen aceptarse ambos términos.
              </p>
              <p>
                Ambos provesos manejan metodologías y etapas similares, y se diferencian
                pricipalmente su alcance de búsqueda, y la puesta
                en valor de la información: procurando principalmente en el caso de inteligencia, 
                que se contextualice la información a la organización que la realiza. En adelante
                cuando se use el término <strong>Inteligencia Competitiva</strong>, entenderemos que la vigilancia
                tecnológica está contenida dentro de su definición.
              </p>
              <p>
                Para mayor entendimiento sobre sus diferencias, podemos ver las siguientes tablas:
              </p>
            </div>

            <div className="tables--intro">
              <div className="card--intro">
                <div className="header--intro1">
                  <img
                    className="header__icon"
                    src="assets/icon01.png"
                    alt="looking"
                  />
                  <p className="header__title">Proceso de Vigilancia</p>
                </div>
                <div className="list__container1">
                  <div className="item--intro">
                      <FontAwesomeIcon icon={faLemon} className="faLemon--intro1"/>
                      <p>
                        Más centrado en captar información
                      </p>
                  </div>
                  <div className="item--intro">
                      <FontAwesomeIcon icon={faLemon} className="faLemon--intro1"/>
                      <p>
                        Más centrado en explotar fuentes
                      </p>
                  </div>
                  <div className="item--intro">
                      <FontAwesomeIcon icon={faLemon} className="faLemon--intro1"/>
                      <p>
                        Carácter más operativo
                      </p>
                  </div>
                  <div className="item--intro">
                      <FontAwesomeIcon icon={faLemon} className="faLemon--intro1"/>
                      <p>
                        Aportación de valor más baja
                      </p>
                  </div>
                  <div className="item--intro">
                      <FontAwesomeIcon icon={faLemon} className="faLemon--intro1"/>
                      <p>
                        Más énfasis en la difusión rápida
                      </p>
                  </div>
                  <div className="item--intro">
                      <FontAwesomeIcon icon={faLemon} className="faLemon--intro1"/>
                      <p>
                        Más centrado en generar alertas
                      </p>
                  </div>
                </div>
              </div>

              <div className="card--intro">
                <div className="header--intro2">
                  <img
                    className="header__icon"
                    src="assets/icon02.png"
                    alt="looking"
                  />
                  <p className="header__title">Proceso de Inteligencia</p>
                </div>
                <div className="list__container2">
                  <div className="item--intro">
                      <FontAwesomeIcon icon={faLemon} className="faLemon--intro2"/>
                      <p>
                        Más centrado en analizar la información
                      </p>
                  </div>
                  <div className="item--intro">
                      <FontAwesomeIcon icon={faLemon} className="faLemon--intro2"/>
                      <p>
                        Más centrado en recomendar acciones
                      </p>
                  </div>
                  <div className="item--intro">
                      <FontAwesomeIcon icon={faLemon} className="faLemon--intro2"/>
                      <p>
                        Carácter más estratégico
                      </p>
                  </div>
                  <div className="item--intro">
                      <FontAwesomeIcon icon={faLemon} className="faLemon--intro2"/>
                      <p>
                        Aportación de valor más alta
                      </p>
                  </div>
                  <div className="item--intro">
                      <FontAwesomeIcon icon={faLemon} className="faLemon--intro2"/>
                      <p>
                        Más énfasis en la comunicación efectiva
                      </p>
                  </div>
                  <div className="item--intro">
                      <FontAwesomeIcon icon={faLemon} className="faLemon--intro2"/>
                      <p>
                        Más centrado en generar informes
                      </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="caption--intro">
              <p>
                Tabla: Paralelo entre el proceso de vigilancia tecnológica y de inteligencia competitiva.
                Fuente: (AENOR, 2018)
              </p>
            </div>
          </div>
        </main>

        <Footer pages={pages}/>
      </div>
    );
  }
}

export default Intro;