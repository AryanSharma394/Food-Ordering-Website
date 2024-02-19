import Itemlist from "./Itemlist";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showitems, setshowitems] = useState(false);

  const handleclick = () => {
    setshowitems(!showitems);
  };
  return (
    <div>
      <div className="w-6/12 m-auto p-5 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{"🔽"}</span>
        </div>
        {showitems && <Itemlist items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
