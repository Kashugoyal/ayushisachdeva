import React from 'react';
import { useRouteData } from 'react-static';

export default function About() {
  const { posts } = useRouteData();
  return (
    <div>
      <p>React Static is a progressive static site generator for React.</p>
    </div>
  )
}
