const express = require('express');
const router = express.Router();
const connection = require("../model/index");
const app = express();
const mongoose = require("mongoose");
const OffersModel = mongoose.model("Offers");
const Offers = connection.Offers;
var fs = require('fs');
var mv = require('mv');
var formidable = require('formidable');
var upload_path = "./Images/offers/";
const multiparty = require('multiparty');






// routes
router.get("/getall",function(req,res){
    OffersModel.find().then(list=>res.json(list))
    .catch(err=>res.status(500).json(" Sever Error"))
})



router.post('/offersregister', app.post("/offersregister", (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(fields)
        // oldpath : temporary folder to which file is saved to
        var oldpath = files.image.path;
        var newpath = upload_path + files.image.name;

        // copy the file to a new location
        mv(oldpath, newpath, function (err) {
            if (err) throw err;
            // you may respond with another html page

            // console.log(newpath)
            var offers = new OffersModel();
            offers.Heading = fields.Heading;
            offers.Subheading = fields.Subheading;
            offers.Text = fields.Text;
            offers.image = newpath;
            offers.save();
            res.send("offers Registered Successfully");

        })
    });
    // console.log(req.body);
    // var offers = new OffersModel();
    // offers.Heading = req.body.heading;
    // offers.Subheading = req.body.subheading;
    // offers.Text = req.body.text;
    // offers.image = req.body.image;
    // offers.save();
    // res.send("Offers Registered Successfully");

}));
/*router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);

router.delete('/:id', _delete);*/

module.exports = router;

router.post('/update/:id', app.post("/update/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    OffersModel.findOne({ _id: id }, function (err, foundObject) {
        if (err) {
            console.log(err)
            res.status(500).send()
        }
        else {
            if (!foundObject) {
                res.status(404).send("New Not Found")
            } else {
                if (req.body.heading) {
                    foundObject.Heading = req.body.heading;
                }

                if (req.body.subheading) {
                    foundObject.Subheading = req.body.subheading;
                }
                if (req.body.text) {
                    foundObject.Text = req.body.text;
                }
                if (req.body.image) {
                    foundObject.Image = req.body.image;
                }

                foundObject.save(function (err, updatedObject) {
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
    OffersModel.findOneAndRemove({ _id: id }, function (err) {
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
