import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import Heading from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import Nav from "../components/Nav"

export const Signin = () => {
    return <>
        <Nav />
        <div className="bg-slate-400 h-screen items-center flex justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"} />
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox placeholder="luffy@gmail.com" label={"Email"} />
                <InputBox type="password" placeholder="123456" label={"Password"} />
                <div className="pt-4">
                    <Button label={"Sign In"} />
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
            </div>
        </div>
    </>
}