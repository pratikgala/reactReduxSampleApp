/**
 * we need our actions to flow back to the reducers
 * and eventually to the store.
 *
 * state=null - Is a default reducers when the app bootsup.
 * action -     This is will take an action,
 *  right now we have only one action that is SELECT_USER from ../actions/indexActions
 *  but there can be more actions, like USER_DELETED, MESSAGE_SENT etc..
 *
 * @param state
 * @param action
 */
export default function ( state = null, action ) {
    /*Here we describe what actions do we care about,
        if user selected do this,
        if user deleted do this,
      basically a bunch of if statements so we can also use a switch*/
    switch (action.type){
        case "SELECT_USER": {
            return action.payload;
            break;
        }
    }
    return state;
}