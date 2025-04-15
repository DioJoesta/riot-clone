import { useState } from "react";
import React from "react";

export function SignUp() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errorList = [];
        
        // Validation checks
        if (!email.trim()) errorList.push("Email can't be empty");
        if (!userName.trim()) errorList.push("Username can't be empty");
        if (!password.trim()) errorList.push("Password can't be empty");
        if (!confirmPassword.trim()) errorList.push("You must confirm the password");
        if (password.length < 6) errorList.push("Password must be at least 6 characters long");
        if (password !== confirmPassword) errorList.push("Passwords do not match");

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorList.push("Please enter a valid email");
        }

        if (errorList.length > 0) {
            setErrors(errorList);
            return;
        }

        setIsSubmitting(true); // Disable submit button while submitting

        // **Send data to backend**
        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: userName,
                    email,
                    password,
                    confirmPassword,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("You signed up successfully!");
                // Clear form fields after successful submission
                setUserName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            } else {
                setErrors([data.error || "Something went wrong"]);
            }
        } catch (error) {
            setErrors(["Failed to connect to server"]);
        } finally {
            setIsSubmitting(false); // Enable the submit button again
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex w-full h-screen bg-[url('/background-01.jpg')] justify-center items-center bg-cover bg-no-repeat">
                <div className="flex border w-[350px] min-h-[400px] bg-white flex-col items-center justify-center gap-5">
                    <h3 className="font-bold text-[25px]">Sign Up</h3>
                    {errors.map((error, index) => (
                        <p key={index} style={{ color: "red" }}>
                            {error}
                        </p>
                    ))}
                    <div className="border w-[250px] h-[35px]">
                        <input
                            className="border w-[250px] h-[35px] items-center font-bold"
                            type="text"
                            placeholder="USERNAME"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>

                    <div className="border w-[250px] h-[35px]">
                        <input
                            className="border w-[250px] h-[35px] items-center font-bold"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="border w-[250px] h-[35px]">
                        <input
                            className="border w-[250px] h-[35px] items-center font-bold"
                            type="password"
                            placeholder="PASSWORD"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="border w-[250px] h-[35px]">
                        <input
                            className="border w-[250px] h-[35px] items-center font-bold"
                            type="password"
                            placeholder="CONFIRM PASSWORD"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button
                        className="bg-red-600 text-white font-bold w-[100px] h-[50px] rounded-2xl hover:bg-green-500"
                        type="submit"
                        disabled={isSubmitting} // Disable button when submitting
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </div>
        </form>
    );
}
