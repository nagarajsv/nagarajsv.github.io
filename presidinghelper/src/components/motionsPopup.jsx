import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

class SpeakerSheet extends Component {
  state = {
    modalShow: false,
  };

  setModalShow = (show) => {
    this.setState({ modalShow: show });
  };

  render() {
    return (
      <div id="motionPopup">
        <Button
          variant
          onClick={() => this.setModalShow(true)}
          className="nav-link active text-white btn btn-link" aria-current="page"
        >
          Common Motions
        </Button>

        <Modal
           size="lg"
           show={this.state.modalShow}
           onHide={() => this.setModalShow(false)}
           className="text-white"
        >
            <Modal.Header closeButton style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Modal.Title id="contained-modal-title-vcenter">
                Common Motions
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid" style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Container>
                <Row xs={4} md={4} lg={4}>
                <Col>
                    <span id="speeches0">
                    </span>
                </Col>
                <Col>
                    <span id="1Speech">
                    </span>
                </Col>
                <Col>
                    <span id="2Speeches">
                    </span>
                </Col>
                <Col>
                    <span id="3Speeches">
                    </span>
                </Col>
                </Row>
            </Container>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Button onClick={() => this.setModalShow(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SpeakerSheet;