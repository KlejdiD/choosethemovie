'use client'

import React, { useState } from "react";
import { signUp, logIn } from "../contexts/authContext";

const ModalComponent = ({ isOpen, closeHandler }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // Added state for confirm password
    const [name, setName] = useState(""); // Added state for name
    const [lastName, setLastName] = useState(""); // Added state for last name
    const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign-up and log-in

    const handleSubmit = (e) => {
        e.preventDefault();

        // If it's a sign-up, ensure passwords match before calling signUp
        if (isSignUp) {
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            signUp(email, password, confirmPassword, name, lastName);
        } else {
            login(email, password);
        }

        closeHandler();
    };

    if (!isOpen) return null;

    return (
        <div style={modalOverlayStyle}>
            <div style={modalContainerStyle}>
                <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username / Email:</label>
                    <input
                        type="text"
                        name="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {isSignUp && (
                        <>
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </>
                    )}
                    <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
                </form>

                <div style={linkStyle} onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp
                        ? "Already have an account? Log In"
                        : "Don't have an account? Sign Up"}
                </div>

                <button onClick={closeHandler}>Close</button>
            </div>
        </div>
    );
};

const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: 'black'
};

const modalContainerStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
};

const linkStyle = {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
    marginTop: "10px"
};

export default ModalComponent;
