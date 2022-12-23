const express = require('express');
const router = express.Router();



router.get('/', (req,res)=>{
    res.status(200).json({message:"Home Page"});
})

router.use('/users', require('./userRoutes'));

module.exports = router;

