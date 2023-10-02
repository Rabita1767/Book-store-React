import axios from "axios";
import { useState } from "react";
const UseAuthHook = () => {
    const [signInfo, signupData] = useState("")
    const [logInfo, loginData] = useState("")
    const signup = (formData) => {
        axios.post("http://127.0.0.1:8000/auth/signup", formData)
            .then(resp => { signupData(resp) })
            .catch(err => { console.log(err) })
    }
    const login = (formData) => {
        axios.post("http://127.0.0.1:8000/auth/login", formData)
            .then(resp => {
                console.log(resp);
                loginData(resp)
                localStorage.setItem('token', resp.data.token);
            })
            .catch(err => { console.log(err) })

    }
    return { signup, signInfo, signupData, login, logInfo };

}
export default UseAuthHook;