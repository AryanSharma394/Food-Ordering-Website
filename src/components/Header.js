import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import Usercontext from "../../utils/Usercontext";
import { useSelector } from "react-redux";

const Logo = (
  <img
    data-testid="logo"
    className="h-[80px] rounded-lg"
    alt="logo"
    src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
  ></img>
);

const Header = () => {
  const [isLogin, setLogin] = useState(false);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-[#aed8ac] shadow-lg px-6 py-3 sticky top-0 z-10">
      <div className="flex items-center">{Logo}</div>
      <div className="flex items-center">
        <ul className="flex gap-11 font-medium">
          <li>
            <span data-testid="online-status" className="font-bold mr-2">
              Online Status:
            </span>
            {isOnline ? (
              <span className="text-green-600">✅</span>
            ) : (
              <span className="text-red-600">🔴</span>
            )}
          </li>
          <li className="">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Contacts" className="nav-link">
              Contacts
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link" data-testid="cart">
              Cart : {cartItems.length} items
            </Link>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Header;
