# ERD: Natours

This document explores the design of Natours project.


## Schema

**Tour**:

| Column          | Type     |
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
