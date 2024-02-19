import { useState } from "react";

const Profile = (props) => {
  const [count,setcount] = useState(0);
  const[count2]=useState(0)
  return (
    <div>
      <h2>this is functional component of profile</h2>
      <h3>{props.name}</h3>
      <h3>Count : {count}</h3>
      <button onClick={()=>setcount(1)}>Submit</button>
    </div>
  );
};
export default Profile;
