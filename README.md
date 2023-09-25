# [The Journey](https://the-journey-q5g0.onrender.com/)

-   [Live Demo](https://the-journey-q5g0.onrender.com/)
-   [Description](#description)
-   [ERD](/docs/ERD-natours.md)
-   [APIs Documentation](#apis)
-   [Features](#features)
-   [Usage](#usage)
-   [Dependencies](#dependencies)

## Description

The Journey is a tour booking website that allows users to book tours and manage their bookings. It is built using Node.js, Express, MongoDB, and Pug.

## Features

1. protected routes, authentication, authorization, security, payments, and more.
2. MVC architecture
3. RESTful API
4. CRUD operations
5. Advanced authentication and security
6. Payments with Stripe
7. Mapbox integration
8. Server-side rendering with Pug templates
9. Email sending with Mailtrap and Sendinblue
10. Advanced error handling
11. File uploading
12. Advanced MongoDB
13. Geospatial data
14. Advanced mongoose features
15. Image processing with sharp
16. And much more!

## Usage

-   create config.env file in root folder and add the following

```bash
# Node Environment (development, production)
NODE_ENV=
PORT=

# MongoDB  connection
DATABASE=
DATABASE_LOCAL=
DATABASE_PASSWORD=

# JWT config (secret, expires in, cookie expires in)
JWT_SECRET=
JWT_EXPIRES_IN=
JWT_COOKIE_EXPIRES_IN=

# mailtrap config (host, port, username, password) for development
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_HOST=
EMAIL_PORT=

# sendinblue config (host, port, username, password) for production
EMAIL_FROM=

SENDINBLUE_USERNAME=
SENDINBLUE_PASSWORD=
SENDINBLUE_PORT=
SENDINBLUE_HOST=

# Stripe config (secret key)
STRIPE_SECRET_KEY=

```

-   Follow the steps below to run the project

```bash
# Install dependencies
yarn install
# Run in development
yarn start:dev
# Run in production
yarn start:prod
# Import data
yarn import:data
# Destroy data
delete:data
```

## APIs

**Auth:**

```
/api/v1/users/signup [POST]
/api/v1/users/login [POST]
/api/v1/users/forgotPassword [POST]
/api/v1/users/resetPassword/:token [PATCH]
/api/v1/users/updateMyPassword [PATCH]
```

**users:**

```
/api/v1/users [GET] (admin only)
/api/v1/users/:id [GET] (admin only)
/api/v1/users [POST] (admin only)
/api/v1/users/:id [PATCH] (admin only)
/api/v1/users/:id [DELETE] (admin only)
/api/v1/users/me [GET]
/api/v1/users/updateMe [PATCH]
/api/v1/users/deleteMe [DELETE]
```

**tours:**

```
/api/v1/tours [get]
/api/v1/tours/top-5-cheap [GET]
/api/v1/tours/monthly-plan/:year [GET]
/api/v1/tours/tour-stats [GET]
/api/v1/tours/:id [GET]
/api/v1/tours [POST]
/api/v1/tours/:id [PATCH]
/api/v1/tours/:id [DELETE]
/api/v1/tours/tour-within/400/center/:lat, -long/unit/:unit [GET]
/api/v1/tours/distances/:lat, -long/unit/:unit [GET]
```

**reviews:**

```
/api/v1/reviews [GET]
/api/v1/reviews/:id [GET]
/api/v1/tours/:tourId/reviews [POST]
/api/v1/reviews/:tourId [PATCH]
/api/v1/reviews/:tourId [DELETE]
/api/v1/tours/:tourId/reviews [GET]
```

**bookings:**

```
/api/v1/bookings/checkout-session/:tourId [GET]
/api/v1/bookings [GET] (admin and lead-guide only)
/api/v1/bookings [POST] (admin and lead-guide only)
/api/v1/bookings/:id [GET] (admin and lead-guide only)
/api/v1/bookings/:id [PATCH] (admin and lead-guide only)
/api/v1/bookings/:id [DELETE] (admin and lead-guide only)


```

### Dependencies

```
    "@babel/polyfill": "^7.12.1",
    "axios": "^1.5.0",
    "bcryptjs": "^2.4.3",
    "compression": "^1.7.4",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-mongo-sanitize": "^2.2.0",
    "express-rate-limit": "^6.9.0",
    "helmet": "^7.0.0",
    "hpp": "^0.2.3",
    "html-to-text": "^9.0.5",
    "jsonwebtoken": "^9.0.1",
    "mapbox-gl": "^2.15.0",
    "mongoose": "^5.13.17",
    "morgan": "^1.10.0",
    "multer": "^1.4.1",
    "nodemailer": "^6.9.4",
    "pug": "^3.0.2",
    "sharp": "^0.32.5",
    "slugify": "^1.6.6",
    "stripe": "^13.6.0",
    "validator": "^13.9.0",
    "xss-clean": "^0.1.4"
```
