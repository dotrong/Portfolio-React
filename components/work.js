import React from 'react';

class Work extends React.Component{

    render() {

        let work = this.props.work;
        console.log(work);

        return (
            // <div className="col-md-6">
            //     <div className="row justify-content-between spacing-row">
            //         <div className="col-md-4">
               
            //             <div className="small-box" onClick={(event) => {this.props.modalOpen(event,work)}}>
            //                 <a href="#"><img src={work.image} /> </a>
            //             </div>
            //         </div>
            //         <div className="col-md-7">
            //             <p>small description</p>
            //         </div>
            //     </div>
            // </div>
            <div className="col-md-6">
                <div className="media">
                    <a href="#"><img className="mr-3 small-box" src={work.image} onClick={(event) => {this.props.modalOpen(event,work)}}/></a>
                    <div className="media-body">
                        <h6 className="mt-0">{work.title}</h6>
                        <p className="small text-justify">{`${work.brief}. 
                        Click on the image to get more details.`}</p>
                        
                    </div>
                </div>
            </div>

        )
    }

}
export default Work;