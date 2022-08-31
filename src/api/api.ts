import axios from "axios";
const key = "e87fdc1f590d4947d7ffb41444db8379";
const url = "https://api.openweathermap.org/data/2.5/";

export const getWeather = async (keyword: String,path:String = "weather"): Promise<any> => {
  const response = await axios.get(url + path, { params: { q: keyword, appid: key } });
  return response.data;
};
