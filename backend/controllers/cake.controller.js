const express = require('express');
const router = express.Router();
const connection = require("../model/index");
const app = express();
const mongoose = require("mongoose");
const CakesModel = mongoose.model("Cakes");
const Cakes = connection.Cakes;
var fs = require('fs');
var mv = require('mv');
var formidable = require('formidable');
var upload_path = "./Images/cakes/";
const multiparty = require('multiparty');


// routes
router.get("/getall", function (req, res) {
    CakesModel.find().then(list => res.json(list))
        .catch(err => res.status(500).json(" Server Error"))
})

router.get("/getcakebycategory", function (req, res) {
    console.log(req.body)
    CakesModel.find({Category:req.body.Category,
                    SubCategory:req.body.SubCategory
    }).then(list => res.json(list))
        .catch(err => res.status(500).json(" Server Error"))
})


router.post('/cakesregister', app.post("/cakesregister", (req, res) => {
    //console.log(req.body);
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        // console.log(fields)
        // oldpath : temporary folder to which file is saved to
        var oldpath = files.Image.path;
        var newpath = upload_path + ''+new Date().getMilliseconds()+files.Image.name;
        // console.log(files.image.type)
        // copy the file to a new location
        mv(oldpath, newpath, function (err) {
            if (err) throw err;
            // you may respond with another html page

            // console.log(newpath)

            var cakecategory = new CakesModel();
            cakecategory.Category= fields.Category;
            cakecategory.SubCategory = fields.SubCategory;
            cakecategory.Text = fields.Text;
            cakecategory.Shape = fields.Shape;
            cakecategory.Name = fields.Name;
            cakecategory.Price = fields.Price;
            cakecategory.Image = newpath;
            cakecategory.save();
            res.send("cakecategory Registered Successfully");

        })
    });
}));


module.exports = router;

router.post('/update/:id', app.post("/update/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    CakesModel.findOne({ _id: id }, function (err, cakes) {
        if (err) {
            console.log(err)
            res.status(500).send()
        }
        else {
            if (!cakes) {
                res.status(404).send("Cake Not Found")
            } else {
                if (req.body.category) {
                    cakes.Category = req.body.category;
                }

                if (req.body.subcategory) {
                    cakes.SubCategory = req.body.subcategory;

                }
                if (req.body.text) {
                    cakes.Text = req.body.text;
                }
                if (req.body.image) {
                    cakes.Image = req.body.image;
                }
                if (req.body.shape) {
                    cakes.Shape = req.body.shape;
                }
                if (req.body.price) {
                    cakes.Price = req.body.price;
                }

                cakes.save(function (err, updatedObject) {
                    if (err) {
                        res.status(500).send("Update Unsuccesfull")
                    }
                    else {
                        res.status(200).send(updatedObject);
                    }
                })
            }
        }
    })

}
)
);
router.post('/delete/:id', app.post("/delete/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    CakesModel.findOneAndRemove({ _id: id }, function (err) {
        if (err) {
            console.log(err)
            res.status(500).send()
        }
        else {
            res.status(200).send("Deleted Succesfully");
        }


    }
    )
}))