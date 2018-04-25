import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{

    render() {
        return(

            <div className="row">
                <div className="col-md">
                    <nav className="navbar navbar-light bg-light">
                        <a className="navbar-brand text-primary" href="#" >Trong Hieu DO</a>    
                    
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Portfolio</a> */}
                                <Link to="/" className="nav-link">Porfolio</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">About</a> */}
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Contact</a> */}
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>

                        </ul>

                    </nav>

                </div>

            </div>

        )
    }
}

export default NavBar;