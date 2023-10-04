import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import UseAuthHook from "../../hooks/useAuthHook";
const Login = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        getValues,
        watch,
    } = useForm()

    const { login, logInfo } = UseAuthHook();
    const navigate = useNavigate();
    const handlerSubmit = (e) => {
        const data =
        {
            email: getValues("email"),
            password: getValues("password")
        }
        login(data);
        navigate('/product');
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit(handlerSubmit)}>
                    <div>
                        <h4 className="label">Enter Email</h4>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            }}
                            render={({ field }) => (
                                <input
                                    placeholder="Enter email"
                                    {...field}
                                    className={`input-field ${errors.email ? "error-border" : ""}`}
                                />
                            )}
                        />
                        {errors.email && <h5 className="error-message">{errors.email.message}</h5>}
                    </div>
                    <div>
                        <h4 className="label">Password</h4>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: "Password is required",
                                minLength: {
                                    value: 2,
                                    message: "Minimum length must be 8",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Maximum length must be 50",
                                }

                            }}
                            render={({ field }) => (
                                <input
                                    placeholder="Enter password"
                                    {...field}
                                    className={`input-field ${errors.password ? "error-border" : ""}`}
                                />
                            )}
                        />
                        {errors.name && <h5 className="error-message">{errors.password.message}</h5>}
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                    {/* <p>Enter your email</p>
                    <input type="text" label="email" onChange={(e) => setEmail(e.target.value)} />
                    <p>Enter Your password</p>
                    <input type="text" label="password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button> */}
                </form>
            </div>
        </>
    )

}
export default Login;
