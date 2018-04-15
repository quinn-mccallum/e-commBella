import React from 'react';
import { Calendar, Alert, Form, Button, Input, Col, Cascader, Card, DatePicker, Row, Select, Switch, Modal } from 'antd';
import moment from 'moment';
import axios from 'axios';
import BookingCalendar from 'react-booking-calendar';
import FormInjector from './FormInjector';

const FormItem = Form.Item;
const InputGroup = Input.Group;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const Option = Select.Option;
const { TextArea } = Input;


const prefix = [{
    label: 'Dr.',
    value: 'Dr.'
}, {
    label: 'Miss',
    value: 'Miss'
}, {
    label: 'Ms.', 
    value: 'Ms.'
}, {
    label: 'Mrs.',
    value: 'Mrs'
}, {
    label: 'Mr.',
    value: 'Mr.'
}, {
    label: 'Mr. & Mrs.',
    value: 'Mr. & Mrs'
}, {
    label: 'Mx.',
    value: 'Mx.'
}, {
    label: 'Other',
    value: 'Other'
}]

const amtOfGuests = [{
    label: '1',
    value: 1
}, {
    label: '2',
    value: 2
}, {
    label: '3', 
    value: 3
}, {
    label: '4',
    value: 4
}, {
    label: '5',
    value: 5
}, {
    label: '6', 
    value: 6
}, {
    label: '7',
    value: 7
}, {
    label: '8',
    value: 8
}, {
    label: '9',
    value: 9
}, {
    label: '10',
    value: 10
}, {
    label: '11',
    value: 11
}, {
    label: '12',
    value: 12
}, {
    label: '13',
    value: 13
}, {
    label: '14',
    value: 14
}]

const amtOfKidsAndPets =[{
    value: 0,
    label: '0'
}, {
    value: 1,
    label: '1'
}, {
    value: 2,
    label: '2'
}, {
    value: 3,
    label: '3'
}, {
    value: 4,
    label: '4'
}, {
    value: 5,
    label: '5 or more'
}]

class Booking extends React.Component{
    state = {
        value: moment(),   
        disablePets: true, 
        visible: false  
      }

      togglePets = boolean => {
          this.setState({
              disablePets: !boolean
          })
      }

