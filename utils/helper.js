export const filterdata = (type, restaurant) => {
    return restaurant.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(type.toLowerCase())
    );
  };



