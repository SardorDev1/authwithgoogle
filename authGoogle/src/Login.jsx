import React from "react";
import { signInWithGoogle } from "./firebase/config";
function Login(){
return(
    <>
    <button onClick={signInWithGoogle} >Sign In</button>

    </>
)
}
export default Login
