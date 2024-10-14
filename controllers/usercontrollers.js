import User from '../models/user.js';

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
    res.json({
        message : "this is the put request"
    })
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
