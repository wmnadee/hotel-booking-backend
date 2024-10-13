import Room from "../models/room.js";
import {isAdminValid} from "./usercontrollers.js"

export function createRoom(req,res){
   
    if(isAdminValid(req)){
        res.status(403).json({
            message:"forbidden"
        })
        return
    }

}

const newRoom = newRoom(req,body).then(
    (resul)=>{

    }
).catch(
    (err)=>{
        res.json(
            {
                message : "Room creation Failed",
                error : err
            }
        )
    }
)