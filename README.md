# About Middley

'What is Middley here' You can try it out [here]()

## Motivation

## User Flow

## DB schema

## Tools used

## Installation instructions

### Client

The frontend was created using Create React App, with a [Progressive Web Application template](https://create-react-app.dev/docs/making-a-progressive-web-app/).

To start the application you can run `npm start` in the client folder. Don't forget to `npm install` first.

(this was depoyed on [Vercel as a Create React App](https://vercel.com/guides/deploying-react-with-vercel))

### Database

The local database we are using is called: userdata (name to be changed to app name later on)
It has one table: userInfo

1. - Open MySQL in your terminal by running `mysql -u root -p;`

2. - Create a new database called "userdata": `CREATE DATABASE userdata;`

3. - Create an `.env` file in the project folder which contains MySQL authentication information. For example:

```bash
DB_HOST=localhost
DB_USER=root
DB_NAME=userdata
DB_PASS=(your password)
```
(If you don't have this file yet, make sure to set it up before moving on to the next step.)

4. - In a separate terminal go to the project folder server and run `npm run migrate`.

5. - In your MySQL terminal window, run `USE userdata;` then `SHOW TABLES;`. Your database should contain 1 table: `users`

6. - You can run `DESCRIBE users;` to check that the table has been set up correctly.

### Server

(this was deployed on [Vercel as Standalone Express](https://vercel.com/guides/using-express-with-vercel))



