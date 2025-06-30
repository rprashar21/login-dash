import React from "react";
import  './LoginForm.css';

import { useState } from "react";

 function LoginForm({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        // TODO: connect to backend here later
        if (email && password) {
            alert(`Logging in with: ${email}`);
            onLogin?.(); // Call parent login success
        } else {
            alert("Please enter both email and password.");
        }
    };

     return (
         <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
             <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
                 <h2 className="text-center mb-4">Login</h2>

                 <form onSubmit={handleLogin}>
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

export default LoginForm;
