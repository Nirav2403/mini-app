import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function ModalInput(props) {
    const handleChangeTitle = (e) => {props.handleTitle(e.target.value)}
    const handleChangeUrl = (e) => {props.handleUrl(e.target.value)}
    const handleChangeThumb = (e) => {props.handleThumb(e.target.value)}
    const close = (e) => {props.close(e)}
    return (
        <>
            <Modal
                show={props.onShow}
                onHide={props.onHide}
            >
                <Modal.Header closeButton onClick={(e)=>{close(e)}}>
                    <Modal.Title>Update data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Title </Form.Label>
                        <Form.Control type="text" onChange={handleChangeTitle}  value={props.oldData.Title} placeholder="name input" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>URL </Form.Label>
                        <Form.Control type="text" onChange={handleChangeUrl} value={props.oldData.Url} placeholder="name input" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Thumbnailurl </Form.Label>
                        <Form.Control type="text" onChange={handleChangeThumb} value={props.oldData.ThumbnailUrl} placeholder="name input" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={() => props.handleSaveObj()} >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
