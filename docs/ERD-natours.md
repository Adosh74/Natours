# ERD: Natours

This document explores the design of Natours project.

## Schema

**User:**

| Column               | Type    | Validation/Options                                              |
| -------------------- | ------- | --------------------------------------------------------------- |
| name                 | String  | Required, Trimmed, Maximum length: 255 characters               |
| email                | String  | Required, Unique, Lowercased, Validated as an email             |
| photo                | String  | Default: 'default.jpg'                                          |
| role                 | String  | Enum: ['user', 'guide', 'lead-guide', 'admin'], Default: 'user' |
| password             | String  | Required, Minimum length: 8 characters, Select: false           |
| passwordConfirm      | String  | Required, Validation function checks if it matches password     |
| passwordChangedAt    | Date    |                                                                 |
| passwordResetToken   | String  |                                                                 |
| passwordResetExpires | Date    |                                                                 |
| active               | Boolean | Default: true, Select: false                                    |

**Tour:**

| Column          | Type               | Validation/Options                                                              |
| --------------- | ------------------ | ------------------------------------------------------------------------------- |
| name            | String             | Required, Unique, Trimmed, Max length: 40 characters, Min length: 10 characters |
| slug            | String             |                                                                                 |
| duration        | Number             | Required                                                                        |
| maxGroupSize    | Number             | Required                                                                        |
| difficulty      | String             | Required, Enum: ['easy', 'medium', 'difficult']                                 |
| ratingsAverage  | Number             | Default: 4.5, Min: 1, Max: 5, Rounded to 1 decimal place                        |
| ratingsQuantity | Number             | Default: 0                                                                      |
| price           | Number             | Required                                                                        |
| priceDiscount   | Number             | Validation function checks if it is less than price                             |
| summary         | String             | Required, Trimmed                                                               |
| description     | String             | Trimmed                                                                         |
| imageCover      | String             | Required                                                                        |
| images          | Array of Strings   |                                                                                 |
| createdAt       | Date               | Default: Current date, Select: false                                            |
| startDates      | Array of Dates     |                                                                                 |
| secretTour      | Boolean            | Default: false                                                                  |
| startLocation   | Object             |                                                                                 |
| locations       | Array of Objects   |                                                                                 |
| guides          | Array of ObjectIds | References User model                                                           |

**Review:**

| Column    | Type     | Validation/Options                                                  |
| --------- | -------- | ------------------------------------------------------------------- |
| review    | String   | Required, Trimmed                                                   |
| rating    | Number   | Default: 4.5, Minimum: 1, Maximum: 5, Rounded to 1 decimal place    |
| createdAt | Date     | Default: Current date                                               |
| tour      | ObjectId | Required, References 'Tour' model, 'Review' must belong to a 'Tour' |
| user      | ObjectId | Required, References 'User' model, 'Review' must belong to a 'User' |

**Booking:**

| Column    | Type     | Validation/Options                |
| --------- | -------- | --------------------------------- |
| tour      | ObjectId | Required, References 'Tour' model |
| user      | ObjectId | Required, References 'User' model |
| price     | Number   | Required                          |
| createdAt | Date     | Default: Current date             |
| paid      | Boolean  | Default: true                     |
