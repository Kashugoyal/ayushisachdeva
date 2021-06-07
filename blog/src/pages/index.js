import React from 'react';
import { useRouteData } from 'react-static'
import { Typography } from '@material-ui/core';
import PostGrid from '../containers/PostGrid';

export default function Index() {
  const { posts } = useRouteData();

  return (
    <div>
      <Typography style={{ textAlign: 'center' }} variant="h1">
        Ayushi Sachdeva
      </Typography>
      <PostGrid posts={posts}></PostGrid>
    </div>

  )
}
