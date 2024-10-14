import mongoose from "mongoose" 


/*user schema*/
const userSchema = mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
            unique : true
        },
        firstName : {
            type : String
        },
        lastName : {
            type: String
        },
        image : {
            type: String,
            default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpZEneLh1WL_0kpeQEvbvHipkPx22W2hKMg&s"
        },
        password : {
            type : String,
            required : true
        },
        phone : {
            type : Number
        }
    }
)

/*database collection model*/

const User = mongoose.model("Users", userSchema) 

export function getUsers(req,res){ 
        res.json({
            message : "this is the get request."
        }) 
}

export function postUsers(req,res){ 
    
    const user = req.body /*user data from body*/

    const newUser = new User(user) /*add new user*/

   /* console.log(user)
    res.json({
        message : "this is the post request"
    }) */
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
