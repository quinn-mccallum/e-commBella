import React from 'react';
import { Card, Row, Col, Modal, Button } from 'antd';
import Specs from './Specs';
import { GoogleMap, Marker } from 'react-google-maps';
import MapOfArea from './MapOfArea';


class Info extends React.Component {
    state = {
        visible: false
    }


    showModal = () => {
        this.setState({
            visible: true,
            })
        } 

    handleCancel = () => {
        this.setState({ 
            visible: false
        }) 
    }

    render(){
        return(
            <div>
                <h1 className='center-heading' style={{padding: '3rem'}} >
                    About
                </h1>
                
                <Row type='flex' justify='center' >
                    <Col xs={24} sm={20} >
                        <Card 
                            // style={{width: '75%', margin: '2.5% auto'}} 
                            >
                            <h2 className='center-heading' style={{fontSize: '2rem'}} >
                                Area
                            </h2>
                            <h4 className='center-heading' style={{fontStyle:'italic', fontFamily: 'Nanum Gothic, sans-serif', fontSize: '1rem'}} >
                                Located in Port Carling, Muskoka, Ontario, Canada on Lake Muskoka
                            </h4>
                            <p style={{padding: '1rem 5rem'}} >
                                Bella Muskoka cottage is located in close proximity to Port Carling (5 min), Windermere (12 min) and Bracebridge (18 min). Located in Scarcliffe bay on the eastern side of Lake Muskoka just a little past the Millionaires Row shoreline of Lake Muskoka. Nice access across the lake to Walkers Point or through the Indian River to Port Carling.
                            </p>
                        </Card>
                    </Col>
                </Row>

                <Row type='flex' justify='center' >
                    <Col span={20} style={{height: '28em'}} >
                        <Card style={{height: '30em'}} >
                            <div>
                                <MapOfArea />
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row type='flex' justify='center' style={{paddingTop: '3rem'}}>
                    <Col xs={24} sm={20}>
                        <Card 
                            // style={{width: '75%', margin: '2.5% auto'}} 
                            >
                            <h2 className='center-heading' style={{fontSize: '2rem'}} >
                                Property
                            </h2>
                            <h4 className='center-heading' style={{fontStyle:'italic', fontFamily: 'Nanum Gothic, sans-serif', fontSize: '1rem'}} >
                                Brand new south-facing build on Lake Muskoka! 
                            </h4>
                            <br/>

                            <Row type='flex' justify='center' >
                                <Col span={20}>
                                    <Card>
                                        <h2 className='center-heading' style={{fontFamily: 'Abril Fatface, cursive'}} >
                                            Main House
                                        </h2>
                                        <h3 style={{fontFamily: 'Nanum Gothic, sans-serif', fontWeight: 'bold'}}>
                                            Main Floor
                                        </h3>
                                        <p style={{fontFamily: 'Nanum Gothic, sans-serif'}}>
                                            Elegant great room with wood burning fireplace and comfortable upscale sofa and side chairs. 52’’ flatscreen TV tucks away. Living edge dining table to seat 8 and granite counters and brand new stainless appliances with granite counter top.  Gas stove.  Nespresso coffee maker.
                                        </p>
                                        <p style={{fontFamily: 'Nanum Gothic, sans-serif'}}>
                                            Powder room at entry.  Muskoka Room has nice oversized wicker furniture to relax in after a day in the sun.  Walk from Muskoka Room to deck.  Great Room also walks out to deck.  Deck has nice patio set to watch the sun set.  Master King size Bedroom with walk out to deck and 4 piece ensuite.
                                        </p>
                                        <h3 style={{fontFamily: 'Nanum Gothic, sans-serif', fontWeight: 'bold'}}>
                                            Upper Floor
                                        </h3>
                                        <p style={{fontFamily: 'Nanum Gothic, sans-serif'}}>
                                            Upper level overlooks the Great Room. Three bedrooms and two bathrooms are located on the second level, including the Junior Master with walk-in closet and ensuite.
                                        </p>
                                    </Card>
                                </Col>
                            </Row>

                            <br />
                            <br />
                            <Row type='flex' justify='center' >
                                <Col span={20}>
                                    <Card>
                                        <h2 className='center-heading' style={{fontFamily: 'Abril Fatface, cursive'}} >
                                            Bunkie
                                        </h2>
                                        <p style={{fontFamily: 'Nanum Gothic, sans-serif'}}>
                                            Consists of 3 bedrooms, open sitting area and dining area, compact kitchen and 3-piece bathroom. All brand-new beds, mattresses, furniture and linens/towels. Lots of windows allow for lots of sunlight!
                                        </p>
                                    </Card>
                                </Col>
                            </Row>

                            <br />
                            <br />
                            <Row>
                                <Col xs={0} sm={0} md={24} >
                                    {/* <Card> */}
                                        <h2 className='center-heading' style={{fontFamily: 'Abril Fatface, cursive'}}  >
                                            Stats, at a glance
                                        </h2>
                                        <Specs />
                                    {/* </Card> */}
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                    

                <Row type='flex' justify='center' style={{paddingTop: '2rem', marginBottom: '3rem'}}>
                    <Col xs={24} sm={20}>
                        <Card >
                            <Row gutter={36}>
                                <Col xs={24} sm={12}>
                                    <h2 className='font' >
                                        Features
                                    </h2>
                                    <ul>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Air Conditioning</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Laundry</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>52" flatscreen TV</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Fire place</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Brand-new Dock</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Covered boat port</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Fire pit</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Shuffleboard court</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Gas stove</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Gorgeous patio furniture with cushions</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Beautiful all-day sun from south exposure</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Sunsets to the west in the bay</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Everything is new!</li>
                                    </ul>
                                </Col>
                                    
                                <Col xs={24} sm={12} >

                                    <h2 className='font' >
                                        House Rules
                                    </h2>
                                    <ul>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Maximum 14 guests</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>(Children welcome)</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Non-smoking cottage</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Pets considered, must sign Pet Waiver</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Check-in time: 4:00pm</li>
                                        <li style={{fontFamily: 'Nanum Gothic, sans-serif'}}>Check-out time: 10:00am</li>                        
                                    </ul>

                                    <h2 className='font' style={{display: 'inline-block', paddingTop: '1.5rem'}} >
                                        Parking:&emsp;
                                    </h2>
                                    <p style={{display: 'inline-block', fontFamily: 'Nanum Gothic, sans-serif'}} >
                                        5 cars
                                    </p>

                                    <Button onClick={this.showModal} style={{display: 'block', fontFamily: 'Abril Fatface, cursive', fontSize: '1.3rem', margin: '1rem 0'}}>
                                        Pricing
                                    </Button>
                                    <Modal
                                        title="Pricing"
                                        visible={this.state.visible}
                                        footer={null}
                                        onCancel={this.handleCancel}
                                        width='75vw'
                                        style={{top: 10, fontFamily: 'Abril Fatface, cursive'}}
                                    >
                                        <p>$$$$$$$$$</p>
                                    </Modal>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Info;