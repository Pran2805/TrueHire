import { Router } from "express";
import authRouter from './auth.route.js'

const router = Router()
router.route("/auth")


export default router;