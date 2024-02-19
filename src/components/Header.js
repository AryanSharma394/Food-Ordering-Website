import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import Usercontext from "../../utils/Usercontext";
import { useSelector } from "react-redux";

const heading = (
  <img
    data-testid="logo"
    className="h-[104px]"
    alt="logo"
    src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
  ></img>
);

const Header = () => {
  const [islogin, setlogin] = useState(false);

  const isonline = useOnline();

  // const { user } = useContext(Usercontext);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-[#FFF2D7] shadow-lg">
      {heading}
      <div className="nav-items">
        <ul className="flex gap-5 py-10 ml-[900px]">
          <li data-testid="online-status">
            Online Status:{isonline ? "✅" : "🔴"}
          </li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="px-2">
            <Link to="/About">About</Link>
          </li> */}
          <li className="px-2">
            <Link to="/Contacts">Contacts</Link>
          </li>
          {/* <li className="px-2">
            <Link to="/Instamart">Instamart</Link>
          </li> */}
          <li>
            <Link data-testid="cart" to="/cart">
              Cart : {cartItems.length} items
            </Link>
          </li>
        </ul>
      </div>
      {/* <span className="text-black font-bold p-10"></span> */}
      {islogin ? (
        <button onClick={() => setlogin(false)}>login</button>
      ) : (
        <button onClick={() => setlogin(true)}>logout</button>
      )}
    </div>
  );
};

export default Header;
