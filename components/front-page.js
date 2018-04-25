import React from 'react';
import {HashRouter as Router, Switch,Route} from 'react-router-dom';
import Contact from './contact';
import About from './about';
import FootBar from './footbar';
import NavBar from './navbar';
import Portfolio from './portfolio';
import SideBar from './sidebar';

class FrontPage extends React.Component{

    render() {
        return(
            <Router>
                <div>
                    <NavBar/>

                    <div className="row justify-content-between spacing-row">
                        {/* <Portfolio /> */}
                        <Switch>
                            <Route exact path="/" component={Portfolio}/>
                            <Route path="/contact" component={Contact} />
                            <Route path="/about" component={About} />

                        </Switch>
                        <SideBar/>
                    </div>
                   <FootBar/>
                </div>
            </Router>

        )
    }
}

export default FrontPage;