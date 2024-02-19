import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
import { FETCH_MENU_URL2 } from "../constants";
const useRestaurant = (id) => {
  const [menu, setmenu] = useState(null);

  useEffect(() => {
    getmenu();
  }, []);

  async function getmenu() {
    const data = await fetch(FETCH_MENU_URL + id + FETCH_MENU_URL2);
    const json = await data.json();

    setmenu(json.data);
    // console.log(json.data.cards[0].card.card.info);
    // console.log(json.data.cards[0].card.card.info.name)
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.categories[0].itemCards[0].card.info.name)
  }
  return menu;
};
export default useRestaurant;
