import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
//  as="a"
// as={Link} -> o componente que é button
// e antes funcionava como tag <a>
//  agora funciona como um Link utilizando o
// SPA -> Single Page Aplication


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="TechFlix" />
            </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo vídeo
        </Button>



        </nav>
    );
}

export default Menu;