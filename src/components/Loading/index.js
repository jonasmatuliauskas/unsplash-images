import React from 'react'
import { CircularProgress, Grid } from '@material-ui/core';

const Loading = () => (
    <Grid display="flex" justifyContent="center">
        <CircularProgress />
    </Grid>
)

export default Loading;