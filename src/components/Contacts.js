import { useState } from "react";

const Contacts = () => {
  const [val, setval] = useState("");
  const [val2, setval2] = useState("");
  return (
    <div>
      <input
        id="one"
        value={val}
        onChange={(e) => setval(e.target.value)}
        type="search"
        placeholder="Issue ?"
        className="p-2 m-4 border border-black  "
      ></input>
      <input
        id="two"
        value={val2}
        onChange={(e) => setval2(e.target.value)}
        type="email"
        placeholder="Email-Id"
        className=" m-2 p-2 border border-black"
      ></input>
      <button
        onClick={() => {
          setval(""), setval2("");
        }}
        className="ml-3 bg-gray-400 border border-black "
      >
        Submit
      </button>
    </div>
  );
};
export default Contacts;
