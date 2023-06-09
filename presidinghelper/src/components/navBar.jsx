import React, { Component } from 'react';
import SpeakerSheet from './speakerSheet';
import QuestionSheet from './questionSheet';
import MotionsPopup from './motionsPopup';
import Settings from './settings';

class NavBar extends Component {
    state = {  } 

    handlePlay = () => {
        document.getElementById('player').play();
    }

    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand">
                            <a onClick={this.handlePlay} style={{cursor: "pointer"}}>
                                <img src="https://cdn-icons-png.flaticon.com/512/2570/2570192.png" alt="Logo" width="24" height="24" className="d-inline-block align-text-top mr-3"/>
                            </a>
                                Presiding Helper
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <button id="speakerSheet" className="float-left nav-link active text-white" aria-current="page" style={{display: "none", border: "none"}}><SpeakerSheet speeches0={this.props.speeches0} speeches1={this.props.speeches1} speeches2={this.props.speeches2} speeches3={this.props.speeches3}/></button>
                                </li>
                                <li className="nav-item">
                                    <button id="questionSheet" className="float-left nav-link active text-white" aria-current="page" style={{display: "none", border: "none"}}><QuestionSheet recency={this.props.recency}></QuestionSheet></button>
                                </li>
                                <li className="nav-item">
                                    <button id="motions" className="float-left nav-link active text-white" aria-current="page" style={{display: "none", border: "none"}}><MotionsPopup></MotionsPopup></button>
                                </li>                     
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <button id="howto" className="nav-link active text-white" aria-current="page" style={{border: "none"}}>How to Use</button>
                                </li>
                                <li className="nav-item">
                                    <a style={{cursor: "pointer"}} className="mr-5">
                                        <Settings timerShow={this.props.timerShow} handleTimerShowChange={this.props.handleTimerShowChange}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default NavBar;