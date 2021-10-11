import React from "react";
import { Field, reduxForm } from "redux-form";

const UserLoginForm = props => {
    const { handleSubmit, pristine, submitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Ton nom</label>
                <div>
                    <Field
                        name="login"
                        component="input"
                        type="text"
                        placeholder="Ton nom"
                    />
                </div>
                <div>
                    <Field
                        name="looooogin"
                        component="input"
                        type="text"
                        placeholder="Ton nooooom"
                    />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    disabled={pristine || submitting}
                >
                    Soumettre
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: "login"
})(UserLoginForm);
