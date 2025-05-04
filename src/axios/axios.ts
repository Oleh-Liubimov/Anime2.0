import axios from "axios";
import { PexelsResponse } from "./types/photos";

const url = `https://api.pexels.com/v1/search?query=mobile wallpaper&orientation=portrait`;

axios.defaults.headers.common["Authorization"] =
  process.env.EXPO_PUBLIC_API_KEY;

export const getWallpapers = async (): Promise<PexelsResponse> => {
  const res = await axios.get(url);

  return res.data;
};
