import { Router } from "express";
import {getUserToAll,  userRegister, userLogin, getUserId} from "../controllers/userControllers";
const users: Router = Router();

users.get("/", getUserToAll)
users.get("/:id", getUserId)
users.post("/register",userRegister)
users.post("/login", userLogin)

export default users