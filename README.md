# About Middley

'What is Middley here' You can try it out [here]()

## Motivation

## User Flow

## DB schema

## Tools used

The frontend was created using [Create React App](https://create-react-app.dev/docs/making-a-progressive-web-app/)(CRA), as a Progressive Web Application.

The app was depoyed on [Vercel](https://vercel.com/docs), as a CRA application and standalone Express.

## Installation instructions

### Client

To start the application you can run `npm start` in the client folder. If it's the first time you're trying it out, don't forget to `npm install` first.

### Database

The local database we are using is called: userdata. It has one table: users.

1. Open MySQL in your terminal by running `mysql -u root -p;`

2. Create a new database called "userdata": `CREATE DATABASE userdata;`

3. Create an `.env` file in the project folder which contains MySQL authentication information. For example:

```bash
DB_HOST=localhost
DB_USER=root
DB_NAME=userdata
DB_PASS=(your password)
```

4. - In a separate terminal go to the project folder server and run `npm run migrate`.

5. - In your MySQL terminal window, run `USE userdata;` then `SHOW TABLES;`. Your database should contain 1 table: `users`

6. - You can run `DESCRIBE users;` to check that the table has been set up correctly.

### Server



