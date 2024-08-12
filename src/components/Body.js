import {RestaurantCard} from "./RestaurantCard";
import { RestaurantList } from "../../constants";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import Usercontext from "../../utils/Usercontext";
import Footer from "./Footer";

const Body = () => {
  const [allrestaurant, setallrestaurant] = useState([]);
  const [filteredrestaurant, setfilteredrestaurant] = useState([]);
  const [type, setSearchText] = useState("");
  // const{user,setuser}=useContext(Usercontext);

  useEffect(() => {
    getrestaurant();
  }, []);

 
const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        console.log("enter is pressed")
        const data = filterdata(type, allrestaurant);
        setfilteredrestaurant(data);
   }
 };

  const getrestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    setallrestaurant(
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
    <div className="bg-[#f8f8f8]">
      <div className=" p-5 my-5 flex ml-12  ">
        <input
          className="rounded-lg bg-[#ffffff] border border-spacing-1 border-gray-400 font-semibold outline-none p-2 px-11 "
          data-testid="search-input"
          type="text"
          placeholder="Search"
          value={type}
          onChange={(e) => {
            setSearchText(e.target.value)
            const data = filterdata(e.target.value, allrestaurant);
            setfilteredrestaurant(data);
          }
          }
          onKeyDown={handleKeyDown} // Handle Enter key press
        ></input>

        <button
          data-testid="search-btn"
          className="px-3 py-1 ml-3 bg-[#aed8ac] rounded-lg text-gray-500 font-bold hover:bg-[#b1c8af] "
          onClick={() => {
            const data = filterdata(type, allrestaurant);
            setfilteredrestaurant(data);
          }}
        >
          Search
        </button>
        {/* <input value={user.name} onChange={(e)=>setuser({name: e.target.value})}></input> */}
      </div>

      <div className="flex flex-wrap gap-6 mx-12 " data-testid="res-list">
        {filteredrestaurant.map((e) => {
          return (
            <Link to={"/restaurant/" + e.info.id} key={e.info.id}>
              <RestaurantCard {...e.info}/>
              
            </Link>
          );
        })}
      </div>
      </div>
      <div>
        <Footer/>
      </div>
      </>
  );
};

export default Body;
