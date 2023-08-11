# ERD: Natours

This document explores the design of Natours project.

## Schema

**User:**

| **Column**           | **Type**     |
| -------------------- | ------------ |
| name                 | String       |
| email                | String       |
| photo                | String       |
| role                 | ENUM[String] |
| password             | String       |
| passwordConfirm      | String       |
| passwordChangedAt    | Date         |
| passwordResetToken   | String       |
| passwordResetExpires | Date         |
| active               | Boolean      |

**Tour:**

| **Column**      | **Type** |
| --------------- | -------- |
| name            | String   |
| duration        | Number   |
| maxGroupSize    | Number   |
| difficulty      | String   |
| ratingsAverage  | Number   |
| ratingsQuantity | Number   |
| price           | Number   |
| priceDiscount   | Number   |
| summary         | String   |
| description     | String   |
| imageCover      | String   |
| images          | [String] |
| startDates      | [Date]   |

## API

**Auth:**

```
/api/v1/users/signup [POST]
/api/v1/users/login [POST]
/api/v1/users/forgotPassword [POST]
/api/v1/users/resetPassword/:token [PATCH]
/api/v1/users/updateMyPassword [PATCH]
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
```
