import React from 'react'
import MaterialAlert from '@material-ui/lab/Alert';
import { Grid } from '@material-ui/core';

const Alert = (props) => (
    <Grid>
        <MaterialAlert severity={props.type}>
            {props.children}
        </MaterialAlert>
    </Grid>
)

export default Alert;