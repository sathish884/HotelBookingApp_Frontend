import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
import './Footer.css'

const footerStyle = {
    backgroundColor: '#001529',
    color: 'white',
    zIndex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const dispalyStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
}



function Footers() {


    return (
        <>
            <Footer style={footerStyle}>
                {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
                <div className="row" style={{ width: '100%' }}>
                    <div className="col-4 p-3">
                        <p>Download OYO app for exciting offers.</p>
                        <div style={dispalyStyle}>
                            <button type="button" class="btn btn-secondary">Secondary</button>
                            <button type="button" class="btn btn-secondary">Secondary</button>
                        </div>
                    </div>
                    <div className="col-4 p-3">
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <ul style={{ listStyleType: 'none', lineHeight:'25px' }}>
                                <li ><a href="" className='list-items'>About us</a></li>
                                <li><a href="" className='list-items'>Teams / Carrears</a></li>
                                <li><a href="" className='list-items'>Blogs</a></li>
                                <li><a href="" className='list-items'>Support</a></li>
                            </ul>
                            <ul style={{ listStyleType: 'none', lineHeight:'25px'}}>
                                <li><a href="" className='list-items'>About us</a></li>
                                <li><a href="" className='list-items'>Teams / Carrears</a></li>
                                <li><a href="" className='list-items'>Blogs</a></li>
                                <li><a href="" className='list-items'>Support</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-4 p-3">
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <ul style={{ listStyleType: 'none', lineHeight:'25px'}}>
                                <li ><a href="" className='list-items'>Terms and Conditions</a></li>
                                <li><a href="" className='list-items'>Gust Policies</a></li>
                                <li><a href="" className='list-items'>Privacy Policies</a></li>
                                <li><a href="" className='list-items'>Trust Safty</a></li>
                            </ul>
                            <ul style={{ listStyleType: 'none', lineHeight:'25px'}}>
                                <li><a href="" className='list-items'>Cyber Security</a></li>
                                <li><a href="" className='list-items'>Cyber Security Awarness</a></li>
                                <li><a href="" className='list-items'>Responsible Disclosures</a></li>
                                <li><a href="" className='list-items'>Advertize Your Home</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </Footer>
        </>
    )
}

export default Footers