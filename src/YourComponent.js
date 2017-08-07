import React, { Component } from 'react';
import {Link} from 'react-router';
import Map from './components/MapComponent';
const Stores = require('STORE');

export default class YourComponent extends Component {
    constructor(){
        super();
        this.state = {
            stores: [],
            favouriteStores: []
        };
        this.handleFavouriteStores = this.handleFavouriteStores.bind(this);
    }
    componentWillMount(){
        this.loadStoresFromServer();
    }
    loadStoresFromServer(){
        this.setState({stores: Stores});
    }
    handleFavouriteStores(storeName){
        this.addStoreName(storeName);
    }
    addStoreName(storeName){
        const newFavStores = this.state.favouriteStores.push(storeName);
        this.setState({favouriteStores: newFavStores});
    }
  render() {
    return (
    <div style={content}>
        <div style={container}>
            <h2>My Favorite Stores</h2>
            <ul>
                {this.state.favouriteStores.map((name, index) => {
                    return (
                        <li key={index}>{name}</li>
                    )
                })}
            </ul>

        <Map stores={this.state.stores}
             style={{width: '100%', height: '100%', position: 'relative'}}
             className={'map'}
             zoom={14}
             handleFavouriteStores={this.handleFavouriteStores}
        />
        </div>
    </div>
    );
  }
}

var container  = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: '100vh',
}

var content =  {
    flex: 2,
    order: 2,
    position: 'relative',
    minHeight: '100%'
}