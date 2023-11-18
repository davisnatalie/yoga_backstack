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

async function addPose(req, res){
    try {
        let newPose = {
            english_name: req.body.english_name,
            sanskrit_name_adapted: req.body.sanskrit_name_adapted,
            debutsanskrit_name: req.body.debutsanskrit_name,
            translation_name: req.body.translation_name,
            pose_description: req.body.pose_description,
            pose_benefits: req.body.pose_benefits,
            url_svg: req.body.url_svg,
            url_png: req.body.url_png,
            url_svg_alt: req.body.url_svg_alt
        }

        await YP.create(newPose);

        res.json({
            message: "success",
            payload: newPose
        });
    } catch (error) {
        res.json({
            message: "failure",
            payload: `newPose error: ${error}`
        })
    }
}

async function getPoseByName(req, res) {
    try {
        let foundPose = await YP.findOne({ english_name: req.params.english_name });

        if (!foundPose) {
            return res.status(404).json({
                message: "Pose not found",
                payload: null
            });
        }

        res.status(200).json({
            message: "Success",
            payload: foundPose
        });
    } catch (error) {
        // Differentiate between database error and other errors
        if (error.name === 'MongoError') {
            return res.status(500).json({
                message: "Database error",
                payload: null
            });
        }

        res.status(500).json({
            message: "Internal server error",
            payload: `getPoseByName error: ${error}`
        });
    }
}

module.exports = {
    getAllPoses,
    addPose,
    getPoseByName
}