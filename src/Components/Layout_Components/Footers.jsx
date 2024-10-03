import React from 'react'
import { Layout, Col, Row } from 'antd';
const { Footer } = Layout;
import './Footers.css';
import { Link } from 'react-router-dom';

const style = {
    // background: '#0092ff',
    padding: '8px 0',
};

function Footers() {
    return (
        <>
            {/* <Footer className='footerStyle'>
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

            </Footer> */}

            <footer className='footer-section'>
                <div className="container">
                    <div className="footer-text">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="ft-about">
                                    <div className="logo">
                                        <a href="#">
                                            <img src="https://i.pinimg.com/736x/f2/ba/75/f2ba75f08927193a60cf961a6c7af008.jpg" width={250} height={100} alt="" />
                                        </a>
                                    </div>
                                    <p>We inspire and reach millions of travelers<br /> across 90 local websites</p>
                                    <div class="fa-social">
                                        <a href="#"><i class="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-discord"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                        <a href="#"><i className="bi bi-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 offset-lg-1">
                                <div className="ft-contact">
                                    <h6>Contact Us</h6>
                                    <ul style={{ padding: '0px' }}>
                                        <li>(12) 345 67890</li>
                                        <li>info.colorlib@gmail.com</li>
                                        <li>856 Cordia Extension Apt. 356, Lake, United State</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 offset-lg-1">
                                <div className="ft-newslatter">
                                    <h6>New latest</h6>
                                    <p>Get the latest updates and offers.</p>
                                    <form action="#" className="fn-form">
                                        <input type="text" placeholder="Email" />
                                        <button type="submit"><i className="bi bi-send-fill"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-option">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <ul style={{ padding: '0px' }}>
                                    <li><Link style={{textDecoration:'none'}} to={'/contact'}>Contact</Link></li>
                                    <li><a href="#" style={{textDecoration:'none'}}>Terms of use</a></li>
                                    <li><a href="#" style={{textDecoration:'none'}}>Privacy</a></li>
                                    <li><a href="#" style={{textDecoration:'none'}}>Environmental Policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-5">
                                {/* <div className="col-lg-5"> */}
                                <div className="co-text">
                                    <p>
                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="bi bi-heart-fill" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    </p>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footers