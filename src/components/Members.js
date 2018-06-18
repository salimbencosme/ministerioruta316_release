import React, {Component} from 'react'

import photo from '../resources/img/members/DSC_9302.jpg';
import photo1 from '../resources/img/members/DSC_9266.jpg';
import photo2 from '../resources/img/members/DSC_9281.jpg';
import photo3 from '../resources/img/members/DSC_9265.jpg';
import photo4 from '../resources/img/members/DSC_9283.jpg';
import photo5 from '../resources/img/members/DSC_9310.jpg';
import photo6 from '../resources/img/members/DSC_9336.jpg';
import photo7 from '../resources/img/members/DSC_9338.jpg';




class Members extends Component{

    constructor(props){
        super(props);

        this.members = [{name:"Salin",pic:"/static/media/DSC_9302.jpg"}];
    }


    render(){

        return(

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="members">
                <div className="my-auto">
                    <h2 className="mb-5">Miembros</h2>

                    <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={photo1} alt="card image" /></p>
                                                <h4 className="card-title">Christofer</h4>
                                                <p className="card-text">Director</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Christofer</h4>
                                                <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={photo} alt="card image"/></p>
                                                <h4 className="card-title">Salim Bencosme</h4>
                                                <p className="card-text">Subdirector/Secretario</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Salim Bencosme</h4>
                                                <p className="card-text">This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={photo2} alt="card image"/></p>
                                                <h4 className="card-title">Osiris</h4>
                                                <p className="card-text">Encargado de Dramas</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Osiris</h4>
                                                <p className="card-text">This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={photo3} alt="card image"/></p>
                                                <h4 className="card-title">Stephany</h4>
                                                <p className="card-text">Encargada de musica</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Stephany</h4>
                                                <p className="card-text">This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={photo4} alt="card image"/></p>
                                                <h4 className="card-title">Jorge</h4>
                                                <p className="card-text">Encargado de Agenda</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Jorge</h4>
                                                <p className="card-text">This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={photo5} alt="card image"/></p>
                                                <h4 className="card-title">Noel</h4>
                                                <p className="card-text">Encargado de Espiritualidad</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Noel</h4>
                                                <p className="card-text">This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={photo6} alt="card image"/></p>
                                                <h4 className="card-title">Lucelly</h4>
                                                <p className="card-text">Encargada de vestuario</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Lucelly</h4>
                                                <p className="card-text">This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={photo7} alt="card image"/></p>
                                                <h4 className="card-title">Melvin</h4>
                                                <p className="card-text">Actor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Melvin</h4>
                                                <p className="card-text">This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.This is basic card with image on top, title,
                                                    description and button.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </section>

        );

    }



}

export default Members;