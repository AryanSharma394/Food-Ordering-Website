import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../../constants";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import Usercontext from "../../utils/Usercontext";

const Body = () => {
  const [allrestaurant, setallrestaurant] = useState([]);
  const [filteredrestaurant, setfilteredrestaurant] = useState([]);
  const [type, setSearchText] = useState("");
  // const{user,setuser}=useContext(Usercontext);

  useEffect(() => {
    getrestaurant();
  }, []);

  const getrestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    setallrestaurant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrestaurant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const isonline = useOnline();

  if (!isonline) {
    return <h1>🔴Oops seems like you are offline</h1>;
  }

  if (!allrestaurant) return null;

  return allrestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" p-5 my-5 flex ml-12 ">
        <input
          className="rounded-lg bg-orange-100 font-semibold outline-none p-2"
          data-testid="search-input"
          type="text"
          placeholder="search"
          value={type}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          data-testid="search-btn"
          className="px-3 py-1 ml-3 bg-orange-300 rounded-lg text-white"
          onClick={() => {
            const data = filterdata(type, allrestaurant);
            setfilteredrestaurant(data);
          }}
        >
          search
        </button>
        {/* <input value={user.name} onChange={(e)=>setuser({name: e.target.value})}></input> */}
      </div>

      <div className="flex flex-wrap gap-6 mx-12 " data-testid="res-list">
        {filteredrestaurant.map((e) => {
          return (
            <Link to={"/restaurant/" + e.info.id} key={e.info.id}>
              <RestaurantCard {...e.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
