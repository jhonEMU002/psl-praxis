import React, { Component } from 'react';
import './EnemiOverview.css';

class EnemieOverview extends Component {
    render() {
        return (<div className='enemi-overview-container'>
            <img src={this.props.image} alt={this.props.name} />
            <h1>{this.props.name}</h1>
            <p className='enemi-overview-text'>{this.props.overview}</p>
            <a href={this.props.link}>More info..</a>
        </div>);
    }
}

export default EnemieOverview;