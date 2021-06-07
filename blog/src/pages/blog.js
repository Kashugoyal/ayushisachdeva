import React from 'react'
import { useRouteData } from 'react-static'
import { Link as RouterLink } from 'components/Router'
import { Container, Link, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import PostGrid from '../containers/PostGrid';

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

export default function Blog() {
  const { posts } = useRouteData();
  const classes = useStyles();
  return (
    <div>
      <div>
        <a href="#bottom" id="top">
          Scroll to bottom!
        </a>
      </div>
      <PostGrid posts={posts}></PostGrid>
      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </div>
  )
}
