var requestBody =
  '{ "Id": 78912,  "Customer": "Jason Sweet", "Quantity": 1,  "Price": 18.00 }';
var jsonText =
  '{"documents": [{"tables":{ "id": "PartsList01bxwu","name": "Parts List","records": [{ "records": [{"type": "Text", "value": "N00G00D-234", "recordName": "PartNumber", "boundingBox": { "top": 312, "left": 160,"width": 106, "height": 14, "pageIndex": 0 } },{ "type": "Text", "value": "Disc Brake Caliper", "recordName": "description", "boundingBox": { "top": 311, "left": 399, "width": 133, "height": 17, "pageIndex": 0 } }, { "type": "Text", "value": "Infiniti G20 (2023-2025); HylandElectro (2022-current), Stanza (2023-2022)", "recordName": "ApplicableCarModels", "boundingBox": { "top": 311, "left": 587, "width": 409, "height": 41, "pageIndex": 0 } }, { "type": "Text", "value": "25000", "recordName": "Warranty mileage", "boundingBox": { "top": 311, "left": 1515, "width": 47, "height": 14, "pageIndex": 0 } }]}]}}]}';

// Parse it to a JS object
var data = JSON.parse(jsonText);
var extractedParts = extractParts(data);
console.log(extractedParts);

// Function to extract the desired values
function extractParts(data) {
  var results = [];

  var documents = data.documents;
  console.log("Stage 1");
  console.log(documents[0].tables.records[0]);

  for (var i = 0; i < documents.length; i++) {
    //for (var doc of documents) {
    console.log("Stage 2 documents count is " + i);
    var tables = documents.tables;
    console.log(tables);
    //  var tables = doc.tables;
    // for (var j = 0; j < tables.length; j++) {
    console.log("Stage 3 tables");
    //var records = []; //tables.records;
    //records = tables.records;
    //console.log(tables.records[0]);
    //  for (var table of tables) {
    //    var records = table.records;

    /*     for (var k = 0; k < records.length; k++) {
          console.log("Stage 4 records count is " + k);
          var fields = records[k].records;
          // for (var record of records) {
    
          //   var fields = record.records;
          var part = {};
    
          //   for (var field of fields) {
          for (var l = 0; l < fields.length; l++) {
            console.log(fields[l].recordName);
            switch (fields[l].recordName) {
              case "PartNumber":
                part.PartNumber = field.value;
                break;
              case "description":
                part.description = field.value;
                break;
              case "ApplicableCarModels":
                part.ApplicableCarModels = field.value;
                break;
              case "Warranty mileage":
                part["Warranty mileage"] = field.value;
                break;
            }
          }
    
          results.push(part);
          // }
        }
      } */
  }

  return results;
}

// var extractedParts = extractParts(data);
// console.log(extractedParts);
