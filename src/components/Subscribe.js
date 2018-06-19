import React, {Component} from 'react'

class Subscribe extends Component{

    render(){

        return(

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="subscribe">
                <div className="my-auto">
                    <h2 className="mb-5">Suscribirse</h2>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="well well-sm">
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">

                                            <div className="form-group">
                                                <label htmlFor="email">
                                                    Correo electrónico</label>
                                                <div className="input-group">
                                <span className="input-group-addon custom-email-subscribe"><span
                                    className="fa fa-envelope colorWhite"></span>
                                </span>
                                                    <input type="email" className="form-control" id="email"
                                                           placeholder="Escriba su correo electrónico"
                                                           required="required"/></div>
                                            </div>

                                        </div>

                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary pull-right"
                                                    id="btnContactUs">
                                                Suscribirme
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

export default Subscribe;