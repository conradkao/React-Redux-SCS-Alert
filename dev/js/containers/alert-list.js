import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectAlert} from '../actions/index'


class alertList extends Component {

    renderList() {
        return this.props.alerts.map((alert) => {
            return (
                <div
                    key={alert.id}
                    onClick={() => this.props.selectAlert(alert)}
                >
                    <div className="list-row">{alert.structure}</div>
                    <div className="list-row">{alert.group}</div>
                    <div className="list-row">{alert.node}</div>
                    <div className="list-row-wide">{alert.type}</div>
                    <div className="list-row">{alert.read} / {alert.threshold}</div>
                    <div className="list-row">{alert.date}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to alertList
//      > whenever state changes, the alertList will automatically re-render
function mapStateToProps(state) {
    return {
        alerts: state.alerts
    };
}

// Get actions and pass them as props to to alertList
//      > now alertList has this.props.selectalert
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectAlert: selectAlert}, dispatch);
}

// We don't want to return the plain alertList (component) anymore, we want to return the smart Container
//      > alertList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(alertList);
