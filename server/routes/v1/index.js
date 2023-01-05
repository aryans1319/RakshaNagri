const express = require("express");
const {
  ProfileController,
  TicketController,
  UserController
} = require("../../controllers/index");

const router = express.Router();

router.post("/profile", ProfileController.createProfile);
router.get("/profile", ProfileController.getProfile);

router.post("/signup", UserController.signUp);
router.post("/signin", UserController.signIn);
router.get("/signout", UserController.signOut);
router.get("/refresh", UserController.handleRefreshToken);


router.post("/tickit", TicketController.createTicket);
router.get("/tickit", TicketController.getAllTicket);
router.delete("/tickit/:id", TicketController.deleteTicket);
router.patch("/tickit/:id", TicketController.updateTicket);

module.exports = router;
