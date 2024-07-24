import React from 'react'
import { Layout } from 'antd';
const { Header } = Layout;

const headerStyle = {
  backgroundColor: '#001529',
  color: 'white',
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
}

function Headers() {

 

  return (
    <>
      <Header style={headerStyle}>
        
      </Header>
    </>
  );
}

export default Headers