import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";


class About extends React.Component{

    constructor(props){
        super(props);
        console.log("parent constructor called");
    }
    componentDidMount(){
        console.log("parent mount");
    }

    render(){
        console.log("Parent render");
        return (
            <div>
              <h1>About us page</h1>
              <p>
                <ProfileClass name={" Aryan"}/>
                {/* <ProfileClass name={" sharma"}/> */}
              </p>
            </div>
          );
    }
}
export default About;
