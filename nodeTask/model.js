var mongoose = require('mongoose');
var excelRecordSchema = new mongoose.Schema({
 	"lines": [],
 	"name": String
});
module.exports = mongoose.model('excelSheets', excelRecordSchema);