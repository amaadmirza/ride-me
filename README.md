# ride-me

## An application for users to book a ride of a car

use npm start to run both client and server,
use npm run client to run client only,
use npm run server to run server only.

## sample user data for testing db

## user endpoints

create new user => POST => http://localhost/api/users/
view all users => GET => http://localhost/api/users/
login already created user => POST => http://localhost/api/users/login
add cars for owner => POST => http://localhost/api/users/:userId/owner/:ownerId
view all cars of owner => GET => http://localhost/api/users/:userId/owner/:ownerId
