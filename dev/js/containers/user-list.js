/*Example of a Container which is 99% a component*/

/*To access all the store in a component we need to have a container
* The container will fetch the store from the Provider*/
import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {

    render(){
        return(
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
        );
    }
}

export default UserList;