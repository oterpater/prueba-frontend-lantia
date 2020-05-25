import React from 'react';
import { faLemon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from '@material-ui/core/Grid';

import './Page.css';
import './Proceso.css';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

class Proceso extends React.Component {
  render() {
    const info = {
      title: "INTRODUCCIÓN A LOS CONCEPTOS",
      module: "Módulo 01",
      moduleName: "Vigilancia Tecnológica",
    };

    const pages = {
      currentPage: 4,
      previousPage: "/actividad",
      nextPage: "/proceso"
    };

    return (
      <div className="page">
        <Header module={info.module} title={info.title} moduleName={info.moduleName}/>
        <Aside />

        <main className="main">
          <div className="content">
            <div className="text__container">
              <p className="description">
                El proceso de inteligencia competitiva permite apoyar el desarrollo a nivel
                estratégico, táctico y operativo, de acciones informadas. Captura la información
                que producen grupos de investigación, empresas, gobierno y consumidores, para proveer,
                luego de su análisis, señales y conclusiones para:
              </p>

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

            <div className="figures__container">
              <div>
                <Grid container spacing={1}>
                  <Grid item xs={6} sm={3}>
                    <div className="container1">
                      <img
                        className="icon"
                        src="/assets/ico1.png"
                        alt="ico1"
                      />
                      <p>
                        Grupos de investigación
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <div className="container1">
                      <img
                        className="icon"
                        src="/assets/ico2.png"
                        alt="ico1"
                      />
                      <p>
                        Empresas
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <div className="container1">
                      <img
                        className="icon"
                        src="/assets/ico3.png"
                        alt="ico1"
                      />
                      <p>
                        Instituciones públicas
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <div className="container1">
                      <img
                        className="icon"
                        src="/assets/ico4.png"
                        alt="ico1"
                      />
                      <p>
                        Consumidores
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <div className="container2">
                      <p>Patentes</p>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <div className="container2">
                      <p>Expertos</p>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <div className="container2">
                      <p>Comercial</p>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <div className="container2">
                      <p>Artículos</p>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <div className="container2">
                      <p>Normatividad</p>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <div className="container2">
                      <p>Indicadores</p>
                    </div>
                  </Grid>
                  <Grid className="circle1" item xs={12} sm={6}>
                    <div className="quarter1">
                      <p>Apoyar el desarrollo de las capacidades de innovación</p>
                    </div>
                  </Grid>
                  <Grid className="circle2" item xs={12} sm={6}>
                    <div className="quarter2">
                      <p>Describir el entorno competitivo</p>
                    </div>
                  </Grid>
                  <Grid className="circle1" item xs={12} sm={6}>
                    <div className="quarter3">
                      <p>Ajustar la estrategia</p>
                    </div>
                  </Grid>
                  <Grid className="circle2" item xs={12} sm={6}>
                    <div className="quarter4">
                      <p>Redefinir impuestos</p>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>  
          </div>
        </main>

        <Footer pages={pages}/>
      </div>
    );
  }
}

export default Proceso;