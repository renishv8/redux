import React, {useState} from "react";
import { Field, reduxForm } from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {getUserLogin} from "../../actions/user.action";


const UserLoginForm = props => {
        const [login , setLogin] = useState('');
        const [password , setPassword] = useState('');
        const user = useSelector((state) => state.userReducer)
        const { handleSubmit, pristine, submitting } = props;
        const dispatch = useDispatch();

        const handleForm = (e) => {
            e.preventDefault();
            const data = {
                login,
                password,
            }

            dispatch(getUserLogin(data))
        }

        return (
            <form onSubmit={(e) => handleForm(e)}>
                <div>
                    <label>Ton nom</label>
                    <div>
                        <input
                            name="login"
                            type="text"
                            placeholder="Ton login"
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            type="text"
                            placeholder="Ton password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
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
