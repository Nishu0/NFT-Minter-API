
const {getAddressData, postAddressData} = require("../controllers/addressController");

const router = require("express").Router();

router.get("/", getAddressData);
router.post("/", postAddressData);

module.exports = router;