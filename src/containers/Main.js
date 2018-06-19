import React, {Component} from 'react';
import Nav from '../components/Nav';
import Experience from '../components/Agenda';
import Education from '../components/Members';
import Drama from '../components/Drama';
import Interests from '../components/About';
import Awards from '../components/MailBox';
import About from "../components/Home";
import Contact from "../components/Contact";
import Subscribe from "../components/Subscribe";
import MailBox from "../components/MailBox";


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
                    <MailBox/>
                    <Contact/>
                    <Subscribe/>
                </div>
            </div>

        );

    }

}

export default Main;