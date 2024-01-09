import React, { useState } from 'react';
import { Data } from './Data';
import { Box, Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';

const Movies = () => {
    const [movieData, setMovieData] = useState(Data);
    return (
        <>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", p: "20px" }}>
                {movieData.map((movie) => (
                    <Paper key={movie.id} sx={{ width: "30%", mb: "20px" }}>
                        <Card>
                            <CardMedia
                                component={'img'}
                                image={movie.Images}
                                alt={movie.Title}
                                height={200}
                            />
                            <CardContent>
                                <Typography variant="h5">{movie.Title}</Typography>
                                <Typography>Genre: {movie.Genre}</Typography>
                                <Typography>Year: {movie.Year}</Typography>
                                <Typography>Director: {movie.Director}</Typography>
                                <Typography>Rating: {movie.Rating}</Typography>
                                {/* Add more information here */}
                            </CardContent>
                        </Card>
                    </Paper>
                ))}
            </Box>
        </>
    );
}

export default Movies;
