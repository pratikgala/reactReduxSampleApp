/*Example of a Container which is 99% a component*/

/*To access all the store in a component we need to have a container
* The container will fetch the store from the Provider*/
import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserListContainer extends Component {

    getUserName() {
        return (
            this.props.users.map( (user) => {
                return (
                    <li key={user.id}>{user.first} {user.last}</li>
                );
            })
        )
    }


    render(){
        return(
            <ul>
                {this.getUserName()}
            </ul>
        );
    }
}

/*takes a piece of application store,
    the application state,
    the main data, and passes it to the component,
     how does it do that? -> passes it as a property*/

function mapStateToProps(state){
    return {
        /*Take the users that we made earlier from reducers/index.js*/
        users: state.users
    }
}

export default connect(mapStateToProps)(UserListContainer);