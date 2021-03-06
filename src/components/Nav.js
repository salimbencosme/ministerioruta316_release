import React, {Component} from 'react';
import logo  from '../resources/img/profile.jpg';


class Nav extends  Component{

    render(){

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">Ministerio Ruta 3:16</span>
                    <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2 logoStyle " src={logo} alt="" />
        </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#about">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#agenda">Agenda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#members">Miembros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#drama">Dramas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#mailbox">Buzon</a>
                    </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#contact">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#subscribe">Suscribirse</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }

}

export default Nav;