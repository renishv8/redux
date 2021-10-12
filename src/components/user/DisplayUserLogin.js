import React from "react";
import {useSelector} from "react-redux";
import { isEmpty } from "../Utils";


const DisplayUserLogin = props => {
    const user = useSelector((state) => state.userReducer)

    console.log(user);
    return (
        <div>
            <h3>Ton nom :</h3>
            <label>{!isEmpty(user[0]) && user[0].login}</label>

            <h3>Ton password :</h3>
            <label>{!isEmpty(user[0]) && user[0].password}</label>
        </div>
    );
};

export default DisplayUserLogin;