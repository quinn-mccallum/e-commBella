import React from 'react';
import { Table, Button } from 'antd';

const data = [{
    key: '1',
    location: 'House',
    room: 'Foyer',
    floor: '1st',
    features: 'Large coat closet, Bench',
    space: 'Living',
}, {
    key: '2',
    location: 'House',
    room: 'Great Room',
    floor: '1st',
    features: 'Fire place, TV, Huge wall of windows, Lake views',
    space: 'Living',
}, {
    key: '3',
    location: 'House',
    room: 'Dining Room',
    floor: '1st',
    features: 'Living edge table, seats 8',
    space: 'Living',
}, {
    key: '4', 
    location: 'House',
    room: 'Kitchen',
    floor: '1st',
    features: 'Gas stove, Brand-new stainless steel appliances, Nespresso coffee maker, Granite counter top',
    space: 'Living',
}, {
    key: '5',
    location: 'House',
    room: 'Powder Room',
    floor: '1st',
    features: '2-piece',
    space: 'Bathroom'
}, {
    key: '6',
    location: 'House',
    room: 'Master Bedroom',
    floor: '1st',
    features: 'King size bed, Private deck, Lake views, Walk-in closet, Ensuite bathroom, TV',
    space: 'Bedroom'
}, {
    key: '7',
    location: 'House',
    room: 'Master Ensuite Bathroom',
    floor: '1st',
    features: '4-piece',
    space: 'Bathroom'
}, {
    key: '8',
    location: 'House',
    room: 'Patio',
    floor: '1st',
    features: 'Comfy outdoor lounge set, Lake views',
    space: 'Outdoor',
}, {
    key: '9',
    location: 'House',
    room: 'Muskoka Room',
    floor: '1st',
    features: 'BBQ, Lounge set, Lake views, Enclosed',
    space: 'Outdoor',
}, {
    key: '10',
    location: 'House',
    room: 'Jr. Master Bedroom',
    floor: '2nd',
    features: 'Queen size bed, Walk-in closet, ensuite bathroom, Lake views',
    space: 'Bedroom',
}, {
    key: '11',
    location: 'House',
    room: 'Jr. Ensuite',
    floor: '2nd',
    features: '3-piece with rainfall shower',
    space: 'Bathroom'
}, {
    key: '12',
    location: 'House',
    room: '3rd Bedroom',
    floor: '2nd',
    features: 'Queen size bed, Lake view', 
    space: 'Bedroom'
}, {
    key: '13',
    location: 'House',
    room: '4th Bedroom',
    floor: '2nd',
    features: 'Double bed',
    space: 'Bedroom'
}, {
    key: '14',
    location: 'House',
    room: 'Bathroom',
    floor: '2nd',
    features: '3 piece, Shower-in-tub', 
    space: 'Bathroom'
}, {
    key: '15',
    location: 'House',
    room: 'Study Nook',
    floor: '2nd',
    features: 'Overlooking Great Room',
    space: 'Living'
}, {
    key: '16',
    location: 'Bunkie',
    room: 'Lounge Area',
    floor: 'bnk',
    features: 'Open with lots of windows, 4-seat dining table',
    space: 'Living'
}, {
    key: '17',
    location: 'Bunkie',
    room: '5th Bedroom',
    floor: 'bnk',
    features: 'Queen size bed',
    space: 'Bedroom'
}, {
    key: '18',
    location: 'Bunkie',
    room: '6th Bedroom',
    floor: 'bnk',
    features: 'Double bed',
    space: 'Bedroom'
}, {
    key: '19',
    location: 'Bunkie',
    room: '7th Bedroom',
    floor: 'bnk',
    features: 'Twin bunk beds',
    space: 'Bedroom'
}, {
    key: '20',
    location: 'Bunkie',
    room: 'Jr. Kitchen',
    floor: 'bnk',
    features: 'Fridge, Microwave, Toaster oven, espresso machine',
    space: 'Living'
}, {
    key: '21',
    location: 'Bunkie',
    room: 'Bathroom',
    floor: 'bnk',
    features: '3 piece, Shower-in-tub',
    space: 'Bathroom'
}, {
    key: '22',
    location: 'Lake',
    room: 'Dock',
    floor: 'lake',
    features: 'Brand-new. Muskoka Chairs, Maximum relaxation',
    space: 'Outdoor'
}];

class Specs extends React.Component{
    state = {
        filteredInfo: null,
        sortedInfo: null,
    };
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
        filteredInfo: filters,
        sortedInfo: sorter,
        });
    }
    clearFilters = () => {
        this.setState({ filteredInfo: null });
    }
    clearAll = () => {
        this.setState({
        filteredInfo: null,
        sortedInfo: null,
        });
    }
    
    render(){
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [{
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            width: '11%',
        }, {
            title: 'Room',
            dataIndex: 'room',
            key: 'room',
            width: '20%',
        }, {
            title: 'Floor',
            dataIndex: 'floor',
            key: 'floor',
            width: '9%',
        }, {
            title: 'Features',
            dataIndex: 'features',
            key: 'features',
            width: '49%',
        }, {
            title: 'Space',
            dataIndex: 'space',
            key: 'index',
            with: '8%',
        }];
        return(
            <div>
                {/* <div className="table-operations">
                   
                </div> */}
                <Table columns={columns} dataSource={data} onChange={this.handleChange} size='small' pagination={false}/>
            </div>
        )
    }
}

export default Specs;