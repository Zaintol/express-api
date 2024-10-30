# zain-oauth2

A simple Express.js application with OAuth 2.0 authentication using Google. This package provides a basic setup for building APIs with user authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Routes](#routes)
- [Running the Application](#running-the-application)
- [Docker](#docker)
- [License](#license)

## Installation

To install this package, you can use npm:
```bash
npm install zain-oauth2
```


## Usage

After installing the package, you can import and use it in your application:

```javascript
import app from 'zain-oauth2';
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
```


## Configuration

Before running the application, you need to set up your environment variables. Create a `.env` file in the root of your project with the following content:

GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret


Replace `your-client-id` and `your-client-secret` with the credentials obtained from the [Google Developer Console](https://console.developers.google.com/).

## Routes

The application provides the following routes:

- `GET /auth/google`: Initiates the Google OAuth authentication process.
- `GET /auth/google/callback`: Callback route for Google to redirect to after authentication.
- `GET /profile`: Displays the authenticated user's profile information.
- `GET /`: Home route that provides a link to log in with Google.

## Running the Application

To run the application locally, use the following command:


```bash
npm start
```

This will start the server on `http://localhost:3000`.

## Docker

To run the application using Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker-compose build
   ```

2. Run the Docker container:

   ```bash
   docker-compose up
   ```

The application will be accessible at `http://localhost:3000`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
