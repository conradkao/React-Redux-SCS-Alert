import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class AlertDetail extends Component {
    render() {
        if (!this.props.alert) {
            return (<div>Select a alert...</div>);
        }
        return (
            <div className="alert-detail"> 
                <p>Structure: {this.props.alert.structure}</p>
                <p>Group: {this.props.alert.group}</p>
                <p>Node: {this.props.alert.node}</p>
                <p>Type: {this.props.alert.type}</p>
                <p>read/threshold: {this.props.alert.read}/{this.props.alert.threshold} <button className="alert-detail" type="button">Edit</button></p>
                <p>Date: {this.props.alert.date}</p>
                <button className="alert-detail" type="button">Note/Comments</button>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        alert: state.activeAlert
    };
}

export default connect(mapStateToProps)(AlertDetail);
