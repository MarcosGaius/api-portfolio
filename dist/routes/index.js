"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const email_routes_1 = require("./email.routes");
const appRoutes = (app) => {
    app.use("/emails", email_routes_1.emailRoutes);
};
exports.appRoutes = appRoutes;