      bookIt=(e)=>{
          e.preventDefault();
          this.props.form.validateFields((err, values) => {
              if(!err){
                  axios.post('http://localhost:8080/booking', values)
                    .then((results) => {
                        console.log(results);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

              } else {
                  console.log(err);
              }
          })
      }

      dateFormatter(arrayOfDates){
        function helper(day){
          let slicePoint = day.indexOf('T')
          let preFormat = day.slice(0,slicePoint)
          let preDate = preFormat.split('-')
          let preMap = preDate.map((ele, i)=> i === 1 ? Number(ele) - 1 : Number(ele))
          return preMap
        }
        
        let thingsToDisplay = arrayOfDates.reduce((acc, ele, i, arr)=>{
          let data = helper(ele)
          if(i%2 === 1){
            acc.push(new Date(...data))
          }
          else{
            let nextDate = arr[i+1]
            let nextData = helper(nextDate)
            for(let j=data[2]+1; j< nextData[2]; j++){
              let d = moment(ele).add(nextData[2]-j, 'days').format('l').split('/').map((e, i)=>Number(e))
              acc.push(new Date(d[2], d[0]-1, d[1]))
            }
            acc.push(new Date(...data))
          }
          return acc
        }, [])
        return thingsToDisplay
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
      

      disabledDate(current){
          return current && current < moment().endOf('day');
      }


      render() {
        const { value } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
          <div >
                <Row type='flex' justify='center' >
                    <Col xs={24} sm={22} >
                        <h1 className='center-heading' style={{padding: '3rem'}}>
                                Availability
                        </h1>
                        <Card>
                            <Row type='flex' justify='center' >
                                <Col span={20} >
                                    <BookingCalendar className='booking-calendar' bookings={this.dateFormatter(this.props.bookings)} />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                <Row type='flex' justify='center' style={{padding: '3rem'}} >
                    <Col xs={24} sm={22} >
                        <div>
                            <Card >
                                <h1 className='center-heading' >
                                    Booking
                                </h1>
                                <Form onSubmit={this.bookIt}>
                                    <InputGroup size='large' >
                                        <Row type='flex' justify='center' >
                                            <Col>
                                                <FormItem label='Select Dates' style={{marginTop: '3rem', paddingBottom: '3rem'}} >
                                                {
                                                    getFieldDecorator('dates', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <RangePicker
                                                            defaultValue={[moment().add(1, 'days'), moment().month(moment().get('month')+ 1)]}
                                                            format={dateFormat} 
                                                            disabledDate={this.disabledDate}
                                                        />
                                                    )
                                                }
                                            
                                                </FormItem>
                                            </Col>
                                        </Row>
                                    </InputGroup>

                                    <InputGroup size='large' >
                                        <Row gutter={16}>
                                            <Col xs={8} sm={4}>
                                                <FormItem label='Title'>
                                                {
                                                    getFieldDecorator('title', {
                                                        rules: [{required: true}]
                                                    })(
                                                        <Cascader placeholder="" options={ prefix } defaultValue={['']} allowClear={false} />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                            <Col xs={16} sm={10}>
                                                <FormItem label='First Name' >
                                                {
                                                    getFieldDecorator('firstName', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Input type='string' />
                                                    )
                                                }
                                                        
                                                </FormItem>
                                            </Col>
                                            <Col xs={24} sm={10}>
                                                <FormItem label='Last Name' >
                                                {
                                                    getFieldDecorator('lastName', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Input type='string' />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                        </Row>
                                    </InputGroup>

                                    <InputGroup size='large'>
                                        <Row gutter={16}>
                                            <Col xs={24} sm={12}>
                                                <FormItem label='Email' >
                                                {
                                                    getFieldDecorator('email', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Input type='string' />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                            <Col xs={24} sm={12}>
                                                <FormItem label='Confirm Email'>
                                                {
                                                    getFieldDecorator('confirmEmail', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Input type='string' />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row gutter={16}>
                                            <Col xs={24} sm={12}>
                                                <FormItem label='Phone 1' >
                                                {
                                                    getFieldDecorator('phoneOne', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Input type='string' />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                            <Col xs={24} sm={12}>
                                                <FormItem label='Phone 2'>
                                                {
                                                    getFieldDecorator('phoneTwo', {
                                                        rules: [{ required: false }]
                                                    })(
                                                        <Input type='string' />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row gutter={16}>
                                            <Col xs={24} sm={12}>
                                                <FormItem label='Address Line 1'>
                                                {
                                                    getFieldDecorator('addressOne', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Input type='string' />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                            <Col xs={24} sm={12}>
                                                <FormItem label='Address Line 2' >
                                                {
                                                    getFieldDecorator('addressTwo', {
                                                        rules: [{ required: false }]
                                                    })(
                                                        <Input type='string' />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row gutter={16}>
                                            <Col xs={24} sm={12}>
                                                <FormItem label='City'>
                                                {
                                                    getFieldDecorator('city', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Input type='string' />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                            <Col xs={24} sm={12}>
                                                <FormItem label='Province / State' >
                                                {
                                                    getFieldDecorator('provinceState', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Input type='string' />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row gutter={16}>
                                            <Col xs={24} sm={12}>
                                                <FormItem label='Country' >
                                                {
                                                    getFieldDecorator('country', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Input type='string' />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                            <Col xs={24} sm={12}>
                                                <FormItem label='Postal Code / ZIP'>
                                                {
                                                    getFieldDecorator('postalZip', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Input type='string' />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                        </Row>
                                    </InputGroup>
                                                            
                                    <InputGroup size='large' >
                                        <Row justify='space-between' >
                                            <Col xs={24} sm={12} lg={6} >
                                                <FormItem label='Total number of Guests:' >
                                                {
                                                    getFieldDecorator('totalGuests', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Cascader key="total" placeholder="" defaultValue={['']} allowClear={false} options={ amtOfGuests } />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                            <Col xs={24} sm={12} lg={6} >
                                                <FormItem label='Adults:' >
                                                {
                                                    getFieldDecorator('adultGuests', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Cascader key="adults" placeholder="" defaultValue={['']} allowClear={false} options={ amtOfGuests } />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                            <Col xs={24} sm={12} lg={6} >
                                                <FormItem label='Children:' >
                                                {
                                                    getFieldDecorator('childGuests', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Cascader key="children" placeholder="" defaultValue={['']} allowClear={false} options={ amtOfKidsAndPets } />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                        </Row>
                                        <Row justify='space-between'>
                                            <Col xs={24} sm={12} lg={12} >
                                                <FormItem label='Pets:' >
                                                    <InputGroup compact size='small'>
                                                    {
                                                    getFieldDecorator('petsYN', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Switch onChange={this.togglePets} checkedChildren="Yes, pets!" unCheckedChildren="No pets" />
                                                    )
                                                }
                                                    {
                                                    getFieldDecorator('petAmt', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Cascader key="pets" placeholder="" disabled={this.state.disablePets} style={{ width: '30%' }} options={amtOfKidsAndPets} defaultValue={['']} allowClear={false}/>
                                                    )
                                                }
                                                {
                                                    getFieldDecorator('petsType', {
                                                        rules: [{ required: true }]
                                                    })(
                                                        <Select disabled={this.state.disablePets} defaultValue={['']} style={{width: '50%'}} >
                                                            <Option value='none'>None</Option>
                                                            <Option value="dogs">Dog(s)</Option>
                                                            <Option value="cats">Cat(s)</Option>
                                                            <Option value="other">Other</Option>
                                                        </Select>
                                                    )
                                                }
                                                    </InputGroup>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                    </InputGroup>

                                    <InputGroup>
                                        <Row gutter={16} type='flex' align='middle' justify='space-between' >
                                            <Col xs={24} lg={20} >
                                                <FormItem label='Comments:'>
                                                {
                                                    getFieldDecorator('comments', {
                                                        rules: [{ required: false }]
                                                    })(
                                                        <TextArea style={{width: '100%', height: '50%' }} label='Comments:' rows={4} />
                                                    )
                                                }
                                                </FormItem>
                                            </Col>
                                            <Col xs={24} lg={4} >
                                                <Button size='large' htmlType='submit' onClick={this.showModal} >Request Booking</Button>
                                                <Modal
                                                    title="Payment"
                                                    visible={this.state.visible}
                                                    footer={null}
                                                    onCancel={this.handleCancel}
                                                    width='75vw'
                                                    style={{top: 10}}
                                                >
                                                    <FormInjector/>
                                                </Modal>
                                            </Col>
                                        </Row>
                                    </InputGroup> 
                                </Form>
                            </Card>
                        </div>
                    </Col>
                </Row> 
          </div>
        );
      }
    } 

export default Form.create()(Booking);



{/* <InputGroup compact>
    <Select defaultValue="Option1-1">
        <Option value="Option1-1">Option1-1</Option>
        <Option value="Option1-2">Option1-2</Option>
    </Select>
    <Select defaultValue="Option2-2">
        <Option value="Option2-1">Option2-1</Option>
        <Option value="Option2-2">Option2-2</Option>
    </Select>
</InputGroup> */}