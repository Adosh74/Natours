const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = (id) =>
    jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        photo: req.body.photo,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id);

    res.status(201).json({
        status: 'success',
        token: token,
        data: {
            user: newUser,
        },
    });
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    // Check if user send email and password
    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }

    // Check if user exist and password is correct
    const user = await User.findOne({
        email: email,
    }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }

    const token = signToken(user._id);

    res.status(200).json({
        status: 'success',
        token,
    });
});

exports.protect = catchAsync(async (req, res, next) => {
    // +[1] get the token and check if it's there
    let token;
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer')
    ) {
        return next(
            new AppError(
                'You are not logged in! Please login to get access',
                401,
            ),
        );
    }
    token = req.headers.authorization.split(' ')[1];

    // +[2] Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // +[3] Check if user still exist
    const freshUser = await User.findById(decoded.id);
    if (!freshUser) {
        return next(
            new AppError(
                'The user belonging to this token does no longer exist',
                401,
            ),
        );
    }
    // +[4] Check if user changed password after the token was issued
    if (freshUser.passwordChangedAfter) {
        return next(
            AppError('User recently changed password! Please login again', 401),
        );
    }

    req.user = freshUser;
    next();
});
