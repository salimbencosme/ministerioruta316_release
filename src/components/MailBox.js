import React, {Component} from 'react'

class MailBox extends Component{

    render(){

        return(

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="mailbox">
                <div className="my-auto">
                    <h2 className="mb-5">Buzon</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="well well-sm">
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">

                                            <div className="form-group">
                                                <label htmlFor="subject">
                                                    Subject</label>
                                                <select id="subject" name="subject" className="form-control"
                                                        required="required">
                                                    <option value="na" selected="">Seleccione una de las opciones</option>
                                                    <option value="service">Felicitaciones</option>
                                                    <option value="suggestions">Quejas</option>
                                                    <option value="product">Sugerencia</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
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

                    </div>

                </div>
            </section>

        );

    }



}

export default MailBox;