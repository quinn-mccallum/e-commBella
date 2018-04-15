import React from 'react';
import GoogleMapReact from 'google-map-react';
import GoogleKey from './GoogleKey';
import Divider from 'antd';


const Pin = () => <div><i style={{fontSize: '2em', color: '#BA55D3'}} className='fas fa-star'></i></div>

class MapOfArea extends React.Component{
    static defaultProps = {
        center: { lat: 45.1010556, lng: -79.5184119 },
        zoom: 13
    };


    render(){
        return(
            <div  >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GoogleKey.key }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    style={{flex: 1}}
                >
                <Pin
                    lat={45.1010556}
                    lng={-79.5184119}
                    />
                </GoogleMapReact>
            </div>
        )
    }
}

export default MapOfArea;
