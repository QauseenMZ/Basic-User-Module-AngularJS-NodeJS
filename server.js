var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());


/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // * just for testing app/purpose
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get("/abc", function(req, res) {
  res.send({status: true})
});

 var server = app.listen(process.env.PORT || 7000, function () {
    var port = server.address().port;
    console.log("Server now running on port", port);
  });

// app.get("/api/contacts", function(req, res) {
//   db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
//     if (err) {
//       handleError(res, err.message, "Failed to get contacts.");
//     } else {
//       res.status(200).json(docs);
//     }
//   });
// });

// app.post("/api/contacts", function(req, res) {
//   var newContact = req.body;
//   newContact.createDate = new Date();

//   if (!req.body.name) {
//     handleError(res, "Invalid user input", "Must provide a name.", 400);
//   } else {
//     db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
//       if (err) {
//         handleError(res, err.message, "Failed to create new contact.");
//       } else {
//         res.status(201).json(doc.ops[0]);
//       }
//     });
//   }
// });

// /*  "/api/contacts/:id"
//  *    GET: find contact by id
//  *    PUT: update contact by id
//  *    DELETE: deletes contact by id
//  */

// app.get("/api/contacts/:id", function(req, res) {
//   db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to get contact");
//     } else {
//       res.status(200).json(doc);
//     }
//   });
// });

// app.put("/api/contacts/:id", function(req, res) {
//   var updateDoc = req.body;
//   delete updateDoc._id;

//   db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to update contact");
//     } else {
//       updateDoc._id = req.params.id;
//       res.status(200).json(updateDoc);
//     }
//   });
// });

// app.delete("/api/contacts/:id", function(req, res) {
//   db.collection(CONTACTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
//     if (err) {
//       handleError(res, err.message, "Failed to delete contact");
//     } else {
//       res.status(200).json(req.params.id);
//     }
//   });
// });