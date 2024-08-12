import { useContext } from "react";
import { IMG_CDN } from "../../constants";
import Usercontext from "../../utils/Usercontext";

export const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  areaname,
  avgRating,
  sla,
}) => { 
  return (
    <div className="shadow-xl bg-white border rounded-lg w-[230px] h-[380px] overflow-hidden  hover:shadow-2xl transition duration-300 transform hover:scale-105 m-4 p-4">
      <img
        className="w-full h-[200px] object-cover rounded-t-lg mb-4"
        src={IMG_CDN + cloudinaryImageId}
        alt={name}
      />
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="font-bold text-lg mb-1">{name}</h2>
          <h3 className="font-medium text-sm">
            ✪ {avgRating} • {sla.slaString}{" "}
          </h3>
          <p className="text-sm text-gray-600">{cuisines.join(", ")}</p>
        </div>
        {/* <h4 className="font-bold">{user.name}</h4> */}
      </div>
    </div>
  );
};

// export default RestaurantCard;