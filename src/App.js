import { Layout, Space, Typography } from 'antd';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetail from './components/CryptoDetail';
import Exchanges from './components/Exchanges';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import News from './components/News';


function App() {
  return (

    <div className="app">
      <div className="navbar">
        <Navbar></Navbar>
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/exchanges">
                <Exchanges />
              </Route>
              <Route path="/crypotocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route path="/crypto/:coinId">
                <CryptoDetail />
              </Route>
              <Route path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className='footer' >
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptoverse <br />
            All right reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>

    </div >
  );
}

export default App;
