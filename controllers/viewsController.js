const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req, res, next) => {
    // 1) Get tour data from collection
    const tours = await Tour.find();
    // 2) Build template
    // 3) Render that template using tour data from 1)
    res.status(200).render('overview', {
        title: 'All Tours',
        tours,
    });
});

exports.getTour = catchAsync(async (req, res, next) => {
    // 1) Get tour data include(Guides, Reviews)
    const { slug } = req.params;
    const tour = await Tour.findOne({ slug: slug }).populate({
        path: 'reviews',
        select: 'review rating user',
    });

    if (!tour) {
        return next(new AppError('There is no tour with that name.', 404));
    }

    res.status(200).render('tour', {
        title: `${tour.name} Tour`,
        tour,
    });
});

exports.getLoginForm = (req, res) => {
    res.status(200).render('login', {
        title: 'Log into your account',
    });
};
