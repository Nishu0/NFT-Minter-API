const mongoose = require("mongoose");
const Address = require("../modals/addressSchema");

exports.getAddressData = async (req, res) => {
    try{
        const walletAddress = await Address.find();
        console.log(walletAddress);
        res.status(200).json(walletAddress);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

exports.postAddressData = async (req, res) => {
    const address = new Address({
        _id: new mongoose.Types.ObjectId(),
        walletAddress: req.body.walletAddress,
    });
    try {
        const savedAddress = await address.save();
        console.log(savedAddress);
        res.status(200).json(savedAddress);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}