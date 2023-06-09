import React, { Component } from 'react';
import QuestionTimer from './questionTimer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class QuestionTimerPopup extends Component {

    state = {
        soundfx: true
    }

    handleClick = () => {
        this.setState({soundfx: !this.state.soundfx});
    }

  render() {
    const show = this.props.show
    return (
      <>
      {/*
        <Button variant="primary" onClick={this.handleShow}>
          Launch static backdrop modal
        </Button>
    */}

        <Modal
          show={show}
          onHide={this.props.onClose}
          backdrop="static"
          keyboard={false}
          className="text-white"
        >
          <Modal.Header closeButton style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Modal.Title>Timer</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <QuestionTimer soundfx={this.state.soundfx}/>
            <div style={{textAlign: "center"}}>
                <input type="checkbox" id="soundfx" value="yesno" onChange={this.handleClick} checked={this.state.soundfx}></input>
                <label for="soundfx" className="m-2">Auto play gavel sound</label>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Button variant="secondary" onClick={this.props.onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default QuestionTimerPopup;