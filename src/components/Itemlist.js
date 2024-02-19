import { IMG_CDN } from "../../constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartslice";

const Itemlist = ({ items }) => {
  const dispatch = useDispatch();

  const handleitem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-medium">
                {" "}
                - ₹ {item.card.info.price / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <img src={IMG_CDN + item.card.info.imageId} />
            <div className="m-1" data-testid="menu">
              <button
                data-testid="addbtn"
                className="absolute px-3 bg-black text-white shadow-lg rounded-md mx-12  hover:bg-white hover:text-black "
                onClick={() => handleitem(item)}
              >
                Add+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Itemlist;
