import React, { useState, useEffect } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import { Confirm } from 'react-confirm-bootstrap'
import axios from 'axios';
import ModalInput from './ModalInput';
import CreateModal from './CreateModal';
import ConfirmModal from './ConfirmModal'

export default function FetchApi() {
    var [urlData, seturlData] = useState([]);
    const [showModal, setshowModal] = useState(false)
    const [closeModal, setcloseModal] = useState(true)
    const [createModal, setCreateModal] = useState(false)
    const [confirmModal, setConfirmModal] = useState(false)
    const [oldObject, setoldObject] = useState({})
    const [deleteData, setDeleteData] = useState(null)

    const apiFetch = async () => {
        const localData = JSON.parse(localStorage.getItem("UserList"));
        console.log(localData)
        if (localData === null) {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            const rData = res.data.slice(0, 50);
            const updatedData = rData.map((obj) => {
                return {
                    Id: obj.id,
                    Title: obj.title,
                    Url: obj.url,
                    ThumbnailUrl: obj.thumbnailUrl
                }
            })
            seturlData(updatedData);
            localStorage.setItem('UserList', JSON.stringify(updatedData));
        } else {
            seturlData(localData);
        }
    }

    useEffect(() => {
        apiFetch();
    }, [])

    function deleteButton(cell, row) {
        return (
            <>
                <Button onClick={(e) => onConfirm(row.Id)}>Delete</Button>
            </>
        );
    }
    const onConfirm = (i) => {
        setConfirmModal(!confirmModal)
        setDeleteData(i);
        console.log(i);
    }

    const deleteObject = (i) => {
        console.log(i);
        const updatedUrl = urlData.filter((x) => x.Id !== i)
        localStorage.setItem('UserList', JSON.stringify(updatedUrl))
        seturlData(updatedUrl)
        setConfirmModal(!confirmModal)
        console.log(urlData);
    }

    function updateButton(cell, row) {
        return (
            <>
                <Button onClick={() => updateObject(row)}>Update</Button>
            </>
        );
    }

    const updateObject = (i) => {
        setshowModal(true)
        setcloseModal(false)
        setoldObject(i);
    }

    const handleSaveObj = () => {
        const photoIndex = urlData.findIndex((item) => item.Id === oldObject.Id);
        const photoData = [...urlData];
        photoData[photoIndex] = oldObject;
        seturlData(photoData);
        setshowModal(false);
        setcloseModal(true)
    }

    const close = () => {
        setshowModal(false)
        setcloseModal(true)
    }

    const handleTitle = (Title) => {
        setoldObject({ ...oldObject, Title: Title });
    }
    const handleUrl = (Url) => {
        // if (/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/) {
        //     alert("Valid Url");
        // }
        // else {
        //     alert("Not valid Url");
        // }
        setoldObject({ ...oldObject, Url: Url });
    }
    const handleThumb = (Thumb) => {
        setoldObject({ ...oldObject, ThumbnailUrl: Thumb });
    }

    const createObject = () => {
        setCreateModal(true)
    }

    const handleCreateModal = (bool) => {
        setCreateModal(bool)
    }


    return (
        <>
            <Button className="btn btn-primary my-2 mx-auto" style={{ width: '10%' }} onClick={() => createObject()}>Create</Button>
            <BootstrapTable data={urlData} bordered striped={true} hover={true} condensed={true} tableHeaderClass="bg-danger" trClassName="bg-info" >
                <TableHeaderColumn width='150' dataField='Id' isKey={true}>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='Title'>Title</TableHeaderColumn>
                <TableHeaderColumn dataField='Url'>URL</TableHeaderColumn>
                <TableHeaderColumn dataField='ThumbnailUrl'>ThumbnailUrl</TableHeaderColumn>
                <TableHeaderColumn width='120' dataFormat={updateButton} >Add</TableHeaderColumn>
                <TableHeaderColumn width='120' dataFormat={deleteButton} >Delete</TableHeaderColumn>
            </BootstrapTable>
            <ModalInput onShow={showModal} onHide={closeModal} oldData={oldObject} handleTitle={handleTitle} handleUrl={handleUrl} handleThumb={handleThumb} handleSaveObj={handleSaveObj} close={close} />
            <CreateModal onShow={createModal} onHide={!createModal} urlData={urlData} seturlData={seturlData} handleCreateModal={handleCreateModal} />
            <ConfirmModal show={confirmModal} deleteData={deleteData} setConfirmModal={setConfirmModal} deleteObject={deleteObject} />
        </>
    )
}
