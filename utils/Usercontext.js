import { createContext } from "react";

const Usercontext =createContext({
    user:{
        name:"Aryan Sharma",
        email:"aryan@react.com", 
    },
});

export default Usercontext;
