const express = require('express');
const router = express.Router();

const {
    getAllPoses
} = require("../controllers/ypController");

// localhost:3001/api/allPoses
router.get("/allPoses", getAllPoses);

module.exports = router;