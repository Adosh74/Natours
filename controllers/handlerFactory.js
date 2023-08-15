const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.deleteOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const { id } = req.params;
        const doc = await Model.findByIdAndDelete(id);

        if (!doc) {
            return next(new AppError('No document found with that ID', 404));
        }

        res.status(204).json({
            status: 'success',
            data: null,
        });
    });

exports.updateOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const { id } = req.params;

        const doc = await Model.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!doc)
            return next(new AppError('No document found with that ID', 404));

        res.status(200).json({
            status: 'success',
            data: {
                data: doc,
            },
        });
    });

exports.createOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                data: doc,
            },
        });
    });

exports.getOne = (Model, popOptions) =>
    catchAsync(async (req, res, next) => {
        const { id } = req.params;
        let query = Model.findById(id);
        if (popOptions) query = query.populate(popOptions);

        const doc = await query;

        if (!doc) {
            return next(new AppError('No document found with that ID', 404));
        }
        res.status(200).json({
            status: 'success',
            data: {
                data: doc,
            },
        });
    });

exports.getAll = (Model) =>
    catchAsync(async (req, res, next) => {
        let filter = {};
        if (req.params.tourId) filter = { tour: req.params.tourId };

        const features = new APIFeatures(Model.find(filter), req.query)
            .filter()
            .sort()
            .limitFields();

        //* Execute the query *\\
        const docs = await features.query;
        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            result: docs.length,
            data: {
                data: docs,
            },
        });
    });
