# Book a Car App

The **Book a Car App** is a web application that allows users to browse and book cars for various purposes. This app is built using React for the front-end, Node.js for the back-end, and MongoDB as the database. Users can view available cars, book a specific car, and manage their bookings.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Eslint](#eslint)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Users can create accounts, log in, and manage their profiles.
- **Car Listings:** Users can view a list of available cars with details such as model, price, and availability.
- **Booking System:** Users can book a specific car for a specific date and time.
- **User Dashboard:** Users can view their booking history, manage bookings, and update their profiles.
- **Admin Panel:** Admin users have access to an admin panel where they can manage car listings, user accounts, and bookings.

## Technologies Used

- **Front-end:** React, React Router, Axios (for API requests), Material-UI (for UI components)
- **Back-end:** Node.js, Express.js (for API routes), MongoDB (database)
- **Authentication:** JSON Web Tokens (JWT)
- **Deployment:** Heroku (for back-end), Netlify (for front-end)

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd book-a-car
   ```

2. Install dependencies:

   ```bash
   # Install back-end dependencies
   cd server
   npm install

   # Install front-end dependencies
   cd ../client
   npm install
   ```

3. Set up MongoDB:

   - Create a MongoDB database and configure the connection URL in `server/config/db.js`.

4. Start the back-end server:

   ```bash
   # Inside the server directory
   npm start
   ```

5. Start the front-end development server:

   ```bash
   # Inside the client directory
   npm start
   ```

6. Access the app in your browser:

   ```bash
   http://localhost:3000
   ```

## API Endpoints

### booking
- **POST /api/bookings/bookcar** Create a new booking.
- **GET /api/bookings/getallbookings** Create a new booking.

### cars
- **GET /api/cars/getallcars** Get the car collection.
- **POST /api/cars/addcar** Add a new car.
- **POST /api/cars/editcar** Edit an existing car.
- **POST /api/cars/deletecar** Delete a car.

### auth
- **POST /api/users/login** Sign In with an existing user.
- **POST /api/users/register** Register a new user.

## Eslint 
- npm install eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import --save-dev
- npx eslint --init
- define .eslintrc according to your needs

## Contributing

Contributions are welcome! If you find any bugs or want to improve the app, please submit an issue or a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README file according to your specific project details and requirements.