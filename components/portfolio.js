import React from 'react';
import WorkDashBoard from './work-dashboard';
import Modal from './modal';

class Portfolio extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            workList: [
                {
                    description:'This application written in Javascript and using Bootstrap for layout and UI components',
                    url:'https://dotrong.github.io/Hangman-Game/',
                    github:'https://github.com/dotrong/Hangman-Game',
                    image:'images/tech1.jpg',
                    title:'Hangman-Game',
                    brief:'Question/answer game written in Javascript.'
                },
                {
                    description:'Search article on NewYork Times, using NYT public RestAPI. Frontend written in ReactJS and Bootstrap, backend is NodeJS and MongoDB',
                    url:'https://newyorktimes-search.herokuapp.com/',
                    github:'https://github.com/dotrong/nyt-search',
                    image:'images/tech2.jpg',
                    title:'NYT-Search',
                    brief:'WebUI NYT search articles'
                },
                {
                    description:'This application uses ReactJS for GUI components, React Routing for front-end Routing',
                    url:'https://tronghieudo.com',
                    github:'https://github.com/dotrong/Portfolio-React',
                    image:'images/tech3.jpg',
                    title: 'Porfolio',
                    brief:'Personal Portfolio'
                },
                {
                    description:'This application uses Sequelize library as ORM to query MySQL DB, Handlebars for template. NodeJS and Express as backend.',
                    url:'https://fierce-chamber-75903.herokuapp.com',
                    github:'https://github.com/dotrong/sequelizedBurger',
                    image:'images/tech4.jpg',
                    title: 'Sequelized Burger',
                    brief:'Simple demo of Sequelize and MySQL db'
                }

            ],
            modal: {
                open: false,
                work: {}
            }
        }
        this.modalClose = this.modalClose.bind(this);
        this.modalOpen = this.modalOpen.bind(this);
    }

    modalOpen(event,work) {
        event.preventDefault();
        this.setState({modal: {
            open:true,
            work:work

        }});
    }

    modalClose(event) {
        event.preventDefault();
        this.setState({modal: {
            open:false,
            work:{}
        }})
    }
    render() {
        return (
            <div className="col-md-8">
                
                {/* <div className="row justify-content-between spacing-row"> */}
                    <WorkDashBoard workList={this.state.workList} openModal={this.modalOpen}/>
                    {/* <SideBar/> */}
                {/* </div> */}
                <Modal status={this.state.modal} closeModal={this.modalClose}/>
                
            </div>
        )
    }
}

export default Portfolio;