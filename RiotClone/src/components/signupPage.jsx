import { useState } from "react"
import React from "react";

export function SignUp () {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        
        let errorList = [];
        if (!email.trim()) {
            errorList.push("email can't be empty");
            
        };
        if (!userName.trim()) {
            errorList.push("username can't be empty");
            
        };
        if (!password.trim()) {
            errorList.push("password can't be empty");
            
        };
        if (!confirmPassword.trim()) {
            errorList.push("You must confirm the  password");
             
        };
        if (password.length < 6) {
            errorList.push("password must be at least 6 characters long");
             
        };
        
        if (password !== confirmPassword) {
            errorList.push("passwords do not match");
             
        }
        if (errorList.length > 0){
            setErrors(errorList);
        }else {
            setErrors([])
            alert("You signed up successfully!");
        }
        
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex w-full h-screen bg-[url('/background-01.jpg')] 
                justify-center
                items-center
                 bg-cover
                bg-no-repeat
            ">
                <div  className="flex border w-[350px] min-h-[400px]  bg-white flex-col items-center justify-center  gap-5 ">
                    <h3 className="font-bold text-[25px]">Sign Up</h3>
                        {errors.map(
                            (error,index) => (
                                <p key={index} style={{color: "red"}}>{error}</p>
                            )
                        )  }
                    <div className="border w-[250px] h-[35px]">
                        <input className="border w-[250px] h-[35px] items-center font-bold"
                            type="text" placeholder="USERNAME" 
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                        />
                    </div>
                    
                    <div className="border w-[250px] h-[35px]">
                        <input className="border w-[250px] h-[35px] items-center font-bold"
                             type="email" placeholder="Email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="border w-[250px] h-[35px]">
                        <input className="border w-[250px] h-[35px] items-center font-bold" 
                            type="password" placeholder="PASSWORD" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="border w-[250px] h-[35px]">
                        <input className="border w-[250px] h-[35px] items-center font-bold" 
                        type="password" placeholder=" CONFIRM PASSWORD" 
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    

                    <button className="bg-red-600  text-white font-bold
                        w-[100px] h-[50px]
                        rounded-2xl
                        hover:bg-green-500
                    " 
                    type="submit"  >Submit</button>
                    
                    
                    
                </div>
            </div>
        </form>
    )
}