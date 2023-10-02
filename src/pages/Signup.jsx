import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import UseAuthHook from "../hooks/useAuthHook";
const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("")
    const { signup, signupData } = UseAuthHook()

    const data = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        phone: phone
    }
    const handleChange = (e) => {
        e.preventDefault();
        signup(data);
        navigate("/login");
    }

    return (
        <>
            <div>
                <form onSubmit={handleChange}>
                    <p>Enter Name :</p>
                    <input type="text" label="name" onChange={(e) => setName(e.target.value)} />
                    <p>Enter Email :</p>
                    <input type="text" label="email" onChange={(e) => setEmail(e.target.value)} />
                    <p>Enter Password</p>
                    <input type="text" label="password" onChange={(e) => setPassword(e.target.value)} />
                    <p>Confirm Pssword</p>
                    <input type="text" label="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                    <p>Enter Phone Number</p>
                    <input type="text" label="phone" onChange={(e) => setPhone(e.target.value)} />
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </>
    )

}
export default Signup;