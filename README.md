## Overview

A starting pint for some examples.

## Clone and deploy with a click

You can get started with your own version of this site with a couple of clicks. the button below will cline this repo to your own GitHub account and link it to a new site for you on [Netlfy](https://www.netlify.com?utm_source=github&utm_medium=general-support-pnh&utm_campaign=devex)


[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/philhawksworth/speedrun&utm_source=github&utm_medium=general-support-pnh&utm_campaign=devex)


## Local developments

To build the site you need:

- [Node](https://nodejs.org)(and npm) - to run the build
- [Netlify CLI](https://docs.netlify.com/cli/get-started/?utm_source=github&utm_medium=general-support-pnh&utm_campaign=devex) - for local Netlify goodies



### Getting started

```bash

# clone this repository
git clone git@github.com:philhawksworth/speedrun.git

# go to the working directory
cd speedrun

# install dependencies
npm i

# install Netlify CLI
npm i --global netlify-cli

# start a local build server with hot reloading
ntl dev
```

You can run and watch the eleventy build directly or via the npm script:

```
npm start
```

or, to get some Netlify helpers for local replication of serverless functions etc, run:
```
ntl dev
```

This will run the Eleventy build server and add a local proxy to allow you to also access serverless functions, Netlify redirects and soon.

This route should hit your local Netlify Function:

`http://localhost:8888/.netlify/functions/hello?name=friend`

And since `ntl dev` also supports Netlify redirects API, we can specify a redirect to that too, and give it a nicer URL like:

`http://localhost:8888/api/hello/you!`


## Deployment

The build command `npm run build` will generate a set of static assets in a `dist` folder which can be deployed to any web hosting service.

[Netlify](http://www.netlify.com?utm_source=github&utm_medium=general-support-pnh&utm_campaign=devex) will run this build process in a CI environment and then deploy the build automatically to a global CDN. Such deployments are [triggered automatically](https://www.netlify.com/docs/continuous-deployment/?utm_source=github&utm_medium=general-support-pnh&utm_campaign=devex) by every git push to the `master` branch of the origin repository.


