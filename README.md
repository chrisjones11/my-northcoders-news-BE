# Northcoders News Api

My own interpretation of the Northcoders News API using Node, Express, and MongoDB.

#Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.



### Prerequisites

This project requires nodejs, npm, git and mongoDB to be installed


##### Node    
To confirm you have version 7 or aboveof nodejs installed on your machine,  Open your terminal then type and run the following code:

```
$ node -v
```

If nodejs is not installed on your machine or you version is less then 7, refer to the [node documentation](https://nodejs.org/en/download/package-manager/) for instructions. 

##### Npm    
To confirm you have npm installed on your machine, Open your terminal then type and run the following code:

```
$ npm -v
```

If you don't have npm installed on your machine, instructions for installing npm can be found at [https://www.npmjs.com/get-npm].

##### Git

To confirm you have git installed on your machine, Open your terminal then type and run the following code:

```
$ git --version
```

If you don't have git installed on your machine, instructions for installing git can be found at [https://git-scm.com/].

####mongoDB

To confirm you have mongodb installed on your machine, Open your terminal then type and run the following code:

```
$ mongod --version
```

If you don't have mongodb installed on your machine, instructions for installing mongodb can be found at [https://docs.mongodb.com/manual/administration/install-community/].

___

### Installation

open terminal and navagate to the directory where you want the repository to be installed then run the following code:

```
$ git clone git@github.com:chrisjones11/my-northcoders-news-BE.git
```
Then to install all dependences navigate inside the my-northcoders-news-BE project
 and run the following code:

```
$ npm install
```

next open a separate terminal window to start mongod, do so by running the following command.

```
$ mongod
```

Make sure no other clients are accessing the mongo ports. If they are locate the processes an stop them.


now navigate to the root directory and Run the following command.

```
$ npm run "seed-db"
```

This will populate the DEV database. It's only necessary for the DEV db because the TEST database is dropped and re-seeded before each block of tests.

___

### Start the server

make sure to be in the root directory and Run the following command.

```
$ npm start
```

Your should see this as the last lines of the output


```
listening on port 5000
successfully connected to database
```

In the browser navigate to [http://localhost:5000/] and follow the instructions available there. All of the routes are listed and described at [http://localhost:5000/] 

___

### Running the tests

The tests are built using Mocha, Chai, and Supertest

To run the tests, type the following command in your terminal

```
$ npm test
```

The tests give a good summary of all of the routes and what features they have.

___

### Built With

* Mocha - Javascript test framework
* Chai - Test assertion library
* Husky - Git hooks made easy, used to chain linting and tests before commits
* ESLint - Linting utility
* nodemon - server change monitoring and restart
* mongoose.js - object modelling and db interaction
* supertest - HTTP assertions, used in testing POST/PUT routest
* chance
* underscore - JS library for helper functions
* log4js - logging framework
* async - helper functions for async actions
* moment.js - time library
* express.js - web framework for nodeJS

___

### Authors

[Christopher Jones](https://github.com/chrisjones11) 

### Acknowledgments

Completed as part of a project at [Northcoders](https://northcoders.com/)
