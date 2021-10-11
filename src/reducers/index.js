import { combineReducers } from "redux";
import userReducer from './user.reducer';
import { reducer as formReducers } from 'redux-form';

export default combineReducers({
    userReducer,
    form: formReducers,
})
