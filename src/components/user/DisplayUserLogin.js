import React from "react";

const DisplayUserLogin = props => {
    const { login } = props;

    return (
        <div>
            <h3>Ton nom :</h3>
            <label>{login}</label>
        </div>
    );
};

export default DisplayUserLogin;