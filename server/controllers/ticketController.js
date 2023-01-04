const { Ticket } = require('../Models/index');
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
const createUpdatedData = (Ticket, data) => {

    if (data.title) {
        Ticket.title = data.title;
    }
    if (data.description) {
        Ticket.description = data.description;
    }
    if (data.priority) {
        Ticket.priority = data.priority;
    }
    if (data.status) {
        Ticket.status = data.status;
    }
    if (data.category) {
        Ticket.category = data.category;
    }
    if (data.kind) {
        Ticket.kind = data.kind;
    }
    if (data.location) {
        Ticket.location = data.location;
    }
    if (data.latitude) {
        Ticket.latitude = data.latitude;
    }
    if (data.longitude) {
        Ticket.longitude = data.longitude;
    }
    if (data.upvotes) {
        Ticket.upvotes = data.upvotes;
    }
    if (data.downvotes) {
        Ticket.downvotes = data.downvotes;
    }
    if (data.images) {
        Ticket.images = data.images;
    }
    return Ticket;
}


const createTicket = asyncHandler(async(req, res) => {
    try {
        const response = await Ticket.create(req.body);
        return res.status(201).json({
            message: "Successfully created Ticket",
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
const getAllTicket = asyncHandler(async(req, res) => {
    try {
        const filterObject = createFilter(req.query);
        console.log(filterObject);
        const response = await Ticket.find(filterObject);
        return res.status(201).json({
            message: "Successfully fetched Ticket",
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
const deleteTicket = asyncHandler(async(req, res) => {
    try {
        const TicketId = req.params.id;
        const response = await Ticket.deleteOne({ TicketId });
        return res.status(200).json({
            message: "Successfully deleted Ticket",
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
const updateTicket = asyncHandler(async(req, res) => {
    try {
        const TicketId = req.params.id;
        const data = req.body;
        const Ticket = await Ticket.findById(TicketId);
        const updatedTicket = createUpdatedData(Ticket, data);
        await updatedTicket.save();
        return res.status(200).json({
            message: "Successfully updated Ticket",
            success: true,
            err: {},
            data: updatedTicket
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
module.exports = { createTicket, getAllTicket, deleteTicket, updateTicket };