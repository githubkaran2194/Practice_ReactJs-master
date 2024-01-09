import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

function MovieApp() {
  const [movieInfo, setMovieInfo] = useState(null);

  const fetchData = async () => {
    const apiKey = "bc747937"; // Replace with your OMDB API key
    const imdbID = "tt3896198"; // Replace with the IMDb ID of the movie you want to fetch

    try {
      const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMovieInfo(data);
    } catch (error) {
      alert(error.message + " Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Movie Information</h1>
      {movieInfo && (
        <Card sx={{width:"200px"}}>
          <CardMedia
            component="img"
            height="200"
            alt={movieInfo.Title}
            image={movieInfo.Poster}
            title={movieInfo.Title}
          />
          <CardContent>
            <Typography variant="h5">{movieInfo.Title}</Typography>
            <Typography>{movieInfo.Year}</Typography>
            <Typography>{movieInfo.Genre}</Typography>
            {/* Add more information here */}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default MovieApp;
