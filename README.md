# Express Mongo Jest boilerplate

Boilerplate code for an Express server with MongoDB and Jest setup (for testing) - to get you started quickly.

## Setup

1. Clone the repository

```
git clone https://github.com/godofgeeks23/boilerplate-express-mongo-jest.git
```

2. Run `npm install` to install the dependencies

3. Run `npm run dev` to start the server
4. Run `npm test` to run the tests

## Project structure for reference

```
.
├── controllers
│   └── sample.controller.js
├── models
│   └── sample.model.js
├── routes
│   └── sample.route.js
├── tests
│   └── sample.test.js
├── app.js
├── server.js
├── package.json
├── README.md
└── .env
```

## Description of the files and folders:

- `controllers`: Contains the controllers for the routes
- `models`: Contains the models for the MongoDB collections
- `routes`: Contains the routes for the server
- `tests`: Contains the tests for the server
- `app.js`: Main file for the server
- `server.js`: File to start the server
- `package.json`: Contains the dependencies and scripts
- `package-lock.json`: Contains the dependencies and their versions
- `.env`: Contains the environment variables
- `sample.env`: Sample environment file

## Note

- The server is running on port 3000 by default. You can change it in the `app.js` file.
