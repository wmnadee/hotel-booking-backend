import { strict } from "assert";
import mongoose from "mongoose";
import { type } from "os";
import { stringify } from "querystring";
import { deflate } from "zlib";

const roomSchema = new mongoose.Schema({
    roomId : {
        type : Number,
        required : true,
        unique : true
    },
    category :{
        type : String,
        required: true
    },
    maxGuests :{
        type : Number,
        required : true,
        default : 3,
    },
    available :{
        type : Boolean,
        required : true,
        default : true
    },
    photos :[
        {
            type : stringify
        }
    ],
    speecialDescriptioon:{
        type : String,
        default: ""
    },
    notes:{
        type:String,
        default:""
    } 
})

const Room =mongoose.model("Rooms", roomSchema)

export default Room;