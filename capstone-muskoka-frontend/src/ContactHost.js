import React from 'react';
import { Card, Row, Col } from 'antd';

class ContactHost extends React.Component{
    render(){
        return(
            <div style={{height: '85vh'}} >
                <Row type='flex' justify='space-around' align='middle' style={{padding: '5rem'}} >
                    <Col span={16}>
                        <Card>
                            <h1 className='center-heading' style={{padding: '2rem'}} >
                                Contact Host
                            </h1>
                            <p style={{padding: '3rem', fontFamily: 'Nanum Gothic, sans-serif'}} >
                                For further inquires, <br/>please feel free to contact the host <a class='email' href='mailto:bella.muskoka@gmail.com'>bella.muskoka@gmail.com</a>
                            </p>

                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ContactHost;