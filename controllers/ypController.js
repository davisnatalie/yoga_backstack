const YP = require("../models/ypModel");

async function getAllPoses(req, res){
    try {
        let result = await YP.find({});

        res.json({
            message: "success",
            payload: result
        });
    } catch (error) {
        res.json({
            message: "failure",
            payload: `getAllPoses error: ${error}`
        });
    }
}

module.exports = {
    getAllPoses
}