const express = require("express");
const router = express.Router();
router.get("/",(req,res)=>{
    res.send("aliens route working...");
    console.log("aliens route working...");
});

module.exports = router;