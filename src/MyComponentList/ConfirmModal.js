import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({show, setConfirmModal ,deleteObject,deleteData }) => {
    const hide = () =>{
        setConfirmModal(false)
    }
    console.log(deleteData);

    const onDelete = () =>{
        deleteObject(deleteData);
    }
    return (
        <>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete this row?? </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ConfirmModal;
