import React from 'react'
import { Layout, Col, Row } from 'antd';
const { Footer } = Layout;
import './Footers.css';

const style = {
   // background: '#0092ff',
    padding: '8px 0',
};

function Footers() {
    return (
        <>
            <Footer className='footerStyle'>
                <Row
                    gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}
                >
                    <Col className="gutter-row" span={6}>
                        <div style={style} className='gutterRowOne'>
                            <p>Download OYO app for exciting offers.</p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                <button type="button" className="btn btn-secondary"><i className="bi bi-apple" style={{ fontSize: '20px', color: 'black' }}></i>&nbsp;<span style={{ fontSize: '12px' }}>Download on the <br /><span style={{ fontSize: '18px' }}> App Store</span></span></button>
                                <button type="button" className="btn btn-secondary"><img src="src/assets/imgs/google-play.webp" alt="" width={20} height={20} />&nbsp;<span style={{ fontSize: '12px' }}>Get it on <br /><span style={{ fontSize: '18px' }}>Google Play</span></span></button>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <ul style={{ listStyleType: 'none', lineHeight: '25px' }}>
                                <li ><a href="" className='list-items'>About us</a></li>
                                <li><a href="" className='list-items'>Teams / Carrears</a></li>
                                <li><a href="" className='list-items'>Blogs</a></li>
                                <li><a href="" className='list-items'>Support</a></li>
                            </ul>

                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <ul style={{ listStyleType: 'none', lineHeight: '25px' }}>
                                <li ><a href="" className='list-items'>Terms and Conditions</a></li>
                                <li><a href="" className='list-items'>Gust Policies</a></li>
                                <li><a href="" className='list-items'>Privacy Policies</a></li>
                                <li><a href="" className='list-items'>Trust Safty</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <ul style={{ listStyleType: 'none', lineHeight: '25px' }}>
                                <li><a href="" className='list-items'>Cyber Security</a></li>
                                <li><a href="" className='list-items'>Cyber Security Awarness</a></li>
                                <li><a href="" className='list-items'>Responsible Disclosures</a></li>
                                <li><a href="" className='list-items'>Advertize Your Home</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>


                <hr />
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h6>Feeling lucky? Try out a random OYO. Find OYO</h6>
                    <div className="vr"></div>
                    <h6>Have Queries ? Call for any assistance on 0124-6201600</h6>
                </div>
                <hr />
                <div style={{ textAlign: 'center' }}>
                    All material herein © 2005–2024 Agoda Company Pte. Ltd. All Rights Reserved.
                    <br />
                    Agoda is part of Booking Holdings Inc., the world leader in online travel & related services.
                </div>

            </Footer>
        </>
    )
}

export default Footers