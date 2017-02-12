/**
 * This entire function is called an actionCreator,
 * which we will be calling from our application,
 * It's job is basically to return an object called an action
 * @param user
 * @returns {{type: string, payload: *}}
 */
export const selectUser = (user) => {
    console.log("you clicked: "+ JSON.stringify(user));

    /*The return part below is basically the action
    * This basically is an announcement to the App, that this action is triggered*/
    return {
        type:"SELECT_USER",
        payload: user
    }
};