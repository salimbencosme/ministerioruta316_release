import React, {Component} from 'react'

class About extends Component{

    render(){

        return(
/*http://www.bestjquery.com/lab/timeline/page/3/*/
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="about">
                <div className="my-auto">
                    <h2 className="mb-5">Nosotros</h2>

                    <div className="container">
                        <div className="row">
                            <div className="main-timeline">
                                <div className="col-md-2 col-sm-6 timeline">
                                    <div className="timeline-icon"><i className="fa fa-globe"></i></div>
                                    <span className="year">2012</span>
                                    <div className="timeline-content">
                                        <div className="post">Web Desginer</div>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ullamcorper odio. Phasellus congue varius placerat. Quisque vel purus convallis.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-2 col-sm-6 timeline">
                                    <div className="timeline-icon"><i className="fa fa-rocket"></i></div>
                                    <span className="year">2013</span>
                                    <div className="timeline-content">
                                        <div className="post">Web Developer</div>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ullamcorper odio. Phasellus congue varius placerat. Quisque vel purus convallis.
                                        </p>
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

export default About;