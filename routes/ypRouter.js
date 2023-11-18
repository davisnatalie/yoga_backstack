const express = require('express');
const router = express.Router();

const {
    getAllPoses,
    addPose,
    getPoseByName
} = require("../controllers/ypController");

// localhost:3001/api/allPoses
router.get("/allPoses", getAllPoses);

// localhost:3001/api/poses/addPose
router.post("/addPose", addPose);

// localhost:3001/api/getPoseByName/:english_name
router.get("/getPoseByName/:english_name", getPoseByName);

module.exports = router;