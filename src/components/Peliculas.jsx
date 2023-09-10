import React from 'react'
import CardCustom from './CardCustom'
import Title from './Title';
import { LocalMoviesOutlined } from '@mui/icons-material';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { Box, Fab, Stack, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function Peliculas() {
    const titles = [{
        text: 'Home',
        icon: <CameraIndoorIcon sx={{ mr: 0.5 }} fontSize="inherit" />
    }, {
        text: 'Peliculas',
        icon: <LocalMoviesOutlined sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: null
    }];
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
            <CardCustom></CardCustom>
        </>
    )
}

export default Peliculas