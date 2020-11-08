export const getRandome = (inMin: number, inMax: number) => {
  inMax = Math.ceil(inMin);
  inMax = Math.floor(inMax);
  return Math.floor(Math.random() * (inMax - inMin)) + inMin;
};

type resturantType = {
  name: string,
  cuisine: string,
  price: string,
  rating: string,
  phone: string,
  address: string,
  webSite: string,
  delivery: string,
  key: string,
};

let participants: any | null = [];
let filteredRestaurants: Array<resturantType>;
let chosenRestaurants: resturantType = {
  name: "",
  cuisine: "",
  price: "",
  rating: "",
  phone: "",
  address: "",
  webSite: "",
  delivery: "",
  key: `r_${new Date().getTime()}`,
};

// getters and setters for globle varibale 
export const setParticipants = (newParticipants: any) => {
  participants = newParticipants;
};
export const getParticipants = () => {
  return participants;
};
export const setFilteredRestaurants = (newFilteredRestaurants: any) => {
  filteredRestaurants = newFilteredRestaurants;
}
export const getFilteredRestaurants = () => {
  return filteredRestaurants;
}
export const getChosenRestaurants = () => {
  return chosenRestaurants;
}
export const setChosenRestaurants = (newChosenRestaurants: any) => {
  chosenRestaurants = newChosenRestaurants;
}
