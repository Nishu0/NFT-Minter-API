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
