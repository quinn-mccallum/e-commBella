import React, { Component } from 'react';
import './App.css';
import PhotoGallery from './PhotoGallery';
import Info from './Info';
import Booking from './Booking';
import ContactHost from './ContactHost';
import HomeCarousel from './HomeCarousel';
import 'antd/dist/antd.css';
import GoogleKey from './GoogleKey';
import { Switch, Link, Route } from 'react-router-dom';
import { Row, Col, Divider, Layout } from 'antd';
import axios from 'axios';
import { StripeProvider } from 'react-stripe-elements';

const { Header, Footer, Content } = Layout;

class App extends Component {
  constructor(){
    super()
    this.state = {
      bookings: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8080/booking')
      .then(results => {
        console.log(results);
        let formattedDates = results.data.reduce((acc, ele)=>{
          acc.push(ele.arrival_date);
          acc.push(ele.departure_date);
          return acc
        }, [])
        this.setState({
          bookings: formattedDates
        })
      })
      .catch(error => {
        console.log(error);
      })
  }


  render() {
    return (
      <StripeProvider apiKey={GoogleKey.stripe}>
      <div className="App">
      <Layout>
        <Header className='center-heading nav-bar' style={{position: 'fixed', width: '100%', height: '72px', zIndex: '4'}} >
          <Row type='flex' justify='space-around' align='middle' >
            <Col span={4} >
              <Link to='/info' className='nav-link' style={{fontSize: '1.3rem', letterSpacing: '0.1rem', textDecoration: 'none'}}>About</Link>
            </Col>

            <Col span={4} >
              <Link to='/photos' className='nav-link' style={{fontSize: '1.3rem', letterSpacing: '0.1rem', textDecoration: 'none'}}>Photos</Link>
            </Col>

            <Col span={4} >
              <Link to='/' className='nav-link main-link' style={{fontSize: '1.7rem', letterSpacing: '0.1rem', textDecoration: 'none'}} >Bella Muskoka</Link>
            </Col>

            <Col span={4} >
              <Link to='/booking' className='nav-link' style={{fontSize: '1.3rem', letterSpacing: '0.1rem', textDecoration: 'none'}}>Stay</Link>
            </Col>

            <Col span={4} >
              <Link to='/contact' className='nav-link' style={{fontSize: '1.3rem', letterSpacing: '0.1rem', textDecoration: 'none'}}>Inquire</Link>
            </Col>
          </Row>
        </Header>

      <Content style={{marginTop: '72px', backgroundColor: 'white'}} >
        <Switch>
          <Route path='/' exact component={ HomeCarousel } />
          <Route path='/photos' component={ PhotoGallery } />
          <Route path='/info' component={ Info } />
          <Route path='/booking' render={()=> <Booking bookings={this.state.bookings} /> } />
          <Route path='/contact' component={ ContactHost } />
        </Switch>
      </Content>


            <Footer
              // style={{position: 'fixed', width: '100%', height: '64px', zIndex: '2'}}
              >
              <Row align='bottom' type='flex' justify='center' >
                <Col>
                  <p style={{textAlign: 'center', paddingTop: '12px', fontSize: '1rem', fontFamily: 'Nanum Gothic, sans-serif'}} >
                    Quinn McCallum <span style={{fontSize: '1.8em'}} >&#129412;</span>
                  </p>
                </Col>
              </Row>
            </Footer>

      </Layout>

      </div>
      </StripeProvider>
    );
  }
}

export default App;
