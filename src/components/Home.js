import React, {Component} from 'react'

class Home extends Component{

    render(){

        return(

            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="home">
                <div className="my-auto">
                    <h1 className="mb-0 colorBlack">Ministerio
                        <span className="text-primary colorRed"> Ruta </span>
                        <span className="text-primary colorBlack">3:16</span>
                    </h1>
                    <div className="subheading mb-5">Santo Domingo, República Dominicana · (829) 718-2922 ·
                        <a href="mailto:ministerioruta316@email.com"> ministerioruta316@gmail.com</a>
                    </div>
                    <p className="mb-5">Es un ministerio adventista de dramas de tipo fonomímicas. Teniendo como parte de nuestro nombre el texto bien conocido de <strong>San Juan 3:16.</strong> El sacrificio de Cristo por todos nosotros nos motiva a llevar este mensaje a todo el mundo.</p>
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
                            <a href="https://www.youtube.com/results?search_query=minsterio+ruta+3%3A16" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-youtube-play fa-stack-1x fa-inverse"></i>
                </span>
                            </a>
                        </li>

                    </ul>
                </div>
            </section>


        );

    }



}

export default Home;