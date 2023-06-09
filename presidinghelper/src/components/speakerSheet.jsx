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
      <div id="speakerSheet">
        <Button
          variant
          onClick={() => this.setModalShow(true)}
          className="nav-link active text-white btn btn-link" aria-current="page"
        >
          Speaker Sheet
        </Button>

        <Modal
           size="lg"
           show={this.state.modalShow}
           onHide={() => this.setModalShow(false)}
           className="text-white"
        >
            <Modal.Header style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Modal.Title id="contained-modal-title-vcenter">
                Speeches given: (S = Sponsor/Author, A = Aff, N = Neg)
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid" style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
            <Container>
                <Row xs={4} md={4} lg={4}>
                <Col>
                    <span id="speeches0">
                        <h1>0</h1>
                        {this.props.speeches0.map((person) => (
                            <div style={{textAlign: "center"}}>{person}</div>
                        ))}
                    </span>
                </Col>
                <Col>
                    <span id="1Speech">
                        <h1>1</h1>
                        {this.props.speeches1.map((person) => (
                            <div style={{textAlign: "center"}}>{person}</div>
                        ))}
                    </span>
                </Col>
                <Col>
                    <span id="2Speeches">
                        <h1>2</h1>
                        {this.props.speeches2.map((person) => (
                            <div style={{textAlign: "center"}}>{person}</div>
                        ))}
                    </span>
                </Col>
                <Col>
                    <span id="3Speeches">
                        <h1>3</h1>
                        {this.props.speeches3.map((person) => (
                            <div style={{textAlign: "center"}}>{person}</div>
                        ))}
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
