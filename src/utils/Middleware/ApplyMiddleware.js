// require("dotenv").config();
const cors = require('cors');
const express = require('express');
const cookieParser = require("cookie-parser");
const { LOCAL_CLIENT, CLIENT } = require("../../config");
const ApplyMiddleWare = (app)=>{
    app.use(cors({
        origin: [
            LOCAL_CLIENT,
            CLIENT,
            'https://siyam-portfolio.vercel.app'
        ],
        credentials : true,
        optionsSuccessStatus: 200,
    })),
    app.use(express.json())
    app.use(cookieParser())
}
module.exports = ApplyMiddleWare