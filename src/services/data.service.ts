/* 
  we need to use .env to access base_url
// */

const BASE_URL = process.env.PUBLIC_URL;

/* We can create object and export rather single function */
export const getData = async () => {
  const data = await fetch(BASE_URL + "/assets/wineData.json");
  return await data.json();
}