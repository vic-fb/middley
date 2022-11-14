# Creating a progressive web app

## Client

The instructions below follow the create-react-app steps described [here](https://create-react-app.dev/docs/making-a-progressive-web-app/).

In the directory where you want to have your application, run: `npx create-react-app . --template cra-template-pwa`

To use the service worker, change the next line `serviceWorkerRegistration.unregister();` in `index.js` to `serviceWorkerRegistration.register();`

You can check the current version for deploy in your local by running 
`npm run build`, and next `serve -s build`.

## Server

To create the Express server, run `npx express-generator --no-view` and follow Jim's instructions for Express Scaffolding in the ProjectScaffolding PDF.

We need certain files in our server to be able to deploy the standalone Express server in Vercel.
The following steps are based on [this](https://vercel.com/guides/using-express-with-vercel) instructions.
Create a file `index.js` and add it to an `/api` folder in the server. It should contain:

```javascript
const app = require('express')();
const cors = require('cors');

// import any routes you need
const usersRouter = require('../routes/users');

app.use(cors());

// use your routes
app.use('/api/users', usersRouter);

module.exports = app;
```

Add a `vercel.json` file to push all traffic to `index.js`. It should contain:

```json
{
"rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
}
```


## Deploy

To deploy your application on Vercel, you can follow the steps [here](https://vercel.com/docs/concepts/git#deploying-a-git-repository).

You will have to deploy the client selecting the 'Create React App' framework and deploy the server selecting 'Other'.

*Don't forget to connect your client with the corresponding server!*



