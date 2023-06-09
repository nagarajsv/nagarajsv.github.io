import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { Component } from 'react';

class App extends Component {
  state = {}

  render() {
    const show = this.props.show;

    return (
      <div id="confirmpopup">
        <Button
          variant="primary"
          id="nameSubmit"
          style={{ backgroundColor: '#2b3035', borderColor: '#2b3035' }}
          onClick={this.props.onShow}
        >
          Submit Names
        </Button>

        <Modal
          show={show}
          onHide={this.props.onClose}
          backdrop="static"
          keyboard={false}
          className="text-white"
        >
          <Modal.Header closeButton style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Modal.Title className="text-center">Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center" style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            Have you entered every representative? You will not be able to change this later.
          </Modal.Body>
          <Modal.Footer className="text-center" style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Button variant="secondary" className="btn btn-danger" onClick={this.props.onClose}>
              No
            </Button>
            <Button variant="primary" className="btn btn-success" onClick={this.props.onYesClick}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
