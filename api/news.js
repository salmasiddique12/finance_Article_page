import axios from "axios";

export default async function handler(req, res) {
  try {
    
   const API_KEY = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${API_KEY}`;
    const response = await axios.get(url);

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error in API function:", error.response?.data || error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
