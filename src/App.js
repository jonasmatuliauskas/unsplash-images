import React from 'react'
import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HomePage from './pages/HomePage'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
  containerSpace: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.containerSpace}>
        <HomePage />
      </Container>
    </div>
  )
}

export default App;