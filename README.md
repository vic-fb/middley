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
const indexRouter = require("../routes");

app.use(cors());
// use your routes
app.use('/api', indexRouter);
app.use('/api/users', usersRouter);

module.exports = app;
```

Add a `vercel.json` file to push all traffic to `index.js`. It should contain:

```json
{
"rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
}
```

## Database

The local database we are using is called: userdata (name to be changed to app name later on)
It has one table: userInfo

1. - Open MySQL in your terminal by running `mysql -u root -p;`

2. - Create a new database called "userdata": `CREATE DATABASE userdata;`

3. - There is an `.env` file in the project folder which contains MySQL authentication information. For example:

```bash
DB_HOST=localhost
DB_USER=root
DB_NAME=userdata
DB_PASS=(your password)
```
(If you don't have this file yet, make sure to set it up before moving on to the next step.)

4. - In a separate terminal go to the project folder and run `npm run migrate`.

5. - In your MySQL terminal window, run `USE userdata;` then `SHOW TABLES;`. Your database should contain 1 table: `userInfo`

6. - You can run `DESCRIBE userInfo;` to check that the table has been set up correctly.


## Deploy

To deploy your application on Vercel, you can follow the steps [here](https://vercel.com/docs/concepts/git#deploying-a-git-repository).

You will have to deploy the client selecting the 'Create React App' framework and deploy the server selecting 'Other'.

*Don't forget to connect your client with the corresponding server!*

When deploying the frontend, you should add an Environment Variable (REACT_APP_API_URL) for your server URL.
In the frontend, you can add:

```javascript
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
```

You should use this variable to build your fetch routes in the front (for example, apiUrl + '/api/users').

## Add cloud database




