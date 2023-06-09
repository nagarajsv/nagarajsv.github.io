import React, { Component } from 'react';

class Representative extends Component {
    state = { }

    handlePersonClick = (e) => {
        if(e.target.innerText !== ""){
            if(e.target.dataset.clicked === "notClicked"){
                e.target.dataset.clicked="clicked";
                e.target.style.backgroundColor = "chartreuse";
            }
            else{
                e.target.dataset.clicked="notClicked";
                e.target.style.backgroundColor="#6c757d";
            }
            this.props.onPersonClick();
        } 
    }
    
    render() {
        return (
            <div style={{width: this.props.btnSize, height: this.props.btnHeight, display: 'inline-block'}}>
                <button id="person" className="btn btn-secondary btn-lg m-10" type="button" data-clicked="notClicked" style={{backgroundColor: "#6c757d", margin: '10px', width: '90%'}} onClick={(e) => this.handlePersonClick(e)}>
                    <input type="text" id="nameInput" placeholder="Enter name" style={{width: '80%', height: '80%'}}></input>
                </button>
            </div>
        );
    }
}
 
export default Representative;