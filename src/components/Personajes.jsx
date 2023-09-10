import React from 'react'
import { Link } from 'react-router-dom';
import { PersonPin } from '@mui/icons-material';
import { Box, Fab, Stack, Tooltip } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';

// components
import CardCustom from './CardCustom'
import Title from './Title'

function Personajes() {
    const titles = [{
        text: 'Home',
        icon: <CameraIndoorIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: '/'
    }, {
        text: 'Personajes',
        icon: <PersonPin sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: null
    }];
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
            <CardCustom></CardCustom>
        </>
    )
}

export default Personajes