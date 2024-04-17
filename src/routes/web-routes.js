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
    walletSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

router.get("/wallets/:id", (req, res) => {
    const { id } = req.params;
    walletSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

router.put("/wallets/:id", (req, res) => {
    const { id } = req.params;
    const { usuario, correoElectronico, saldo, historialTransacciones, tarjetasAsociadas, direccionEnvio } = req.body;
    walletSchema.updateOne({ _id: id }, {
        $set: { usuario, correoElectronico, saldo, historialTransacciones, tarjetasAsociadas, direccionEnvio }
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

router.delete("/wallets/:id", (req, res) => {
    const { id } = req.params;
    walletSchema.findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
module.exports = router;