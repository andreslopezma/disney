import React, { useState } from 'react'
import Title from './Title';
import { LocalMoviesOutlined } from '@mui/icons-material';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { Alert, AlertTitle, Box, Button, Fab, FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CardMovies from './CardMovies';

function Peliculas() {
    const titles = [{
        text: 'Home',
        icon: <CameraIndoorIcon sx={{ mr: 0.5 }} fontSize="inherit" />
    }, {
        text: 'Peliculas',
        icon: <LocalMoviesOutlined sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: null
    }];

    const {
        data,
        loading,
        error,
        getData,
        handleFilterClick,
        handleInputChange
    } = useFetch('movies');
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Title titles={titles} />
                <Tooltip title="Agregar nueva pelicula">
                    <Stack direction="row" spacing={1}>
                        <Link to={'/formulario/peliculas/series'}>
                            <Fab color="primary" aria-label="add">
                                <MovieFilterIcon />
                            </Fab>
                        </Link>
                    </Stack>
                </Tooltip>
            </Box>
            <Grid container spacing={2} mt={1}>
                <Grid item xs={12} md={7}>
                    <TextField
                        fullWidth
                        label="Titulo"
                        name="title"
                        id="title"
                        placeholder="(ej. Iron Man, Hulk)"
                        type="text"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <div>
                        <RadioGroup
                            row
                            aria-labelledby="demo-form-control-label-placement"
                            name="position"
                            defaultValue="top"
                        >
                            <FormControlLabel
                                value="ASC"
                                control={<Radio />}
                                label="ASC"
                                name="order"
                                id="order"
                                labelPlacement="top"
                                onChange={handleInputChange}
                            />
                            <FormControlLabel
                                value="DESC"
                                control={<Radio />}
                                label="DESC"
                                name="order"
                                id="order"
                                labelPlacement="top"
                                onChange={handleInputChange}
                            />
                        </RadioGroup>
                    </div>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleFilterClick}
                    >
                        Filtrar
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2} mt={2}>
                {
                    data.length ?
                        data.map(({ id, ...rest }) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={id}>
                                    <CardMovies
                                        data={rest}
                                        id={id}
                                        getData={getData}
                                    ></CardMovies>
                                </Grid>
                            );
                        })
                        :
                        <>
                            <Alert severity="info">
                                <AlertTitle>Info</AlertTitle>
                                Sin datos
                            </Alert>
                        </>
                }
            </Grid>
        </>
    )
}

export default Peliculas