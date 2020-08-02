import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
    return (
        <FooterBase>
            <a href="/">
                <img className="Logo" src={Logo} alt="TechFlix" />
            </a>
            <p>
                Criado por Karine Rocha durante a 
        {' '}
                <a href="https://www.alura.com.br/">
                    Imersão React da Alura
        </a>
            </p>
        </FooterBase>
    );
}

export default Footer;
