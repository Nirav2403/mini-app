import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'

export default function CreateModal(props) {
    const prev = [...props.urlData].length;
    const [creatData, setCreatData] = useState({
        Id: prev.Id+1,
        ThumbnailUrl: null,
        Title: null,
        Url: null,
    })


    const handleChange = e => {
        const { name, value } = e.target;
        setCreatData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onFormSubmit = () =>{
        const prevData = [...props.urlData];
        prevData.push(creatData);
        localStorage.setItem("UserList", JSON.stringify(prevData));
        props.seturlData(prevData);
        props.handleCreateModal(false)
    }

    return (
        <>
            <Modal
                show={props.onShow}
                onHide={()=> props.handleCreateModal(false)}
            >
                <Modal.Header closeButton >
                    <Modal.Title>Update data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Title </Form.Label>
                        <Form.Control type="text" placeholder="name input" name="Title" value={creatData.Title} onChange={(e)=>handleChange(e)}/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>URL </Form.Label>
                        <Form.Control type="text" placeholder="name input" name="Url" value={creatData.Url} onChange={(e)=>handleChange(e)} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Thumbnailurl </Form.Label>
                        <Form.Control type="text" placeholder="name input" name="Thumbnailurl" value={creatData.ThumbnailUrl} onChange={(e)=>handleChange(e)} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={onFormSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
