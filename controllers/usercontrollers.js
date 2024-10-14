import User from '../models/user.js';
import jwt from 'jsonwebtoken'

 export function getUsers(req,res){ 
       User.find().then(

        (usersList)=>{
            res.json({
                list : usersList
            })
        }
       ) 
}

export function postUsers(req,res){ 
    
    const user = req.body /*user data from body*/

    const newUser = new User(user) /*add new user*/

    newUser.save().then(
        ()=>{
            res.json({
                message : "user created successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "user creation failed"
            })
        }
    )
     /* console.log(user)
  
     res.json({
        message : "this is the post request"
    })  */
}

export function putUsers(req,res){
     
}

export function deleteUsers(req,res){ 
    res.json({
        message : "this is the delete request.test"
    }) 
}


/*(req,res)=>{
    res.json({
        message:"this is a post request"
    })
}*/

export function loginUser(req,res){
    const credentials = req.body
      /* user seraching */
    User.findOne({email : credentials.email, password : credentials.password}).then(
        (user)=>{
            
            if(user == null){ /*user is null run this code*/
                res.status(403).json({
                    message : "User Not Found"
                })
            }else{ /*user found*/
                const payload ={
                    id : user._id,
                    email : user.email,
                    firstName  : user.firstName,
                    lastName : user.lastName,
                    type : user.type,
                }
                const token = jwt.sign(payload, "secretpw", {expireIn: "48h"});

                res.json({
                    message : "User found",
                    user : user,
                    token : token
                })
            }
        }
    )
}