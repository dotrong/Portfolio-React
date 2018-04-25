import React from 'react';

class SideBar extends React.Component{

    render() {
        return (

            <div className="col-md-3 side-bar">
                    <div className="panel panel-default">
                        <div className="panel-heading text-center">
                            <h4><span className="text-primary">Connect with me</span></h4>
                        </div>
                        <div className="panel-body"><hr/>
                            <div className="row justify-content-between">
                                <div className="col-xs">
                                    <a target="_blank" href="https://github.com/dotrong"><img className="icon" 
                                    src="images/github.png" alt="github"/></a>
                                </div>

                                <div className="col-xs">
                                    <a target="_blank" href="https://www.linkedin.com/in/trong-hieu-do-7b9541113/"><img className="icon" 
                                        alt="linkedin" src="images/linkedin.png"/></a>
                                </div>

                                <div className="col-xs">
                                    <a target="_blank" href="http://stackoverflow.com/users/7765158/trong-hieu-do?tab=profile"><img className="icon" 
                                        alt="overflow" src="images/stackoverflow.png"/></a>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
        )
    }
    
}
export default SideBar;