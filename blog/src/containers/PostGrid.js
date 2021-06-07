import React from 'react'
import { useRouteData } from 'react-static'
import { Link as RouterLink } from 'components/Router'
import { Container, Link, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "80%",
    height: "auto",
  },
  gridListTile: {
    minHeight: "350px",
    width: "auto",
  },
  img: {
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function PostGrid(data) {
  const classes = useStyles();
  return (
    <Container align="center">
      <GridList className={classes.gridList} cols={2}>
        {data.posts.map((tile) => (
          <GridListTile key={tile.id} className={classes.gridListTile} >
            <Link component={RouterLink} to={"/post/" + tile.id}>
              <img className={classes.img} src={"/assets/images/" + tile.img_url} alt={tile.id} />
              <GridListTileBar
                title={tile.date}
                actionIcon={
                  <IconButton aria-label={`info`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </Container>
  )
}
