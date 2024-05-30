import { Router } from "express";
import users from "./users";
import appoiments from "./apoiments";
import appoiment from "./apoiment";

const router: Router = Router();

router.use("/users", users)
router.use("/appointments", appoiments)
router.use("/appointment", appoiment)


export default router;