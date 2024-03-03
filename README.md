<img align="right" src="client/public/logos/favicon.ico" alt="middley-icon" height="60"/>

# Middley

Middley is an app designed to help you meet your friends halfway. Based on two locations and a preferred activity type provided by the user, the app displays a few meet-up spots to choose from.

## Motivation

A problem that deserves a solution: our research showed that Millennials and Gen Z are more connected than ever through social media, and yet are often lonely and struggle to make decisions. 

Our motivation behind creating Middley was the wish to enable young urbanites to do more of what they love 

– spending quality time with friends –

by helping them transcend the barriers of indecisiveness and lack of 
time and energy. 

## Usage

The user can either start by logging in, choosing a local search or a worldwide search (not active yet).

If clicking on the log in section, the user has the option to log in or sign up. Once logged in, the user can save their home and work address for future use.

If clicking on the local view, the user is then asked to input two addresses. They can use the saved home/work address for the first input if desired. The second address should be the location of their friend.

Once the midpoint is calculated, the user can choose from a variety of activities. 

After choosing, they can see a few options of places around the middle of the two locations. They have reviews and price points to help choose.

Once chosen, they can click 'Go!' to bring up a map. If they click on the map, it will open in Google Maps. If they click 'Share Place' this will generate a link to send to a friend, which will bring up the location on Google Maps on their phone. 

Both parties will now be able to navigate to the chosen location with ease.

## Main features
- user registration, user login and profile access (authentication and authorization)
- provide meet-up options between two locations (geocoding with OpenCage API, options from Yelp Fusion API)
- display meet-up location on map (Google Maps Embed API)
- share location (Javascript Web Share API)

## Tools used

The frontend was created using [Create React App](https://create-react-app.dev/docs/making-a-progressive-web-app/) (CRA), as a Progressive Web Application.

The backend was created using [Express](http://expressjs.com/). 

This app was deployed on [Vercel](https://vercel.com/docs), as a CRA application and standalone Express. A cloud mySQL database was created on [PlanetScale](https://planetscale.com/).

Other libraries and tools we used are:
- [Chakra](https://chakra-ui.com/)
- [React Router](https://reactrouter.com/en/main)
- [React icons](https://react-icons.github.io/react-icons/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Json web token](https://jwt.io/)
- Third Party APIs (OpenCage geocoding API, Yelp Fusion API, Google Maps Embed API)

![img.png](client/src/common/assets/tech-stack.png)

## DB schema

![DB schema as seen on DrawSQL](client/src/common/assets/database-schema.png)

## Setup

Clone this repo and get started following the next steps:

### Client
1. Go to [OpenCage](https://opencagedata.com/api#quickstart) and get a free geocoding API key.

In the client folder:
2. Add a `.env` file containing `REACT_APP_OCD_API_KEY=(your API key)`
3. Run `npm install`
4. Run `npm start` to start the application

### Server and database

1. In the server folder, run `npm install`

2. Create local database\
    2.1. Open MySQL in your terminal by running `mysql -u root -p;`\
    2.2. Create a new database called userdata: `CREATE DATABASE userdata;`\
    2.3. Create an `.env` file in the server folder with MySQL authentication information

    ```
    DB_HOST=localhost
    DB_USER=root
    DB_NAME=userdata
    DB_PASS=(your password)
    ```
    2.4. In a separate terminal in the server folder, run `npm run migrate`\
    2.5. In your MySQL terminal window, run `USE userdata;` then `SHOW TABLES;` (it should contain 1 table called `users`)\
    2.6. You can run `DESCRIBE users;` to check that the table has been set up correctly

3. Go to [Yelp for developers](https://www.yelp.com/developers/documentation/v3/authentication) and obtain a private API key. Add it to the `.env` file in the server folder as `YELP_API_KEY=(your API key)`

4. Run `npm start` to start the server



