import donorRec from '../models/Donor.js'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export async function donorRecepientRegister(req,res) {
    try {
        const {name, role, type, subtype, email, phone} = req.body
        const existingDonor = await donorRec.findOne({email, role:"Donor"})
        const existingRecepient = await donorRec.findOne({email, role:"Recipient"})

        if (existingDonor || existingRecepient) return res.status(400).json({ error: "Email already registered" });

        const user = new donorRec({name, role, type, subtype, email, phone})
        await user.save()

        res.status(201).json({ message: "Registered successfully" })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

export async function getDonorRecipientData(req,res) {
    try {
        const data = await donorRec.find({})
        return res.status(200).json(data)
    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: err.message })
    }
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

export async function sendRequest(req,res) {
    const {email} = req.body
    const data = await donorRec.findOne({email})

    if(data.role == "Donor"){
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Request from VitalVerse`,
            text: `I have urgent need of ${data.type} of type ${data.subtype}. Kindly give me response as early as possible.`
        })
    }

    if(data.role == "Recipient"){
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Request from VitalVerse`,
            text: `I wants to donate ${data.type} of type ${data.subtype}. You may contact to this hospital.`
        })
    }

    res.json({message: "Send request"})
}