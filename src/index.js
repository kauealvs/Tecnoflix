import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

const Pagina404 = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <h1>Ops, quebrou tudo :O</h1>
    <p>
      <a href="/">Você pode jogar ou voltar pra home :)</a>
    </p>
    <iframe
      title="Flappy Bird Game"
      src="https://mariosouto.com/flappy-bird-devsoutinho/"
      width="340"
      height="600" />
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={ CadastroVideo } />
      <Route path="/cadastro/categoria" component={ CadastroCategoria } />
      <Route component={ Pagina404 } />
    </Switch>
  
  </BrowserRouter>,
  document.getElementById('root')
);

