import Login from './Components/AuthComponents/Login'
import Headers from './Components/DashboardComponents/Headers'
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import NavRouters from './Routers/NavRouters';
import Footers from './Components/DashboardComponents/Footers';
import 'leaflet/dist/leaflet.css';

function App() {


  return (
    <>


      <Router>
        <Layout style={{ minHeight: '100vh' }}>

          {/* <Login /> */}

          <Headers />
          <NavRouters />
          <Footers />

        </Layout>
      </Router>
    </>
  )
}

export default App
