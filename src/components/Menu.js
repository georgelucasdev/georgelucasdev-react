import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import React, { useState } from "react";
import { NavLink as RouterNavLink } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/"><img src={logo} height="40" width="40" alt="logo"/></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <RouterNavLink to="/" className="nav-link" style={{color: 'white'}}>Home</RouterNavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret style={{color: 'white'}}>
                            Aplicativos
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <a href="https://play.google.com/store/apps/details?id=com.aprendizado.escola" className="nav-link" style={{color: 'black'}}>Pré-Escola: Leitura Mágica</a>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret style={{color: 'white'}}>
                            Jogos
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <a href="https://play.google.com/store/apps/details?id=com.glapp.house" className="nav-link" style={{color: 'black'}}>Pinte Casas</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a href="https://play.google.com/store/apps/details?id=com.domino.duelo" className="nav-link" style={{color: 'black'}}>Dominó: Duelo Online</a>
                            </DropdownItem>
                            <DropdownItem>
                                <RouterNavLink to="/Enigmas" className="nav-link" style={{color: 'black'}}>Enigmas da Escuridão</RouterNavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret style={{color: 'white'}}>
                            Outros
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <RouterNavLink to="/politica-de-privacidade" className="nav-link" style={{color: 'black'}}>Política de Privacidade</RouterNavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <RouterNavLink to="/termos-e-condicoes" className="nav-link" style={{color: 'black'}}>Termos e Condições</RouterNavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <RouterNavLink to="/politica-de-reembolso" className="nav-link" style={{color: 'black'}}>Política de Reembolso</RouterNavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <a href="https://precandidato.georgelucas.dev" className="nav-link" style={{color: 'white'}}>Pré-Candidato George Lucas</a>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}
