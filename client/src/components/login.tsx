import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginContainer () {

    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!username.trim()) {
            setError("Username cannot be empty");
            return;
        }

        localStorage.setItem("username", username);

        navigate("/FormPage")
    };


return (
    <div>
    <h2>Please enter your username</h2>
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
        
        />        
        <button type="submit">Login</button>

    </form>
    {error}
    </div>
    );
};



export default LoginContainer;