import User from '../models/user.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

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

    //in here you should replace password with the password hash 
    user.password = bcrypt.hashSync(user.password,10)
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
  const email = req.body.email;

  User.deleteOne({email : email}).then(()=>{
    res.json({
      message : "user deleted successfully"
    })
  }).catch(
    ()=>{
      res.json({
        message: "user deletion faild"
      })
    }
  ) 
}


/*(req,res)=>{
    res.json({
        message:"this is a post request"
    })
}*/

export function loginUser(req, res) {
    const credentials = req.body;
  
    User.findOne({ email: credentials.email, password:credentials.password}).then(
      (user) => {
          if (user == null) {
            res.status(403).json({
              message : 'User not found' 
            }) 
      
          }else {
            const isPasswordValid = bcrypt.compareSync(credentials.password, user.password) 
  
        if (!isPasswordValid) {
          res.status(403).json({
            message: 'Incorrect password' 
          }) 

        } else {
          const payload = {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            type: user.type
          } 
  
          //const token = jwt.sign(payload, 'secret', { expiresIn: '250h' }) 
          const token = jwt.sign(payload, 'secret') 
  
          res.json({
            message: 'User found',
            user: user,
            token: token
          }) 
        }
      }
    }) 
  }
  