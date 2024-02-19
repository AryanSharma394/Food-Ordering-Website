import { useContext } from "react";
import { IMG_CDN } from "../../constants";
import Usercontext from "../../utils/Usercontext";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaname,
  avgRating,
  sla,
}) => {
  return (
    <div className="shadow-xl bg-[#FFF2D7] rounded-lg w-[230px] h-[380px] hover:bg-orange-200 hover:scale-105 transition-transform m-4 p-4 ">
      <img
        className="w-[200px] h-[150px] rounded-lg "
        src={IMG_CDN + cloudinaryImageId}
      />
      <h2 className="font-bold">{name}</h2>
      <h3 className="font-medium">
        ✪ {avgRating} • {sla.slaString}{" "}
      </h3>
      <h3>{cuisines.join(" , ")}</h3>
      {/* <h4 className="font-bold">{user.name}</h4> */}
    </div>
  );
};

export default RestaurantCard;
