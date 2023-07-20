# ERD: Natours

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
