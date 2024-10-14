import express from 'express'

import { getUsers, putUsers, postUsers ,deleteUsers, loginUser } from '../controllers/usercontrollers.js'

const userRouter = express.Router()

userRouter.get("/",getUsers)

userRouter.post("/",postUsers)

userRouter.delete("/",putUsers)

userRouter.put("/",deleteUsers) 

userRouter.post("/login", loginUser)

export default userRouter