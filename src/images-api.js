import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (searchQuery, currentPage, apiKey) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      per_page: 12,
      page: currentPage,
      client_id: apiKey,
      orientation: "landscape",
    },
  });
  return response.data.results;
};
