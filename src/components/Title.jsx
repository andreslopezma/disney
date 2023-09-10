import React from 'react';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';

function Title({ titles, icon }) {
    return (
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
                {
                    titles.map(function ({ text, icon, path }, index) {
                        return (
                            <Link
                                color="inherit"
                                key={index}
                                style={{ 'color': 'grey' }}
                                to={path}
                            >
                                {icon}
                                {text}
                            </Link>
                        )
                    })
                }
            </Breadcrumbs>
        </div>
    )
}

export default Title