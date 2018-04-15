import React from 'react';
import { Row, Col, Card, Modal, Button } from 'antd';

const { Meta } = Card;

class PhotoGallery extends React.Component{
    state = { 
        visible: false, // array of modal states / an object for every single modal
        modals:[
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
            {visible: false},
        ]
    }
    
    showModal = (i) => {
        this.state.modals.map((modal,index)=>{
            if(i===index){
                modal.visible = !modal.visible
                return modal;
            }
            return modal;
        })
      this.setState({
        visible: true,
      });
    } 

    handleCancel = () => {
        this.setState({ 
            modals: this.state.modals.map(modal => {
                return {
                    visible: false
                }
            }) 
        });
    }

    render(){
        const { visible } = this.state;
        return(
            <div>
                <h1 className='center-heading' style={{padding: '3rem'}} >
                    Photo Gallery
                </h1>
                
                <div style={{maxWidth: '90%', margin: '0 auto'}}>
                <Row gutter={16} type='flex' justify='space-around'>
                    <Col xs={24} sm={24} md={24} xl={24}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(0)}><img style={{width: '100%'}} src='/photos/1-big.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bella Muskoka at night"
                                    visible={this.state.modals[0].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/1-big.jpg' />
                                </Modal>
                            </div>
                            <Meta title='Bella Muskoka' style={{fontFamily: 'Nanum Gothic, sans-serif'}} />
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={6}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(1)}><img style={{width: '100%'}} src='/photos/2.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Back of Bella Muskoka at night"
                                    visible={this.state.modals[1].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/2.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={6}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(2)}><img style={{width: '100%'}} src='/photos/3.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bella Muskoka from the dock"
                                    visible={this.state.modals[2].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/3.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={6}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(3)}><img style={{width: '100%'}} src='/photos/4.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="The dock at night"
                                    visible={this.state.modals[3].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/4.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={6}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(4)}><img style={{width: '100%'}} src='/photos/5.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bella Muskoka at dusk"
                                    visible={this.state.modals[4].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/5.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={24} xl={24}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(5)}><img style={{width: '100%'}} src='/photos/6-big.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Great Room"
                                    visible={this.state.modals[5].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/6-big.jpg' />
                                </Modal>
                            </div>
                            <Meta title='Great Room' style={{fontFamily: 'Nanum Gothic, sans-serif'}}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={6}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(6)}><img style={{width: '100%'}} src='/photos/7.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Great Room"
                                    visible={this.state.modals[6].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/7.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={6}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(7)}><img style={{width: '100%'}} src='/photos/8.1.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Great Room"
                                    visible={this.state.modals[7].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/8.1.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={6}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(8)}><img style={{width: '100%'}} src='/photos/8.2.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Great Room"
                                    visible={this.state.modals[8].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/8.2.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={6}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(9)}><img style={{width: '100%'}} src='/photos/8.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Foyer, view from Great Room"
                                    visible={this.state.modals[9].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/8.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={24} xl={24}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(10)}><img style={{width: '100%'}} src='/photos/11-big.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Kitchen"
                                    visible={this.state.modals[10].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/11-big.jpg' />
                                </Modal>
                            </div>
                            <Meta title='Kitchen' style={{fontFamily: 'Nanum Gothic, sans-serif'}}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={6}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(11)}><img style={{width: '100%'}} src='/photos/10.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Kitchen"
                                    visible={this.state.modals[11].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/10.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={6}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(12)}><img style={{width: '100%'}} src='/photos/9.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Dining Area and Kitchen"
                                    visible={this.state.modals[12].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/9.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={6}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(13)}><img style={{width: '100%'}} src='/photos/12.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Kitchen"
                                    visible={this.state.modals[13].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/12.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={6}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(14)}><img style={{width: '100%'}} src='/photos/14.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Kitchen and Breakfast Bar"
                                    visible={this.state.modals[14].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/14.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={24} xl={24}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(15)}><img style={{width: '100%'}} src='/photos/13-big.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Dining Area"
                                    visible={this.state.modals[15].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/13-big.jpg' />
                                </Modal>
                            </div>
                            <Meta title='Dining' style={{fontFamily: 'Nanum Gothic, sans-serif'}}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(16)}><img style={{width: '100%'}} src='/photos/15.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Muskoka Room"
                                    visible={this.state.modals[16].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/15.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(17)}><img style={{width: '100%'}} src='/photos/16.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Muskoka Room"
                                    visible={this.state.modals[17].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/16.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={24} xl={24}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(18)}><img style={{width: '100%'}} src='/photos/20masterBed2-big.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Master Bedroom"
                                    visible={this.state.modals[18].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/20masterBed2-big.jpg' />
                                </Modal>
                            </div>
                            <Meta title='Master Bedroom' style={{fontFamily: 'Nanum Gothic, sans-serif'}} />
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(19)}><img style={{width: '100%'}} src='/photos/19masterBed.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Master Bedroom"
                                    visible={this.state.modals[19].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/19masterBed.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(20)}><img style={{width: '100%'}} src='/photos/21masterBath.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Master Ensuite Bathroom"
                                    visible={this.state.modals[20].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/21masterBath.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={24} xl={24}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(21)}><img style={{width: '100%'}} src='/photos/17-big.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="View of Great Room from second level"
                                    visible={this.state.modals[21].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/17-big.jpg' />
                                </Modal>
                            </div>
                            <Meta title='Upper Level' style={{fontFamily: 'Nanum Gothic, sans-serif'}}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={8} md={8} xl={8}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(22)}><img style={{width: '100%'}} src='/photos/jr-mstr.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Jr. Master Bedroom"
                                    visible={this.state.modals[22].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/jr-mstr.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={8} md={8} xl={8}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(23)}><img style={{width: '100%'}} src='/photos/jr-en-bath.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Jr. Ensuite Bathroom"
                                    visible={this.state.modals[23].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/jr-en-bath.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={8} md={8} xl={8}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(24)}><img style={{width: '100%'}} src='/photos/jr-en-shr.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Jr. Ensuite Bathroom, shower"
                                    visible={this.state.modals[24].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/jr-en-shr.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={24} xl={24}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(25)}><img style={{width: '100%'}} src='/photos/18-big.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="View of Great Room from second level"
                                    visible={this.state.modals[25].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/18-big.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={8} md={8} xl={8}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(26)}><img style={{width: '100%'}} src='/photos/bdrm4.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bedroom 4"
                                    visible={this.state.modals[26].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/bdrm4.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={8} md={8} xl={8}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(27)}><img style={{width: '100%'}} src='/photos/bath.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bathroom, second level"
                                    visible={this.state.modals[27].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/bath.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={8} md={8} xl={8}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(28)}><img style={{width: '100%'}} src='/photos/bdrm3.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bedroom 3"
                                    visible={this.state.modals[28].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/bdrm3.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={24} xl={24}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(29)}><img style={{width: '100%'}} src='/photos/mh-outfront-big.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bella Muskoka"
                                    visible={this.state.modals[29].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/mh-outfront-big.jpg' />
                                </Modal>
                            </div>
                            <Meta title='Outdoors' style={{fontFamily: 'Nanum Gothic, sans-serif'}} />
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(30)}><img style={{width: '100%'}} src='/photos/mh-outfront2.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bella Muskoka"
                                    visible={this.state.modals[30].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/mh-outfront2.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(31)}><img style={{width: '100%'}} src='/photos/mh-outback2.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bella Muskoka, back of house"
                                    visible={this.state.modals[31].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/mh-outback2.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(32)}><img style={{width: '100%'}} src='/photos/mh-outback.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bella Muskoka, back of house"
                                    visible={this.state.modals[32].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/mh-outback.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(33)}><img style={{width: '100%'}} src='/photos/mh-outback-frmdock.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bella Muskoka, view from dock"
                                    visible={this.state.modals[33].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/mh-outback-frmdock.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={24} xl={24}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(34)}><img style={{width: '100%'}} src='/photos/on-dock.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Dock View"
                                    visible={this.state.modals[34].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/on-dock.jpg' />
                                </Modal>
                            </div>
                            <Meta title='Dock Views' style={{fontFamily: 'Nanum Gothic, sans-serif'}}/>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(35)}><img style={{width: '100%'}} src='/photos/dock-day.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="View of Dock"
                                    visible={this.state.modals[35].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/dock-day.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    {/* <Col xs={24} sm={8} md={8} xl={8}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(36)}><img style={{width: '100%'}} src='/photos/mh-outback-frmdock.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Basic Modal"
                                    visible={this.state.modals[36].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/mh-outback-frmdock.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col> */}

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(37)}><img style={{width: '100%'}} src='/photos/patio-view.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="View of Dock"
                                    visible={this.state.modals[37].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/patio-view.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(38)}><img style={{width: '100%'}} src='/photos/patio2.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Patio"
                                    visible={this.state.modals[38].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/patio2.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(39)}><img style={{width: '100%'}} src='/photos/patio.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Patio, Lounge"
                                    visible={this.state.modals[39].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/patio.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>
                </Row>
            <br />
            <h3 style={{textAlign: 'center'}} >Bunkie</h3>
                <Row gutter={16} type='flex' justify='space-around'>
                    <Col xs={24} sm={24} md={24} xl={24}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(40)}><img style={{width: '100%'}} src='/photos/bnk-out.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bunkie exterior"
                                    visible={this.state.modals[40].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/bnk-out.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(41)}><img style={{width: '100%'}} src='/photos/bnk-living.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bunkie Living Area"
                                    visible={this.state.modals[41].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/bnk-living.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(42)}><img style={{width: '100%'}} src='/photos/bnk-lounge.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bunkie Sitting Area"
                                    visible={this.state.modals[42].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/bnk-lounge.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(43)}><img style={{width: '100%'}} src='/photos/bnk-kitch.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bunkie Jr. Kitchen"
                                    visible={this.state.modals[43].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/bnk-kitch.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(44)}><img style={{width: '100%'}} src='/photos/bnk-dine.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bunkie Dining Area"
                                    visible={this.state.modals[44].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/bnk-dine.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(45)}><img style={{width: '100%'}} src='/photos/bnk-bdrm5.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bedroom 5, Bunkie"
                                    visible={this.state.modals[45].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/bnk-bdrm5.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(46)}><img style={{width: '100%'}} src='/photos/bnk-bdrm6.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bedroom 6, Bunkie"
                                    visible={this.state.modals[46].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/bnk-bdrm6.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false}
                            cover={<div style={{width: '100%'}} onClick={()=>this.showModal(47)} ><img style={{width: '100%'}} alt='test' src='/photos/bnk-bdrm7.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bedroom 7, Bunkie"
                                    visible={this.state.modals[47].visible} //STATE FOR ALL!!!!!! SUCKA
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/bnk-bdrm7.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={12} xl={12}>
                        <Card bordered={false} 
                            cover={<div style={{width:'100%'}} onClick={()=>this.showModal(48)}><img style={{width:'100%'}} alt='test' src='/photos/bnk-bath.jpg' /></div>}>
                            <div>
                                <Modal
                                    title="Bathroom, Bunkie"
                                    visible={this.state.modals[48].visible}
                                    footer={null}
                                    onCancel={this.handleCancel}
                                    width='75vw'
                                    style={{top: 10}}
                                >
                                    <img style={{width:'100%'}} src='/photos/bnk-bath.jpg' />
                                </Modal>
                            </div>
                        </Card>
                    </Col>
                </Row>
                </div>

            </div>
        )
    }
}


export default PhotoGallery;