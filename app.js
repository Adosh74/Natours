const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const viewRouter = require('./routes/viewsRoutes');
const bookingRouter = require('./routes/bookingRoutes');

const app = express();

app.enable('trust proxy');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) Global MIDDLEWARE
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
// app.use(
//     helmet({
//         contentSecurityPolicy: {
//             directives: {
//                 defaultSrc: ["'self'"],
//                 connectSrc: [
//                     "'self'",
//                     'http://127.0.0.1:3000',
//                     'ws://localhost:49275/',
//                 ],
//             },
//         },
//     }),
// );

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'To many requests from this IP, please try again in an hour',
});

app.use('/api', limiter);

// parse body, into req.body and set max size to 10kb
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data Sanitization against NoSql query injection
app.use(mongoSanitize());

// Data Sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
    hpp({
        whitelist: [
            'duration',
            'ratingsQuantity',
            'ratingsAverage',
            'maxGroupSize',
            'difficulty',
            'price',
        ],
    }),
);

app.use(compression());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 2) ROUTES
app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

//* Global error handling Middleware  *\\
app.use(globalErrorHandler);

module.exports = app;
