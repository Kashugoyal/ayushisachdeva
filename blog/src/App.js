import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link as RouterLink, Router } from 'components/Router'
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic'])

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    boxShadow: "none",
    background: "white",
    margin: "auto",
    borderBottom: "1px solid black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign:"center"
  },
  paper: {
    background: "white"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Root>
      <CssBaseline />
      <AppBar className={classes.navbar} position="sticky">
        <Toolbar>
          <Grid container justify="center">
            <Hidden xsDown>
              <Grid item xs={3} sm={2} md={3} lg={4}>
                <Paper className={classes.paper}></Paper>
              </Grid>
            </Hidden>
            <Grid item xs={4} sm={2} md={2} lg={1} >
              <Link component={RouterLink} to="/">
                <Typography className={classes.title} variant="h6">
                  Home
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={4} sm={2} md={2} lg={1}>
              <Link component={RouterLink} to="/about">
                <Typography className={classes.title} variant="h6">
                  About
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={4} sm={2} md={2} lg={1}>
              <Link component={RouterLink} to="/blog">
                <Typography className={classes.title} variant="h6">
                  Blog
                </Typography>
              </Link>
            </Grid>
            <Hidden xsDown>
              <Grid item xs={3} sm={2} md={3} lg={4}>
                <Paper className={classes.paper}></Paper>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            {/* <Dynamic path="dynamic" /> */}
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
