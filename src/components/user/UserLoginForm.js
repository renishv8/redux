import React from "react";
import { Field, reduxForm } from "redux-form";

let UserLoginForm = props => {
    const { handleSubmit, pristine, submitting } = props;
    
    return (
        <form onSubmit={handleSubmit} data-testid="login-form">
            <div>
                <label>Ton nom</label>
                <div>
                    <Field
                        name="login"
                        component="input"
                        type="text"
                        placeholder="Ton nom"
                        data-testid="login"
                    />
                </div>
            </div>
            <div>
                <button
                    data-testid="submitButton"
                    type="submit"
                    disabled={pristine || submitting}
                >
                    Soumettre
                </button>
            </div>
        </form>
    );
};

UserLoginForm = reduxForm({
    form: "login"
})(UserLoginForm);

export default UserLoginForm