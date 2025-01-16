import { Router } from "express";
import { getUsers, getUserDetail, getUserDetailPosts } from "./../controllers/user.controller"

const router = Router()

router.get("/",getUsers)
router.get("/:id",getUserDetail)
router.get("/:id/posts",getUserDetailPosts)

export default router