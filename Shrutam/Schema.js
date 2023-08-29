const express = require("express");
const mongoose = require("mongoose")

const cakeSchema = new mongoose.Schema({
    name: String,
    price:{
        type: Number
    }
})

const CakeName = new mongoose.model("Cakes", cakeSchema);

module.exports = CakeName;
