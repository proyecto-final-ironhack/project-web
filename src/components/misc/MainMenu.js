import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import JerryMenu from '../../images/jerry.jpg'
class Menu extends Component {


    render() {
        return(
            <div className="MainDiv">
                <div className="box bubble">Let's learn some english having fun!</div>
                <img src={JerryMenu} width="35%"></img>
                <div className="container-menu">                  
                        <Link className="button" to="/images">Tell me what's this!</Link>
                        <Link className="button" to="/object">Find this object!</Link>
                 </div>
            </div>
            
        )
    }
}

export default Menu;