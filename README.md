# About Middley

Spend less time having to decide where to meet, and spend more time meeting up.

Middley is the perfect way to have your friends meet you half way.  The app calculates the midway point between two locations and lets users filter-out their choice fatigue by displaying the perfect meet-up spots based on preferred activity types. You can try it out here:  https://fs-22-team3.vercel.app/.

## Motivation

## User Flow

## DB schema

## Tools used

The frontend was created using [Create React App](https://create-react-app.dev/docs/making-a-progressive-web-app/)(CRA), as a Progressive Web Application.

This app was depoyed on [Vercel](https://vercel.com/docs), as a CRA application and standalone Express. A cloud mySQL database was created on [PlanetScale](https://planetscale.com/).

## Installation instructions

### Client

In the client folder:

1. Run `npm install`
2. Run `npm start` to start the application

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



