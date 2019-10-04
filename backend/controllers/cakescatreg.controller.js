// const express = require('express');
// const router = express.Router();
// const connection = require("../model/index");
// const app = express();
// const mongoose = require("mongoose");
// const CakesModel = mongoose.model("Category");
// const Cakes = connection.Cakes;
// var fs = require('fs');
// var mv = require('mv');
// var formidable = require('formidable');
// var upload_path = "./Images/cakecategory/";
// const multiparty = require('multiparty');


// // routes
// router.get("/getall", function (req, res) {
//     CakesModel.find().then(list => res.json(list))
//         .catch(err => res.status(500).json(" Server Error"))
// })


// router.post('/cakescatregister', app.post("/cakesregister", (req, res) => {
//     //console.log(req.body);
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//         console.log(fields)
//         // oldpath : temporary folder to which file is saved to
//         var oldpath = files.image.path;
//         var newpath = upload_path + files.image.name;
//         // console.log(files.image.type)
//         // copy the file to a new location
//         mv(oldpath, newpath, function (err) {
//             if (err) throw err;
//             // you may respond with another html page

//             // console.log(newpath)

//             var cakereg = new CakesModel();
//             cakereg.Heading = fields.Heading;
//             cakereg.Subheading = fields.Subheading;
//             cakereg.Text = fields.Text;
//             cakereg.image = newpath;
//             cakereg.Shape =fields.shape;
//             cakereg.Name = fields.name ;
//             cakereg.Price = fields.price ;
//             cakecategory.save();
//             res.send("Cake Registered Successfully");

//         })
//     });
// }));


// module.exports = router;

// router.post('/update/:id', app.post("/update/:id", (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     CakesModel.findOne({ _id: id }, function (err, cakes) {
//         if (err) {
//             console.log(err)
//             res.status(500).send()
//         }
//         else {
//             if (!cakes) {
//                 res.status(404).send("Cake Not Found")
//             } else {
//                 if (req.body.category) {
//                     cakes.Category = req.body.category;
//                 }

//                 if (req.body.subcategory) {
//                     cakes.SubCategory = req.body.subcategory;

//                 }
//                 if (req.body.text) {
//                     cakes.Text = req.body.text;
//                 }
//                 if (req.body.image) {
//                     cakes.Image = req.body.image;
//                 }
//                 if (req.body.shape) {
//                     cakes.Shape = req.body.shape;
//                 }
//                 if (req.body.price) {
//                     cakes.Price = req.body.price;
//                 }

//                 cakes.save(function (err, updatedObject) {
//                     if (err) {
//                         res.status(500).send("Update Unsuccesfull")
//                     }
//                     else {
//                         res.status(200).send(updatedObject);
//                     }
//                 })
//             }
//         }
//     })

// }
// )
// );
// router.post('/delete/:id', app.post("/delete/:id", (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     CakesModel.findOneAndRemove({ _id: id }, function (err) {
//         if (err) {
//             console.log(err)
//             res.status(500).send()
//         }
//         else {
//             res.status(200).send("Deleted Succesfully");
//         }


//     }
//     )
// }))