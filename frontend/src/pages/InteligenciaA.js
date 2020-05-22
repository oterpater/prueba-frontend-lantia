import React from 'react';
import Page from '../components/Page';

function Intro() {
  const info = {
    title: "INTELIGENCIA APLICADA A LAS ETAPAS DE DESARROLLO DE PRODUCTOS",
    module: "Módulo 01",
    moduleName: "Vigilancia Tecnológica",
  };

  return (
    <div>
      <Page module={info.module} title={info.title} moduleName={info.moduleName}/>
    </div>
  );
}

export default Intro;