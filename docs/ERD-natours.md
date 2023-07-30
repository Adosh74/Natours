# ERD: Natours

This document explores the design of Natours project.

## Schema

**User:**

| **Column**      | **Type** |
| --------------- | -------- |
| name            | String   |
| email           | String   |
| photo           | String   |
| password        | String   |
| passwordConfirm | String   |

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
