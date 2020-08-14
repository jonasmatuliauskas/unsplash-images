import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Typography} from '@material-ui/core';
import { Field as SearchField, Button, GridList, List, Alert, Loading } from '../../components'
import useStyles from './style'
import * as actions from '../../store/actions';

const HomePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [query, setQuery] = useState('')
    const images = useSelector(state => state.images);
    const queries = useSelector(state => state.images.queries);

    const saveQuery = () => {
        if (query.length > 0) dispatch(actions.saveSearchQuery(query))
    }

    const loadImages = useCallback((query) => dispatch(actions.fetchImages(query)),[dispatch]);

    const onChange = (e) => {
        const { value } = e.target
        setQuery(value)
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} className={classes.searchField}>
                        <SearchField onChange={onChange} label="Enter image title" />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.buttonsWrapper}>
                        <Grid>
                            <Button onClick={() => loadImages(query)} type="primary" title="Search" />
                        </Grid>
                        <Grid className={classes.buttonSpace}>
                            <Button onClick={() => saveQuery()} type="secondary" title="Save" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <GridList data={images.list}/>
                        {(images.loading && 
                            <Loading />
                        )}
                        {(images.error && 
                            <Alert type="error">
                                ERROR
                            </Alert>
                        )}
                        {(!images.hasResult && !images.firstSearch &&
                            <Alert type="info">
                                NO RESULT
                            </Alert>
                        )}
                    </Grid>
                <Grid item xs={12} sm={6} className={classes.searchHistory}>
                    {!!queries.length && (
                        <>
                            <Typography variant="h6">
                                Search history
                            </Typography>
                            <List onClick={() => loadImages(query)} list={queries}/>
                        </>
                    )}
                </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomePage;