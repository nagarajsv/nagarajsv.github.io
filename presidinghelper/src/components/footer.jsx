import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="text-white" style={{textAlign: "center"}}>
                <p id="footerText">Total speeches: {this.props.speechesNum}. Total questions: {this.props.questionsNum}</p>
            </footer>
        );
    }
}
 
export default Footer;