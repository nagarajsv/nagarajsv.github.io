import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

class QuestionSheet extends Component {
    state = { 
        modalShow: false,
     } 

    setModalShow = (show) => {
        this.setState({ modalShow: show });
    };
    

    render() { 
        return (
        <div id="questionSheet">
            <Button
            variant
            onClick={() => this.setModalShow(true)}
            className="nav-link active text-white btn btn-link" aria-current="page"
            >
            Questioning Recency
            </Button>

            <Modal
            size="sm"
            show={this.state.modalShow}
            onHide={() => this.setModalShow(false)}
            className="text-white"
            //    aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Least to Most Recent Questioner:
                </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid" style={{ backgroundColor: '#2b3035', borderColor: "slategray" }}>
                <Container>
                    {this.props.recency.map((person) => <div style={{textAlign: "center"}}>{person}</div>)}
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
 
export default QuestionSheet;