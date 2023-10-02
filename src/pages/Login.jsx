import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import UseAuthHook from "../hooks/useAuthHook";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { login } = UseAuthHook();
    const navigate = useNavigate();
    const data =
    {
        email: email,
        password: password
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        login(data);
        navigate('/');
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>Enter your email</p>
                    <input type="text" label="email" onChange={(e) => setEmail(e.target.value)} />
                    <p>Enter Your password</p>
                    <input type="text" label="password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )

}
export default Login;