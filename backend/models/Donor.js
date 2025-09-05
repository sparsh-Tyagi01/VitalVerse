import mongoose from "mongoose";

const donor = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    role: {
        type: String
    },
    type: {
        type: String
    },
    subtype: {
        type: String
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    }
}, {timestamps: true})

export default mongoose.model("donorRec", donor)