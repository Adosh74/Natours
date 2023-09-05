# The Journey

-   [The Journey](#The-Journey)
-   [Description](#description)
-   [Documentation](#documentation)
-   [Features](#features)
-   [Usage](#usage)
-   [Dependencies](#dependencies)

## Description

The Journey is a tour booking website that allows users to book tours and manage their bookings. It is built using Node.js, Express, MongoDB, and Pug.

## Documentation

[**ERD** and **APIs**](/docs/ERD-natours.md)

## Features

1. protected routes, authentication, authorization, security, payments, and more.
2. MVC architecture
3. RESTful API
4. CRUD operations
5. Advanced authentication and security
6. Payments with Stripe
7. Mapbox integration
8. Server-side rendering with Pug templates
9. Email sending with Mailtrap
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

# Email config (host, port, username, password)
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_HOST=
EMAIL_PORT=

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

### Dependencies

```
├── @trivago/prettier-plugin-sort-imports@4.1.1
├── bcryptjs@2.4.3
├── cookie-parser@1.4.6
├── dotenv@16.3.1
├── eslint-config-airbnb@19.0.4
├── eslint-config-prettier@8.8.0
├── eslint-plugin-import@2.27.5
├── eslint-plugin-import@2.27.5
├── eslint@8.43.0
├── eslint-plugin-import@2.27.5
├── eslint-plugin-import@2.27.5
├── eslint-plugin-import@2.27.5
├── eslint-plugin-import@2.27.5
├── eslint-pluginjsx-a11y@6.7.1
├── eslint-plugin-node@11.1.0
├── eslint-plugin-prettier@4.2.1
├── eslint-plugin-react@7.32.2
├── eslint@8.43.0
├── express-mongo-sanitize@2.2.0
├── express-rate-limit@6.9.0
├── express@4.18.2
├── helmet@7.0.0
├── hpp@0.2.3
├── jsonwebtoken@9.0.1
├── mongoose@5.13.17
├── morgan@1.10.0
├── nodemailer@6.9.4
├── nodemon@3.0.1
├── parcel-bundler@1.12.5
├── prettier@2.8.8
├── pug@3.0.2
├── slugify@1.6.6
├── validator@13.9.0
└── xss-clean@0.1.4
```
