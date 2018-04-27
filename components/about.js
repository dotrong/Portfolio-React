import React from 'react';

class About extends React.Component {

    render() {

        return(

            <div className="col-md-8 main-content">

                <div className="row">

                    <div className="col-md-3 small-box">
                        <img src="images/TrongDo.png"/>
                    </div>

                    <div className="col-md-9">
                        <p>Hi there, my name is Trong Hieu Do, i'm from Rancho Cucamonga, California.</p>
                        <p>While working as Tool Engineer, i had been developing interest in coding,
                             writting couple web application for NetOps and management dashboard. To solidify my knowledge, i participated coding bootcamp at UCI Continuing Education.
                             Now i'm looking for opportunity to work as full-time web developer.    </p>
                             <p>Web Technologies i can work with (but not limited to ;-) : HTML/CSS Bootstrap, ReactJS, JQuery, Javascript, NodeJS, PHP</p>
                             <p>Databases: MySQL, MongoDB</p>
                    </div>

                </div>  
            </div>

        )
    }
}

export default About;