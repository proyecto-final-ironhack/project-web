import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

class Menu extends Component {


    render() {
        return(
            
            <div>
                <p>Let´s learn some english having fun!</p>
                 <Link className="btn btn-primary btn-lg btn-block" to="/images">Tell me what's this!</Link>
                 <Link className="btn btn-primary btn-lg btn-block" to="/object">Find this object!</Link>
            </div>
        )
    }
}

export default Menu;