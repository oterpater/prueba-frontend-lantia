import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Intro from './pages/Introduction';
import InteligenciaA from './pages/InteligenciaA';
import Actividad1 from './pages/Actividad1';
import Preguntas from './pages/Preguntas';
import Proceso from './pages/Proceso';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/inteligencia" component={InteligenciaA} />
        <Route exact path="/actividad" component={Actividad1} />
        <Route exact path="/preguntas" component={Preguntas} />
        <Route exact path="/proceso" component={Proceso} />
      </Switch>
    </Router>
  );
}

export default App;
