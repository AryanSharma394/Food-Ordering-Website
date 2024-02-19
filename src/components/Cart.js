import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../../utils/cartslice";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handlecart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="text-center font-bold p-2">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white rounded-md my-4 p-2 ml-[45%]"
          onClick={handlecart}
        >
          Clear cart
        </button>
        <Itemlist items={CartItems} />
      </div>
    </div>
  );
};

export default Cart;
