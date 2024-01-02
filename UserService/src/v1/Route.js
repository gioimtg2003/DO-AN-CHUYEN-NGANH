const CURDController = require("./Controller/CRUDUser");
const express = require("express");
let router = express.Router();

function initRoute (router){
    router.post("/login", CURDController.CreateUser);
    return router;
}

module.exports = {
    route : initRoute(router)
};
