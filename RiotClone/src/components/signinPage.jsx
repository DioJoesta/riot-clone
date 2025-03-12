import { useState } from "react";
import { Link } from "react-router-dom";

export function SignInPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        
        let errorList = [];

        if (!userName.trim()) {
            errorList.push("User name can't be empty");
        }

        if (password.length < 6) {
            errorList.push("Password must be at least 6 characters");
        }

        if (errorList.length > 0) {
            setErrors(errorList);
        } else {
            setErrors([]);
            alert("You signed in successfully!");
        }
    };

    return (
       <form onSubmit={handleSubmit}>
            <div className="flex w-full h-screen bg-[url('/background-01.jpg')] 
                justify-center
                items-center
                bg-cover
                bg-no-repeat
            ">
                <div className="flex border w-[350px] h-[400px]  bg-white flex-col items-center justify-center  gap-5 ">
                    <h3 className="font-bold text-[25px]">Sign In</h3>
                    
                    <div className="border w-[250px] h-[35px]">
                        <input className="border w-[250px] h-[35px] items-center font-bold"
                            type="text" 
                            placeholder="USERNAME" 
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                        />
                    </div>
                    
                    <div className="border w-[250px] h-[35px]">
                        <input className="border w-[250px] h-[35px] items-center font-bold"
                            type="password" 
                            placeholder="PASSWORD" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Display errors if any exist */}
                    {errors.length > 0 && (
                        <div className="text-red-500">
                            {errors.map((error, index) => (
                                <p key={index}>{error}</p>
                            ))}
                        </div>
                    )}

                    <button className="bg-red-600  text-white font-bold
                        w-[100px] h-[50px]
                        rounded-2xl
                        hover:bg-green-500
                    " type="submit"
                    >Submit</button>
                    
                    <h3 className="hover:text-[20px]">CAN'T SIGN IN?</h3>
                    
                    <Link to="/signup" className="hover:text-[20px]">CREATE ACCOUNT</Link>
                </div>
            </div>
       </form>
    );
}
