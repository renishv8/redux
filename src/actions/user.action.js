//import { v4 } from 'node-uuid';
//import { loadState } from "../components/localStorage";
//import store from "../store";
export const GET_USER_LOGIN = 'GET_USER_LOGIN';

export const getUserLogin = (data) => {
    console.log(data);
    return (dispatch) => {
        dispatch ({
            type: 'GET_USER_LOGIN',
            payload: data
        })
    }
};

/*export function getLogin() {

    return 'ok';

    /*return (dispatch, getState) => {
        const items = getState();

        console.log(items);

    }*/

//    const state = loadState();
//    if (state === null) {
//       return 'pas de nom';
//    }
//
//    return state.login;
//}