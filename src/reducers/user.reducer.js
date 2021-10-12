import { GET_USER_LOGIN } from "../actions/user.action";

const initialeState =  {};

export default function userReducer(state = initialeState, action) {
    switch (action.type) {
        case GET_USER_LOGIN:
            console.log(action.payload);
            return [action.payload];
        default:
            return state;
    }
}