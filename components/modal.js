import React from 'react';

class Modal extends React.Component{
    render() {
        const classCss = this.props.status.open ? ' show display-block': '';
        

        return (
            <div className={`modal fade${classCss}`} id="myModal" role="dialog" >
                <div className="modal-dialog modal-dialog-centered">
                
        {/*<!-- Modal content--> */}
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.status.work.title}</h4>
                            <button type="button" className="close" onClick={(event) => {this.props.closeModal(event)}}> 
                            <span>&times;</span></button>
                            
                        </div>
                        <div className="modal-body">
                            <p>{this.props.status.work.description}</p>
                            <ul>
                                <li><a href={this.props.status.work.url} target="_">Demo Link</a></li>
                                <li><a href={this.props.status.work.github} target="_">Github repo</a></li>    
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={(event) => {this.props.closeModal(event)}}>Close</button>
                        </div>
                    </div>
                </div>
            
            </div>          

        )
    }
}

export default Modal;