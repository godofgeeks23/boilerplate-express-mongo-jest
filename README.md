# Express Mongo Jest boilerplate

Boilerplate code for an Express server + MongoDB + Jest setup (for testing) - for getting started quickly.

![image](https://github.com/user-attachments/assets/a8534ce2-eac9-4ee3-a237-f5912936525b)


## Setup

1. Clone the repository

```
git clone https://github.com/godofgeeks23/boilerplate-express-mongo-jest.git
```

2. Install the dependencies

```
cd boilerplate-express-mongo-jest
npm install
```

3. Run `npm run dev` to start the server in development mode
4. Run `npm test` to run the test suite


## Project structure for reference

```
./
├── controllers/
│   └── sample.controller.js
├── models/
│   └── sample.model.js
├── routes/
│   └── sample.route.js
├── tests/
│   └── sample.test.js
├── app.js
├── server.js
├── package.json
├── README.md
└── .env
```


## Description of the files and folders:

- `controllers`: Contains the logic for the routes
- `models`: Contains the database schema models for the MongoDB collections
- `routes`: Contains the POST API routes for the server
- `tests`: Contains the tests for the app
- `app.js`: Main file for the server
- `server.js`: File to start the server (entrypoint)
- `package.json`: Contains the dependencies and scripts - for a node project
- `package-lock.json`: Contains the dependencies and their versions
- `.env`: Contains the environment variables
- `sample.env`: Sample environment file


## NOTE:

- The server runs on port 3000 by default. This can be changed in the `.env` file
