import React from 'react';

class FootBar extends React.Component{

    render() {
        return (
            <div className="row spacing-row">
                <div className="col-md">

                    <nav className="navbar navbar-light bg-light fixed-bottom justify-content-center">
                            <p>&copy; Copyright {new Date().getFullYear()} Trong Hieu DO</p>
                    </nav>

                </div>
            </div>
        )
    }
}
export default FootBar;