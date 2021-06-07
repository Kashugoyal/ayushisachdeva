import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from 'components/Router';
import { Grid, Paper, Typography } from '@material-ui/core';

export default function Post() {
  const { post } = useRouteData()
  return (
    <div>
      <Grid container spacing={4} direction="row" justify="center" alignItems="center">
        <Grid item xs={10} sm={6} md={5} xl={5}>
          <img src={"/assets/images/" + post.img_url} alt="alt" />
        </Grid>
        <Grid item xs={10} sm={4} md={4} xl={5}>
          <Paper elevation={0} height="100%">
            <Typography>
              {post.description}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <div dangerouslySetInnerHTML={{
        __html: `<div class="boutique-widget" data-widget-id="1061826">
        <script
          type="text/javascript">!function (w, i, d, g, e, t) { d.getElementById(i) || (element = d.createElement(t), element.id = i, element.src = "https://widgets.rewardstyle.com" + e, d.body.appendChild(element)), w.hasOwnProperty(g) === !0 && "complete" === d.readyState && w[g].init() }(window, "boutique-script", document, "__boutique", "/js/boutique.js", "script")</script>
        <div class="rs-adblock"><img
            src="https://assets.rewardstyle.com/production/bf7556aff078341a8b5f737ec9c34286d9b04640/images/search/350.gif"
            onerror='this.parentNode.innerHTML="Disable your ad blocking software to view this content."'
            style="width: 15px; height: 15px"><noscript>JavaScript is currently disabled in this browser. Reactivate it
            to view this content.</noscript></div>
      </div>`}}>
        { }
      </div>
    </div>
  )
}
