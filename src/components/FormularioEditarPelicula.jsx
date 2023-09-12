import React, { useEffect, useRef, useState } from 'react'
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import { LocalMoviesOutlined, PersonPin } from '@mui/icons-material';
import DrawIcon from '@mui/icons-material/Draw';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Button, Chip, Divider, Grid, Rating, Stack, TextField, Typography } from '@mui/material';
import Title from './Title';
import useUpdate from '../hooks/useUpdate';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function FormularioEditarPelicula() {
    const { id } = useParams();
    const movie = useFetch(`movie/${id}`);
    const [flag, setFlag] = useState(false);
    const [formMovies, setFormMovies] = useState({});
    const { updateData } = useUpdate(`movie`, '/peliculas/series');
    const titles = [{
        text: 'Home',
        icon: <CameraIndoorIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: '/'
    }, {
        text: 'Peliculas',
        icon: <LocalMoviesOutlined sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: '/peliculas/series'
    }, {
        text: 'Formulario',
        icon: <DrawIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: null
    }];

    useEffect(() => {
        if (movie != undefined && movie.data.length && flag == false && id) {
            setFormMovies(movie.data[0]);
            setFlag(true);
        }
    }, [movie])


    const fileInput = useRef(null);

    const handleButtonClick = () => {
        fileInput.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("Archivo seleccionado:", file.name);
        // Aquí puedes manejar el archivo cargado según lo que necesites hacer
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormMovies({
            ...formMovies,
            [name]: value
        });
    };

    const { title, qualification, publication_date } = formMovies;

    return (
        <>
            <Title titles={titles} />
            <Divider sx={{ mb: 4, mt: 2 }} textAlign="center" >
                <Chip label="Editando Pelicula o Serie" />
            </Divider>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        focused
                        label="Titulo"
                        name="title"
                        id="title"
                        value={title}
                        placeholder="(ej. Luca, Toy Story)"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Fecha de Publicacion"
                        name="publication_date"
                        id="publication_date"
                        placeholder="(ej. 35)"
                        type="date"
                        value={publication_date ? publication_date.substring(0, 10) : ''}
                        focused
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography component="legend">Calificacion</Typography>
                    <Rating
                        name="qualification"
                        id="qualification"
                        value={qualification ? qualification : 0}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <input
                        ref={fileInput}
                        type="file"
                        hidden
                        onChange={handleFileChange}
                    />
                    <Button fullWidth variant="contained" color="primary" onClick={handleButtonClick}>
                        Cargar Imagen
                    </Button>
                </Grid>
                <Grid item container justifyContent="center" alignItems="center">
                    <Stack>
                        <Button
                            variant="outlined"
                            tartIcon={<SaveAsIcon />}
                            onClick={() => updateData(formMovies)}
                        >
                            Editar
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default FormularioEditarPelicula