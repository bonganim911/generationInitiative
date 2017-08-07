import React from 'react';
import PropTypes from 'prop-types';

export class Marker extends React.Component {
    constructor(props){
        super(props);
        this.handleSendStoreName = this.handleSendStoreName.bind(this);
    }
    componentDidMount() {
        this.geocoder = new window.google.maps.Geocoder();
        this.renderMarker();
    }
    renderMarker() {
        this.geocoder.geocode({ 'address': this.props.address }, function handleResults(results, status) {
            if (status === window.google.maps.GeocoderStatus.OK) {
                this.generateMarker(this.props.name, results);
            }
        }.bind(this));
    }

    generateMarker(name, results) {
        const marker = new window.google.maps.Marker({
            map: this.props.map,
            position: results[0].geometry.location,
        });
        this.markerListener(marker, this.inforMarker(name), this.props.map, name);
    }

    markerListener(marker, infowindow, map, name) {
        marker.addListener('click', function () {
            infowindow.open(map, marker);
            this.handleSendStoreName(name);
        });
    }

    handleSendStoreName(name){
        this.props.handleAddStore(name);
    }

    inforMarker(name) {
        const infowindow = new window.google.maps.InfoWindow({
            content: name,
            maxWidth: 200
        });
        return infowindow;
    }
    render() {
        return null;
    }
}

Marker.propTypes = {
    address: PropTypes.string
}
export default Marker;