import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../../constants";
import Shimmer from "./shimmer";
import useRestaurant from "../../utils/useRestaurant";
import { addItem } from "../../utils/cartslice";
import { useDispatch } from "react-redux";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();

  const menu = useRestaurant(id);

  console.log(menu);

  if (menu === null) {
    return <Shimmer />;
  }

  const { name, cloudinaryImageId, areaName } =
    menu?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-4xl text-gray-700 py-5">{name}</h1>
        <p className="font-bold 2xl">{areaName}</p>
        {categories.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
