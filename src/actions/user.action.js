import { v4 } from 'node-uuid';
import {loadState} from "../components/localStorage";

export const GET_USER_LOGIN = 'GET_USER_LOGIN';

export const getUserLogin = () => ({
    type: 'GET_USER_LOGIN',
    id: v4(),
    payload: JSON.stringify(loadState())
});
