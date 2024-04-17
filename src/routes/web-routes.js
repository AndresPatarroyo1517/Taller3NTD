const express = require("express");
const router = express.Router(); 
const walletSchema = require("../models/e-wallet");

router.post("/wallets", (req, res) => {
    const wallet = walletSchema(req.body);
    wallet
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.get("/wallets", (req, res) => {
    animalSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

router.get("/wallets/:id", (req, res) => {
    const { id } = req.params;
    animalSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

router.put("/wallets/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipo, fecha } = req.body;
    animalSchema.updateOne({ _id: id }, {
        $set: { nombre, edad, tipo, fecha }
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

router.delete("/wallets/:id", (req, res) => {
    const { id } = req.params;
    animalSchema.findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
module.exports = router;