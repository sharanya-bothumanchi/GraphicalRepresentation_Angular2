const express = require('express');
const router = express.Router();
var ExcelSheet = require('./model');
router.post('/uploadExcelFile',function(req,res){
    var rows = req.body;
    var excelRec = new ExcelSheet(req.body);
    excelRec.save(function(err){
        if(err){
            throw Error;
        }
        ExcelSheet.find({}, function(err,docs){
         if (err) throw Error;
         res.json(docs);
        });
    });
});

router.get('/getExcelRecords',function(req,res){
    ExcelSheet.find({},function(err,docs){
        if(err){
            res.send('Error Occured..');
        }else{
            res.json(docs);
        }
    });
});

router.post('/getExcelRecord',function(req,res){
    ExcelSheet.findById(req.body._id,function(err,docs){
        if(err){
            res.send('Error Occured..');
        }else{
            res.json(docs);
        }
    });
});
module.exports = router;
