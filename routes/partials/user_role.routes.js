const express = require("express");
const { default: mongoose } = require("mongoose");
const userRoleController = require("../../app/controllers/backend/user_roll.controller");

const router = express.Router();

router
    .get("/dashboard/user-roles", userRoleController.all)
    .get("/dashboard/user-roles/create", userRoleController.store)
    .get("/dashboard/user-roles/:id/edit", userRoleController.edit)
    .get("/dashboard/user-roles/:id/delete", userRoleController.destory)


module.exports = () => router;
