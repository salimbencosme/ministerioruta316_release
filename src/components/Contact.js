import React, {Component} from 'react'

class Contact extends Component {

    render() {

        return (

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="contact">
                <div className="my-auto">
                    <h2 className="mb-5">Contáctanos</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="well well-sm">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">
                                                    Nombre</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Escriba su nombre" required="required"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="name">
                                                    Teléfono(s)</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Escriba su Teléfono(s)" required="required"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="email">
                                                    Correo electrónico</label>
                                                <div className="input-group">
                                <span className="input-group-addon custom-email-addon"><span
                                    className="fa fa-envelope colorWhite"></span>
                                </span>
                                                    <input type="email" className="form-control" id="email"
                                                           placeholder="Escriba su correo electrónico"
                                                           required="required"/></div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">
                                                    Mensaje</label>
                                                <textarea name="message" id="message" className="form-control" rows="9"
                                                          cols="25" required="required"
                                                          placeholder="Mensaje"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary pull-right"
                                                    id="btnContactUs">
                                                Enviar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div>
                                <legend><span className="fa fa-map-marker"></span> SANTO DOMINGO, REPÚBLICA DOMINICANA
                                </legend>
                                <address>
                                    <strong>Teléfono: </strong>
                                    (829) 718-2922
                                </address>
                                <address>
                                    <strong>Correo electrónico</strong><br/>
                                    <a href="mailto:#">ministerioruta316@gmail.com</a>
                                </address>
                            </div>

                            <ul className="list-inline list-social-icons mb-0">
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/MinisterioRuta316/" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
                                    </a>
                                </li>

                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/ministerioruta316/" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.youtube.com/results?search_query=minsterio+ruta+3%3A16"
                                       target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-youtube-play fa-stack-1x fa-inverse"></i>
                </span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>


                </div>
            </section>

        );

    }


}

export default Contact;