// pages/api/movies.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const API_URL = `${NEXT_PUBLIC_API_KEY}=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.status(200).json(data); // Return the movie data to the client
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from TMDB' });
  }
}
