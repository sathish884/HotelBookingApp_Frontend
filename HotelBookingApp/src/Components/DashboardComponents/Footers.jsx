import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const footerStyle = {
    backgroundColor: '#001529',
    color: 'white',
    // position: 'fixed',
    // bottom: 0,
    zIndex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

function Footers() {

    
    return (
        <>
            <Footer style={footerStyle}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </>
    )
}

export default Footers