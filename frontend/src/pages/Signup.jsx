import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import Heading from "../components/Heading";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import Nav from "../components/Nav";


export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    return <>
        <Nav />
        <div className="bg-slate-400 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-90 text-center p-4 h-max px-6">
                    <Heading label={"Sign Up"} />
                    <SubHeading label={"Enter your information to create an account"} />
                    <InputBox onChange={e => {
                        setFirstName(e.target.value);
                    }} placeholder="Monkey D" label={"First Name"} />
                    <InputBox onChange={e => {
                        setlastName(e.target.value);
                    }} placeholder="Luffy" label={"Last Name"} />
                    <InputBox onChange={e => {
                        setusername(e.target.value);
                    }} placeholder="luffy@onepiece.com" label={"Email"} />
                    <InputBox onChange={e => {
                        setpassword(e.target.value);
                    }} placeholder="abc@123" label={"Password"} />
                    <div className="pt-4">
                        <Button onClick={async () => {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                username,
                                firstName,
                                lastName,
                                password
                            });
                            localStorage.setItem("token", response.data.token)
                            navigate("/dashboard")
                        }} label={"Sign Up"} />
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"} />
                </div>
            </div>
        </div>
    </>
}
