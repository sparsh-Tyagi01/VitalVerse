import express from "express";
import {donorRecepientRegister, getDonorRecipientData, sendRequest} from "../controllers/donor.js";

const router = express.Router()

router.post('/register', donorRecepientRegister)
router.get('/data', getDonorRecipientData)

router.post('/request', sendRequest)

export default router