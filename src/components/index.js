import React from 'react';
import logo from '../assets/img/logo.png';
import '../components/Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="logo" src={logo} alt="Tecnoflix"></img>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Video!
            </ButtonLink>
        </nav>
    );
}

export default Menu;