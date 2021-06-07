import React from 'react';
import path from 'path'
const { promisify } = require('util')
const fs = require('fs')
const readFileAsync = promisify(fs.readFile)

export default {
  getRoutes: async () => {
    const posts = await readFileAsync('public/assets/data.json').then(data => JSON.parse(data)["posts"]);
    return [
      {
        path: '/',
        getData: () => ({
          posts,
        })
      },
      {
        path: '/about',
        getData: () => ({
          posts,
        })
      },
      {
        path: '/blog',
        getData: () => ({
          posts,
        })
      },
      ...posts.map(post => ({
        path: `/post/${post.id}`,
        template: 'src/containers/Post',
        getData: () => ({
          post,
        }),
      })),
    ]
  },
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    'jss-provider',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
