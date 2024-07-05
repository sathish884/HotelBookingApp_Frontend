import { Modal } from 'antd'
import React from 'react'

function PopupModels({ isModelOpen, setIsModalOpen, readMoreModel, setReadMoreModel }) {

    const listStyle = {
        listStyleType: 'none'
    }
    const listItems = {
        lineHeight:'25px'
    }

    return (
        <>
            <Modal title='Property Rules and Inforamations' open={isModelOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
                <hr />
                <div className='pb-3'>
                    <h5 className='pb-3'>Restriction</h5>
                    <ul style={listStyle}>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Guests below 18 years of age are not allowed at the property.</li>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s)</li>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Pets are not allowed.</li>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Outside food is not allowed</li>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Smoking within the premises is not allowed</li>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Optional : Rollaway bed fee: INR 1200.0 per night</li>
                    </ul>
                </div>

                <div className='pb-3'>
                    <h5 className='pb-3'>Guest Profile</h5>
                    <ul style={listStyle}>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Unmarried couples allowed.</li>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Guests below 18 years of age are not allowed at the property.</li>
                    </ul>
                </div>

                <div className='pb-3'>
                    <h5 className='pb-3'>ID Proof Related</h5>
                    <ul style={listStyle}>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s)</li>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Local ids are allowed.</li>
                    </ul>
                </div>
            </Modal>

            <Modal title="More Details of Property" open={readMoreModel} onOk={() => setReadMoreModel(false)} onCancel={() =>{setReadMoreModel(false)}}>
            <hr />
                <div className='pb-3'>
                    <h5 className='pb-3'>Smoking/Alcohol consumption Rules</h5>
                    <ul style={listStyle}>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;There are no restrictions on alcohol consumption.</li>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Smoking within the premises is not allowed</li>
                    </ul>
                </div>

                <div className='pb-3'>
                    <h5 className='pb-3'>Pet(s) Related</h5>
                    <ul style={listStyle}>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Pets are not allowed.</li>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;There are no pets living on the property</li>
                    </ul>
                </div>

                <div className='pb-3'>
                    <h5 className='pb-3'>Property Accessibility</h5>
                    <ul style={listStyle}>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;This property is accessible to guests who use a wheelchair. Guests are requested to carry their own wheelchair.</li>
                      
                    </ul>
                </div>

                <div className='pb-3'>
                    <h5 className='pb-3'>Other Rules</h5>
                    <ul style={listStyle}>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;
                        Allows private parties or events.</li>
                      
                    </ul>
                </div>
                <div className='pb-3'>
                    <h5 className='pb-3'>Guest Profile (Hourly)</h5>
                    <ul style={listStyle}>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;Unmarried couples are allowed in hourly stay rooms.</li>
                    </ul>
                </div>
                <div className='pb-3'>
                    <h5 className='pb-3'>Child & Extra Bed Policy</h5>
                    <ul style={listStyle}>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;An extra bed will be provided to accommodate any child included in the booking for a charge mentioned below.</li>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;INR 1200 will be charged for an extra cot per child. (To be paid at the property).</li>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;An extra bed will be provided to accommodate any additional guest included in the booking for a charge mentioned below.</li>
                        <li style={listItems}><i class="bi bi-caret-right-fill"></i>&nbsp;&nbsp;INR 1200 will be charged for an extra cot per guest. (To be paid at the property)</li>  
                    </ul>
                </div>
            </Modal>
        </>
    )
}

export default PopupModels