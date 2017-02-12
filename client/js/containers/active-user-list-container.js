import React, {Component} from 'react';
import {connect} from 'react-redux';

class ActiveUser extends Component{

    render() {
        if(!this.props.user){
            return (<div>Select a user..</div>);
        }
        return (
            <div>
                <div>First Name:{this.props.user.first}</div>
                <div>Last Name:{this.props.user.last}</div>
                <div>Age:{this.props.user.age}</div>
                <div>Description:{this.props.user.description}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.activeUsers
    }
}

export default connect(mapStateToProps)(ActiveUser);
