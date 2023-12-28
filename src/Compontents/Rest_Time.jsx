import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Rest_Time({ op }) {
    console.log(op);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="secondary" style={{ color: "white" }} onClick={handleShow}>
                Opeeratin Hours
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Opeeratin Hours </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Monday : {op?.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday : {op?.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Wednesday : {op?.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>Thursday : {op?.Thursday}</ListGroup.Item>
                        <ListGroup.Item>Friday : {op?.Friday}</ListGroup.Item>
                        <ListGroup.Item>Saturday : {op?.Saturday}</ListGroup.Item>
                        <ListGroup.Item>Sunday : {op?.Sunday}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Rest_Time