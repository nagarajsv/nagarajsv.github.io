import React, { Component } from 'react';

class welcome extends Component {
    state = { disabled: true } 

    handleInput = () => {
        if(document.getElementById('input1').value > 0 && document.getElementById('input2').value > 0){
            this.setState({disabled:false});
        }
        else{
            this.setState({disabled:true});
        }
    }

    render() { 
        return (
            <div id='welcome'>
                <div id="header" className="card p-3 mb-4 mt-4 text-white" data-bs-theme="dark">
                     Welcome to the Presiding Helper!
                </div>
                <div className="card text-white" id="container">
                    <form>
                        <div className="card bg-secondary m-4 pt-3 px-3 text-white">
                            <label for='input1'>Enter the number of rows in the chamber:</label><br/>
                            <input onInput={this.handleInput} id='input1' type='number' min="1" autoFocus></input><br/>
                        </div>
                        <div className="card bg-secondary m-4 pt-4 px-3 text-white">
                            <label for='input2'>Enter the number of columns in the chamber:</label><br/>
                            <input onInput={this.handleInput} id='input2' type='number' min="1"></input><br/>
                        </div>
                        <button disabled={this.state.disabled} type="button" id="submit" onClick={this.props.onSubmit} className="btn btn-secondary btn-lg mb-4">Submit</button>
                    </form>
                </div>
                <footer className="text-white" style={{textAlign: "center"}}>
                    <p id="footerText">Developed by Nagaraj Veerappan</p>
                </footer>
            </div>
        );
    }
}
 
export default welcome;