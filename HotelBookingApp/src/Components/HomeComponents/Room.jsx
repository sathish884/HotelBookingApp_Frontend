import React from 'react'
import { Modal } from 'antd'

function Room({openModal, setOpenModal}) {
    return (
        <>
            <Modal title="Modal" open={openModal} onOk={() => setOpenModal(false)} onCancel={() => setOpenModal(false)} width={1000}>
                <p>Somthing</p>
            </Modal>
        </>
    )
}

export default Room