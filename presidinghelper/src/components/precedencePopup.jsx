import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class App extends Component {

  state = {
    disabled: true,
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  yesHandleClose = () => {
    this.setState({ show: false });
    document.getElementById('nameSubmit').style.animation = 'fadeOut 0.5s';
    document.getElementById('nameSubmit').addEventListener('animationend', () => {
      document.getElementById('nameSubmit').style.display = 'none';
    });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const show = this.props.show;

    return (
      <div id="confirmpopup">

        <Modal
          show={show}
          onHide={this.props.onClose}
          backdrop="static"
          keyboard={false}
          className="text-white"
        >
          <Modal.Header style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Modal.Title className="text-center">Enter the starting precedence:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center" style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <ol>
                {this.props.people.map(e => <li><input type="text" id="precedenceInput" onInput={this.props.onPrecedenceInput}></input></li>)}
            </ol>
          </Modal.Body>
          <Modal.Footer className="text-center" style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Button id="submitPrecedence" variant="primary" className="btn btn-success" onClick={this.props.onYesClick} disabled={this.props.disabled}>
              Submit
            </Button>
            <Button variant="primary" className="btn btn-secondary" onClick={this.props.randomize}>
              Randomize
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
