import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { PersonPin } from '@mui/icons-material';
import { Box, Button, Fab, FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField, Tooltip } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';

// components
import CardCustom from './CardCustom'
import Title from './Title'
import useFetch from '../hooks/useFetch';

function Personajes() {
    const [filterParams, setFilterParams] = useState({});
    const [params, setParams] = useState({});

    const titles = [{
        text: 'Home',
        icon: <CameraIndoorIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: '/'
    }, {
        text: 'Personajes',
        icon: <PersonPin sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: null
    }];


    const handleFilterClick = () => {
        setFilterParams(params)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setParams({ ...params, [name]: value ? value : null });
    };
    const { data, loading, error, getData } = useFetch('characters', filterParams);
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Title titles={titles} />
                <Tooltip title="Agregar nuevo personaje">
                    <Stack direction="row" spacing={1}>
                        <Link to={'/formulario/personajes'}>
                            <Fab color="primary" aria-label="add">
                                <PersonAddAlt1Icon />
                            </Fab>
                        </Link>
                    </Stack>
                </Tooltip>
            </Box>
            <Grid container spacing={2} mt={1}>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Edad"
                        name="age"
                        id="age"
                        placeholder="(ej. 35)"
                        type="number"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Nombre"
                        name="name"
                        id="name"
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
                                    <CardCustom
                                        data={rest}
                                        id={id}
                                        getData={getData}
                                    ></CardCustom>
                                </Grid>
                            );
                        })
                        :
                        <p>sin datos</p>
                }
            </Grid>
        </>
    )
}

export default Personajes