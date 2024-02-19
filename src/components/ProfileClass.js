import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constructor called" + this.props.name);
    this.state = {
      userInfo: {
        name: "abc",
        location: "123",
      },
    };
    
  }
 

    async componentDidMount() {
    
    const data = await fetch("https://api.github.com/users/AryanSharma394");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    console.log(json);
    console.log("child mount" + this.state.userInfo.name);
    
  }
  componentDidUpdate(){
    console.log("component updated");
  }

  componentWillUnmount(){
    console.log("unmounted");
  }
  render() {
    console.log("child render" + this.state.userInfo.name);
    return (
      <div>
        <h2>This is Class Component of Profile</h2>
        <img src={this.state.userInfo.avatar_url} />
        <h3>{this.state.userInfo.login}</h3>
        <h3>{this.state.userInfo.url}</h3>
      </div>
    );
  }
}
export default Profile;
