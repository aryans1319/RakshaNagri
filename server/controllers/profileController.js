const { Profile } = require('../Models/index');
const asyncHandler = require('express-async-handler');
const createProfile = asyncHandler(async(req, res) => {
    try {
        const response = await Profile.create(req.body);
        return res.status(201).json({
            message: "Successfully created profile",
            success: true,
            err: {},
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false,
            err: error.explanation,
            data: {}
        });
    }
});
const getProfile = asyncHandler(async(req, res) => {
    try {
        const response = await Profile.findOne(req.body);
        return res.status(201).json({
            message: "Successfully fetched profile",
            success: true,
            err: {},
            data: response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
            success: false,
            err: error.explanation,
            data: {}
        });
    }
});
module.exports = { createProfile, getProfile };