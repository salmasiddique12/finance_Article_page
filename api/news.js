import axios from "axios";

export default async function handler(req, res) {
  try {
    const API_KEY = process.env.NEWS_API_KEY || "b42c9b1474d44029b704f3ca31871631";
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=finance&sortBy=publishedAt&language=en&apiKey=${API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error in API function:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
