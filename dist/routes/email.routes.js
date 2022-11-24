"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRoutes = void 0;
const express_1 = require("express");
const email_controllers_1 = require("../controllers/email.controllers");
const verifySerialization_middleware_1 = require("../middlewares/verifySerialization.middleware");
const serializers_1 = require("../serializers");
exports.emailRoutes = (0, express_1.Router)();
exports.emailRoutes.post("", (0, verifySerialization_middleware_1.verifySerialization)(serializers_1.createEmailSerializer), email_controllers_1.handleEmailCreation);
