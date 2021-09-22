import { GET_USER_LOGIN } from "../actions/user.action";
import { loadState } from "../components/localStorage";

const initialeState = "initialeState";

export default function userReducer(state = initialeState, action) {
    switch (action.type) {
        case GET_USER_LOGIN:
            return action.payload;
        default:
            return state;
    }
}