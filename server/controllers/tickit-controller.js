const { Tickit } = require('../Models/index');
const asyncHandler = require('express-async-handler');


const createFilter = (data) => {
    let filter = {};
    // console.log(data);
    if (data.category) {
        filter.category = data.category;
    }
    if (data.status) {
        filter.status = data.status;
    }
    if (data.kind) {
        filter.kind = data.kind;
    }
    if (data.priority) {
        filter.priority = data.priority;
    }
    if (data.location) {
        filter.location = data.location;
    }
    return filter;
}
const createUpdatedData = (tickit, data) => {

    if (data.title) {
        tickit.title = data.title;
    }
    if (data.description) {
        tickit.description = data.description;
    }
    if (data.priority) {
        tickit.priority = data.priority;
    }
    if (data.status) {
        tickit.status = data.status;
    }
    if (data.category) {
        tickit.category = data.category;
    }
    if (data.kind) {
        tickit.kind = data.kind;
    }
    if (data.location) {
        tickit.location = data.location;
    }
    if (data.latitude) {
        tickit.latitude = data.latitude;
    }
    if (data.longitude) {
        tickit.longitude = data.longitude;
    }
    if (data.upvotes) {
        tickit.upvotes = data.upvotes;
    }
    if (data.downvotes) {
        tickit.downvotes = data.downvotes;
    }
    if (data.images) {
        tickit.images = data.images;
    }
    return tickit;
}


const createTickit = asyncHandler(async(req, res) => {
    try {
        const response = await Tickit.create(req.body);
        return res.status(201).json({
            message: "Successfully created tickit",
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
const getAllTickit = asyncHandler(async(req, res) => {
    try {
        const filterObject = createFilter(req.query);
        console.log(filterObject);
        const response = await Tickit.find(filterObject);
        return res.status(201).json({
            message: "Successfully fetched tickit",
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
const deleteTickit = asyncHandler(async(req, res) => {
    try {
        const tickitId = req.params.id;
        const response = await Tickit.deleteOne({ tickitId });
        return res.status(200).json({
            message: "Successfully deleted tickit",
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
const updateTickit = asyncHandler(async(req, res) => {
    try {
        const tickitId = req.params.id;
        const data = req.body;
        const tickit = await Tickit.findById(tickitId);
        const updatedTickit = createUpdatedData(tickit, data);
        await updatedTickit.save();
        return res.status(200).json({
            message: "Successfully updated tickit",
            success: true,
            err: {},
            data: updatedTickit
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
module.exports = { createTickit, getAllTickit, deleteTickit, updateTickit };