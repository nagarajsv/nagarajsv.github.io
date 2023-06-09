import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

class Settings extends Component {
  state = {
    modalShow: false,
  };

  setModalShow = (show) => {
    this.setState({ modalShow: show });
  };

  render() {
    return (
      <div id="speakerSheet">
        <Button
          variant
          onClick={() => this.setModalShow(true)}
          className="nav-link active text-white btn btn-link" aria-current="page"
        >
          <img src="https://icons.iconarchive.com/icons/dtafalonso/android-l/512/Settings-L-icon.png" alt="Settings" width="24" height="24" className="d-inline-block align-text-top mr-3"/>
        </Button>

        <Modal
           size="sm"
           show={this.state.modalShow}
           onHide={() => this.setModalShow(false)}
           className="text-white"
        >
            <Modal.Header closeButton style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Modal.Title id="contained-modal-title-vcenter">
                Settings
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid" style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Container>
                <div id="timerShow">
                    <input id="timerShowCheck" type="checkbox" onChange={this.props.handleTimerShowChange} checked={this.props.timerShow}></input>
                    <label for="timerShowCheck" className="m-2"> Show Timer</label>
                </div>
            </Container>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Button onClick={() => this.setModalShow(false)}>Save</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Settings;