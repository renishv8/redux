import React from 'react';
import UserLoginForm from './components/user/UserLoginForm';
import { saveData } from "./components/localStorage";
import DisplayUserLogin from "./components/user/DisplayUserLogin";
import './App.css';
import { useSelector } from "react-redux";
import { isEmpty } from "./components/Utils";

function App() {
    const userLogin = useSelector((state) => state.userReducer);

    return (
        <div className="App">
            <header className="App-header">
                <div style={{ padding: 15 }}>
                    <h2>Veuillez décliner votre identité</h2>
                    <UserLoginForm onSubmit={saveData} />
                </div>
                <div style={{ padding: 15 }}>
                    <DisplayUserLogin login={!isEmpty(userLogin) && userLogin} />
                </div>
            </header>
        </div>
    );
}

export default App;
