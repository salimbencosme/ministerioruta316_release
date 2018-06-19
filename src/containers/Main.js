import React, {Component} from 'react';
import Nav from '../components/Nav';
import Experience from '../components/Agenda';
import Education from '../components/Members';
import Drama from '../components/Drama';
import About from '../components/About';
import Home from "../components/Home";
import Contact from "../components/Contact";
import Subscribe from "../components/Subscribe";
import MailBox from "../components/MailBox";


class Main extends Component{

    render(){

        return(
            <div  id="page-top">
                <Nav />
                <div className="container-fluid p-0">
                    <Home/>
                    <About/>
                    <Experience/>
                    <Education/>
                    <Drama/>
                    <MailBox/>
                    <Contact/>
                    <Subscribe/>
                </div>
            </div>

        );

    }

}

export default Main;