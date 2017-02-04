/*Example of a Container which is 99% a component,
* THINK OF THEM as basically a glue to BIND your STORE and COMPONENTS together*/

/* Containers are components that are hooked up to the data store*/

/*The container will fetch the store from the Provider
* To access all the store in a component we need to have a container */
import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

/*Connecting to the actions
* REACT:
*   we can just add selectUser in getUserName as <li onClick = selectUser() ... />
*   this will work but it isn't properly hooked up to the react application
*
* REACT-REDUX: we have to connect it the container which is the smart component
*   So Instead of passing it in directly we will pass it in as props
*   */
import {selectUser} from '../actions/indexAction';

class UserListContainer extends Component {

    getUserName() {
        return (
            this.props.users.map( (user) => {
                return (
                    <li
                        key={user.id} onClick={() => this.props.selectUser(user)}>
                        {user.first} {user.last}
                    </li>
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

/**
 * takes a piece of application store,
 * the application state,
 * the main data, and passes it to the component,
 * how does it do that? -> passes it as a props
 * @param state
 * @returns {{users: *}}
 */
function mapStateToProps(state){
    return {
        /*Take the users that we made earlier from reducers/index.js*/
        users: state.users
    }
}

function matchDispatchToProps(dispatch){
    /* dispatch is a fancy way of saying call the function*/
    /*bind - synonym for connect, ActionCreators - the action in ../actions/indexActions*/
    /* we can use the same exact function name while passing it as a props*/
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserListContainer);