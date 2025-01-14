import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjE2ZmViNzE0ODk0YjY4NzcyMTcxNTMwNzlhMjlhYSIsIm5iZiI6MTczNjQzNzM5OC4xNzYsInN1YiI6IjY3N2ZlZTk2NzczMjIwOWUxN2JiMzY1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7s1mmFYrVelLe7TbwRrX8D6pT85q0Gy2gO-zzJXhTPI";

const options = {
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
    accept: "application/json",
  },
};
export const fetchMovies = async () => {
  const { data } = await axios.get("/trending/movie/day", options);
  return data;
};

export const fetchMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}`, options);
  return data;
};

export const fetchCastById = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`, options);
  return data;
};

export const fetchReviewById = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, options);
  return data;
};

export const searchMovieByQuery = async (query) => {
  const { data } = await axios.get(`/search/movie`, {
    ...options,
    params: { query },
  });
  return data;
};
