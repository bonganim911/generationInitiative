import React from 'react';
import Marker from './MarkerComponent';

export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: {
                lat: 19.4011255,
                lng: -99.1189575
            },
            map: {}
        };
        this.handleAddStore = this.handleAddStore.bind(this);
    }
    componentDidMount() {
        this.map = new window.google.maps.Map(document.getElementById('storeMap'), {
            center: this.state.currentLocation,
            zoom: 11,
            mapTypeId: 'roadmap',
        });
        this.setState({map: this.map });
    }

    handleAddStore(name) {
        this.submitToFavourite(name);
    }
    submitToFavourite(name){
        this.props.handleFavouriteStores(name);
    }
    render() {
        return (
            <div>
                <div style={divStyle} id="storeMap">
                    Loading map...
                </div>
                {this.props.stores.map((store, idx) => {
                    return (
                        <Marker
                            key={idx}
                            name={store.Name}
                            map={this.state.map}
                            address={store.Address}
                            handleAddStore={this.handleAddStore}
                        />
                    )
                })}
            </div>
        );
    }
}

var divStyle = {
    border: 'red',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 350,
};
export default Map;