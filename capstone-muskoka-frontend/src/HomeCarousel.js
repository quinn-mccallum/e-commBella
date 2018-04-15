import React from 'react';
import { Carousel, Row, Col } from 'antd';

class HomeCarousel extends React.Component{
    render(){
        return(
            <div style={{maxWidth: '100%', margin: '0 auto'}} >
                <Carousel autoplay effect='fade' >
                    <div>
                        <img src='/photos/mh-outfront-big.jpg' style={{width: '100vw'}}/>
                    </div>

                    <div>
                        <img src='/photos/1-big.jpg' style={{width: '100vw'}} />
                    </div>

                    <div>
                        <img src='/photos/3.jpg' style={{width: '100vw'}}/>
                    </div>

                    <div>
                        <img src='/photos/on-dock.jpg' style={{width: '100vw'}}/>
                    </div>

                    <div>
                        <img src='/photos/6-big.jpg' style={{width: '100vw'}} />
                    </div>

                    <div>
                        <img src='/photos/20masterBed2-big.jpg' style={{width: '100vw'}} />
                    </div>

                    <div>
                        <img src='/photos/17-big.jpg' style={{width: '100vw'}} />
                    </div>
                </Carousel>

                <div className='overlay' >
                    <Row type='flex' justify='center' align='middle'>
                        <Col>
                            <h1 style={{fontFamily: 'Abril Fatface, cursive', color: 'white', fontSize: '96px', marginTop: '45vh'}}>Welcome to Bella Muskoka</h1>
                        </Col>
                    </Row> 
                </div>

            </div>
        )
    }
}

export default HomeCarousel;