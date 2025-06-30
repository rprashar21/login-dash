import React, {useState} from "react";
import './LoginForm.css'
import { checkUserExists } from '../../api/api';

export const LoginForm01 = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // when the form details are submitted I wil call the backend to validate
        // if its the first time i will call the backend if not i will use cache in frontend to
        // store the values can we do that

        //TODO
        // below is just a sample or temporary

        if (email && password) {
            try {
                const response = await checkUserExists(email);
                if (response.data) {
                    // User exists, redirect to dashboard (replace with navigation in real app)
                    alert('User exists! Redirecting to dashboard...');
                } else {
                    // User does not exist
                    alert('User does not exist. Please register.');
                }
            } catch (error) {
                // If backend returns 404 or error, treat as user not found
                alert('User does not exist. Please register.');
            }
        } else {
            alert("Please enter both email and password")
        }

    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-500 bg-light">
            <div className="card p-4 shadow" style={{ width: "200%", maxWidth: "800px" }}>
                <h2 className="text-center mb-4">Login</h2>

                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>

                    <button className="btn btn-primary w-100" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}