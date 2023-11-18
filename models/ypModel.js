const mongoose = require("mongoose");

const ypSchema = new mongoose.Schema(
    {   
        id: {
            type: Number,
            unique: false,
            required: false
        },
        english_name: {
            type: String,
            unique: true,
            required: true
        },
        sanskrit_name_adapted: {
            type: String,
            unique: true,
            required: true
        },
        debutsanskrit_name: {
            type: String,
            unique: true,
            required: false
        },
        translation_name: {
            type: String,
            unique: true,
            required: true
        },
        pose_description: {
            type: String,
            unique: false,
            required: true
        },
        pose_benefits: {
            type: String,
            unique: true,
            required: true
        },
        url_svg: {
            type: String
        },
        url_png: {
            type: String
        },
        url_svg_alt: {
            type: String
        }

    }
)

const YP = mongoose.model("YP", ypSchema);

module.exports = YP;