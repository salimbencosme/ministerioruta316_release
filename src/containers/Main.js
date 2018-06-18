import React, {Component} from 'react';
import Nav from '../components/Nav';
import Experience from '../components/Agenda';
import Education from '../components/Members';
import Drama from '../components/Drama';
import Interests from '../components/Interests';
import Awards from '../components/Awards';
import About from "../components/About";


class Main extends Component{

    render(){

        return(
            <div  id="page-top">
                <Nav />
                <div className="container-fluid p-0">
                    <About/>
                    <Experience/>
                    <Education/>
                    <Drama/>
                    <Interests/>
                    <Awards/>
                </div>
            </div>

        );

    }

}

export default Main;