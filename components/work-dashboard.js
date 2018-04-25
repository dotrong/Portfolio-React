import React from 'react';
import Work from './work';

class WorkDashBoard extends React.Component{

    render() {
        let listWorkItem = [];
        this.props.workList.forEach((work,idx) => {

            // two work item are put in the same row

            if ((idx % 2 === 0) && (idx + 1 < this.props.workList.length)) {
                listWorkItem.push(<div className="row justify-content-between spacing-row" key={work.image}>
                    <Work work={work} key={work.image} modalOpen={this.props.openModal}/>
                    <Work work={this.props.workList[idx+1]} key={this.props.workList[idx+1].image} modalOpen={this.props.openModal}/>

                    </div>               
                )
            }
            //if only one work item left
            else if (idx % 2 === 0) {
                listWorkItem.push(<div className="row justify-content-between spacing-row" key={work.image}>
                    <Work work={work} key={work.image} modalOpen={this.props.openModal}/>
                </div>
                
                )
            }
        })
        return (
            <div>
                    {listWorkItem}
            </div>
        )
    }
}

export default WorkDashBoard;